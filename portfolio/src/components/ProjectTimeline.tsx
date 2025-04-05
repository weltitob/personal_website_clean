import { useEffect } from 'react';

const ProjectTimeline = () => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => observer.observe(item));
    
    return () => {
      timelineItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="project-timeline" className="section timeline-section">
      <div className="content-wrapper">
        <h2 className="text-center slide-up">Projekt-Chronologie</h2>
        <p className="section-intro-text text-center mx-auto fade-in delay-100">
          Eine Auswahl meiner wichtigsten Projekte im zeitlichen Verlauf.
        </p>
        <div className="timeline-container-wrapper">
          <ul className="timeline">
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">März 2024 - Heute</span>
                <h4 className="timeline-title">Aktuelles Projekt X</h4>
                <p className="timeline-description">Entwicklung von [Kurzbeschreibung]. Fokus auf [Technologie/Ziel].</p>
                <button onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: 'project-x-modal' }))} className="btn-secondary text-xs mt-3">Details</button>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">September 2023 - Februar 2024</span>
                <h4 className="timeline-title">Projekt Alpha</h4>
                <p className="timeline-description">Konzeption & Umsetzung eines [Art der Anwendung] mit <span className="tech-highlight">React</span> und <span className="tech-highlight">Node.js</span>.</p>
                <button onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: 'project-alpha-modal' }))} className="btn-secondary text-xs mt-3">Details</button>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">Januar 2023 - August 2023</span>
                <h4 className="timeline-title">Open Source Beitrag Z</h4>
                <p className="timeline-description">Mitarbeit an [Projektname], Implementierung von [Feature].</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">Juni 2022 - Dezember 2022</span>
                <h4 className="timeline-title">Projekt Beta</h4>
                <p className="timeline-description">Aufbau einer [Art der Anwendung] mit <span className="tech-highlight">Vue.js</span> und Headless CMS.</p>
                <button onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: 'project-beta-modal' }))} className="btn-secondary text-xs mt-3">Details</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;