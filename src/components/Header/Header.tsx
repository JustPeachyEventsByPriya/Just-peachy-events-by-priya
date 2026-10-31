import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__container">
        <a className="site-header__brand" href="/">
          <span className="site-header__name">Just Peachy Events</span>
          <span className="site-header__subtitle">by Priya</span>
        </a>

        <nav className="site-header__nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;