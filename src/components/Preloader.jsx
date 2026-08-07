import { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const duration = 1200; // 1.2s total progress duration
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 200);

      const hideTimer = setTimeout(() => {
        setIsHidden(true);
      }, 700);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [progress]);

  if (isHidden) return null;

  return (
    <div className={`preloader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="glow-blur" style={{ top: '30%', left: '30%', width: '300px', height: '300px' }} />
      <div className="glow-blur" style={{ bottom: '30%', right: '30%', width: '300px', height: '300px', background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)' }} />

      <div className="preloader-content">
        <div className="preloader-logo-wrapper">
          <Code2 size={44} style={{ stroke: 'url(#preloader-grad)' }} />
          <span className="preloader-logo-text">M.Zohaib</span>

          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              <linearGradient id="preloader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#0d9488" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="preloader-bar-container">
          <div 
            className="preloader-bar-fill" 
            style={{ width: `${progress}%` }} 
          />
        </div>

        <div className="preloader-percentage">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;
