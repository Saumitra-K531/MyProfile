import { Experience, Project, Publication, Skill, Education } from "@shared/schema";

export const personalInfo = {
  name: "Saumitra Kulkarni",
  title: "Member of Technical Staff - II",
  company: "Nutanix Technologies",
  email: "srk6629@gmail.com",
  phone: "8888536531",
  linkedin: "https://www.linkedin.com/in/saumitra-kulkarni-13a91116a/",
  experience: "5+ Years",
  summary: "Experienced software engineer with 5+ years of expertise in cloud technologies, VM migration, and distributed systems. Passionate about building scalable solutions and driving technical innovation."
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Nutanix Technologies",
    position: "Member of Technical Staff - II",
    location: "Remote",
    startDate: "Aug 2023",
    endDate: "Present",
    description: "Part of the Nutanix \"Move\" product team, focusing on migrating VMs and files from various environments to Nutanix solutions.",
    achievements: [
      "Engineered a critical vSwitch conversion system as part of in-place ESXi-to-AHV cluster conversions, orchestrating seamless hypervisor migration on existing hardware with multiple distributed vSwitch reconfiguration, including coordinated rolling restarts, to enable zero-downtime network transitions and eliminate maintenance windows for production workloads.",
      "Delivered IPv6 support in Nutanix Move, enabling cross-platform VM migrations with static IPv6 addressing; solved a critical ask from 20+ government and enterprise customers and enhanced product readiness for IPv6 adoption.",
      "Designed and implemented a centralized service orchestration system for 17+ Dockerized components in Nutanix Move, enabling API-driven lifecycle management (START/STOP/RESTART) without appliance access—cut manual operational overhead by 70%.",
      "Developed the following key features for Hyper-V to AHV migration path, used by around 15% of our customers:\n  • Custom Port for Hyper-V Agent: Enabled the Hyper-V agent to run on a custom port, providing greater flexibility and control during migrations\n  • vTPM Device Support: Added support for migrating VMs with attached vTPM devices, ensuring secure and seamless transitions from Hyper-V to AHV environments",
      "Collaborated with the security team to address critical vulnerabilities in key packages and containers.",
      "Resolved significant customer-reported defects, including disk ordering issues, network restoration problems, and kernel panic incidents after VM migrations."
    ],
    technologies: ["Python", "Golang", "Docker", "Kubernetes", "VMware", "Hyper-V"],
    icon: "cloud"
  },
  {
    id: 2,
    company: "Druva Data Solutions",
    position: "Software Engineer",
    location: "Remote",
    startDate: "Nov 2021",
    endDate: "Aug 2023",
    description: "Worked on Project Hydra to streamline authentication services and support multi-region deployment.",
    achievements: [
      "Project Hydra: Streamlined and integrated the monolithic authentication service with global services to support multi-region deployment. Transferred CRUD workflows for customer and license management from the monolith authentication service to the global customer service.",
      "Worked on low-level design for MSP customer's single sign-on to accomplish critical security compliance requirements for administrator login.",
      "Achieved migration of around 15000 customers and license entities to global service within 5 mins using threading and batching mechanism with idempotency with python script.",
      "Optimized existing bulk listing APIs to achieve 10 times faster performance across the Druva Products ecosystem.",
      "Added a middleware layer in REST server framework to execute pre/post API request tasks.",
      "Developed a python SDK for global service based on SOA architecture as a microservice consumable.",
      "Evolved UT mocker with the ability to mock event-driven framework (AWS SQS and SNS mechanism) for Unit Testing, increased the code coverage by 50 percent."
    ],
    technologies: ["Python", "AWS", "SQS", "SNS", "REST API", "Microservices"],
    icon: "shield-alt"
  },
  {
    id: 3,
    company: "Seagate Technology",
    position: "Software Engineer - I",
    location: "Pune, India",
    startDate: "July 2021",
    endDate: "Nov 2021",
    description: "Focused on S3 services optimization and CORTX intelligent object storage system development.",
    achievements: [
      "Implemented a feature to shut down s3 services gracefully, to reduce read/write operation failures and increase HA",
      "PoCs and development support to migrate s3server components from RedHat PCS cluster to Kubernetes environment",
      "Completed PoC to deploy OpenLDAP database (stateful service) in PCS cluster and K8s environment",
      "Improvised various phases in MINI-PROVISIONING for s3server component of CORTX - Intelligent Object storage system in python and shell."
    ],
    technologies: ["Python", "Kubernetes", "S3", "CORTX", "OpenLDAP"],
    icon: "database"
  },
  {
    id: 4,
    company: "Seagate Technology",
    position: "Software Engineer Intern",
    location: "Pune, India",
    startDate: "July 2020",
    endDate: "June 2021",
    description: "Worked on high availability and load balancing solutions for cluster systems.",
    achievements: [
      "Worked on PoCs on high availability and load balancing for the cluster to reduce the downtime and increase availability - HaProxy, KeepAlived, CTDB.",
      "Added enhancement to benchmarking tools like s3bench to validate read/write/delete operations.",
      "Enhanced a metadata dumping tool for s3 buckets and objects in MOTR component."
    ],
    technologies: ["Python", "HaProxy", "KeepAlived", "CTDB", "Load Balancing"],
    icon: "graduation-cap"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "URL Shortener",
    description: "Flask-based REST API for shortening URLs with social media integration and clean sharing capabilities.",
    technologies: ["Flask", "REST API", "Docker", "Python"],
    features: ["90% Test Coverage", "Docker Deployment", "Social Media Integration"],
    icon: "link"
  },
  {
    id: 2,
    title: "NOC Optimization",
    description: "Web application that digitized the paper-based NOC (No Objection Certificate) system for college administration.",
    technologies: ["Django", "MySQL", "Vue.js", "Python"],
    features: ["Paperless Solution", "Admin Dashboard", "Student Portal"],
    icon: "graduation-cap"
  },
  {
    id: 3,
    title: "Gesture Media Player",
    description: "Hands-free media control system using Arduino and ultrasonic sensors for gesture-based desktop interaction.",
    technologies: ["Arduino", "C", "Python", "IoT"],
    features: ["Hardware Integration", "Gesture Recognition", "Media Control"],
    icon: "hand-paper"
  }
];

export const publications: Publication[] = [
  {
    id: 1,
    title: "A Survey on Different Storage Architectures",
    authors: ["Saumitra Kulkarni", "Rahul Jyoti"],
    journal: "Journal of the University of Shanghai for Science and Technology",
    description: "This paper provides a comprehensive survey of different storage architectures currently used by enterprises, analyzing their performance characteristics, scalability, and implementation considerations for modern data centers.",
    keywords: ["Storage Systems", "Enterprise Architecture", "Research", "Survey Paper"]
  }
];

export const skills: Skill[] = [
  // Languages
  { id: 1, category: "Languages", name: "Python", level: 5, icon: "python" },
  { id: 2, category: "Languages", name: "Golang", level: 4, icon: "go" },
  { id: 3, category: "Languages", name: "C/C++", level: 4, icon: "code" },
  { id: 4, category: "Languages", name: "JavaScript", level: 3, icon: "js" },
  { id: 5, category: "Languages", name: "Java", level: 3, icon: "java" },
  { id: 6, category: "Languages", name: "SQL", level: 4, icon: "database" },

  // Technologies
  { id: 7, category: "Technologies", name: "Linux", level: 5, icon: "linux" },
  { id: 8, category: "Technologies", name: "MySQL", level: 4, icon: "database" },
  { id: 9, category: "Technologies", name: "Docker", level: 4, icon: "docker" },
  { id: 10, category: "Technologies", name: "Kubernetes", level: 4, icon: "dharmachakra" },
  { id: 11, category: "Technologies", name: "AWS (SQS, SNS)", level: 4, icon: "aws" },
  { id: 12, category: "Technologies", name: "Redis", level: 3, icon: "memory" },
  { id: 13, category: "Technologies", name: "Flask", level: 4, icon: "flask" },
  { id: 14, category: "Technologies", name: "Networking", level: 4, icon: "network-wired" },

  // Tools
  { id: 15, category: "Tools", name: "Git", level: 5, icon: "git-alt" },
  { id: 16, category: "Tools", name: "JIRA", level: 4, icon: "jira" },
  { id: 17, category: "Tools", name: "Confluence", level: 4, icon: "confluence" },
  { id: 18, category: "Tools", name: "PyCharm", level: 4, icon: "edit" },
  { id: 19, category: "Tools", name: "GoLand", level: 4, icon: "code-branch" },
  { id: 20, category: "Tools", name: "Vim", level: 4, icon: "terminal" },
  { id: 21, category: "Tools", name: "Jupyter Notebook", level: 4, icon: "book" },
  { id: 22, category: "Tools", name: "MS Office", level: 4, icon: "file-alt" }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Engineering",
    institution: "Vishwakarma Institute of Information Technology",
    location: "Pune, Maharashtra",
    startYear: "2017",
    endYear: "2021",
    grade: "CGPA: 9.75",
    icon: "graduation-cap"
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate",
    field: "Science",
    institution: "RYK College of Science",
    location: "Nashik, Maharashtra",
    startYear: "2015",
    endYear: "2017",
    grade: "83.38%",
    icon: "school"
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    field: "General",
    institution: "RJEMHS",
    location: "Nashik, Maharashtra",
    startYear: "2013",
    endYear: "2015",
    grade: "92.20%",
    icon: "certificate"
  }
];

export const cocurricularActivities = [
  {
    id: 1,
    title: "CyberCell, VIIT",
    role: "Cybersecurity Team Member",
    description: "Active member focusing on cybersecurity awareness and education. Learned about various cyber-attacks, security tools, and participated in organizing cybersecurity events.",
    achievement: "Organized VishwaCTF Competition",
    icon: "shield-alt",
    color: "red"
  },
  {
    id: 2,
    title: "ML Forum, VIIT",
    role: "Active Member",
    description: "Member of the Machine Learning Forum, participating in activities focused on creating awareness about machine learning technologies and learning new algorithms.",
    achievement: "Community Engagement & Learning",
    icon: "brain",
    color: "indigo"
  }
];
