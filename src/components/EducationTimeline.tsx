import { useEffect } from 'react';

const EducationTimeline = () => {
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
    <section id="education-timeline" className="section timeline-section">
      <div className="content-wrapper">
        <h2 className="text-center slide-up">Education & Professional Experience</h2>
        <p className="section-intro-text text-center mx-auto fade-in delay-100">
          My academic and professional journey.
        </p>
        <div className="timeline-container-wrapper">
          <ul className="timeline">
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2021 - 2024</span>
                <h4 className="timeline-title">Bachelor of Science in Mobile Informatics</h4>
                <p className="timeline-description">DHBW Friedrichshafen - Dual studies program with a focus on mobile applications and software development. GPA: 1.4. Bachelor Thesis: Grade 1.0</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2021 - Present</span>
                <h4 className="timeline-title">IT Business Consultant</h4>
                <p className="timeline-description">Boehringer Ingelheim - Working as part of the dual studies program, focusing on software development, data science, and business consulting with <span className="tech-highlight">Python</span>, <span className="tech-highlight">Azure</span>, and <span className="tech-highlight">OpenAI</span>.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2020 - 2021</span>
                <h4 className="timeline-title">Freelance Mobile Developer</h4>
                <p className="timeline-description">Worked on various mobile application projects for clients using <span className="tech-highlight">Flutter</span> and <span className="tech-highlight">React Native</span>.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2019 - 2020</span>
                <h4 className="timeline-title">Software Development Internship</h4>
                <p className="timeline-description">Tech startup internship focusing on web development using <span className="tech-highlight">React</span> and <span className="tech-highlight">Node.js</span>.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;