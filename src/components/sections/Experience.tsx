import { useHover } from '../../hooks/useHover';
import { SectionLabel } from '../ui/SectionLabel';
import { Tag } from '../ui/Tag';
import { EXPERIENCES } from '../../data/portfolio';

function ExpCard({ exp, index }: { exp: typeof EXPERIENCES[0]; index: number }) {
  const h = useHover();
  const accent = index === 0 ? '#00d4ff' : '#7b61ff'; // accent or violet

  return (
    <div {...h} 
      className={`border rounded-xl p-8 md:p-9 transition-all duration-300 border-l-[3px] ${
        h.hovered ? 'bg-bg3' : 'bg-bg2'
      }`}
      style={{
        borderLeftColor: accent,
        borderColor: h.hovered ? `${accent}35` : 'theme("colors.borderW")'
      }}>
      
      <div className="flex justify-between items-start mb-5 flex-wrap gap-3">
        <div>
          <h3 className="font-syne font-bold text-textLight text-[22px] m-0 mb-1.5">{exp.role}</h3>
          <p className="font-outfit font-semibold text-[15px] m-0" style={{ color: accent }}>{exp.company}</p>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span 
            className="font-mono text-xs text-muted px-3 py-1 rounded-md border"
            style={{ backgroundColor: `${accent}14`, borderColor: `${accent}28` }}>
            {exp.period}
          </span>
          <span className="font-outfit text-[11px] text-dim uppercase tracking-[0.08em]">{exp.type}</span>
        </div>
      </div>

      <p className="font-outfit text-[15px] leading-[1.8] text-muted mb-6">{exp.description}</p>

      {/* Achievements */}
      <div className="mb-6">
        {exp.achievements.map((a, i) => (
          <div key={i} className="flex gap-2.5 items-start mb-2">
            <span className="text-[14px] shrink-0 mt-0.5" style={{ color: accent }}>▸</span>
            <span className="font-outfit text-[14px] text-muted leading-[1.6]">{a}</span>
          </div>
        ))}
      </div>

      {/* Tech */}
      <div className="flex gap-2 flex-wrap">
        {exp.tech.map(t => <Tag key={t} label={t} col={accent} />)}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-[100px] px-7 bg-bg">
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel>Professional Journey</SectionLabel>
        <h2 className="font-syne font-extrabold text-[clamp(32px,4vw,52px)] text-textLight m-0 mb-2">
          Work Experience
        </h2>
        <p className="font-outfit text-[17px] text-muted mb-14">
          2+ years building scalable, secure & intelligent systems in production.
        </p>

        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((exp, i) => <ExpCard key={exp.id} exp={exp} index={i} />)}
        </div>
      </div>
    </section>
  );
}
