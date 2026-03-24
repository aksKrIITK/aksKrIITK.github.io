import React, { useState } from 'react';
import { useHover } from '../../hooks/useHover';
import { SectionLabel } from '../ui/SectionLabel';

function ContactInfoCard({ icon, label, value, href }: { icon:string; label:string; value:string; href?:string }) {
  const h = useHover();
  const inner = (
    <div {...h} className={`flex gap-3.5 items-center p-3.5 px-4.5 rounded-xl border transition-all duration-200 ${
      h.hovered ? 'bg-bg4 border-borderC' : 'bg-bg3 border-borderW'
    } ${href ? 'cursor-pointer' : 'cursor-default'}`}>
      <span className="text-[20px]">{icon}</span>
      <div>
        <div className="font-outfit text-[11px] text-dim uppercase tracking-[0.07em]">{label}</div>
        <div className={`font-outfit text-sm transition-colors duration-200 ${
          h.hovered && href ? 'text-accent' : 'text-textLight'
        }`}>{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline block">{inner}</a> : <div className="block">{inner}</div>;
}

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const inputClasses = "w-full p-3.5 px-4.5 rounded-lg bg-bg3 border border-borderW text-textLight font-outfit text-[15px] outline-none transition-colors duration-200 focus:border-accent";

  return (
    <section id="contact" className="py-[100px] px-7 bg-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(theme('colors.violet')_1px,transparent_1px)] bg-[length:28px_28px] opacity-10 pointer-events-none" />
      
      <div className="max-w-[900px] mx-auto relative z-10">
        <div className="text-center mb-14 flex flex-col items-center">
          <SectionLabel>Let's Connect</SectionLabel>
          <h2 className="font-syne font-extrabold text-[clamp(32px,4vw,52px)] text-textLight m-0 mb-3">
            Work With Me
          </h2>
          <p className="font-outfit text-[17px] text-muted">
            Have a challenging problem? Let's solve it together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <ContactInfoCard icon="📍" label="Location" value="India (Remote-friendly)" />
            <ContactInfoCard icon="✉️" label="Email" value="akskr.iitk@gmail.com" href="mailto:akskr.iitk@gmail.com" />
            <ContactInfoCard icon="🔗" label="LinkedIn" value="aakashkumariitk" href="https://www.linkedin.com/in/aakashkumariitk/" />
            <ContactInfoCard icon="💻" label="GitHub" value="aksKrIITK" href="https://github.com/aksKrIITK" />

            <div className="mt-2 p-5 rounded-xl bg-gradient-to-br from-accent/10 to-violet/10 border border-borderC">
              <div className="font-syne font-bold text-textLight text-[15px] mb-2">Currently Open To</div>
              {['Full-time Backend Roles', 'Distributed Systems Projects', 'GenAI / LLM Platform Work', 'Consulting Opportunities'].map(r => (
                <div key={r} className="font-outfit text-[13px] text-muted mb-1.5 flex gap-2">
                  <span className="text-accent">▸</span>{r}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-bg3 rounded-2xl p-9 border border-borderW">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-outfit text-xs text-muted tracking-[0.06em] uppercase mb-2">Name</label>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="John Doe" className={inputClasses} />
              </div>
              <div>
                <label className="block font-outfit text-xs text-muted tracking-[0.06em] uppercase mb-2">Email</label>
                <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" className={inputClasses} />
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-outfit text-xs text-muted tracking-[0.06em] uppercase mb-2">Project Type</label>
              <select className={`${inputClasses} appearance-none`}>
                {['Select type…','Full-time Role','Consulting','Project Collaboration','Open Source'].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>

            <div className="mb-6">
              <label className="block font-outfit text-xs text-muted tracking-[0.06em] uppercase mb-2">Message</label>
              <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Tell me about the challenge you're trying to solve…" rows={5}
                className={`${inputClasses} resize-none`} />
            </div>

            <button className="w-full p-3.5 rounded-lg bg-gradient-to-br from-accent to-violet text-bg font-outfit font-bold text-base border-none cursor-pointer tracking-[0.03em] hover:opacity-90 transition-opacity">
              Send Message →
            </button>

            <p className="font-outfit text-[13px] text-dim text-center mt-3.5">
              Or email directly:{' '}
              <a href="mailto:akskr.iitk@gmail.com" className="text-accent no-underline hover:text-white transition-colors">akskr.iitk@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
