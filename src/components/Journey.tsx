import { useEffect } from 'react';

const Journey = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => scrollObserver.observe(el));
    
    return () => {
      animatedElements.forEach(el => scrollObserver.unobserve(el));
    };
  }, []);

  return (
    <section id="journey" className="section">
      <div className="narrative-section">
        <div className="content-wrapper">
          <h2 className="slide-up">Resume</h2>
          <div className="project-card fade-in delay-100">
            <div className="project-details">
              <h3>Education & Professional Experience</h3>
              <p>
                I'm completing my Bachelor of Science in Mobile Informatics at DHBW Friedrichshafen (2021-2024) with a strong GPA of 1.6. Currently, I work as a Junior Business Consultant at Boehringer Ingelheim, where I started as part of my dual studies program. This role has provided me with practical experience in software development and data science, working on projects that combine technical innovation with business value.
              </p>
              <p>
                I thrive in challenging, agile environments and enjoy working in teams where I can contribute to business success while continuously developing my skills. My experience spans mobile app development, web development, and AI/ML solutions, with a focus on finding practical applications for emerging technologies.
              </p>
              <div className="mt-6 space-x-3">
                <a href="#cv-timeline" className="btn-glow-gradient">View Full CV <span className="btn-icon">→</span></a>
                <a href="#project-timeline" className="btn-secondary">See Projects <span className="lucide text-xs ml-1">&#xea1f;</span></a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src="https://placehold.co/600x450/0f172a/e2e8f0?text=Education+and+Experience" alt="Education and Professional Experience" className="w-full h-auto max-w-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;