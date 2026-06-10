import { Bug, Database, GitBranch, Activity } from 'lucide-react';

export const personalInfo = {
  name: "Yu Kalyar Khine",
  title: "Senior SQA Engineer",
  email: "yukalyarkhine@gmail.com",
  phone: "+971 56 127 3799",
  location: "Dubai, UAE",
  linkedin: "https://www.linkedin.com/in/yu-kalyar-khine",
  about: "Software Quality Assurance Engineer with over 9 years of experience in ERP and Automobile Management Systems, based in Dubai. Experienced in functional, integration, regression, and end-to-end testing across Workshop, Inventory, HR, and Accounting modules. Skilled in validating complex business workflows, SQL data verification, API testing with Postman, and defect management using Jira. Hands-on experience with Selenium and expanding expertise in Playwright, Appium, Git, and CI/CD practices. Proven track record in testing third-party integrations including WhatsApp APIs, Zoho Books, and ZATCA e-invoicing."
};

export const skills = [
  { 
    category: "Testing & Automation", 
    items: ["Selenium WebDriver", "Selenium IDE", "Playwright", "Appium", "Postman", "REST APIs"], 
    icon: Bug,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10"
  },
  { 
    category: "Databases & Tools", 
    items: ["SQL", "Zoho Books", "Advanced Excel", "Power BI", "ZATCA"], 
    icon: Database,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10"
  },
  { 
    category: "DevOps & Management", 
    items: ["Git", "GitHub", "Jenkins", "CI/CD", "Jira", "Confluence"], 
    icon: GitBranch,
    color: "text-slate-600 dark:text-slate-400",
    bg: "bg-slate-500/10"
  },
  { 
    category: "Platforms & Integrations", 
    items: ["Vonage", "Infobip", "Twilio", "WhatsApp", "ERP Systems"], 
    icon: Activity,
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-500/10"
  },
];

export const experience = [
  {
    role: "Senior Software Quality Assurance Engineer",
    company: "Cyber Automotive Solutions | Dubai, UAE",
    date: "June 2025 – Present",
    points: [
      "Perform functional, system, and optimization testing across ERP modules including Workshop, Inventory, HR, and Accounting.",
      "Validate business workflows such as Repair Orders, Estimates, Invoicing, VAT, prepaid services, and stock valuation (FIFO, LIFO, WAC).",
      "Test end-to-end purchase and sales cycles including returns, refunds, credit/debit notes, and account balance accuracy.",
      "Verify third-party integrations including WhatsApp messaging (Vonage, Infobip), Zoho Books and ZATCA e-invoicing compliance.",
      "Conduct SQL-based data validation to ensure financial and inventory consistency."
    ]
  },
  {
    role: "Senior Quality Assurance Field Test Engineer",
    company: "SAMSUNG (Samsung Electronics Myanmar) | Yangon",
    date: "Sep 2022 – Oct 2024",
    points: [
      "Led manual testing and executed automated testing for MX Division, ensuring quality and regulatory compliance.",
      "Developed comprehensive test plans and executed test cases, improving test efficiency by 30%.",
      "Decreased defect leakage by 20% by implementing early defect detection and automation.",
      "Identified and reported critical defects, collaborating with developers to enhance bug resolution rate."
    ]
  },
  {
    role: "Senior Quality Test Engineer",
    company: "OPPO Myanmar | Yangon",
    date: "May 2020 – Aug 2022",
    points: [
      "Designed and optimized test automation scripts, reducing regression testing time by 40%.",
      "Analyzed system performance and reliability, reported defects, and recommended solutions.",
      "Flashed up-to-date firmware to test models, improving system performance and user experience."
    ]
  },
  {
    role: "SQA Engineer and Customer Support",
    company: "Best Property Online Management | Yangon",
    date: "Aug 2017 – Mar 2020",
    points: [
      "Supported development, testing, and post-launch improvements across Best Property, HappyGoGo, and ShopGoGo platforms.",
      "Coordinated online client onboarding and property listing setup via internal CRM system.",
      "Handled user support tickets, addressed market, technical challenges, and ensured platform stability."
    ]
  },
  {
    role: "QA & Client Support",
    company: "Sea Dream Myanmar Co., Ltd | Yangon",
    date: "May 2015 – Feb 2017",
    points: [
      "Supported QA documentation, performed basic call log reviews, and flagged service quality issues for Gaming & CRM System."
    ]
  }
];

export const education = [
  { 
    degree: "Bachelor of Engineering (Information Technology)", 
    school: "Technological University Thanlyin", 
    date: "Nov 2016" 
  },
  { 
    degree: "Diploma in English Language Proficiency", 
    school: "SEAMEO CHAT", 
    date: "May 2017 – Sep 2019" 
  }
];

export const certifications = [
  "ISTQB Foundation Cert Prep – LinkedIn Learning (2023)",
  "Selenium Automation and Testing Frameworks – Packt (2025)",
  "API Testing with Postman – Packt (2025)",
  "Agile with Atlassian Jira – Atlassian (2025)",
  "Master SQL for Data Science – LinkedIn Learning (2024)",
  "Professional Advanced Excel – Myanmar Excel Expert Team (2025)",
  "Comprehensive Power BI – Myanmar Excel Expert Team (2025)",
  "Project Management Professional (PMP) – Navesse (2022)"
];
