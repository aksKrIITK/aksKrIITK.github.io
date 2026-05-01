import { useState, useEffect } from 'react';
import { HeroBtn } from '../ui/HeroBtn';
import { SocialPill } from '../ui/SocialPill';
import { FloatChip } from '../ui/FloatChip';

export function Hero() {
  const roles = ['Backend Engineer', 'Distributed Systems Builder', 'Spring Boot Expert', 'GenAI Platform Developer'];
  const [ri, setRi] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRi(i => (i + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <section className="h-screen flex flex-col relative overflow-hidden bg-black">
      {/* Background Text (Deep back) */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 text-[clamp(120px,25vw,480px)] font-sora font-black text-white/[0.03] blur-[2px] pointer-events-none whitespace-nowrap z-0 select-none tracking-tighter uppercase">
        AAKASH
      </div>

      {/* Hero Image (Top 70%) */}
      <div className="absolute top-0 left-0 w-full h-[70%] flex items-center justify-center z-10 pointer-events-none pt-10">
        <div className="relative h-full flex items-center justify-center scale-110">
          <img
            src="/hero_3d.jpeg"
            alt="Aakash Character"
            className="h-full w-auto object-contain opacity-100 drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>



      {/* Content Area (Bottom 30%) */}
      <div className="mt-auto w-full min-h-[30%] z-20 relative flex flex-col items-center justify-center px-6 pb-4 bg-gradient-to-t from-black via-black/95 to-transparent gap-2">



        {/* Headline — two lines with shadow on image */}
        <div className="relative z-10 text-center w-full max-w-[700px]">

          {/* Role Badge — just above headline, right-aligned */}
          {/* <div className="flex justify-end mb-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/50 backdrop-blur-sm shadow-[0_0_12px_rgba(250,204,21,0.25)] hover:bg-yellow-400/25 transition-colors duration-300 cursor-default">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_6px_rgba(250,204,21,0.8)]" />
              <span className="text-yellow-300 font-poppins font-bold text-[11px] uppercase tracking-wider" style={{ textShadow: '0 0 8px rgba(250,204,21,0.6)' }}>Platform Developer & AI Architect</span>
            </div>
          </div> */}

          {/* Shadow glow that bleeds upward onto image */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[120%] h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent blur-xl pointer-events-none rounded-full" />

          <h1
            className="font-sora font-bold text-[clamp(22px,4vw,36px)] leading-[1.15] text-white tracking-tighter uppercase italic text-center m-1 relative"
            style={{
              textShadow:
                '0 -25px 50px rgba(0,0,0,1), 0 -12px 30px rgba(0,0,0,0.9), 0 -4px 15px rgba(0,0,0,0.8), 0 6px 20px rgba(0,0,0,0.9)'
            }}
          >
            Automate Your{' '}
            <span
              className="text-accent"
              style={{ textShadow: '0 -25px 50px rgba(0,0,0,0.95), 0 0 20px rgba(250,204,21,0.3)' }}
            >
              Workflows.
            </span>
            <br />
            <span className="relative inline-block">
              Scale Your Business Growth.
              <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-accent rounded-full shadow-[0_2px_10px_rgba(250,204,21,0.5)]" />
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="font-poppins text-[13px] md:text-[15px] leading-[1.5] text-white max-w-[680px] text-center m-0">
          I help businessess & startups <span className="text-accent font-semibold">modernize workflows, automate operations, and build scalable, intelligent systems</span> that drive growth and efficiency.
        </p>

        {/* CTAs */}
        <div className="flex gap-6 items-center justify-center flex-wrap">
          <a href="#contact" className="px-8 py-3 rounded-full bg-accent text-black font-poppins font-black text-[13px] no-underline hover:scale-[1.03] active:scale-95 transition-all shadow-[0_10px_25px_rgba(250,204,21,0.3)] uppercase tracking-widest text-center group relative overflow-hidden">
            <span className="relative z-10">Book Free Strategy Session</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
          </a>
          <a href="#projects" className="text-white font-poppins font-bold text-[13px] no-underline hover:text-accent transition-colors flex items-center gap-2 group uppercase tracking-widest">
            View Portfolio <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>

      </div>

      {/* Stats row — shifted below content area */}
      <div className="w-full z-20 relative flex flex-wrap items-center justify-center gap-8 md:gap-20 px-6 py-5 border-t border-white/10 bg-black">
        {[
          ['50+', 'Systems Delivered'],
          ['98%', 'Efficiency Gain'],
          ['5+', 'Years Engineering'],
          ['24/7', 'Strategic Support']
        ].map(([n, l]) => (
          <div key={l} className="flex flex-col items-center group cursor-default">
            <div className="font-sora font-bold text-[28px] md:text-[36px] text-white leading-none tracking-tighter mb-1 group-hover:text-accent transition-colors duration-300">{n}</div>
            <div className="font-poppins text-[9px] md:text-[11px] text-white/50 uppercase tracking-[0.2em] text-center font-bold">{l}</div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 z-30">
        <div className="w-[1px] h-8 bg-gradient-to-b from-accent to-transparent animate-bounce" />
        <span className="font-poppins text-[9px] uppercase tracking-[0.3em] text-accent">Scroll</span>
      </div>
    </section>
  );
}
