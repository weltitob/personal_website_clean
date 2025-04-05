import { useEffect, useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="text-center p-6 text-xs text-slate-500 font-mono">
      &copy; <span>{currentYear}</span> Tobi | Design & Code mit Leidenschaft
    </footer>
  );
};

export default Footer;