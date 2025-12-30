export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LEFT: Logo */}
        <div className="navbar-logo">
          RIMORA
        </div>

        {/* CENTER: Links */}
        <ul className="navbar-center-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/properties">Featured properties</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* RIGHT: CTA */}
        <div className="navbar-cta">
          <a href="/contact" className="navbar-button">
            Book an inspection
          </a>
        </div>

      </div>
    </nav>
  );
}
