import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="section narrative-section" style={{ paddingTop: '2rem' }}>
      <div className="content-wrapper md:w-3/4 lg:w-3/4">
        <h2 className="slide-up">Core Strengths</h2>
        <p className="fade-in delay-100">
          Driven by passion for technology and experience across diverse projects, I've cultivated comprehensive full-stack expertise. I thrive in agile environments where adaptability and problem-solving are paramount.
        </p>
        <p className="fade-in delay-200">
          My approach emphasizes iterative development, efficient failure analysis for continuous improvement, and versatile adaptation to team dynamics. I'm committed to ongoing skill development and selecting optimal technologies for each unique challenge.
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