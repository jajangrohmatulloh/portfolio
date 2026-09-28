"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  label?: string;
  showLabel?: boolean;
};

export function ThemeToggle({ className, label, showLabel }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";
  const currentThemeLabel = theme.charAt(0).toUpperCase() + theme.slice(1);
  const labelText = label ?? (showLabel ? currentThemeLabel : undefined);
  const hasLabel = Boolean(labelText);

  return (
    <Button
      type="button"
      variant="ghost"
      size={hasLabel ? "default" : "icon-sm"}
      onClick={undefined}
      disabled
      aria-label="Theme toggle unavailable"
      aria-pressed={false}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none disabled:cursor-not-allowed ring-offset-background cursor-not-allowed",
        hasLabel
          ? "w-full rounded-xl px-5 py-6 text-base font-semibold border border-slate-200 bg-slate-100 text-slate-900 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          : "h-10 w-10",
        className
      )}
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Sun className="h-5 w-5" aria-hidden="true" />
      )}
      {labelText ? <span className="text-sm font-medium">{labelText}</span> : null}
    </Button>
  );
}
