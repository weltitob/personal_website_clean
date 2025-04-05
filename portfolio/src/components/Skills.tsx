import { useEffect, useRef } from 'react';

const Skills = () => {
  const skillBars = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const skillData = { 0: '90%', 1: '75%', 2: '85%', 3: '60%' };
    
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
        <h2 className="slide-up">Evolution: Lernen & Anwenden</h2>
        <p className="fade-in delay-100">
          Jedes Projekt ist eine Chance zu wachsen. Bei [Firma/Agentur/Freelance] habe ich meine Fähigkeiten in [Bereich, z.B. Backend-Entwicklung, Cloud-Architektur] vertieft und gelernt, wie wichtig [wichtiger Aspekt, z.B. Skalierbarkeit, Teamarbeit] ist.
        </p>
        <p className="fade-in delay-200">
          Ich glaube an kontinuierliches Lernen und die Anwendung der richtigen Werkzeuge für die jeweilige Aufgabe. Hier ein Überblick über meine aktuellen Kernkompetenzen:
        </p>
        <div className="skills-module fade-in delay-300">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-slate-200 text-sm">Frontend (React, Vue.js, etc.)</span>
                <span className="font-mono text-xs text-blue-300">90%</span>
              </div>
              <div className="skill-bar-container">
                <div ref={addToRefs} className="skill-bar" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-slate-200 text-sm">Backend (Node.js, Python, etc.)</span>
                <span className="font-mono text-xs text-blue-300">75%</span>
              </div>
              <div className="skill-bar-container">
                <div ref={addToRefs} className="skill-bar" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-slate-200 text-sm">UI/UX & Design Systems</span>
                <span className="font-mono text-xs text-blue-300">85%</span>
              </div>
              <div className="skill-bar-container">
                <div ref={addToRefs} className="skill-bar" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-slate-200 text-sm">Cloud & DevOps Basics</span>
                <span className="font-mono text-xs text-blue-300">60%</span>
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