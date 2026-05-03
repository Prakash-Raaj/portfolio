import type { SkillsBadgeProps } from './Components/SkillsBadge.tsx';
import type { WorkExpLineProps } from './Components/WorkExpLine.tsx';

import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaAws,
} from 'react-icons/fa';

import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiApachekafka,
  SiGooglecloud,
  SiGithubactions,
} from 'react-icons/si';

export const skillsData: SkillsBadgeProps[] = [
  // Frontend
  {
    icon: <FaJsSquare />,
    name: 'JavaScript',
  },
  {
    icon: <SiTypescript />,
    name: 'TypeScript',
  },
  {
    icon: <FaReact />,
    name: 'React',
  },
  {
    icon: <FaHtml5 />,
    name: 'HTML',
  },
  {
    icon: <FaCss3Alt />,
    name: 'CSS',
  },
  {
    icon: <SiTailwindcss />,
    name: 'Tailwind CSS',
  },

  // Backend
  {
    icon: <FaNodeJs />,
    name: 'Node.js',
  },
  {
    icon: <FaPython />,
    name: 'Python',
  },

  // Databases
  {
    icon: <SiMongodb />,
    name: 'MongoDB',
  },
  {
    icon: <SiMysql />,
    name: 'SQL',
  },

  // Cloud & DevOps
  {
    icon: <FaAws />,
    name: 'AWS',
  },
  {
    icon: <SiGooglecloud />,
    name: 'Google Cloud (GCP)',
  },

  // Messaging & Tools
  {
    icon: <SiApachekafka />,
    name: 'Kafka',
  },
  {
    icon: <FaGitAlt />,
    name: 'GitHub',
  },
  {
    icon: <SiGithubactions />,
    name: 'GitHub Actions',
  },
];

export const workExperienceData: WorkExpLineProps[] = [
  {
    title: 'Data Cleansing Analyst',
    companyName: 'Procure Analytics',
    fromDate: 'Feb, 2025',
    toDate: '',
    details: ['', '', ''],
    currentlyWorking: true,
    isLast: false
  },
  {
    title: 'Software Developer co-op',
    companyName: 'Ima Ltd',
    fromDate: 'Jan, 2024',
    toDate: 'Apr, 2024',
    details: ['', '', ''],
    currentlyWorking: false,
    isLast: false
  },
  {
    title: 'Full Stack Developer',
    companyName: 'Level5Fleet (Freelance)',
    fromDate: 'Jul, 2023',
    toDate: 'Nov, 2023',
    details: ['', '', ''],
    currentlyWorking: false,
    isLast: false
  },
  {
    title: 'Software Engineer',
    companyName: 'RedBlackTree Technologies',
    fromDate: 'Nov, 2022',
    toDate: 'Apr, 2023',
    details: ['', '', ''],
    currentlyWorking: false,
    isLast: false
  },
  {
    title: 'Assistant Systems Engineer',
    companyName: 'Tata Consultancy Services',
    fromDate: 'Nov, 2018',
    toDate: 'Mar, 2020',
    details: ['', '', ''],
    currentlyWorking: false,
    isLast: true
  },
];
