import { Project } from '../api/useProjects';

export const projectsData: Project[] = [
  {
    id: '1',
    number: '01',
    title: 'Dermascan',
    description: 'An AI/ML powered platform that can detect and predict various kind of skin cancers, give suggestive methods in how to combat it naturally or with medicines that can help(in any language), and connect you to dermatologists.',
    image: '/dermascan.png',
    technologies: ['Python', 'TensorFlow', 'React'],
    link: 'https://dermascan-app.vercel.app/'
  },
  {
    id: '2',
    number: '02',
    title: 'Lumina',
    description: 'An AI-powered educational platform that takes self learning to the next level by deploying adaptive learning. It learns the students learning methods and interests to personalize their learning experience. Won "AI for Social Impact" at the 234project foundation.',
    image: '/lumina.png',
    technologies: ['Next.js', 'AI/ML', 'PostgreSQL'],
    link: 'https://edusbest.vercel.app/'
  },
  {
    id: '3',
    number: '03',
    title: 'Mamasafe',
    description: 'Protects pregnant mothers using AI, EMR API and Pharmacovigilance API. Uses Bio-LLMs to check drug risks, Dorra EMR APIs for medical history, and tracks drug quality. Won the AHEAD hackathon at Drugstoc Pharmaceutical.',
    image: '/mamasafe.png',
    technologies: ['AI/ML', 'EMR API', 'Bio-LLMs'],
    link: 'https://mamasafe.vercel.app/'
  },
  {
    id: '4',
    number: '04',
    title: 'Optic-gov',
    description: 'An AI and Blockchain powered platform acting as a paying auditor for infrastructural projects in Nigeria. Eliminates corruption by ensuring funds are only released when roads meet quality standards verified by AI.',
    image: '/optic-gov.png',
    technologies: ['AI', 'Blockchain', 'Computer Vision'],
    link: 'https://optic-gov.vercel.app/'
  },
  {
    id: '5',
    number: '05',
    title: 'Trust-grid',
    description: 'A trust-first SDK engine platform that protects user privacy and saves businesses NDPR compliance costs. Stores user data securely and only gives organizations access to required data via simple API.',
    image: '/trust-grid.png',
    technologies: ['SDK', 'Privacy', 'API'],
    link: 'https://trust-grid-eight.vercel.app/'
  },
  {
    id: '6',
    number: '06',
    title: 'Veritas-AI',
    description: 'AI powered insurance platform designed to audit claims in minutes using geomapping and exif data to detect fraud. Won the hackathon at AWS West Africa conference for scalable business applications.',
    image: '/veritas-ai.png',
    technologies: ['AI', 'Geomapping', 'FastAPI'],
    link: 'https://veritas-ai-dcfw.vercel.app/'
  }
];