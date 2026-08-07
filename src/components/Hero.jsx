import { useState, useEffect } from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';

const roles = [
  'MERN Stack Developer',
  'React Developer',
  'Node.js Expert',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [parallaxCoords, setParallaxCoords] = useState({ x: 0, y: 0 });

  // Custom typing animation logic
  useEffect(() => {
    let timer;
    const currentFullWord = roles[roleIndex];
    const typingSpeed = 90;
    const deletingSpeed = 40;
    const pauseTime = 1600;

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = window.setTimeout(() => {
        setCurrentText((prev) => currentFullWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === currentFullWord) {
      timer = window.setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      timer = window.setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 0);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // Interactive mouse movement parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Calculate offsets from the center of the viewport
    const x = (clientX - innerWidth / 2) / 30; // Horizontal movement
    const y = (clientY - innerHeight / 2) / 30; // Vertical movement
    setParallaxCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setParallaxCoords({ x: 0, y: 0 }); // Smoothly return to center
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glow-blur" style={{ top: '10%', left: '10%' }} />
      <div className="glow-blur" style={{ bottom: '20%', right: '10%', background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)' }} />

      <div className="container hero-grid">
        <div className="hero-text">
          <p className="hero-subtitle">Welcome to my Portfolio</p>
          <h1 className="hero-title">
            Hi, I'm <span>Muhammad Zohaib</span>
            <br />
            <div className="typing-container">
              I am a <span className="typing-text">{currentText}</span>
              <span className="typing-cursor"></span>
            </div>
          </h1>
          <p className="hero-description">
            I am a MERN Stack Developer focused on building clean, efficient, and complete web applications using JavaScript. From designing flexible databases in MongoDB to crafting interactive user interfaces in React, I handle the entire MERN ecosystem to deliver high-performance digital products.
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary"
            >
              Explore My Work <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-outline"
            >
              Get In Touch <Briefcase size={18} />
            </button>
          </div>
        </div>

        <div className="hero-image-container">
          <div
            className="hero-profile-wrapper"
            style={{
              transform: `translate3d(${parallaxCoords.x}px, ${parallaxCoords.y}px, 0) rotateX(${-parallaxCoords.y / 2}deg) rotateY(${parallaxCoords.x / 2}deg)`,
              transition: parallaxCoords.x === 0 ? 'transform 0.5s ease-out' : 'none'
            }}
          >
            <div className="hero-profile-image">
              <img
                src="/profile.jpg"
                alt="Muhammad Zohaib"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
