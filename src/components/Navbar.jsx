function Navbar() {
  return (
    <nav className="site-nav">
      <a className="site-logo" href="#home">Kirtana</a>
      <ul className="site-nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a className="resume-link" href="/resume.pdf" download>
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;