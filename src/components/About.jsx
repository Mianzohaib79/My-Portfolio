import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { GraduationCap, Award, Compass, Heart } from 'lucide-react';

const About = () => {
  const [revealRef, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  // Official high-fidelity vector definitions for tech logos
  const reactLogo = (
    <svg viewBox="-11.5 -10.23 23 20.46" style={{ width: '22px', height: '22px' }}>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );

  const nodeLogo = (
    <svg viewBox="0 0 100 100" style={{ width: '22px', height: '22px' }}>
      <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" fill="#339933"/>
      <path d="M50 18 L78 33 L78 67 L50 82 L22 67 L22 33 Z" fill="#111827"/>
      <circle cx="50" cy="50" r="10" fill="#339933"/>
    </svg>
  );

  const jsLogo = (
    <svg viewBox="0 0 100 100" style={{ width: '22px', height: '22px', borderRadius: '4px', overflow: 'hidden' }}>
      <rect width="100%" height="100%" fill="#f7df1e"/>
      <text x="80" y="85" fill="#000000" fontFamily="system-ui, -apple-system" fontSize="42" fontWeight="900" textAnchor="end">JS</text>
    </svg>
  );

  const htmlLogo = (
    <svg viewBox="0 0 100 100" style={{ width: '22px', height: '22px' }}>
      <path d="M15 10 L85 10 L78 78 L50 88 L22 78 Z" fill="#e34f26"/>
      <path d="M50 17 L78 17 L72 73 L50 81 Z" fill="#f06529"/>
      <path d="M50 28 L35 28 L37 42 L50 42 L50 54 L41 51 L40 45 L32 45 L34 60 L50 65 L50 75" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M50 28 L65 28 L63 42 L50 42" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const cssLogo = (
    <svg viewBox="0 0 100 100" style={{ width: '22px', height: '22px' }}>
      <path d="M15 10 L85 10 L78 78 L50 88 L22 78 Z" fill="#1572b6"/>
      <path d="M50 17 L78 17 L72 73 L50 81 Z" fill="#33a9dc"/>
      <path d="M50 28 L35 28 L37 42 L50 42 L50 54 L41 51 L40 45 L32 45 L34 60 L50 65 L50 75" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M50 28 L65 28 L63 42 L50 42" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const bootstrapLogo = (
    <svg viewBox="0 0 100 100" style={{ width: '22px', height: '22px' }}>
      <rect width="100%" height="100%" rx="18" fill="#7952b3"/>
      <text x="50" y="72" fill="#ffffff" fontFamily="system-ui, -apple-system" fontSize="62" fontWeight="bold" textAnchor="middle">B</text>
    </svg>
  );

  return (
    <section id="about" className="section">
      <div className="glow-blur" style={{ top: '30%', right: '5%', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)' }} />
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A brief look into my background, technical expertise, and core development principles.</p>
        </div>

        <div 
          ref={revealRef} 
          className={`about-grid reveal ${isVisible ? 'visible' : ''}`}
        >
          {/* Orbital Interactive Graphic */}
          <div className="about-visual">
            <div className="orbit-line" />
            
            {/* Smooth looping orbital container */}
            <div className="orbit-container">
              <div className="orbiting-icon icon-1" title="React.js">
                <div className="orbiting-icon-inner">{reactLogo}</div>
              </div>
              <div className="orbiting-icon icon-2" title="Node.js">
                <div className="orbiting-icon-inner">{nodeLogo}</div>
              </div>
              <div className="orbiting-icon icon-3" title="JavaScript">
                <div className="orbiting-icon-inner">{jsLogo}</div>
              </div>
              <div className="orbiting-icon icon-4" title="HTML5">
                <div className="orbiting-icon-inner">{htmlLogo}</div>
              </div>
              <div className="orbiting-icon icon-5" title="CSS3">
                <div className="orbiting-icon-inner">{cssLogo}</div>
              </div>
              <div className="orbiting-icon icon-6" title="Bootstrap">
                <div className="orbiting-icon-inner">{bootstrapLogo}</div>
              </div>
            </div>

            {/* Pulsing Photo Container */}
            <div className="profile-image-container">
              <div className="profile-image-circle">
                <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', background: 'var(--bg-secondary)' }}>
                  {/* Highly Aesthetic Vector Tech Workspace Illustration */}
                  <defs>
                    <linearGradient id="comp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#0d9488" />
                    </linearGradient>
                    <linearGradient id="glow-circle" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#0d9488" />
                    </linearGradient>
                  </defs>

                  {/* Outer glowing design lines */}
                  <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="1" />
                  <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(13, 148, 136, 0.15)" strokeWidth="1" strokeDasharray="3,3" />

                  {/* Modern Laptop Silhouette */}
                  <rect x="50" y="70" width="100" height="60" rx="4" fill="#1f2937" stroke="url(#comp-grad)" strokeWidth="2" />
                  <rect x="58" y="76" width="84" height="48" rx="2" fill="#0b0f19" />
                  {/* Keyboard Base */}
                  <path d="M 40,130 L 160,130 L 170,136 L 30,136 Z" fill="#374151" stroke="url(#comp-grad)" strokeWidth="1.5" />
                  <line x1="90" y1="133" x2="110" y2="133" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2" strokeLinecap="round" />

                  {/* Matrix Code lines on screen */}
                  <line x1="64" y1="84" x2="104" y2="84" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
                  <line x1="64" y1="92" x2="84" y2="92" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                  <line x1="64" y1="100" x2="114" y2="100" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
                  <line x1="64" y1="108" x2="94" y2="108" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="120" cy="92" r="6" fill="rgba(13, 148, 136, 0.3)" stroke="#0d9488" strokeWidth="1" />

                  {/* React Orbit overlay inside photo sphere */}
                  <ellipse cx="100" cy="100" rx="35" ry="12" stroke="rgba(97, 218, 251, 0.2)" strokeWidth="1" fill="none" transform="rotate(45 100 100)" />
                  <ellipse cx="100" cy="100" rx="35" ry="12" stroke="rgba(97, 218, 251, 0.2)" strokeWidth="1" fill="none" transform="rotate(-45 100 100)" />
                  <circle cx="100" cy="100" r="3" fill="#61dafb" />

                  {/* Aesthetic Floating Code Tags */}
                  <text x="25" y="60" fill="url(#comp-grad)" fontSize="12" fontFamily="monospace" fontWeight="bold">&lt;code&gt;</text>
                  <text x="135" y="155" fill="url(#comp-grad)" fontSize="12" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
                  <circle cx="155" cy="55" r="5" fill="#a855f7" />
                  <circle cx="45" cy="155" r="4" fill="#0d9488" />
                </svg>
              </div>
            </div>
          </div>

          {/* Description Text */}
          <div className="about-text">
            <h3>Pioneering High-Quality Digital Solutions</h3>
            <p>
              I am a dedicated MERN Stack Developer based in Seattle with a relentless drive for building pixel-perfect, accessible, and performant web interfaces. With extensive experience bridging front-end aesthetics and back-end efficiency, I specialize in crafting full-stack software systems that solve real-world problems.
            </p>
            <p>
              My philosophy centers around clean code design patterns, visual consistency, and absolute performance optimization. I believe every application should not only be robust and secure under the hood, but also delight users with beautiful animations and fluid, responsive interactions.
            </p>

            <div className="about-highlights stagger-container visible">
              <div className="highlight-item stagger-1">
                <div className="highlight-icon">
                  <Award size={20} />
                </div>
                <span>Premium Quality Standards</span>
              </div>
              <div className="highlight-item stagger-2">
                <div className="highlight-icon">
                  <GraduationCap size={20} />
                </div>
                <span>B.S. in Computer Science</span>
              </div>
              <div className="highlight-item stagger-3">
                <div className="highlight-icon">
                  <Compass size={20} />
                </div>
                <span>Agile Workflow Delivery</span>
              </div>
              <div className="highlight-item stagger-4">
                <div className="highlight-icon">
                  <Heart size={20} />
                </div>
                <span>User-Centric UI/UX Passion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
