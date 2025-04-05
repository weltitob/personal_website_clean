import { useEffect } from 'react';

const Journey = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => scrollObserver.observe(el));
    
    return () => {
      animatedElements.forEach(el => scrollObserver.unobserve(el));
    };
  }, []);

  return (
    <section id="journey" className="section">
      <div className="narrative-section">
        <div className="content-wrapper md:w-3/4 lg:w-2/3">
          <h2 className="slide-up">Der Funke: Code & Kreativität</h2>
          <p className="fade-in delay-100">
            Es begann mit [Deine Anekdote hier: erster Computer, Website, Spiel...]. Die Möglichkeit, aus reiner Logik etwas Visuelles, Interaktives zu erschaffen, zog mich sofort in ihren Bann. Es war die perfekte Mischung aus analytischem Denken und kreativem Ausdruck.
          </p>
          <p className="fade-in delay-200">
            Frühe Experimente mit <span className="tech-highlight">HTML</span> und <span className="tech-highlight">CSS</span> führten schnell zu komplexeren Herausforderungen und dem Wunsch, nicht nur zu gestalten, sondern robuste, dynamische Anwendungen zu bauen.
          </p>
        </div>
      </div>

      <div className="narrative-section">
        <div className="content-wrapper">
          <h2 className="slide-up">Meilenstein: Projekt Alpha</h2>
          <div className="project-card fade-in delay-100">
            <div className="project-details">
              <h3>[Titel des Projekts Alpha]</h3>
              <p>
                Die Aufgabe war, [Problembeschreibung]. Meine Lösung war ein [Art der Anwendung, z.B. interaktives Dashboard], das [Nutzen stiften]. Der Fokus lag auf einer klaren Informationsarchitektur und Echtzeit-Updates.
              </p>
              <p>
                Kerntechnologien: <span className="tech-highlight">React</span>, <span className="tech-highlight">Node.js</span>, <span className="tech-highlight">WebSocket</span>.
              </p>
              <div className="mt-6 space-x-3">
                <button onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: 'project-alpha-modal' }))} className="btn-glow-gradient">Mehr Details</button>
                <a href="#" className="btn-secondary">Code <span className="lucide text-xs ml-1">&#xea1f;</span></a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src="https://placehold.co/600x450/0f172a/e2e8f0?text=Projekt+Alpha+Visual" alt="[Bild von Projekt Alpha]" className="w-full h-auto max-w-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;