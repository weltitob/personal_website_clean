import { useEffect } from 'react';

const Journey = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => scrollObserver.observe(el));
    
    return () => {
      animatedElements.forEach(el => scrollObserver.unobserve(el));
    };
  }, []);

  return (
    <section id="journey" className="section">

    </section>
  );
};

export default Journey;