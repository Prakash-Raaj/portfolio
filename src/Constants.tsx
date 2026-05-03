
import type {SkillsBadgeProps} from "./Components/SkillsBadge.tsx"


import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiApachekafka,
  SiGooglecloud,
  SiGithubactions,
} from "react-icons/si";


export const skillsData: SkillsBadgeProps[] = [
  // Frontend
  {
    icon: <FaJsSquare />,
    name: "JavaScript",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
  },
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <FaHtml5 />,
    name: "HTML",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
  },

  // Backend
  {
    icon: <FaNodeJs />,
    name: "Node.js",
  },
  {
    icon: <FaPython />,
    name: "Python",
  },

  // Databases
  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },
  {
    icon: <SiMysql />,
    name: "SQL",
  },

  // Cloud & DevOps
  {
    icon: <FaAws />,
    name: "AWS",
  },
  {
    icon: <SiGooglecloud />,
    name: "Google Cloud (GCP)",
  },

  // Messaging & Tools
  {
    icon: <SiApachekafka />,
    name: "Kafka",
  },
  {
    icon: <FaGitAlt />,
    name: "GitHub",
  },
  {
    icon: <SiGithubactions />,
    name: "GitHub Actions",
  },
];