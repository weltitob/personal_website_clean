import { memo, useEffect, useRef } from 'react';

// Define tech items once to avoid duplication
const TECH_ITEMS = [
  { icon: 'react.svg', name: 'React', className: 'tech-react' },
  { icon: 'python.svg', name: 'Python', className: 'tech-python' },
  { icon: 'javascript.svg', name: 'JavaScript', className: 'tech-javascript' },
  { icon: 'typescript.svg', name: 'TypeScript', className: 'tech-typescript' },
  { icon: 'nodejs.svg', name: 'Node.js', className: 'tech-nodejs' },
  { icon: 'flutter.svg', name: 'Flutter', className: 'tech-flutter' },
  { icon: 'aws.svg', name: 'AWS', className: 'tech-aws' },
  { icon: 'azure.svg', name: 'Azure', className: 'tech-azure' },
  { icon: 'googlecloud.svg', name: 'Google Cloud', className: 'tech-gcp' },
  { icon: 'openai.svg', name: 'OpenAI', className: 'tech-openai' },
  { icon: 'mongodb.svg', name: 'MongoDB', className: 'tech-mongodb' },
  { icon: 'sql.svg', name: 'SQL', className: 'tech-sql' },
  { icon: 'firebase.svg', name: 'Firebase', className: 'tech-firebase' },
];

// Memoize each tech item to prevent unnecessary re-renders
const TechItem = memo(({ icon, name, className }: { icon: string, name: string, className: string }) => (
  <div className="tech-item">
    <div className={`tech-item-inner ${className}`}>
      <img 
        src={`/images/tech-icons/${icon}`} 
        alt={name} 
        loading="lazy" 
        width="36" 
        height="36"
        style={{ filter: 'none' }} // Override any grayscale filter
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
          <p className="tech-marquee-subtitle">Technologies I've mastered</p>
        </div>
        
        <div className="tech-marquee-wrapper">
          <div className="tech-marquee">
            <div className="tech-marquee-content" ref={marqueeRef}>
              {/* Render first set of items */}
              {TECH_ITEMS.map((item, index) => (
                <TechItem key={`tech-${index}`} icon={item.icon} name={item.name} className={item.className} />
              ))}
              
              {/* Duplicate items for seamless scrolling */}
              {TECH_ITEMS.map((item, index) => (
                <TechItem key={`tech-dup-${index}`} icon={item.icon} name={item.name} className={item.className} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TechMarquee);