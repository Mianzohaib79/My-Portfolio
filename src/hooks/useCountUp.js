import { useEffect, useState } from 'react';

export const useCountUp = (target, duration = 2000, trigger = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = target;
    if (start === end) {
      const id = requestAnimationFrame(() => setCount(end));
      return () => cancelAnimationFrame(id);
    }

    const totalMilliseconds = duration;
    const startTime = performance.now();
    let animationFrameId;

    const updateCount = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalMilliseconds, 1);
      
      // Quadratic ease-out formula
      const easeProgress = progress * (2 - progress);
      
      const currentCount = Math.floor(easeProgress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, trigger]);

  return count;
};
