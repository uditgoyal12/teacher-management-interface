"use client";

import Hero from "@/components/Hero";
import TeacherDashboard from "@/components/TeacherDashboard";

export default function HomePage() {
  return (
    <main className="bg-slate-100 min-h-screen">
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-indigo-700">📋 All Teachers</h2>
        <TeacherDashboard />
      </section>
    </main>
  );
}
