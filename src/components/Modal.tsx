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
        <h3 className="text-gradient text-2xl mb-4">{title}</h3>
        <p className="text-sm text-slate-400 mb-4">Status: <span className={`status-indicator ${statusIndicator} inline-block`}></span> {status}</p>
        <p className="mb-4">{description}</p>
        <h4 className="font-semibold mb-2 text-slate-300">Technologie-Stack:</h4>
        <div className="flex flex-wrap gap-2 text-xs font-mono mb-6">
          {techStack.map((tech, index) => {
            const colors = [
              'bg-blue-900/50 text-blue-300',
              'bg-purple-900/50 text-purple-300',
              'bg-green-900/50 text-green-300',
              'bg-gray-700/50 text-gray-300',
              'bg-yellow-900/50 text-yellow-300',
              'bg-red-900/50 text-red-300',
              'bg-cyan-900/50 text-cyan-300'
            ];
            const colorClass = colors[index % colors.length];
            
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