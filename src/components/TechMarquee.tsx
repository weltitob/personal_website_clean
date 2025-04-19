import { memo, useEffect, useRef } from 'react';

// Define tech items once to avoid duplication
const TECH_ITEMS = [
  { icon: 'react.svg', name: 'React' },
  { icon: 'python.svg', name: 'Python' },
  { icon: 'javascript.svg', name: 'JavaScript' },
  { icon: 'typescript.svg', name: 'TypeScript' },
  { icon: 'nodejs.svg', name: 'Node.js' },
  { icon: 'flutter.svg', name: 'Flutter' },
  { icon: 'aws.svg', name: 'AWS' },
  { icon: 'azure.svg', name: 'Azure' },
  { icon: 'googlecloud.svg', name: 'Google Cloud' },
  { icon: 'openai.svg', name: 'OpenAI' },
  { icon: 'go.svg', name: 'Go/Golang' },
  { icon: 'csharp.svg', name: 'C#' },
  { icon: 'mongodb.svg', name: 'MongoDB' },
  { icon: 'sql.svg', name: 'SQL' },
  { icon: 'firebase.svg', name: 'Firebase' },
];

// Memoize each tech item to prevent unnecessary re-renders
const TechItem = memo(({ icon, name }: { icon: string, name: string }) => (
  <div className="tech-item">
    <div className="tech-item-inner">
      <img 
        src={`/images/tech-icons/${icon}`} 
        alt={name} 
        loading="lazy" 
        width="36" 
        height="36"
      />
      <span>{name}</span>
    </div>
  </div>
));

const TechMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add intersection observer to pause animation when not in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (marqueeRef.current) {
            if (entry.isIntersecting) {
              marqueeRef.current.style.animationPlayState = 'running';
            } else {
              marqueeRef.current.style.animationPlayState = 'paused';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = marqueeRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="tech-marquee" className="tech-marquee-section">
      <div className="tech-marquee-container">
        <div className="tech-marquee-header">
          <h2 className="tech-marquee-title">Tech Stack</h2>
          <p className="tech-marquee-subtitle">Technologies I've worked with</p>
        </div>
        
        <div className="tech-marquee-wrapper">
          <div className="tech-marquee">
            <div className="tech-marquee-content" ref={marqueeRef}>
              {/* Render first set of items */}
              {TECH_ITEMS.map((item, index) => (
                <TechItem key={`tech-${index}`} icon={item.icon} name={item.name} />
              ))}
              
              {/* Duplicate items for seamless scrolling */}
              {TECH_ITEMS.map((item, index) => (
                <TechItem key={`tech-dup-${index}`} icon={item.icon} name={item.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TechMarquee);