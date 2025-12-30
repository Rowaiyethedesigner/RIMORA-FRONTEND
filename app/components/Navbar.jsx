// app/components/Navbar.jsx

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">RIMORA</div>

        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/properties">Featured properties</a></li>
          <li><a href="/contact">Contact</a></li>
          <li>
            <a href="/contact" className="navbar-button">
              Book an inspection
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
