import React from 'react';

const TechMarquee = () => {
  return (
    <div id="tech-marquee" className="section narrative-section">
      {/* Auto-scrolling Technology Marquee */}
      <div className="tech-marquee-container">
        <h3 className="tech-marquee-title">Technologies I've Worked With</h3>
        <div className="tech-marquee">
          <div className="tech-marquee-content">
              {/* First copy of items */}
              <div className="tech-item">
                <img src="/images/tech-icons/react.svg" alt="React" />
                <span>React</span>
              </div>
              <div className="tech-item">
                <img src="/images/tech-icons/python.svg" alt="Python" />
                <span>Python</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="JS">JS</span>
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="TS">TS</span>
                <span>TypeScript</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="N">N</span>
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <img src="/images/tech-icons/flutter.svg" alt="Flutter" />
                <span>Flutter</span>
              </div>
              <div className="tech-item">
                <img src="/images/tech-icons/aws.svg" alt="AWS" />
                <span>AWS</span>
              </div>
              <div className="tech-item">
                <img src="/images/tech-icons/azure.svg" alt="Azure" />
                <span>Azure</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="GC">GC</span>
                <span>Google Cloud</span>
              </div>
              <div className="tech-item">
                <img src="/images/tech-icons/openai.svg" alt="OpenAI" />
                <span>OpenAI</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="Go">Go</span>
                <span>Go/Golang</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="C#">C#</span>
                <span>C#</span>
              </div>
              <div className="tech-item">
                <img src="/images/tech-icons/mongodb.svg" alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="SQL">SQL</span>
                <span>SQL</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="FB">FB</span>
                <span>Firebase</span>
              </div>
              
              {/* Duplicate items for seamless scrolling */}
              <div className="tech-item">
                <img src="/images/tech-icons/react.svg" alt="React" />
                <span>React</span>
              </div>
              <div className="tech-item">
                <img src="/images/tech-icons/python.svg" alt="Python" />
                <span>Python</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="JS">JS</span>
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="TS">TS</span>
                <span>TypeScript</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="N">N</span>
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <img src="/images/tech-icons/flutter.svg" alt="Flutter" />
                <span>Flutter</span>
              </div>
              <div className="tech-item">
                <img src="/images/tech-icons/aws.svg" alt="AWS" />
                <span>AWS</span>
              </div>
              <div className="tech-item">
                <img src="/images/tech-icons/azure.svg" alt="Azure" />
                <span>Azure</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="GC">GC</span>
                <span>Google Cloud</span>
              </div>
              <div className="tech-item">
                <img src="/images/tech-icons/openai.svg" alt="OpenAI" />
                <span>OpenAI</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="Go">Go</span>
                <span>Go/Golang</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="C#">C#</span>
                <span>C#</span>
              </div>
              <div className="tech-item">
                <img src="/images/tech-icons/mongodb.svg" alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="SQL">SQL</span>
                <span>SQL</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon" data-icon="FB">FB</span>
                <span>Firebase</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;