import React from 'react';
import { useHover } from '../../hooks/useHover';

export function HeroBtn({ href, children, primary, ghost }: { href:string; children:React.ReactNode; primary?:boolean; ghost?:boolean }) {
  const h = useHover();
  
  let baseClasses = "px-7 py-3 rounded-xl font-outfit font-bold text-sm inline-block transition-all duration-200 no-underline ";
  
  if (primary) {
    baseClasses += "bg-gradient-to-br from-accent to-violet text-bg border-none";
  } else if (ghost) {
    baseClasses += "bg-transparent border border-dim text-muted";
  } else {
    baseClasses += "bg-transparent border border-borderW text-textLight";
  }

  const hoverStyle = h.hovered 
    ? { opacity: 0.85, transform: 'translateY(-2px)' } 
    : { opacity: 1, transform: 'translateY(0)' };

  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" 
       {...h}
       className={baseClasses}
       style={hoverStyle}>
      {children}
    </a>
  );
}
