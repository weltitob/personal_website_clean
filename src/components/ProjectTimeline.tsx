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
        <h2 className="text-center slide-up">Professional <span className="yellow-highlight">Projects</span></h2>
        <p className="section-intro-text text-center mx-auto fade-in delay-100">
          A selection of my key projects and their development timeline.
        </p>
        <div className="timeline-container-wrapper">
          <ul className="timeline">
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">March 2023 - Present</span>
                <h4 className="timeline-title">Social Media Automation</h4>
                <p className="timeline-description">Engineered custom automation tools for social media growth, implementing user engagement analytics that increased audience growth by 300%. Developed predictive models for content optimization that consistently improved engagement rates by 85%.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">September 2022 - February 2023</span>
                <h4 className="timeline-title">TADA - AI Incident Analysis</h4>
                <p className="timeline-description">Architected an enterprise AI system for automated incident analysis that reduced resolution time by 65%. Integrated <span className="tech-highlight">Python</span>, <span className="tech-highlight">Azure</span>, and <span className="tech-highlight">OpenAI</span> to analyze patterns across 50,000+ support tickets, saving over 2,000 work hours annually.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">January 2022 - August 2022</span>
                <h4 className="timeline-title">Bitcoin Wallet (NexusWallet)</h4>
                <p className="timeline-description">Designed and developed a secure cryptocurrency wallet application with institutional-grade security features. Built using <span className="tech-highlight">Flutter</span> and <span className="tech-highlight">JavaScript</span> to deliver a seamless cross-platform experience with 99.99% transaction reliability.</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">June 2021 - December 2021</span>
                <h4 className="timeline-title">Loco Maps</h4>
                <p className="timeline-description">Led development of a custom mapping platform optimized for offline navigation in remote areas. Built with <span className="tech-highlight">React Native</span> and <span className="tech-highlight">PWA</span> technologies, delivering enhanced performance on low-bandwidth connections and reducing map loading times by 78%.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;