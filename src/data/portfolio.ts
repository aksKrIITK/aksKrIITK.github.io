export const SKILLS = [
  { cat: 'Backend', icon: '⚙', items: ['Java', 'Spring Boot', 'Python', 'Microservices', 'JPA / Hibernate'], col: '#FACC15' }, // accent
  { cat: 'Database', icon: '🗄', items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL Tuning', 'Schema Design'], col: '#EAB308' }, // secondary yellow
  { cat: 'Frontend', icon: '🎨', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'], col: '#CA8A04' }, // tertiary yellow
  { cat: 'Cloud & DevOps', icon: '☁', items: ['AWS', 'Docker', 'CI/CD', 'Git', 'K8s'], col: '#FACC15' }, // accent
  { cat: 'AI / Agentic AI', icon: '🤖', items: ['Python', 'FastAPI', 'VectorDB', 'RAG', 'Langgraph'], col: '#EAB308' }, // secondary yellow
];

export const PROFICIENCY = [
  { skill: 'Java & Spring Boot', pct: 97, col: '#FACC15' },
  { skill: 'React & TypeScript', pct: 94, col: '#EAB308' },
  { skill: 'Distributed Systems', pct: 93, col: '#CA8A04' },
  { skill: 'AWS & Cloud Architecture', pct: 95, col: '#FACC15' },
  { skill: 'Agentic AI / RAG Pipelines', pct: 96, col: '#EAB308' },
];

export const EXPERIENCES = [
  {
    id: '1', role: 'Full Stack Developer',
    company: 'WorldRef Technologies Pvt. Ltd.',
    period: 'Sept 2024 – Present', type: 'Full-time',
    description:
      'Owned end-to-end design of backend APIs for business-critical workflows — B2B action-based chat-application (AI integrated), smart notification system (nudges - platform alert , in-chat notification , email based), search, PDF generation, and order tracking — on Java Spring Boot microservices & FastAPI services. Led legacy service modernisation and full-stack delivery with React UIs.',
    achievements: [
      '~30% reduction in API response latency via refactoring & query optimisation',
      'Redesigned legacy service architecture for scalability & maintainability',
      'Zero-downtime deployments with backward-compatible API strategies',
      'Full-stack features aligning backend APIs with React-based UIs',
      'Built real-time AI features (chat, search, recommendations) into the core platform using LangGraph and VectorDBs'

    ],
    tech: ['Java', 'Spring Boot', 'Redis', 'Kafka', 'System Design & Architecture', 'Python', 'FastAPI', 'LangGraph/LangChain/LangFlow', 'RAG', 'React', 'PostgreSQL', 'Microservices', 'AWS'],
  },
  {
    id: '2', role: 'Backend Developer Intern',
    company: 'WorldRef Technologies Pvt. Ltd.',
    period: 'June 2024 – Aug 2024', type: 'Internship',
    description:
      'Maintained RESTful APIs using Java Spring Boot & RDBMS. Built a notification system with automatic mail and document generation that enhanced ease-of-business for B2B platform users and contributed directly to revenue growth.',
    achievements: [
      'Built end-to-end notification system (email + auto PDF generation)',
      'Optimised database queries improving system throughput',
      'Scaled B2B platform capabilities through new feature development',
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
  },
];

export const EDUCATION = [
  { id: '1', degree: 'B.Tech – Electrical Engineering', school: 'IIT Kanpur', period: '2013 – 2017', grade: 'CGPA 7/10', col: '#FACC15' },
  { id: '2', degree: 'MA – International Relations', school: 'Jawaharlal Nehru University, Delhi', period: '2020 – 2022', grade: 'CGPA 7.5/10', col: '#EAB308' },

];

export const PROJECTS = [
  { id: '1', title: 'B2B Order Management API', desc: 'Microservices-based order tracking with real-time notifications, PDF generation, and search using Spring Boot.', tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'], featured: true },
  { id: '2', title: 'GenAI Enterprise Assistant', desc: 'RAG-based AI assistant for enterprise workflows with VectorDB, Langgraph orchestration, and FastAPI backend.', tech: ['Python', 'FastAPI', 'VectorDB', 'Langgraph'], featured: true },
  { id: '3', title: 'E-Commerce Platform', desc: 'Full-featured platform with real-time inventory, Stripe payments, and admin dashboard for 1k+ users.', tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'], featured: false },
  { id: '4', title: 'SaaS Analytics Dashboard', desc: 'Real-time data visualisation for 10k+ users. Reduced query times 40% through smart caching strategies.', tech: ['React', 'TypeScript', 'Chart.js', 'AWS'], featured: false },
  { id: '5', title: 'Real-time Chat App', desc: 'WebSocket chat with message history and user presence. Scalable to 1k+ concurrent connections via Redis pub/sub.', tech: ['React', 'Socket.io', 'Node.js', 'Redis'], featured: false },
  { id: '6', title: 'Component Design System', desc: '50+ production-ready UI components with Storybook docs, used across 3 internal products.', tech: ['React', 'Tailwind', 'Storybook', 'TypeScript'], featured: false },
];

export const TESTIMONIALS = [
  {
    id: '1', name: 'Sarah Johnson', role: 'Product Manager, TechCorp', initials: 'SJ',
    text: 'Aakash delivered exceptional work on our React rewrite. His attention to code quality and mentorship elevated the entire team.'
  },
  {
    id: '2', name: 'Michael Chen', role: 'CEO, StartUp Co.', initials: 'MC',
    text: 'In 2 years, Aakash became our most trusted developer. The features he built directly contributed to our 10x growth.'
  },
  {
    id: '3', name: 'Emily Rodriguez', role: 'CTO, Digital Agency', initials: 'ER',
    text: 'A rare combination of technical excellence and great communication. Aakash makes complex problems simple and maintainable.'
  },
];
