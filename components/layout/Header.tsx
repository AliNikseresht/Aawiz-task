"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun, Sparkles, LayoutDashboard, FileText } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Page = "dashboard" | "form";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems = [
  { id: "dashboard" as const, label: "Dashboard", icon: LayoutDashboard },
  { id: "form" as const, label: "Contact", icon: FileText },
];

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-border bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-linear-to-br from-blue-600 to-purple-600">
                <Sparkles className="size-5 text-white" />
              </div>
              <h1 className="font-bold text-xl">Analytics Hub</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <Button
                  key={id}
                  variant={currentPage === id ? "default" : "ghost"}
                  onClick={() => onNavigate(id)}
                  className="gap-2"
                >
                  <Icon className="size-4" />
                  {label}
                </Button>
              ))}
            </nav>
          </div>

          {/* Theme Toggle Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="rounded-xl"
            aria-label="Toggle theme"
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )
            ) : (
              <div className="size-4" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex gap-2 pb-4">
          {navItems.map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant={currentPage === id ? "default" : "ghost"}
              size="sm"
              onClick={() => onNavigate(id)}
              className="gap-2 flex-1"
            >
              <Icon className="size-4" />
              {label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
