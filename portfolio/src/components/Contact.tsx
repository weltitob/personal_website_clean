import { useEffect, useRef } from 'react';

const Contact = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    if (headingRef.current) observer.observe(headingRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);
    if (linksRef.current) observer.observe(linksRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
      if (linksRef.current) observer.unobserve(linksRef.current);
    };
  }, []);

  return (
    <section id="contact" className="section narrative-section">
      <div className="content-wrapper text-center">
        <h2 ref={headingRef} className="slide-up">Bereit für den nächsten Schritt?</h2>
        <p ref={textRef} className="section-intro-text mx-auto fade-in delay-100">
          Lass uns darüber sprechen, wie wir gemeinsam innovative digitale Lösungen entwickeln können.
        </p>
        <div ref={buttonRef} className="mt-8 fade-in delay-200">
          <a href="mailto:deine.email@example.com" className="btn-glow-gradient">
            <span className="lucide mr-2">&#xeac2;</span> Kontakt aufnehmen
          </a>
        </div>
        <div ref={linksRef} className="mt-12 flex justify-center space-x-6 fade-in delay-300">
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-purple-400 transition duration-300">
            <span className="lucide text-2xl">&#xeabe;</span>
          </a>
          <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <span className="lucide text-2xl">&#xea1f;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;