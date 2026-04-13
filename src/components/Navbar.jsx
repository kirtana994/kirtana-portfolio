import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="site-nav">
      <a className="site-logo" href="#home" onClick={closeMenu}>Kirtana</a>

      <button
        type="button"
        className={`nav-toggle ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="site-nav-links"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul id="site-nav-links" className={`site-nav-links ${isMenuOpen ? "is-open" : ""}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        <li>
          <a className="resume-link" href="/kirtana-portfolio/resume.pdf" download onClick={closeMenu}>
          Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;