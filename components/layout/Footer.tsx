import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-linear-to-br from-blue-600 to-purple-600">
              <Sparkles className="size-4 text-white" />
            </div>
            <span className="text-muted-foreground">
              Analytics Hub
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2025 Built with Next.js, Tailwind CSS & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}