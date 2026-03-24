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
    <section className="min-h-screen flex items-center relative overflow-hidden pt-[100px] px-7 pb-[80px]">
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,212,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.035)_1px,transparent_1px)] bg-[length:70px_70px]" />
      {/* Glows */}
      <div className="absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.07)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(123,97,255,0.07)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
          {/* Left */}
          <div>
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 bg-accent/5 border border-accent/20">
              <span className="w-[7px] h-[7px] rounded-full bg-accent shadow-[0_0_8px_theme('colors.accent')] inline-block" />
              <span className="text-accent text-[11px] font-mono tracking-[0.1em] uppercase">
                Open to Opportunities
              </span>
            </div>

            <h1 className="font-syne font-extrabold m-0 mb-3 text-[clamp(40px,5.5vw,72px)] leading-[1.08] text-textLight">
              Hi, I'm<br />
              <span className="bg-[linear-gradient(125deg,theme('colors.accent')_0%,theme('colors.violet')_100%)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
                Aakash Kumar
              </span>
            </h1>

            {/* Role rotator */}
            <div className="h-[34px] overflow-hidden mb-6">
              <p className={`font-syne font-semibold text-[21px] text-dim m-0 transition-all duration-300 ease-in-out ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                {roles[ri]}
              </p>
            </div>

            <p className="font-outfit text-[17px] leading-[1.85] text-muted max-w-[530px] mb-9">
              IIT Kanpur alumnus building scalable B2B & GenAI platforms. Specialised in 
              <strong className="text-textLight font-semibold"> Java Spring Boot microservices</strong>, 
              distributed systems, and cloud-native architectures.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-12 mb-10 pb-9 border-b border-borderW">
              {[['2+','Yrs Exp'], ['30+','Projects'], ['~30%','Latency Gain'], ['B2B','Platform Scale']].map(([n,l]) => (
                <div key={l}>
                  <div className="font-syne font-extrabold text-[28px] text-accent leading-none">{n}</div>
                  <div className="font-outfit text-xs text-dim mt-1.5 uppercase tracking-[0.07em]">{l}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-3.5 flex-wrap mb-9">
              <HeroBtn href="#projects" primary>View Projects →</HeroBtn>
              <HeroBtn href="mailto:akskr.iitk@gmail.com">Get in Touch</HeroBtn>
              <HeroBtn href="https://github.com/aksKrIITK" ghost>GitHub</HeroBtn>
            </div>

            {/* Socials */}
            <div className="flex gap-3.5 flex-wrap">
              {[
                { label:'GitHub',   url:'https://github.com/aksKrIITK' },
                { label:'LinkedIn', url:'https://www.linkedin.com/in/aakashkumariitk/' },
                { label:'Email',    url:'mailto:akskr.iitk@gmail.com' },
              ].map(s => (
                <SocialPill key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* Right – photo card */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-[340px] h-[400px] rounded-3xl bg-[linear-gradient(150deg,theme('colors.bg3'),theme('colors.bg4'))] border border-borderC overflow-hidden relative shadow-[0_40px_80px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                <img src="/aks2.jpeg" alt="Aakash Kumar" className="w-full h-full object-cover opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-5 pb-5 bg-[linear-gradient(0deg,rgba(7,9,26,0.95)_0%,transparent_100%)]">
                  <div className="font-syne font-bold text-textLight text-lg">Aakash Kumar</div>
                  <div className="font-mono text-accent text-xs mt-1">Backend & GenAI Engineer · IIT Kanpur</div>
                </div>
              </div>

              {/* Floating chips */}
              <FloatChip style={{ top:-14, right:-28 }} col="#00d4ff">Java · Spring Boot</FloatChip>
              <FloatChip style={{ bottom:80, left:-40 }} col="#7b61ff">Microservices</FloatChip>
              <FloatChip style={{ bottom:-14, right:10 }} col="#f59e0b">AWS · Docker</FloatChip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
