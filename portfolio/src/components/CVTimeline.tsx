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
        <h2 className="text-center slide-up">Beruflicher Werdegang</h2>
        <p className="section-intro-text text-center mx-auto fade-in delay-100">
          Meine wichtigsten Stationen und Ausbildungsphasen.
        </p>
        <div className="timeline-container-wrapper">
          <ul className="timeline" ref={timelineRef}>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">Juli 2022 - Heute</span>
                <h4 className="timeline-title">Webentwickler bei Firma A</h4>
                <p className="timeline-description">Hauptverantwortlich für [Aufgabenbereich], Arbeit mit [Technologien]. Erfolgreiche Umsetzung von [Beispielprojekt/Erfolg].</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">Oktober 2020 - Juni 2022</span>
                <h4 className="timeline-title">Junior Entwickler bei Agentur B</h4>
                <p className="timeline-description">Erste professionelle Erfahrungen in [Bereich], Erstellung von [Art von Projekten].</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">Oktober 2017 - September 2020</span>
                <h4 className="timeline-title">Studium Informatik an Uni C</h4>
                <p className="timeline-description">Abschluss: Bachelor of Science. Schwerpunkte: [Schwerpunkt 1], [Schwerpunkt 2].</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CVTimeline;