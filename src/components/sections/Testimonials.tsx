import { useHover } from '../../hooks/useHover';
import { SectionLabel } from '../ui/SectionLabel';
import { TESTIMONIALS } from '../../data/portfolio';

function TestCard({ t, index }: { t: typeof TESTIMONIALS[0]; index: number }) {
  const h = useHover();
  const cols = ['#00d4ff', '#7b61ff', '#f59e0b']; // accent, violet, amber
  const col = cols[index % cols.length];

  return (
    <div {...h} className={`border rounded-[18px] p-8 transition-all duration-300 relative ${
      h.hovered ? 'bg-bg4 -translate-y-1' : 'bg-bg3 border-borderW translate-y-0'
    }`} style={{ borderColor: h.hovered ? `${col}30` : undefined }}>
      <div className="font-syne font-extrabold text-[52px] absolute top-4 right-6 leading-none" style={{ color: `${col}20` }}>"</div>

      <div className="flex gap-3.5 items-center mb-5">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center font-syne font-extrabold text-sm border"
             style={{ backgroundColor: `${col}20`, borderColor: `${col}40`, color: col }}>
          {t.initials}
        </div>
        <div>
          <div className="font-syne font-bold text-[15px] text-textLight">{t.name}</div>
          <div className="font-outfit text-[13px] text-dim">{t.role}</div>
        </div>
      </div>

      <div className="flex gap-[3px] mb-4">
        {[...Array(5)].map((_, i) => <span key={i} className="text-sm" style={{ color: col }}>★</span>)}
      </div>

      <p className="font-outfit text-[15px] leading-[1.8] text-muted m-0 italic">
        "{t.text}"
      </p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-[100px] px-7 bg-bg2">
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel>Social Proof</SectionLabel>
        <h2 className="font-syne font-extrabold text-[clamp(32px,4vw,52px)] text-textLight m-0 mb-2">
          What People Say
        </h2>
        <p className="font-outfit text-[17px] text-muted mb-14">
          Feedback from clients and colleagues.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => <TestCard key={t.id} t={t} index={i} />)}
        </div>
      </div>
    </section>
  );
}
