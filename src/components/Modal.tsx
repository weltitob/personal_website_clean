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
            // Black and white consistent styling
            const colorClass = 'bg-slate-900/50 text-slate-300';
            
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