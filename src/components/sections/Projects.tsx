import { useHover } from '../../hooks/useHover';
import { PROJECTS } from '../../data/portfolio';

function ProjectCard({ project, large }: { project: typeof PROJECTS[0]; large?: boolean }) {
  const { hovered, ...hoverProps } = useHover();
  
  // Use yellow/gold gradients for the theme
  const bgColors = ['from-yellow-400 to-yellow-600', 'from-yellow-500 to-orange-400', 'from-yellow-300 to-yellow-500', 'from-orange-300 to-yellow-500', 'from-yellow-600 to-orange-600'];
  const bgId = parseInt(project.id) || 1;
  const bg = bgColors[bgId % bgColors.length];

  return (
    <div {...hoverProps} className={`rounded-3xl overflow-hidden relative cursor-pointer group transition-all duration-300 ${
      hovered ? '-translate-y-2 shadow-[0_20px_40px_rgba(0,0,0,0.5)]' : 'translate-y-0'
    } ${large ? 'h-[400px]' : 'h-[300px]'}`}>
      
      {/* Mockup Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bg} opacity-80 group-hover:scale-105 transition-transform duration-500`} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-90" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="font-sora font-medium text-[22px] text-white m-0 mb-1">
          {project.title}
        </h3>
        <p className="font-poppins text-[13px] text-white/70 m-0">
          {project.tech.slice(0, 2).join(' · ')}
        </p>
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
        <div className="flex justify-between items-end mb-14">
          <div className="max-w-[500px]">
            <h2 className="font-sora font-semibold text-[44px] text-textLight m-0 mb-4 flex items-center gap-4">
              Our Projects
              <div className="grid grid-cols-3 gap-[3px] w-[24px] h-[24px] shrink-0">
                {[...Array(9)].map((_, i) => <div key={i} className={`rounded-[2px] ${[0,2,4,6,8].includes(i) ? 'bg-accent' : 'bg-accent/40'}`} />)}
              </div>
            </h2>
            <p className="font-poppins text-[15px] text-muted m-0">
              A curated collection of high-impact systems, from AI-driven automation platforms to high-performance distributed architectures.
            </p>
          </div>
          <button className="px-8 py-3 rounded-full border border-white/20 text-textLight font-poppins text-[14px] hover:border-white transition-colors bg-transparent cursor-pointer hidden md:block">
            Show All
          </button>
        </div>

        {/* Featured 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {featured.map(p => <ProjectCard key={p.id} project={p} large />)}
        </div>

        {/* Rest 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {regular.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
