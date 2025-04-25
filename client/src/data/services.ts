import { 
  ServerCog, 
  Cloud, 
  Phone, 
  ShieldCheck, 
  Database, 
  Code, 
  Lightbulb,
  ArrowLeftRight
} from "lucide-react";

export const services = [
  {
    title: "Managed IT Services",
    description: "Comprehensive IT management and support for your business operations.",
    icon: ServerCog,
    features: [
      "24/7 monitoring and support",
      "Proactive system maintenance",
      "Help desk and technical assistance"
    ],
    link: "/services/it-services"
  },
  {
    title: "Cloud Computing & Hosting",
    description: "Scalable cloud infrastructure and hosting solutions for your applications.",
    icon: Cloud,
    features: [
      "Public, private, and hybrid cloud",
      "IaaS, PaaS, and SaaS solutions",
      "Cloud migration and optimization"
    ],
    link: "/services/cloud-technologies"
  },
  {
    title: "VoIP / IP Telephony",
    description: "Advanced communication systems to enhance business connectivity.",
    icon: Phone,
    features: [
      "Business phone systems",
      "Video conferencing solutions",
      "Unified communications"
    ],
    link: "/services/voip"
  },
  {
    title: "IT Security",
    description: "Robust cybersecurity solutions to protect your business assets.",
    icon: ShieldCheck,
    features: [
      "Network security solutions",
      "Endpoint protection",
      "Security audits and compliance"
    ],
    link: "/services/it-security"
  },
  {
    title: "Data Backup & Recovery",
    description: "Reliable data protection and disaster recovery solutions.",
    icon: Database,
    features: [
      "Automated backup systems",
      "Business continuity planning",
      "Disaster recovery solutions"
    ],
    link: "/services/it-services"
  },
  {
    title: "Custom Software Development",
    description: "Tailored software solutions to meet your specific business needs.",
    icon: Code,
    features: [
      "Web and mobile applications",
      "Windows desktop software",
      "SaaS platform development"
    ],
    link: "/services/software-development"
  },
  {
    title: "AI-powered Business Automation",
    description: "Intelligent automation solutions to streamline your operations.",
    icon: Lightbulb,
    features: [
      "Workflow automation",
      "Machine learning integration",
      "Predictive analytics solutions"
    ],
    link: "/services/ai-solutions"
  },
  {
    title: "Firewall & VPN Solutions",
    description: "Secure network access and protection for your business.",
    icon: ArrowLeftRight,
    features: [
      "Next-gen firewall implementation",
      "Secure remote access solutions",
      "Network traffic monitoring"
    ],
    link: "/services/it-networking"
  }
];
