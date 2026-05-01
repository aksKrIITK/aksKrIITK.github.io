import { useState, useEffect } from 'react';
import { useHover } from '../../hooks/useHover';

function NavLink({ href, children, active }: { href: string; children: string; active?: boolean }) {
  const { hovered, ...hoverProps } = useHover();
  return (
    <a
      href={href}
      {...hoverProps}
      className={`font-poppins text-[14px] font-medium transition-colors duration-200 relative pb-1 ${active || hovered ? 'text-accent' : 'text-muted'}`}
    >
      {children}
      {active && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />}
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

  const links = ['Home', 'Services', 'Portfolio', 'About', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[9999] h-[80px] flex items-center transition-all duration-300 ${scrolled ? 'backdrop-blur-[20px] bg-bg/90 border-b border-borderC' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-7 w-full flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="grid grid-cols-3 gap-[2px] w-[22px] h-[22px]">
            {[...Array(9)].map((_, i) => <div key={i} className={`rounded-sm ${[0, 2, 4, 6, 8].includes(i) ? 'bg-accent' : 'bg-accent/50'}`} />)}
          </div>
          <span className="font-sora font-semibold text-textLight text-xl hidden sm:block">Aakash</span>
        </a>

        {/* Center: Links (Hidden on mobile) */}
        <nav className="hidden md:flex gap-8 items-center justify-center">
          {links.map(l => (
            <NavLink key={l} href={`#${l.toLowerCase()}`} active={l === 'Home'}>{l}</NavLink>
          ))}
        </nav>

        {/* Right: Button */}
        <div className="flex justify-end">
          <a href="#contact" className="px-6 py-3 rounded-full bg-accent text-black font-poppins font-bold text-[13px] no-underline tracking-[0.03em] hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(250,204,21,0.3)]">
            Book a 1:1 free Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
