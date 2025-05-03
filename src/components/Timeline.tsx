
import { useEffect } from 'react';

const Timeline = () => {
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
    <section id="timeline" className="section timeline-section">
      <div className="content-wrapper">
        <h2 className="text-center slide-up">Timeline</h2>
        <div className="timeline-container-wrapper">
          <ul className="timeline">
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2023</span>
                <span className="timeline-tag achievement">Achievement</span>
                <h4 className="timeline-title">Overachievement Award</h4>
                <p className="timeline-description">Received an overachievement recommendation from Boehringer Ingelheim.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2021 - Present</span>
                <span className="timeline-tag professional">Professional</span>
                <h4 className="timeline-title">IT Business Consultant</h4>
                <p className="timeline-description">Boehringer Ingelheim - Working as part of the dual studies program.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2021 - 2024</span>
                <span className="timeline-tag education">Education</span>
                <h4 className="timeline-title">Bachelor of Science in Mobile Informatics</h4>
                <p className="timeline-description">DHBW Friedrichshafen - Dual studies program. GPA: 1.6</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2020 - 2021</span>
                <span className="timeline-tag professional">Professional</span>
                <h4 className="timeline-title">Freelance Mobile Developer</h4>
                <p className="timeline-description">Mobile application projects using Flutter and React Native.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
