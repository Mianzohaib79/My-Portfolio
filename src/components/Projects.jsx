import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCountUp } from '../hooks/useCountUp';
import { Briefcase, Users, GitCommit, Calendar, ExternalLink, Sparkles } from 'lucide-react';

const projectsData = [
  {
    title: 'Full-Stack Notes App',
    badge: 'Full-Stack',
    image: '/notes-app.png',
    description: 'A full-stack web application featuring secure JWT authentication, RESTful APIs, MongoDB storage, and dynamic React UI for real-time note management.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT'],
    liveUrl: 'https://notes-website-hazel.vercel.app',
  },
  {
    title: 'Restaurant Web Platform',
    badge: 'Full-Stack',
    image: '/restaurant-app.png',
    description: 'A full-stack restaurant application featuring online food ordering, interactive menu management, table reservations, and seamless REST API backend integration.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Vercel'],
    liveUrl: 'https://restaurant-frontend-teal-chi.vercel.app',
  },
  {
    title: 'Tomato Food Delivery App',
    badge: 'Full-Stack',
    image: '/tomato-app.png',
    description: 'A full-stack food delivery application built with MERN stack featuring real-time menu filtering, shopping cart management, user authentication, and order processing.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Vercel'],
    liveUrl: 'https://tomato-web-frontend.vercel.app/',
  },
  {
    title: 'Todos Task Management App',
    badge: 'Full-Stack',
    image: '/todo-app.png',
    description: 'A full-stack Todos task management application featuring priority task tracking, task creation, dashboard metrics, and seamless REST API backend integration.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Vercel'],
    liveUrl: 'https://todo-frontend-six-flax.vercel.app',
  },
  {
    title: 'SkyPulse Weather App',
    badge: 'Full-Stack',
    image: '/weather-app.png',
    description: 'A full-stack live weather application featuring real-time GPS location tracking, animated weather forecasts, interactive hourly trends, and REST API integration.',
    tags: ['React.js', 'Node.js', 'Express.js', 'REST API', 'Weather API', 'Vercel'],
    liveUrl: 'https://weather-app-three-eta-47.vercel.app',
  },
];

const Projects = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  // Hook-driven scroll-triggered count-up counters
  const yearsVal = useCountUp(2, 1500, isVisible);
  const projectsVal = useCountUp(7, 2000, isVisible);
  const contributionsVal = useCountUp(22, 2200, isVisible);
  const clientsVal = useCountUp(5, 2000, isVisible);

  const stats = [
    {
      icon: <Calendar size={28} />,
      number: yearsVal,
      suffix: '+',
      label: 'Years of Experience',
    },
    {
      icon: <Briefcase size={28} />,
      number: projectsVal,
      suffix: '+',
      label: 'Completed Projects',
    },
    {
      icon: <GitCommit size={28} />,
      number: contributionsVal,
      suffix: '+',
      label: 'GitHub Contributions',
    },
    {
      icon: <Users size={28} />,
      number: clientsVal,
      suffix: '+',
      label: 'Happy Clients',
    },
  ];

  return (
    <section id="projects" className="section bg-secondary" ref={sectionRef}>
      <div className="glow-blur" style={{ bottom: '10%', left: '5%', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(13, 148, 136, 0.12) 100%)' }} />

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects & Impact</h2>
          <p className="section-subtitle">
            Explore my production web applications, backend architecture, and code metrics.
          </p>
        </div>

        {/* Compact Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className={`project-card reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div>
                <div className="project-card-header">
                  <span className="project-badge">
                    <Sparkles size={12} /> {project.badge}
                  </span>
                </div>

                {project.image && (
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-card-image" />
                  </div>
                )}

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Visit Live Web App <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Code Metrics & Statistics Grid */}
        <div className="projects-stats-grid">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`glass-card stat-card reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-number">
                {stat.number}
                <span>{stat.suffix}</span>
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
export { projectsData };
