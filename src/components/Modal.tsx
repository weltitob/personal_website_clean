import { useEffect, useState } from 'react';

interface ModalProps {
  id: string;
  title: string;
  status: string;
  statusIndicator: string;
  description: string;
  techStack: string[];
}

const Modal = ({ id, title, status, statusIndicator, description, techStack }: ModalProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsActive(false);
      }
    };

    const handleOpenModal = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail === id) {
        setIsActive(true);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    window.addEventListener('openModal', handleOpenModal);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      window.removeEventListener('openModal', handleOpenModal);
    };
  }, [id]);

  const handleClose = () => {
    setIsActive(false);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsActive(false);
    }
  };

  return (
    <div id={id} className={`modal ${isActive ? 'active' : ''}`} onClick={handleModalClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose} aria-label="Schließen">&times;</button>
        <h3 className="text-gradient text-2xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>{title}</h3>
        <p className="text-sm mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255, 255, 255, 0.65)' }}>Status: <span className={`status-indicator ${statusIndicator} inline-block`}></span> {status}</p>
        <p className="mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{description}</p>
        <h4 className="font-semibold mb-2 text-slate-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Technologie-Stack:</h4>
        <div className="flex flex-wrap gap-2 text-xs font-mono mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {techStack.map((tech, index) => {
            // Colorful styling based on tech name
            let colorClass = '';
            
            // Assign colors based on technology
            if (tech.includes('React') || tech.includes('Next.js')) {
              colorClass = 'bg-blue-900/50 text-blue-300';
            } else if (tech.includes('Node') || tech.includes('Express')) {
              colorClass = 'bg-green-900/50 text-green-300';
            } else if (tech.includes('Python') || tech.includes('Django')) {
              colorClass = 'bg-yellow-900/50 text-yellow-300';
            } else if (tech.includes('TypeScript') || tech.includes('Angular')) {
              colorClass = 'bg-blue-900/50 text-blue-300';
            } else if (tech.includes('AWS') || tech.includes('Amazon')) {
              colorClass = 'bg-orange-900/50 text-orange-300';
            } else if (tech.includes('Azure') || tech.includes('Microsoft')) {
              colorClass = 'bg-blue-900/50 text-blue-300';
            } else if (tech.includes('Firebase') || tech.includes('Google')) {
              colorClass = 'bg-yellow-900/50 text-yellow-300';
            } else if (tech.includes('MongoDB')) {
              colorClass = 'bg-green-900/50 text-green-300';
            } else if (tech.includes('SQL') || tech.includes('Postgres')) {
              colorClass = 'bg-blue-900/50 text-blue-300';
            } else if (tech.includes('Flutter') || tech.includes('Dart')) {
              colorClass = 'bg-cyan-900/50 text-cyan-300';
            } else if (tech.includes('JavaScript')) {
              colorClass = 'bg-yellow-900/50 text-yellow-300';
            } else if (tech.includes('Swift') || tech.includes('iOS')) {
              colorClass = 'bg-orange-900/50 text-orange-300';
            } else if (tech.includes('Kotlin') || tech.includes('Android')) {
              colorClass = 'bg-green-900/50 text-green-300';
            } else if (tech.includes('Docker') || tech.includes('Kubernetes')) {
              colorClass = 'bg-blue-900/50 text-blue-300';
            } else if (tech.includes('OpenAI') || tech.includes('AI')) {
              colorClass = 'bg-purple-900/50 text-purple-300';
            } else {
              // Default for other technologies
              colorClass = 'bg-gray-900/50 text-gray-300';
            }
            
            return (
              <span key={index} className={`${colorClass} px-2 py-0.5 rounded`}>{tech}</span>
            );
          })}
        </div>
        <a href="#" className="btn-secondary">View Project <span className="lucide text-xs ml-1">&#xea1f;</span></a>
      </div>
    </div>
  );
};

export default Modal;