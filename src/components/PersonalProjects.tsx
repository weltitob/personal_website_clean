
import { useEffect } from 'react';

const PersonalProjects = () => {

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
        <h2 className="text-center slide-up">Personal <span className="yellow-highlight">Projects</span></h2>
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
            <div className="project-content">
              <h3>Loco Maps</h3>
              <p className="project-description">Led development of a custom mapping platform optimized for offline navigation in remote areas. Built with <span className="tech-highlight">React Native</span> and <span className="tech-highlight">PWA</span> technologies, delivering enhanced performance on low-bandwidth connections and reducing map loading times by 78%.</p>
              <div className="project-image-container">
                <img 
                  src="/images/projectimages/locomaps/locomaps.png" 
                  alt="LocoMaps Interface" 
                  className="project-image" 
                />
              </div>
            </div>
          </div>
          <div className="project-card" style={getAnimationDelay(2)}>
            <div className="project-content">
              <h3>CypherNexus</h3>
              <p className="project-description">Knowledge sharing platform for IT beginners. Built with <span className="tech-highlight">HTML</span>, <span className="tech-highlight">JavaScript</span>, <span className="tech-highlight">CSS</span>, <span className="tech-highlight">EJS</span>, and <span className="tech-highlight">Python</span> to create an accessible learning environment for newcomers to the tech industry.</p>
              <div className="project-image-container">
                <img 
                  src="/images/projectimages/cyphernexus.png" 
                  alt="CypherNexus Platform" 
                  className="project-image" 
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center slide-up mt-16">Enterprise <span className="yellow-highlight">Projects</span></h2>
        <div className="projects-grid">
          <div className="project-card" style={getAnimationDelay(0)}>
            <h3>QAASSIST</h3>
            <p>Speeding up the medicine submission process using agentic systems.</p>
          </div>
          <div className="project-card" style={getAnimationDelay(1)}>
            <h3>TADA - AI Incident Analysis</h3>
            <p>Enterprise AI system for automated incident analysis using Azure and OpenAI.</p>
          </div>
          <div className="project-card" style={getAnimationDelay(2)}>
            <h3>Incident Predictive Analysis</h3>
            <p>Through embeddings and telephone call speech-to-text analysis, we were able to achieve a 75% correct prediction rate of incident resolutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
