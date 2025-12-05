// app/page.jsx

import AboutSection from "./components/AboutSection";

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/Rimora hero section.mp4" type="video/mp4" />
        </video>

        {/* Optional dark tint overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-16 py-6 text-white text-lg font-semibold z-10">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">RIMORA</div>

          {/* Navigation Links */}
          <ul className="flex space-x-12">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About us</a></li>
            <li><a href="/properties" className="hover:text-gray-300">Featured properties</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>

            <li>
              <a
                href="/contact"
                className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-100 transition"
              >
                Book an inspection
              </a>
            </li>
          </ul>
        </nav>
      </section>

      {/* ABOUT SECTION */}
      <AboutSection />

    </main>
  );
}
