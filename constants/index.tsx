// NAVIGATION
export const NAV_LINKS = [
  { href: "#feature", key: "faeture", label: "Feature" },
  { href: "#benefit", key: "benefit", label: "Benefit" },
  { href: "#testimonials", key: "testimonials", label: "Testimonials" },
  { href: "#faq", key: "FAQ", label: "FAQ" },
];

//FEATURE SECTION
import { faChartBar, faUsers, faCog, faBolt } from '@fortawesome/free-solid-svg-icons';

export const FEATURES = [
  {
    title: "Data Analytics",
    description: "Gain insights from your data with powerful analytics tools.",
    icon: faChartBar,
  },
  {
    title: "User Management",
    description: "Easily manage your users and their access levels.",
    icon: faUsers,
  },
  {
    title: "Custom Settings",
    description: "Tailor the system to meet your specific needs with custom settings.",
    icon: faCog,
  },
  {
    title: "Performance",
    description: "Experience top-notch performance and reliability.",
    icon: faBolt,
  },
];

//FAQ sections
export const FAQS = [
  {
    question: "What services do you offer?",
    answer: "We offer a range of business solutions including project management, CRM systems, marketing automation, and analytics tools. Our services are designed to streamline your operations and enhance productivity.",
  },
  {
    question: "How does the pricing work?",
    answer: "Our pricing is flexible and tailored to your business needs. We offer subscription-based plans with options for monthly or annual billing. Contact our sales team for a custom quote based on your specific requirements.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we provide 24/7 customer support through various channels including email, live chat, and phone. Our dedicated support team is here to help you with any issues or questions you may have.",
  },
  {
    question: "Can I try your service before committing?",
    answer: "Absolutely! We offer a free trial period for new users to explore our features and see how our services can benefit your business. No credit card is required to sign up for the trial.",
  },
  {
    question: "Is my data secure?",
    answer: "Data security is our top priority. We implement industry-standard security measures including encryption, regular backups, and secure data centers to ensure your information is protected at all times.",
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply sign up on our website, choose the plan that fits your needs, and start exploring our tools. If you need assistance, our onboarding team is here to guide you through the setup process.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can upgrade or downgrade your subscription at any time through your account settings. Changes will take effect immediately, and any price adjustments will be prorated based on your billing cycle.",
  },
  {
    question: "Do you offer integrations with other tools?",
    answer: "Yes, our platform integrates with a wide range of third-party applications including popular tools like Salesforce, Slack, Google Analytics, and more. Check our integrations page for the full list of supported tools.",
  },
];



//BENEFIT SECTION
import { faArrowUp, faDollarSign, faUserCheck, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export const BENEFITS = [
  {
    title: "Boost Productivity",
    description: "Enhance your team's productivity with our innovative tools and features.",
    icon: faArrowUp,
  },
  {
    title: "Cost Effective",
    description: "Save money with our affordable and efficient solutions.",
    icon: faDollarSign,
  },
  {
    title: "User Friendly",
    description: "Enjoy a seamless and intuitive user experience designed for everyone.",
    icon: faUserCheck,
  },
  {
    title: "Secure and Reliable",
    description: "Trust in our secure and reliable services to keep your data safe.",
    icon: faShieldAlt,
  },
];

//TESTIMONIAL SECTION
export const TESTIMONIALS  = [
  {
    name: "John Doe",
    role: "CEO of ExampleCorp",
    content:
      "This service has transformed our business. We have seen a significant increase in productivity and overall performance.",
    image: "/john-doe.webp",
  },
  {
    name: "Jane Smith",
    role: "CTO of TechWorld",
    content:
      "Incredible! The insights and tools provided are unparalleled. Highly recommend to any business looking to improve.",
    image: "/jane-smith.webp",
  },
  {
    name: "Michael Johnson",
    role: "Founder of StartUp Co.",
    content:
      "A game changer for our startup. The support and features offered are exactly what we needed.",
    image: "/michael-johnson.webp",
  },
  {
    name: "Emily Davis",
    role: "MD at MarketGuru",
    content:
      "Our marketing campaigns have never been more effective. The tools provided have given us a competitive edge.",
    image: "/emily-davis.webp",
  },
  {
    name: "David Brown",
    role: "OPM at LogisticsPro",
    content:
      "Streamlined our operations and improved our efficiency significantly. Couldn't be happier with the results.",
    image: "/david-brown.jpeg",
  },
];


// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Quick Links",
    links: [
      "About Juray",
      "Meet the team",
      "Help & FAQs",
      "Our Project",
      "Contact",
    ],
  },
  {
    title: "IT Services",
    links: [
      "Web Development",
      "Business Development",
      "Product Management",
      "UI/UX Design",
      "Cloud services",
    ],
  },
];

export const FOOTER_POLICY = {
  title: "Policy",
  links: [
    "Application",
    'Software Principles',
    'Software Policy',
    'Supply Chain'
  ],
};


export const FOOTER_SUPPORT = {
  title: "Support",
  links: [
    "Support Center",
    'Site Map',
    'Customer Support',

  ],
};

export const SOCIALS = {
  title: "Follow us",
  links: ["/facebook.svg", "/instagram.svg", "/twitter.svg", "/youtube.svg"],
};
