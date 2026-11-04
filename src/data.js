export const profile = {
  name: 'Pratyush Chandra',
  handle: 'pratyush',
  email: 'pratyushchandra2904@gmail.com',
  location: 'Patna, India',
  github: 'https://github.com/PratyushC290',
  linkedin: 'https://www.linkedin.com/in/pratyush-chandra-',
  tagline: 'B.Tech CSE @ IIT Patna · building LLM agents, rigorous evaluations and full-stack systems.',
}

export const about = [
  "CS undergraduate at the Indian Institute of Technology, Patna (2024–2028). My current focus is LLM agents: building them, measuring them honestly, and understanding exactly why they fail.",
  "I also ship full-stack products, from AI-powered CLIs to microservice backends with Redis caching, and compete in algorithmic contests. Outside code, I coordinate Standup Den, IIT Patna's comedy club.",
]

export const education = [
  { degree: 'B.Tech, Computer Science & Engineering', school: 'Indian Institute of Technology, Patna', years: '2024 – 2028', score: 'CGPA 8.96' },
  { degree: 'Central Board of Secondary Education', school: 'Holy Mission Secondary School', years: '2023 – 2024', score: '93.4%' },
]

export const stats = [
  ['8.96', 'CGPA, IIT Patna'],
  ['AIR 3115', 'JEE Advanced 2024'],
  ['1441', 'Codeforces peak'],
  ['45.5%', 'ReAct EM on HotpotQA'],
]

export const projects = [
  {
    id: 'agent-failure-modes',
    title: 'Agent Failure-Mode Analysis',
    sub: 'ReAct on HotpotQA with open LLMs',
    status: 'ongoing',
    cats: ['ai'],
    bullets: [
      'Built an evaluation harness in Python (ReAct loop with Search/Lookup tools, plus direct and chain-of-thought baselines) running **Gemma 3 12B** on a remote GPU via an OpenAI-compatible API.',
      'Reproduced ReAct on **200 multi-hop questions**: **45.5%** exact match vs. 22.5% direct and 21.0% CoT, with non-overlapping 95% bootstrap CIs.',
      'Labeled **86 failed trajectories** into a **12-category** failure taxonomy; 17.5% of runs exhausted the step budget.',
      'Showed retrieval was not the bottleneck (43% vs. 45% failure), pointing to bridge-entity identification.',
      'Found 15 of 51 wrong answers were scoring artifacts; a relaxed metric lifted measured accuracy from 57.5% to 61.5%.',
    ],
    stack: ['Python', 'Ollama', 'Hugging Face Datasets', 'NumPy', 'pandas'],
  },
  {
    id: 'patient-intake',
    title: 'Multilingual LLM Agents for Patient Intake',
    sub: 'Human-in-the-loop, Hindi–English',
    cats: ['ai'],
    bullets: [
      'Multi-agent system with **3 specialised agents**, an orchestrator and human review, running local inference with Ollama (qwen3, Gemma 3).',
      'Benchmarked LLM vs. IndicTrans2 translation: **96–100% key-term recall** and **7× lower latency** with IndicTrans2 at equal recall.',
      'Raised agent decision accuracy from **80% to 100%** on targeted probes using JSON-schema and Pydantic structured outputs.',
      'Cut inference latency with model warm-up, keep-alive and context trimming.',
      'Wrote **139 pytest tests** with dependency-injected mock models; added a rule-based safety layer for 6 emergency categories across 3 scripts.',
    ],
    stack: ['Python', 'Pydantic', 'PyTorch', 'Hugging Face', 'Ollama'],
  },
  {
    id: 'cli-ai-agent',
    title: 'CLI Based AI Agent',
    sub: 'Full-stack AI CLI platform',
    cats: ['ai', 'fullstack'],
    bullets: [
      'Architected a platform with **3 interaction modes** and state across **5 database schemas** using Next.js and Prisma.',
      'Integrated Google Gemini via Vercel AI SDK with **3 custom tools** for live web retrieval and sandboxed code execution.',
      'Built a code-generation engine on Zod schemas, cutting scaffolding time by **99%** to under 30 seconds.',
      'Implemented OAuth 2.0 device-flow GitHub login via Better-Auth with 5-second CLI polling.',
      'Terminal UI with Commander.js and Clack, with **100% session persistence** across concurrent inputs.',
    ],
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel AI SDK', 'Zod', 'Node.js'],
  },
  {
    id: 'blogpost',
    title: 'BlogPost Web App',
    sub: 'MERN + AWS S3',
    cats: ['fullstack'],
    bullets: [
      'AWS S3 media pipeline for decentralized storage, cutting server overhead by **40%** with 100% asset availability.',
      'JWT/bcrypt authentication that cut session-related DB queries by **35%** and blocked CSRF attacks.',
      'React/Shadcn UI with modular components, boosting code reusability by **25%**.',
      'Async-middleware Node.js APIs that reduced MongoDB query latency by **50%**.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3', 'Shadcn UI', 'Tailwind CSS'],
  },
  {
    id: 'music-streaming',
    title: 'Microservices Music Streaming',
    sub: 'Node.js + Redis',
    cats: ['fullstack'],
    bullets: [
      'Microservices architecture handling high-concurrency workloads, cutting API response times by **85%**.',
      'Redis caching layer for metadata endpoints: **200 ms** album and **80 ms** song lookups.',
      'Query restructuring made song fetching **6.6× faster** and minimised round trips.',
      'Independent Admin, User and Songs services for fault tolerance and deployment flexibility.',
    ],
    stack: ['Node.js', 'Redis', 'MongoDB', 'PostgreSQL', 'React', 'Tailwind CSS'],
  },
]

export const skills = {
  languages: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
  'ai-ml': ['PyTorch', 'Hugging Face', 'Ollama', 'Pydantic', 'LangChain', 'NumPy', 'Pandas', 'VectorDB'],
  web: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase'],
  tools: ['Git', 'GitHub', 'Docker', 'Postman'],
}

export const achievements = [
  ['National Semi-Finalist', 'Flipkart Grid 7.0 (2025)'],
  ['Selected', 'Google Students Upskilling Program (Summer 2025)'],
  ['Specialist', 'Codeforces, peak 1441 (Algomancer)', 'https://codeforces.com/profile/Algomancer'],
  ['3 Star', 'CodeChef, peak 1617 (swift_pine_34)', 'https://www.codechef.com/users/swift_pine_34'],
  ['AIR 3115', 'JEE Advanced 2024, 200,000+ candidates'],
  ['99.84 percentile (AIR 2668)', 'JEE Main 2024, 1.4 million+ candidates'],
]

export const leadership = {
  org: 'Standup Den, IIT Patna',
  roles: 'Coordinator (2026–2027) · Sub-Coordinator (2025–2026)',
  bullets: [
    'Directed club operations after organising **10+ workshops** for 100+ participants.',
    'Competed at the Inter-IIT Cultural Meet 8.0 Comedy Cup, representing the institute.',
    'Led event execution and cross-campus outreach, driving an **80% increase** in student participation.',
  ],
}
