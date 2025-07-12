"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
    >
      <img
        src="/hero.jpg" // ✅ Corrected src path
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
        <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold text-center">
          Welcome to Our Teacher Management
        </h1>
      </div>
    </section>
  );
}
