import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="section narrative-section" style={{ paddingTop: '0.5rem' }}>
      <div className="content-wrapper md:w-3/4 lg:w-3/4">
        <h2 className="slide-up">Core Strengths</h2>
        <p className="fade-in delay-100">
          Through my strong interest in technology and numerous private and work projects, I've developed expertise in both frontend and backend technologies. As a fast learner and problem solver, I excel in agile environments where quick adaptation is essential.
        </p>
        <p className="fade-in delay-200">
          My strengths include agile working methodologies, embracing fast failure for rapid improvement, and adapting dynamically to different working environments. I believe in continuous learning and using the right tools for each specific challenge.
        </p>
        <div className="skills-module fade-in delay-300">
          <div className="strength-grid">
            <div className="strength-item">
              <div className="strength-icon">💻</div>
              <h3 className="strength-title">Python & Data Science</h3>
              <p className="strength-description">
                Expertise in data analysis, machine learning, and automation solutions using Python and related libraries. Building scalable and efficient data pipelines.
              </p>
            </div>

            <div className="strength-item">
              <div className="strength-icon">🌐</div>
              <h3 className="strength-title">React, Flutter & Frontend</h3>
              <p className="strength-description">
                Creating responsive, intuitive user interfaces with modern frameworks. Focus on performance optimization and seamless user experiences.
              </p>
            </div>

            <div className="strength-item">
              <div className="strength-icon">☁️</div>
              <h3 className="strength-title">Cloud Technologies</h3>
              <p className="strength-description">
                Deploying and managing applications on AWS, Azure, and Google Cloud. Experience with serverless architectures and cloud-native development.
              </p>
            </div>

            <div className="strength-item">
              <div className="strength-icon">🤖</div>
              <h3 className="strength-title">AI Technologies</h3>
              <p className="strength-description">
                Implementing AI solutions using various frameworks and platforms. Experience with NLP, computer vision, and predictive analytics.
              </p>
            </div>

            <div className="strength-item">
              <div className="strength-icon">📊</div>
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