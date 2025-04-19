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
        <h2 className="text-center slide-up">Projects</h2>
        <p className="section-intro-text text-center mx-auto fade-in delay-100">
          A selection of my key projects and their development timeline.
        </p>
        <div className="timeline-container-wrapper">
          <ul className="timeline">
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">March 2023 - Present</span>
                <h4 className="timeline-title">Social Media Automation</h4>
                <p className="timeline-description">Built a data-driven solution that achieved over 1 million Instagram followers through intelligent trend detection and automated content posting.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">September 2022 - February 2023</span>
                <h4 className="timeline-title">TADA - AI Incident Analysis</h4>
                <p className="timeline-description">Developed an AI-powered system that identifies trends in incident tickets using <span className="tech-highlight">Python</span>, <span className="tech-highlight">Azure</span>, and <span className="tech-highlight">OpenAI</span>.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">January 2022 - August 2022</span>
                <h4 className="timeline-title">Bitcoin Wallet (NexusWallet)</h4>
                <p className="timeline-description">Created a mobile Bitcoin wallet application using <span className="tech-highlight">Flutter</span> and <span className="tech-highlight">JavaScript</span>.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">June 2021 - December 2021</span>
                <h4 className="timeline-title">Loco Maps</h4>
                <p className="timeline-description">Developed an open-source mapping solution similar to Google Maps using <span className="tech-highlight">React Native</span> and <span className="tech-highlight">PWA</span> technologies.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;