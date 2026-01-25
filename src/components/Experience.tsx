const experiences = [
  {
    id: '1',
    role: 'Senior Frontend Developer',
    company: 'Tech Corp Inc.',
    period: '2022 - Present',
    description: 'Leading frontend architecture and mentoring junior developers. Built scalable React applications serving 100k+ users.',
    achievements: ['Led 3 major product launches', '95% test coverage', 'Mentored 5+ developers']
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'StartUp Co.',
    period: '2020 - 2022',
    description: 'Built full-stack features with React and Node.js. Optimized database queries reducing load time by 60%.',
    achievements: ['50% performance improvement', 'Architecture redesign', 'Zero downtime deployment']
  },
  {
    id: '3',
    role: 'Junior Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: 'Started web development journey building responsive websites and learning industry best practices.',
    achievements: ['10+ client projects', 'Award-winning designs', 'Excellent feedback']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Professional Journey</h2>
          <p className="text-xl text-slate-600">5+ years of experience building digital products</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-blue-600" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className={`flex gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0 w-1/2">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                        <p className="text-accent font-semibold">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">{exp.period}</span>
                    </div>
                    <p className="text-slate-600 mt-3">{exp.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.achievements.map((achievement) => (
                        <span key={achievement} className="text-xs px-3 py-1 bg-white border border-slate-300 rounded-full text-slate-700">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
