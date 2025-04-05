import { useEffect, useRef } from 'react';

const CVTimeline = () => {
  const timelineRef = useRef<HTMLUListElement>(null);
  
  useEffect(() => {
    // Make sure DOM is loaded
    if (!timelineRef.current) return;
    
    const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
    
    // Force immediate visibility for better display
    timelineItems.forEach(item => {
      item.classList.add('visible');
    });
    
    // Set up Intersection Observer for scroll animation when scrolling to view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    // Observe for scroll
    timelineItems.forEach(item => observer.observe(item));
    
    return () => {
      if (timelineItems) {
        timelineItems.forEach(item => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <section id="cv-timeline" className="section timeline-section bg-slate-900/30">
      <div className="content-wrapper">
        <h2 className="text-center slide-up">Professional Career</h2>
        <p className="section-intro-text text-center mx-auto fade-in delay-100">
          My key positions and educational background.
        </p>
        <div className="timeline-container-wrapper">
          <ul className="timeline" ref={timelineRef}>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">July 2022 - Present</span>
                <h4 className="timeline-title">Web Developer at Company A</h4>
                <p className="timeline-description">Main responsibility for [area of responsibility], work with [technologies]. Successful implementation of [example project/success].</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">October 2020 - June 2022</span>
                <h4 className="timeline-title">Junior Developer at Agency B</h4>
                <p className="timeline-description">First professional experiences in [area], creation of [type of projects].</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">October 2017 - September 2020</span>
                <h4 className="timeline-title">Computer Science at University C</h4>
                <p className="timeline-description">Degree: Bachelor of Science. Focus areas: [Focus area 1], [Focus area 2].</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CVTimeline;