import { useState, useEffect } from 'react';
import { useHover } from '../../hooks/useHover';

function NavLink({ href, children }: { href: string; children: string }) {
  const h = useHover();
  return (
    <a href={href} {...h} className={`font-outfit text-[13px] font-medium tracking-[0.04em] uppercase no-underline transition-colors duration-200 ${h.hovered ? 'text-accent' : 'text-muted'}`}>
      {children}
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = ['Skills','Experience','Education','Projects','Testimonials','Contact'];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-[9999] h-[68px] flex items-center transition-all duration-300 ${scrolled ? 'backdrop-blur-[20px] bg-[#07091a]/90 border-b border-borderC' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-7 w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-violet flex items-center justify-center font-syne font-extrabold text-bg text-sm">
            AK
          </div>
          <span className="font-syne font-bold text-textLight text-[17px]">Aakash Kumar</span>
        </a>

        <nav className="hidden md:flex gap-8 items-center">
          {links.map(l => (
            <NavLink key={l} href={`#${l.toLowerCase()}`}>{l}</NavLink>
          ))}
          <a href="#contact" className="px-5 py-2.5 rounded-lg bg-gradient-to-br from-accent to-violet text-bg font-outfit font-bold text-[13px] no-underline tracking-[0.03em] hover:opacity-90 transition-opacity">
            Hire Me →
          </a>
        </nav>
      </div>
    </header>
  );
}
