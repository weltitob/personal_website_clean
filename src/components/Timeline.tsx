
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
                <span className="timeline-date">2021 - Present</span>
                <span className="timeline-tag professional">Professional</span>
                <h4 className="timeline-title">IT Business Consultant</h4>
                <p className="timeline-description">Boehringer Ingelheim - Working as part of the dual studies program with focus on software development and business consulting.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2021 - 2024</span>
                <span className="timeline-tag education">Education</span>
                <h4 className="timeline-title">Bachelor of Science in Mobile Informatics</h4>
                <p className="timeline-description">DHBW Friedrichshafen - Dual studies program with Boehringer Ingelheim. GPA: 1.4. Bachelor Thesis: Grade 1.0</p>
                <a className="pdf-button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Academic_Record.pdf
                </a>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2023</span>
                <span className="timeline-tag achievement">Achievement</span>
                <h4 className="timeline-title">Overachievement Award</h4>
                <p className="timeline-description">Recognized as a top 1% student with an overachievement recommendation from Boehringer Ingelheim.</p>
                <div className="timeline-image-container">
                  <img src="/images/timelineimages/2501_Biberacher_Wirtschaftpreis.jpg" alt="Biberacher Wirtschaftpreis" className="timeline-image" />
                </div>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2020 - 2021</span>
                <span className="timeline-tag professional">Professional</span>
                <h4 className="timeline-title">Freelance Mobile Developer</h4>
                <p className="timeline-description">Worked on various freelance projects using Flutter and React Native.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2019 - 2021</span>
                <span className="timeline-tag professional">Professional</span>
                <h4 className="timeline-title">Social Media Automation Company</h4>
                <p className="timeline-description">Founded and sold company that built 5+ Instagram pages with over 1M+ reach using fully automated systems.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">Before 2019</span>
                <span className="timeline-tag education">Education</span>
                <h4 className="timeline-title">Gymnasium</h4>
                <p className="timeline-description">Completed secondary education in Germany.</p>
                <a className="pdf-button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  School_Certificate.pdf
                </a>
              </div>
            </li>
            
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2022</span>
                <span className="timeline-tag achievement">Achievement</span>
                <h4 className="timeline-title">StartupBW - BeeProtected Winner</h4>
                <p className="timeline-description">Won the StartupBW pitch competition with BeeProtected startup concept.</p>
                <div className="timeline-image-container">
                  <img src="/images/timelineimages/beeprotected.png" alt="BeeProtected" className="timeline-image" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
