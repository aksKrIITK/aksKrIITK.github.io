import { useHover } from '../../hooks/useHover';
import { SectionLabel } from '../ui/SectionLabel';
import { Tag } from '../ui/Tag';
import { PROJECTS } from '../../data/portfolio';

function ProjectCard({ project, large }: { project: typeof PROJECTS[0]; large?: boolean }) {
  const h = useHover();
  
  const iconMap: Record<string, string> = {
    '1': '⚙', '2': '🤖', '3': '🛍', '4': '📊', '5': '💬'
  };
  const icon = iconMap[project.id] || '🧩';

  return (
    <div {...h} className={`border rounded-xl transition-all duration-300 flex flex-col cursor-pointer ${
      h.hovered ? 'bg-bg3 border-[rgba(0,212,255,0.35)] -translate-y-1' : 'bg-bg2 border-borderW translate-y-0'
    } ${large ? 'p-8 gap-4.5' : 'p-6 gap-3'}`}>
      
      <div className="flex justify-between items-start">
        <div className={`border rounded-xl flex items-center justify-center bg-accent/10 border-accent/30 ${
          large ? 'w-12 h-12 text-[22px]' : 'w-10 h-10 text-[18px]'
        }`}>
          {icon}
        </div>
        <span className="font-mono text-[11px] text-dim opacity-60">→</span>
      </div>

      <div>
        <h3 className={`font-syne font-bold m-0 mb-2 transition-colors duration-200 ${
          h.hovered ? 'text-accent' : 'text-textLight'
        } ${large ? 'text-[20px]' : 'text-base'}`}>
          {project.title}
        </h3>
        <p className={`font-outfit leading-[1.7] text-muted m-0 ${
          large ? 'text-[15px]' : 'text-[13px]'
        }`}>
          {project.desc}
        </p>
      </div>

      <div className="flex gap-1.5 flex-wrap mt-auto">
        {project.tech.map(t => <Tag key={t} label={t} />)}
      </div>
    </div>
  );
}

export function Projects() {
  const featured = PROJECTS.filter(p => p.featured);
  const regular = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" className="py-[100px] px-7 bg-bg">
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel>Work Portfolio</SectionLabel>
        <h2 className="font-syne font-extrabold text-[clamp(32px,4vw,52px)] text-textLight m-0 mb-2">
          Featured Projects
        </h2>
        <p className="font-outfit text-[17px] text-muted mb-14">
          A selection of production work and personal projects.
        </p>

        {/* Featured 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {featured.map(p => <ProjectCard key={p.id} project={p} large />)}
        </div>

        {/* Rest 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {regular.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
