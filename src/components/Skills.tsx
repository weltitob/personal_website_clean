
const Skills = () => {
  return (
    <div id="skills" className="section narrative-section" style={{ paddingTop: '2rem' }}>
      <div className="content-wrapper md:w-3/4 lg:w-3/4">
        <h2 className="slide-up">Core Strengths</h2>
        <p className="fade-in delay-100">
          Technology enthusiast with hands-on experience in developing scalable solutions and strategic problem-solving.
          Building impactful applications that enhance business processes through innovative AI integration, 
          cross-functional collaboration, and effective implementation of agile methodologies.
        </p>
        
        <div className="skills-module fade-in delay-200">
          <div className="strength-grid">
            <div className="strength-item">
              <div className="strength-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="strength-title">Python & Data Science</h3>
              <p className="strength-description">
                Expertise in data analysis, machine learning, and automation solutions using Python and related libraries. Building scalable and efficient data pipelines.
              </p>
            </div>

            <div className="strength-item">
              <div className="strength-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="strength-title">React, Flutter & Frontend</h3>
              <p className="strength-description">
                Creating responsive, intuitive user interfaces with modern frameworks. Focus on performance optimization and seamless user experiences.
              </p>
            </div>

            <div className="strength-item">
              <div className="strength-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
              </div>
              <h3 className="strength-title">Cloud Technologies</h3>
              <p className="strength-description">
                Deploying and managing applications on AWS, Azure, and Google Cloud. Experience with serverless architectures and cloud-native development.
              </p>
            </div>

            <div className="strength-item">
              <div className="strength-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                  <circle cx="12" cy="5" r="2"></circle>
                  <path d="M12 7v4"></path>
                  <line x1="8" y1="16" x2="8" y2="16"></line>
                  <line x1="16" y1="16" x2="16" y2="16"></line>
                </svg>
              </div>
              <h3 className="strength-title">AI Technologies</h3>
              <p className="strength-description">
                Implementing AI solutions using various frameworks and platforms. Experience with NLP, computer vision, and predictive analytics.
              </p>
            </div>

            <div className="strength-item">
              <div className="strength-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="strength-title">Agile Working & Project Management</h3>
              <p className="strength-description">
                Organizing and leading projects using agile methodologies. Skilled in planning, execution, and continuous improvement processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;