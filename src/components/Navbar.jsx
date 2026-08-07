import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Code2 } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});

  const navRefs = useRef({});
  const menuRef = useRef(null);

  // Update sliding underline coordinates
  useEffect(() => {
    const activeLink = navRefs.current[activeSection];
    if (activeLink && menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setUnderlineStyle({
        left: `${linkRect.left - menuRect.left}px`,
        width: `${linkRect.width}px`,
        opacity: 1,
      });
    } else {
      setUnderlineStyle({ opacity: 0 });
    }
  }, [activeSection]);

  // Section scroll tracking using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -55% 0px', // Trigger when section occupies the center of viewport
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleLinkClick(e, 'home')}>
          <Code2 size={28} style={{ stroke: 'url(#brand-grad)' }} />
          <span>M.Zohaib</span>

          {/* SVG Gradient definitions for Lucide Icons */}
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#0d9488" />
              </linearGradient>
            </defs>
          </svg>
        </a>

        {/* Desktop menu */}
        <ul ref={menuRef} className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href={`#${item.id}`}
                ref={(el) => { navRefs.current[item.id] = el; }}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* Sliding underline element */}
          <div className="nav-underline" style={underlineStyle} />
        </ul>

        {/* Theme Toggle & Hamburger menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle visual theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
export { navItems };
