import { Project } from '../api/useProjects';

export const projectsData: Project[] = [
  {
    id: '1',
    number: '01',
    title: 'Dermascan',
    description: 'An AI platform that detects and predicts multiple types of skin cancer, recommends treatment options in any language, and connects patients directly to dermatologists.',
    image: '/dermascan.png',
    technologies: ['Python', 'TensorFlow', 'React'],
    link: 'https://dermascan-app.vercel.app/'
  },
  {
    id: '2',
    number: '02',
    title: 'Lumina',
    description: 'An adaptive AI learning platform that studies how each student learns and personalises their experience accordingly. Won AI for Social Impact at the 234 Project Foundation Hackathon.',
    image: '/lumina.png',
    technologies: ['Next.js', 'AI/ML', 'PostgreSQL'],
    link: 'https://edusbest.vercel.app/'
  },
  {
    id: '3',
    number: '03',
    title: 'MamaSafe',
    description: 'Protects pregnant mothers from dangerous drug interactions using Bio-LLMs, Dorra EMR APIs for medical history, and Pharmacovigilance APIs for real-time drug quality tracking. Won the AHEAD Hackathon at Drugstoc Pharmaceutical.',
    image: '/mamasafe.png',
    technologies: ['AI/ML', 'EMR API', 'Bio-LLMs'],
    link: 'https://mamasafe.vercel.app/'
  },
  {
    id: '4',
    number: '04',
    title: 'Veritas-AI',
    description: 'An AI insurance claim auditor that uses geomapping and EXIF data to detect fraud in minutes rather than weeks. Won the AWS West Africa Hackathon for scalable business applications.',
    image: '/veritas-ai.png',
    technologies: ['AI', 'Geomapping', 'FastAPI'],
    link: 'https://veritas-ai-dcfw.vercel.app/'
  },
  {
    id: '5',
    number: '05',
    title: 'Optic-Gov',
    description: 'An AI and blockchain platform that acts as an independent auditor for Nigerian infrastructure projects. Funds are only released when road quality is verified by computer vision, eliminating the corruption loop.',
    image: '/optic-gov.png',
    technologies: ['AI', 'Blockchain', 'Computer Vision'],
    link: 'https://optic-gov.vercel.app/'
  },
  {
    id: '6',
    number: '06',
    title: 'Trust-Grid',
    description: 'A privacy-first SDK engine that stores user data securely and gives organisations access only to the specific fields they need via API. Built to cut NDPR compliance costs for Nigerian businesses.',
    image: '/trust-grid.png',
    technologies: ['SDK', 'Privacy Tech', 'REST API'],
    link: 'https://trust-grid-eight.vercel.app/'
  },
  {
    id: '7',
    number: '07',
    title: 'PharmChain',
    description: 'A predictive AI platform securing pharmaceutical supply chains across Africa. Uses drug intelligence and real-time verification to prevent counterfeit medicines from reaching patients.',
    image: '/pharmchain.png',
    technologies: ['Python', 'AI/ML', 'FastAPI'],
    status: 'In Development'
  }
];
