"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-800">
      {/* Header */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">About Us</h1>
        <p className="text-base sm:text-lg">
          Learn more about the vision behind our Teacher Management System.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            🎯 Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to streamline and modernize teacher management in schools,
            colleges, and institutions. From tracking performance to handling
            payments, we aim to simplify every administrative task through one
            intuitive platform.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            👨‍🏫 What We Offer
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Easy add/edit/delete functionality for teachers</li>
            <li>Clean, responsive dashboard with real-time data</li>
            <li>Integrated payment and salary tracking</li>
            <li>Secure, client-side data management with optional backend API</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            🚀 Technology Stack
          </h2>
          <p className="text-gray-700">
            We use modern web technologies:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
            <li>Next.js 13+ with App Router</li>
            <li>TypeScript for type safety</li>
            <li>Tailwind CSS for fast and responsive UI</li>
            <li>Optional MongoDB + Express backend integration</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            🤝 Join Us
          </h2>
          <p className="text-gray-700">
            We're open to collaboration and always improving. Whether you're a
            school admin, a developer, or just curious, get in touch!
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 px-5 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
