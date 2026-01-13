import { 
  Terminal, 
  Cloud, 
  Server, 
  Code2, 
  Database, 
  ShieldCheck, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin,
  Phone
} from 'lucide-react';
import { Experience, Project, SkillCategory, Certification, SocialLink } from './types';

// Resume Personal Info
export const PERSONAL_INFO = {
  name: "Arman Bisht",
  role: "DevOps Engineer | Cloud Enthusiast",
  location: "Dehradun, India",
  phone: "+91 9456110472",
  email: "armanbisht377@gmail.com",
  about: "Highly motivated and collaborative Bachelor of Technology graduate specialising in DevOps and Cloud Computing. Seeking a challenging role to apply a strong foundation in software development, automation, and cloud technologies to contribute to innovative projects and drive organizational success.",
  education: {
    degree: "Bachelor of Technology in Computer Science",
    major: "DevOps",
    minor: "Cloud Computation and Virtualization Technology",
    school: "UPES, Dehradun",
    year: "2021 – 2025",
    cgpa: "7.5/10.0"
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Arman-Bisht",
    icon: Github,
    label: "GitHub"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/arman-bisht-313510245",
    icon: Linkedin,
    label: "LinkedIn"
  },
  {
    platform: "Email",
    url: `mailto:${PERSONAL_INFO.email}`,
    icon: Mail,
    label: "Email"
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "PearlThought",
    role: "DevOps Intern",
    period: "Nov 2025 - Jan 2026",
    bullets: [
      "Architected and deployed end-to-end DevOps pipelines for Strapi CMS application using Docker, AWS ECS Fargate, and Terraform, serving production traffic for enterprise clients.",
      "Reduced deployment time by 60% through implementation of automated CI/CD pipelines using GitHub Actions with automated build, test, and deployment workflows.",
      "Implemented Blue/Green deployment strategy with AWS Code Deploy, achieving zero-downtime releases with automated rollback capabilities.",
      "Optimized cloud infrastructure costs by 30% through the implementation of Fargate Spot capacity providers and right-sizing of resources."
    ]
  },
  {
    company: "Elevate Labs",
    role: "DevOps Intern",
    period: "July 2025 – Oct 2025",
    bullets: [
      "Assisted in the management and automation of CI/CD pipelines using Jenkins to streamline application deployment.",
      "Worked with Docker to containerize applications and Kubernetes for orchestration and scaling.",
      "Contributed to infrastructure as code (IaC) initiatives using tools like Ansible and Terraform on AWS."
    ]
  },
  {
    company: "Xebia",
    role: "API Team Intern",
    period: "Internship",
    bullets: [
      "Contributed to the development and enhancement of a school portal application.",
      "Utilized Node.js and JavaScript to implement new features and improve existing functionality, contributing to a more robust application."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "MongoDB Replica Set Deployment",
    date: "01/2025 – 04/2025",
    description: "High-availability database deployment on Kubernetes.",
    technologies: ["Kubernetes", "StatefulSets", "PVC", "Autoscaling"],
    bullets: [
      "Deployed a high-availability MongoDB replica set in Kubernetes using StatefulSets, Services, and PersistentVolumeClaims to ensure data replication and fault tolerance.",
      "Implemented autoscaling based on CPU and memory metrics to optimize performance and resource utilization.",
      "Integrated monitoring and logging solutions to track cluster health and database performance."
    ]
  },
  {
    title: "Kubernetes Canary Deployment with Istio",
    date: "01/2025 – 04/2025",
    description: "Advanced traffic management system for zero-downtime releases.",
    technologies: ["Kubernetes", "Istio", "Prometheus", "Canary Deployment"],
    bullets: [
      "Developed canary deployment system with Kubernetes and Istio that automatically routes 80% traffic to stable version and 20% to new version.",
      "Enabled zero-downtime releases with instant rollback capability.",
      "Implemented automated deployment scripts, Prometheus monitoring, and health checks to safely test new features with limited user exposure."
    ]
  },
  {
    title: "Wisse Wallet (Budget Manager)",
    date: "05/2021 – 06/2022",
    description: "Full-stack financial tracking application.",
    technologies: ["Node.js", "JavaScript", "MongoDB", "Charts"],
    bullets: [
      "Developed a full-stack budget management application using Node.js, JavaScript, and MongoDB to assist users in tracking their finances.",
      "Developed predictive algorithms to forecast spending patterns, offering users actionable insights through interactive charts and graphs."
    ]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Oracle Cloud Infrastructure", "Linux", "Terraform", "Ansible"],
    icon: Cloud
  },
  {
    category: "Containerization & Orchestration",
    items: ["Docker", "Kubernetes", "Helm", "ECS Fargate"],
    icon: Server
  },
  {
    category: "CI/CD & DevOps Tools",
    items: ["Jenkins", "GitHub Actions", "Git", "Maven"],
    icon: Terminal
  },
  {
    category: "Monitoring & Observability",
    items: ["Prometheus", "Grafana"],
    icon: ShieldCheck
  },
  {
    category: "Programming",
    items: ["Python", "C", "JavaScript", "Node.js"],
    icon: Code2
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "AWS Academy Cloud Foundations", issuer: "AWS" },
  { name: "Google Cybersecurity Professional", issuer: "Google" },
  { name: "Oracle Cloud Infrastructure DevOps Professional", issuer: "Oracle" },
  { name: "Oracle Cloud Infrastructure Multicloud Architect Professional", issuer: "Oracle" }
];

export const CHART_DATA = [
  { subject: 'Cloud (AWS/OCI)', A: 90, fullMark: 100 },
  { subject: 'Containers (K8s/Docker)', A: 95, fullMark: 100 },
  { subject: 'IaC (Terraform/Ansible)', A: 85, fullMark: 100 },
  { subject: 'CI/CD (Jenkins/GHA)', A: 90, fullMark: 100 },
  { subject: 'Scripting (Python/JS)', A: 80, fullMark: 100 },
  { subject: 'Monitoring', A: 75, fullMark: 100 },
];