// app/components/Hero.jsx

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src="/Rimora hero section.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-overlay" />
    </section>
  );
}
