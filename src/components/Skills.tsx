import { useEffect, useRef } from 'react';

const Skills = () => {
  const skillBars = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const skillData = { 0: '95%', 1: '90%', 2: '85%', 3: '80%', 4: '85%' };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target as HTMLDivElement;
          const index = skillBars.current.indexOf(bar);
          const targetWidth = skillData[index as keyof typeof skillData] || '0%';
          
          setTimeout(() => { 
            bar.style.width = targetWidth;
          }, 100);
          
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });
    
    skillBars.current.forEach(bar => {
      bar.style.width = '0%';
      observer.observe(bar);
    });
    
    return () => {
      skillBars.current.forEach(bar => {
        if (bar) observer.unobserve(bar);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !skillBars.current.includes(el)) {
      skillBars.current.push(el);
    }
  };

  return (
    <div id="skills" className="section narrative-section">
      <div className="content-wrapper md:w-3/4 lg:w-2/3">
        <h2 className="slide-up">Skills</h2>
        <p className="fade-in delay-100">
          Through my strong interest in technology and numerous private and work projects, I've developed expertise in both frontend and backend technologies. As a fast learner and problem solver, I excel in agile environments where quick adaptation is essential.
        </p>
        <p className="fade-in delay-200">
          My strengths include agile working methodologies, embracing fast failure for rapid improvement, and adapting dynamically to different working environments. I believe in continuous learning and using the right tools for each specific challenge. Here's an overview of my core competencies:
        </p>
        <div className="skills-module fade-in delay-300">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-slate-200 text-sm">Python & Data Science</span>
                <span className="font-mono text-xs text-blue-300">95%</span>
              </div>
              <div className="skill-bar-container">
                <div ref={addToRefs} className="skill-bar" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-slate-200 text-sm">React & Frontend Technologies</span>
                <span className="font-mono text-xs text-blue-300">90%</span>
              </div>
              <div className="skill-bar-container">
                <div ref={addToRefs} className="skill-bar" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-slate-200 text-sm">Mobile Development (Flutter)</span>
                <span className="font-mono text-xs text-blue-300">85%</span>
              </div>
              <div className="skill-bar-container">
                <div ref={addToRefs} className="skill-bar" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-slate-200 text-sm">Cloud & AI Technologies</span>
                <span className="font-mono text-xs text-blue-300">80%</span>
              </div>
              <div className="skill-bar-container">
                <div ref={addToRefs} className="skill-bar" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-slate-200 text-sm">Project Management</span>
                <span className="font-mono text-xs text-blue-300">85%</span>
              </div>
              <div className="skill-bar-container">
                <div ref={addToRefs} className="skill-bar" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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

export default Skills;