// app/components/Navbar.jsx

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          RIMORA
        </div>

        {/* Links */}
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
// app/components/Navbar.jsx
export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <h1>Rimora Properties</h1>
          <div className="tag">FCDA-approved land in Abuja</div>
        </div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/properties">Our properties</a>
          <a href="/contact">Contact</a>
          <a className="btn" href="/contact">Book an inspection</a>
        </nav>
      </div>
    </header>
  );
}
