import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(5).max(200),
  message: z.string().trim().min(10).max(5_000),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  const recipient = process.env.CONTACT_EMAIL_TO;
  const sender = process.env.CONTACT_EMAIL_FROM;
  const smtpUser = process.env.BREVO_SMTP_USER;
  const smtpPassword = process.env.BREVO_SMTP_PASSWORD;

  if (!recipient || !sender || !smtpUser || !smtpPassword) {
    console.error("Brevo contact email is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 503 },
    );
  }

  const body: unknown = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form fields and try again." }, { status: 400 });
  }

  const { name, email, subject, message } = parsed.data;
  const text = `New portfolio message\n\nFrom: ${name} <${email}>\nSubject: ${subject}\n\n${message}`;
  const html = `<h2>New portfolio message</h2><p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p><strong>Subject:</strong> ${escapeHtml(subject)}</p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`;

  const transporter = nodemailer.createTransport({
    host: process.env.BREVO_SMTP_HOST ?? "smtp-relay.brevo.com",
    port: Number(process.env.BREVO_SMTP_PORT ?? 587),
    secure: false,
    auth: { user: smtpUser, pass: smtpPassword },
  });

  try {
    await transporter.sendMail({
      from: { name: "Portfolio Contact", address: sender },
      to: recipient,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text,
      html,
    });
  } catch (error) {
    console.error("Brevo failed:", error);
    return NextResponse.json({ error: "Unable to send your message. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
