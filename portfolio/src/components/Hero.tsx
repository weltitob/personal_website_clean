import { useEffect, useRef } from 'react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

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

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section id="hero" className="narrative-section flex items-center justify-center">
      <div className="content-wrapper text-center">
        <h1 ref={headingRef} className="slide-up">
          Digitale Erlebnisse, <br className="hidden md:block"/> neu gedacht von <span className="text-gradient">Tobi</span>.
        </h1>
        <p ref={textRef} className="section-intro-text slide-up delay-100">
          Ich verbinde Design und Technologie, um komplexe Probleme in intuitive, skalierbare Lösungen zu verwandeln. Das ist meine Mission.
        </p>
        <div className="flex justify-center">
          <a ref={buttonRef} href="#journey" className="btn-glow-gradient mt-4 slide-up delay-200">
            Entdecke meine Reise
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;