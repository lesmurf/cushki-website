import { useState, useEffect } from 'react';

const useImageSlideshow = (images = [], delay = 2000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, delay);

    return () => clearInterval(interval);
  }, [images, delay]);

  return images[index];
};

export default useImageSlideshow;
