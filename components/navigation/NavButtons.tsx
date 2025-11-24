"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/utils";
import { LayoutDashboard, FileText } from "lucide-react";

type Page = "dashboard" | "form";

const navItems = [
  { id: "dashboard" as const, label: "Dashboard", icon: LayoutDashboard },
  { id: "form" as const, label: "Contact", icon: FileText },
];

interface NavButtonsProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  className?: string;
  size?: "default" | "sm";
}

export function NavButtons({ currentPage, onNavigate, className, size }: NavButtonsProps) {
  return (
    <nav className={cn("flex gap-2", className)}>
      {navItems.map(({ id, label, icon: Icon }) => (
        <Button
          key={id}
          variant={currentPage === id ? "default" : "ghost"}
          size={size}
          onClick={() => onNavigate(id)}
          className={cn("gap-2", size === "sm" && "flex-1")}
        >
          <Icon className="size-4" />
          {label}
        </Button>
      ))}
    </nav>
  );
}