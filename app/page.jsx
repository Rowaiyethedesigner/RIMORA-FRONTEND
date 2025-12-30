// app/page.jsx
import WhyChooseUs from "./components/WhyChooseUs";
import Navbar from "./components/Navbar";
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

        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

        {/* NAVBAR COMPONENT */}
        <Navbar />

      </section>

      {/* ABOUT SECTION */}
     <AboutSection />
<WhyChooseUs />


    </main>
  );
}
