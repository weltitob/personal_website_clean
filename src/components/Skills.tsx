import { useEffect, useRef } from 'react';

const Skills = () => {
  const skillBars = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const skillData = { 0: '95%', 1: '90%', 2: '85%', 3: '80%' };
    
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
        <h2 className="slide-up">Technical Skills</h2>
        <p className="fade-in delay-100">
          Through my dual studies at Boehringer Ingelheim and various personal projects, I've developed a strong foundation in both frontend and backend technologies. I enjoy building applications that are not only technically sound but also user-friendly and visually appealing.
        </p>
        <p className="fade-in delay-200">
          I believe in continuous learning and using the right tools for each specific challenge. Here's an overview of my core competencies:
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;