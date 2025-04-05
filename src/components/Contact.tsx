import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Copy email to clipboard
  const copyEmailToClipboard = () => {
    const email = 'tobi@example.com';
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = [
      headingRef.current,
      textRef.current,
      cardRef.current,
      sectionRef.current
    ].filter(Boolean);
    
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="contact-section">
      {/* Background elements */}
      <div className="contact-shapes">
        <div className="contact-shape shape-left"></div>
        <div className="contact-shape shape-right"></div>
      </div>
      
      <div className="content-wrapper relative z-10">
        <div className="text-center mb-12">
          <h2 ref={headingRef} className="slide-up mb-4">Ready for your next project?</h2>
          <p ref={textRef} className="contact-intro-text mx-auto fade-in delay-100">
            Let's turn your vision into reality together. I'm always looking for new challenges and exciting projects.
          </p>
        </div>
        
        <div ref={cardRef} className="contact-card-container fade-in delay-200">
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="contact-tabs">
                <button 
                  className={`contact-tab ${activeTab === 'projects' ? 'active' : ''}`}
                  onClick={() => setActiveTab('projects')}
                >
                  Projects
                </button>
                <button 
                  className={`contact-tab ${activeTab === 'consulting' ? 'active' : ''}`}
                  onClick={() => setActiveTab('consulting')}
                >
                  Consulting
                </button>
                <button 
                  className={`contact-tab ${activeTab === 'general' ? 'active' : ''}`}
                  onClick={() => setActiveTab('general')}
                >
                  General
                </button>
              </div>
            </div>
            
            <div className="contact-card-content">
              <div className="contact-info">
                <div className="contact-avatar">
                  <img src="/images/tobi_profile.jpeg" alt="Tobi" className="contact-avatar-img" />
                  <div className="contact-status">
                    <span className="contact-status-dot"></span>
                    Available for new projects
                  </div>
                </div>
                
                <div className="contact-details">
                  <h3 className="contact-name">Tobi</h3>
                  <p className="contact-title">Web Developer & Designer</p>
                  
                  <div className="contact-response-time">
                    <span className="contact-response-icon">⏱️</span>
                    <span>Response time: &lt; 24 hours</span>
                  </div>
                  
                  <div className="contact-methods">
                    <div className="contact-method">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-method-icon">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <div className="contact-method-detail">
                        <div className="flex items-center gap-2">
                          <span className="contact-method-label">tobi@example.com</span>
                          <button 
                            className="contact-copy-button"
                            onClick={copyEmailToClipboard}
                            aria-label="Copy email"
                          >
                            {emailCopied ? 
                              <span className="copy-success">✓</span> : 
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                              </svg>
                            }
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="contact-method">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-method-icon">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <div className="contact-method-detail">
                        <span className="contact-method-label">+49 123 456 789</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="contact-message">
                <p className="contact-message-text">
                  {activeTab === 'projects' && "Do you have an exciting project? Tell me more about it and let's find the best solution together."}
                  {activeTab === 'consulting' && "Do you need technical consulting or help planning your digital project? I'm happy to support you."}
                  {activeTab === 'general' && "Do you have questions or just want to get in touch? I look forward to hearing from you."}
                </p>
              </div>
            </div>
            
            <div className="contact-card-actions">
              <a href="mailto:tobi@example.com" className="btn-glow-gradient contact-btn">
                <span className="btn-text">Send Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </a>
              
              <a href="tel:+491234567890" className="btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-social">
          <div className="contact-social-label">Oder finde mich auf:</div>
          <div className="contact-social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-social-icon">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="contact-social-name">LinkedIn</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-social-icon">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span className="contact-social-name">GitHub</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-social-icon">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="contact-social-name">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;