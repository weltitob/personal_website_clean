import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Skills from './components/Skills'
import TechMarquee from './components/TechMarquee'
import ProjectTimeline from './components/ProjectTimeline'
import EducationTimeline from './components/EducationTimeline'
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
        <TechMarquee />
        <Skills />
        <Journey />
        <EducationTimeline />
        <ProjectTimeline />
        <CVTimeline />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Modals */}
      <Modal 
        id="project-alpha-modal"
        title="TADA: AI-Powered Incident Trend Analysis"
        status="DEPLOYED"
        statusIndicator="status-deployed"
        description="TADA identifies trends in incident ticket data at Boehringer Ingelheim. Users upload data via a Power App, then workflows route data to Azure where Python code with OpenAI integration analyzes the data. Results are displayed in the Power App interface. The system includes related subprojects: incident solution prediction using embeddings and audio transcription with local Whisper/Phenome models."
        techStack={["Python", "Azure", "OpenAI", "Microsoft Power Apps", "MS Workflows"]}
      />
      
      
      <Modal 
        id="project-x-modal"
        title="Social Media Automation with AI"
        status="ACTIVE"
        statusIndicator="status-development"
        description="Built a data-driven solution that achieved over 1 million Instagram followers through intelligent trend detection and automated content posting. The system uses Python to analyze emerging content patterns, identify engagement opportunities, and automatically schedule posts for maximum reach and engagement."
        techStack={["Python", "Data Analysis", "Trend Detection", "Automation", "Instagram API"]}
      />
    </>
  )
}

export default App