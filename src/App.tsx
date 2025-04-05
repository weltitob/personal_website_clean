import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Skills from './components/Skills'
import ProjectTimeline from './components/ProjectTimeline'
import CVTimeline from './components/CVTimeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  // Custom cursor state and refs
  const [, setIsHovering] = useState(false);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Log to console on component mount
    console.log("%cTobi :: Interactive Journey V2 :: Systems Go", "color: #8b5cf6; font-size: 1.2em; font-weight: bold;");
    
    // Custom cursor logic
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      
      if (cursorRingRef.current && cursorDotRef.current) {
        // Apply positions directly - bypass any transformations
        cursorRingRef.current.style.left = `${clientX}px`;
        cursorRingRef.current.style.top = `${clientY}px`;
        
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;
      }
    };
    
    // Detect hoverable elements
    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isHoverable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('hoverable');
      
      if (isHoverable && cursorRingRef.current) {
        setIsHovering(true);
        cursorRingRef.current.classList.add('cursor-hover');
      } else {
        setIsHovering(false);
        if (cursorRingRef.current) {
          cursorRingRef.current.classList.remove('cursor-hover');
        }
      }
    };
    
    // Hide cursor when inactive
    let timeout: number;
    const hideCursor = () => {
      if (cursorRingRef.current && cursorDotRef.current) {
        cursorRingRef.current.style.opacity = '0';
        cursorDotRef.current.style.opacity = '0';
      }
    };
    
    const showCursor = () => {
      if (cursorRingRef.current && cursorDotRef.current) {
        cursorRingRef.current.style.opacity = '1';
        cursorDotRef.current.style.opacity = '1';
      }
      
      clearTimeout(timeout);
      timeout = window.setTimeout(hideCursor, 5000);
    };
    
    // Hide native cursor on all elements
    document.documentElement.style.cursor = 'none';
    
    // Add global style to override cursor on all elements
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleElement);
    
    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousemove', showCursor);
    
    // Show cursor initially
    showCursor();
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousemove', showCursor);
      document.documentElement.style.cursor = 'auto';
      
      // Remove the global style element
      const styleElement = document.querySelector('style');
      if (styleElement && styleElement.textContent && styleElement.textContent.includes('cursor: none')) {
        styleElement.remove();
      }
      
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* Custom cursor elements */}
      <div className="cursor-ring" ref={cursorRingRef}></div>
      <div className="cursor-dot" ref={cursorDotRef}></div>
      
      <Header />
      
      <main>
        <Hero />
        <Journey />
        <Skills />
        
        <div className="narrative-section">
          <div className="content-wrapper">
            <h2 className="slide-up">Meilenstein: Projekt Beta</h2>
            <div className="project-card fade-in delay-100">
              <div className="flex items-center justify-center order-last md:order-first">
                <img src="https://placehold.co/600x450/0f172a/e2e8f0?text=Projekt+Beta+Visual" alt="[Bild von Projekt Beta]" className="w-full h-auto max-w-md" />
              </div>
              <div className="project-details">
                <h3>[Titel des Projekts Beta]</h3>
                <p>
                  Hier ging es darum, [Problembeschreibung]. Die Lösung war [Art der Anwendung], mit einem besonderen Fokus auf [wichtiger Aspekt, z.B. Performance, User Experience].
                </p>
                <p>
                  Eingesetzte Technologien: <span className="tech-highlight">Vue.js</span>, <span className="tech-highlight">TypeScript</span>, <span className="tech-highlight">Headless CMS</span>.
                </p>
                <div className="mt-6 space-x-3">
                  <button onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: 'project-beta-modal' }))} className="btn-glow-gradient">Mehr Details</button>
                  <a href="#" className="btn-secondary">Code <span className="lucide text-xs ml-1">&#xea1f;</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="narrative-section">
          <div className="content-wrapper md:w-3/4 lg:w-2/3 text-center mx-auto">
            <h2 className="slide-up">Philosophie: Mehr als Code</h2>
            <p className="section-intro-text fade-in delay-100">
              Technologie ist ein Werkzeug. Mein Ziel ist es, dieses Werkzeug so einzusetzen, dass es echten Mehrwert schafft – durch durchdachtes Design, robuste Architektur und eine Prise Innovation.
            </p>
            <p className="fade-in delay-200">
              Ich strebe nach Lösungen, die nicht nur heute funktionieren, sondern auch morgen Bestand haben. Klarheit, Effizienz und eine positive Nutzererfahrung stehen dabei im Mittelpunkt. Die Reise geht weiter...
            </p>
          </div>
        </div>
        
        <ProjectTimeline />
        <CVTimeline />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Modals */}
      <Modal 
        id="project-alpha-modal"
        title="Projekt Alpha: [Titel]"
        status="DEPLOYED"
        statusIndicator="status-deployed"
        description="Detaillierte Beschreibung von Projekt Alpha. Herausforderungen, Lösungsansätze, technische Architektur, erreichte Ziele."
        techStack={["React", "Node.js", "WebSocket", "AWS", "Testing Library"]}
      />
      
      <Modal 
        id="project-beta-modal"
        title="Projekt Beta: [Titel]"
        status="IN DEVELOPMENT"
        statusIndicator="status-development"
        description="Detaillierte Beschreibung von Projekt Beta. Vision, technische Entscheidungen, besondere Herausforderungen, aktueller Stand."
        techStack={["Vue.js", "Strapi", "TypeScript", "Docker", "GraphQL"]}
      />
      
      <Modal 
        id="project-x-modal"
        title="Projekt X: [Titel]"
        status="ACTIVE"
        statusIndicator="status-development"
        description="Details zum aktuellen Projekt X..."
        techStack={["React", "Next.js", "Tailwind CSS"]}
      />
    </>
  )
}

export default App