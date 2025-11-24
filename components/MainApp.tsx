"use client";

import { useState } from "react";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { DashboardPage } from "./DashboardPage";
import { FormPage } from "./FormPage";

type Page = "form" | "dashboard";

export function MainApp() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div>
          {currentPage === "dashboard" && <DashboardPage />}
          {currentPage === "form" && <FormPage />}
        </div>
      </main>

      <Footer />
    </div>
  );
}
