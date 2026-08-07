import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Official high-fidelity tech SVGs
const reactLogo = (
  <svg viewBox="-11.5 -10.23 23 20.46" style={{ width: '24px', height: '24px' }}>
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1.2" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const nodeLogo = (
  <svg viewBox="0 0 100 100" style={{ width: '24px', height: '24px' }}>
    <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" fill="#339933"/>
    <path d="M50 18 L78 33 L78 67 L50 82 L22 67 L22 33 Z" fill="#111827"/>
    <circle cx="50" cy="50" r="10" fill="#339933"/>
  </svg>
);

const expressLogo = (
  <svg viewBox="0 0 100 100" style={{ width: '24px', height: '24px' }}>
    <rect width="100%" height="100%" rx="16" fill="var(--bg-secondary)" stroke="var(--card-border)" strokeWidth="4"/>
    <text x="50" y="62" fill="var(--text-primary)" fontFamily="system-ui, -apple-system" fontSize="36" fontWeight="900" textAnchor="middle">ex</text>
  </svg>
);

const jsLogo = (
  <svg viewBox="0 0 100 100" style={{ width: '24px', height: '24px', borderRadius: '4px', overflow: 'hidden' }}>
    <rect width="100%" height="100%" fill="#f7df1e"/>
    <text x="80" y="85" fill="#000000" fontFamily="system-ui, -apple-system" fontSize="42" fontWeight="900" textAnchor="end">JS</text>
  </svg>
);

const htmlLogo = (
  <svg viewBox="0 0 100 100" style={{ width: '24px', height: '24px' }}>
    <path d="M15 10 L85 10 L78 78 L50 88 L22 78 Z" fill="#e34f26"/>
    <path d="M50 17 L78 17 L72 73 L50 81 Z" fill="#f06529"/>
    <path d="M50 28 L35 28 L37 42 L50 42 L50 54 L41 51 L40 45 L32 45 L34 60 L50 65 L50 75" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 28 L65 28 L63 42 L50 42" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const cssLogo = (
  <svg viewBox="0 0 100 100" style={{ width: '24px', height: '24px' }}>
    <path d="M15 10 L85 10 L78 78 L50 88 L22 78 Z" fill="#1572b6"/>
    <path d="M50 17 L78 17 L72 73 L50 81 Z" fill="#33a9dc"/>
    <path d="M50 28 L35 28 L37 42 L50 42 L50 54 L41 51 L40 45 L32 45 L34 60 L50 65 L50 75" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 28 L65 28 L63 42 L50 42" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const bootstrapLogo = (
  <svg viewBox="0 0 100 100" style={{ width: '24px', height: '24px' }}>
    <rect width="100%" height="100%" rx="18" fill="#7952b3"/>
    <text x="50" y="72" fill="#ffffff" fontFamily="system-ui, -apple-system" fontSize="62" fontWeight="bold" textAnchor="middle">B</text>
  </svg>
);

const tailwindLogo = (
  <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}>
    <path fill="#38bdf8" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
  </svg>
);

const antdLogo = (
  <svg viewBox="0 0 100 100" style={{ width: '24px', height: '24px' }}>
    <path d="M90 28.5L52.5 6.8c-1.5-.9-3.5-.9-5 0L10 28.5c-2.2 1.3-3.5 3.6-3.5 6.1v43.4c0 2.5 1.3 4.8 3.5 6.1l37.5 21.7c1.5.9 3.5.9 5 0L90 84.1c2.2-1.3 3.5-3.6 3.5-6.1V34.6c0-2.5-1.3-4.8-3.5-6.1z" fill="#1677ff"/>
    <path d="M50 22L76 37L50 80L24 37Z" fill="#ffffff"/>
    <path d="M50 38L64 46L50 70L36 46Z" fill="#1677ff"/>
  </svg>
);

const mongoLogo = (
  <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}>
    <path fill="#13aa52" d="M12 2C11.5 2 11 5 11 8C11 12 7 13.5 7 17.5C7 20 9 22 12 22C15 22 17 20 17 17.5C17 13.5 13 12 13 8C13 5 12.5 2 12 2Z"/>
    <path fill="#118844" d="M12 2C12 2 12.5 5 12.5 8C12.5 12 16.5 13.5 16.5 17.5C16.5 20 14.5 22 12 22V2Z"/>
  </svg>
);

const supabaseLogo = (
  <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px' }}>
    <path fill="#3ecf8e" d="M13.35 2.1a1.2 1.2 0 0 0-1.78.38L4.35 15.54a1.2 1.2 0 0 0 1.05 1.86h7.25l-1.99 4.5a1.2 1.2 0 0 0 1.78-.38l7.22-13.06a1.2 1.2 0 0 0-1.05-1.86h-7.25l1.99-4.5z"/>
  </svg>
);

const skills = [
  { name: 'HTML5', percentage: 95, icon: htmlLogo },
  { name: 'CSS3', percentage: 90, icon: cssLogo },
  { name: 'Bootstrap', percentage: 85, icon: bootstrapLogo },
  { name: 'Tailwind CSS', percentage: 50, icon: tailwindLogo },
  { name: 'Ant Design', percentage: 50, icon: antdLogo },
  { name: 'JavaScript', percentage: 92, icon: jsLogo },
  { name: 'React', percentage: 90, icon: reactLogo },
  { name: 'Node.js', percentage: 80, icon: nodeLogo },
  { name: 'Express.js', percentage: 60, icon: expressLogo },
];

const databaseSkills = [
  { name: 'MongoDB', percentage: 85, icon: mongoLogo },
  { name: 'Supabase', percentage: 75, icon: supabaseLogo },
];

const Skills = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  // SVG Circular progress radius is 55. Circumference = 2 * PI * r = 2 * 3.14159 * 55 = 345.5
  const circ = 2 * Math.PI * 55;

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="glow-blur" style={{ top: '20%', left: '10%' }} />
      <div className="glow-blur" style={{ bottom: '10%', right: '10%', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(99, 102, 241, 0.12) 100%)' }} />

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Core Skills</h2>
          <p className="section-subtitle">
            Demonstrated capabilities in engineering high-fidelity web experiences across front-end systems and back-end logic.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, idx) => {
            // Calculate stroke-dashoffset based on visibility
            const strokeOffset = isVisible
              ? circ - (circ * skill.percentage) / 100
              : circ;

            return (
              <div 
                key={idx} 
                className={`glass-card skill-card reveal ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className="skill-header">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <h3>{skill.name}</h3>
                </div>

                <div className="skill-progress-container">
                  <svg className="skill-svg">
                    {/* Track ring */}
                    <circle 
                      cx="70" 
                      cy="70" 
                      r="55" 
                      className="skill-circle-bg" 
                    />
                    {/* Animated fill ring */}
                    <circle 
                      cx="70" 
                      cy="70" 
                      r="55" 
                      className="skill-circle-progress"
                      style={{ 
                        strokeDasharray: `${circ}`,
                        strokeDashoffset: `${strokeOffset}`,
                        stroke: `url(#skill-grad-${idx})`
                      }}
                    />
                    
                    {/* SVG Gradient definitions for progress gauges */}
                    <defs>
                      <linearGradient id={`skill-grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor={idx % 2 === 0 ? '#0d9488' : '#a855f7'} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Database & Cloud Backend Sub-category */}
        <div className="skills-subcategory">
          <h3 className="skills-subcategory-title">Databases & Cloud Storage</h3>
          <div className="database-skills-grid">
            {databaseSkills.map((skill, idx) => {
              const cardIdx = skills.length + idx;
              const strokeOffset = isVisible
                ? circ - (circ * skill.percentage) / 100
                : circ;

              return (
                <div 
                  key={idx} 
                  className={`glass-card skill-card reveal ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${cardIdx * 0.08}s` }}
                >
                  <div className="skill-header">
                    <div className="skill-icon-wrapper">
                      {skill.icon}
                    </div>
                    <h3>{skill.name}</h3>
                  </div>

                  <div className="skill-progress-container">
                    <svg className="skill-svg">
                      <circle 
                        cx="70" 
                        cy="70" 
                        r="55" 
                        className="skill-circle-bg" 
                      />
                      <circle 
                        cx="70" 
                        cy="70" 
                        r="55" 
                        className="skill-circle-progress"
                        style={{ 
                          strokeDasharray: `${circ}`,
                          strokeDashoffset: `${strokeOffset}`,
                          stroke: `url(#skill-grad-${cardIdx})`
                        }}
                      />
                      <defs>
                        <linearGradient id={`skill-grad-${cardIdx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor={cardIdx % 2 === 0 ? '#0d9488' : '#a855f7'} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
export { skills, databaseSkills };
