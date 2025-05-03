
import React, { useEffect, useRef } from 'react';

const PersonalProjects = () => {
  const projectsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      projectCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  // Function to stagger animation delays
  const getAnimationDelay = (index: number) => {
    return { transitionDelay: `${index * 0.1}s` };
  };

  return (
    <section id="personal-projects" className="section">
      <div className="content-wrapper">
        <h2 className="text-center slide-up">Personal Projects</h2>
        <div className="projects-grid">
          <div className="project-card" style={getAnimationDelay(0)}>
            <div className="project-content">
              <h3>Bitcoin Wallet (NexusWallet)</h3>
              <p className="project-description">Designed and developed a secure cryptocurrency wallet application with institutional-grade security features. Built using <span className="tech-highlight">Flutter</span> and <span className="tech-highlight">JavaScript</span> to deliver a seamless cross-platform experience with 99.99% transaction reliability.</p>
              <div className="project-image-container">
                <img 
                  src="/images/projectimages/nexuswallet/nexus_wallet.png" 
                  alt="NexusWallet Interface" 
                  className="project-image" 
                />
              </div>
            </div>
          </div>
          <div className="project-card" style={getAnimationDelay(1)}>
            <h3>Loco Maps</h3>
            <p>Led development of a custom mapping platform optimized for offline navigation in remote areas. Built with <span className="tech-highlight">React Native</span> and <span className="tech-highlight">PWA</span> technologies, delivering enhanced performance on low-bandwidth connections and reducing map loading times by 78%.</p>
          </div>
        </div>

        <h2 className="text-center slide-up mt-16">Enterprise Projects</h2>
        <div className="projects-grid">
          <div className="project-card" style={getAnimationDelay(0)}>
            <h3>QAASSIST</h3>
            <p>Speeding up the medicine submission process using agentic systems.</p>
          </div>
          <div className="project-card" style={getAnimationDelay(1)}>
            <h3>TADA - AI Incident Analysis</h3>
            <p>Enterprise AI system for automated incident analysis using Azure and OpenAI.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
