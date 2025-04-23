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
    <section id="cv-timeline" className="section timeline-section">
      <div className="content-wrapper">
        <h2 className="text-center slide-up">Personal Achievements</h2>
        <p className="section-intro-text text-center mx-auto fade-in delay-100">
          Key milestones and accomplishments in my professional journey.
        </p>
        <div className="timeline-container-wrapper">
          <ul className="timeline" ref={timelineRef}>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2023</span>
                <h4 className="timeline-title">Overachievement Award</h4>
                <p className="timeline-description">Received an overachievement recommendation from Boehringer Ingelheim based on my performance during dual studies and contributions to the company's projects.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2022</span>
                <h4 className="timeline-title">1 Million Social Media Followers</h4>
                <p className="timeline-description">Built and scaled a social media presence to over 1 million followers through data-driven trend detection and automated content strategy.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2021</span>
                <h4 className="timeline-title">Start-up BW "Young Talents" Winner</h4>
                <p className="timeline-description">Part of the winning team at the Elevator Pitch "Young Talents" competition hosted by Start-up BW for our innovative business concept.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2021</span>
                <h4 className="timeline-title">Accepted to DHBW Friedrichshafen</h4>
                <p className="timeline-description">Started my dual studies program in Mobile Informatics, partnering with Boehringer Ingelheim for practical experience while maintaining a 1.6 GPA.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CVTimeline;