import linkedin from "../assets/collaboration/linkedin.png"
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  discord,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  searchMd,
  slack,
  twitter,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "1",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "2",
    title: "Experience",
    url: "#skills",
  },
  {
    id: "3",
    title: "Get in Touch",
    url: "#footer"
  },
  {
    id: "4",
    title: "Contact me",
    url: "mailto:arbaj.mt@gmail.com",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];







export const collabText =
  "At Nexicorn AI, I leveraged my full-stack development skills to contribute to their online platform. I have designed and implemented a user-friendly and visually engaging interface using React.js.  Working within an agile development environment, I actively collaborated with the Nexicorn team to ensure seamless project flow and efficiency. My focus throughout the project was on enhancing the overall website experience for visitors.";
export const collabContent = [
  {
    id: "0",
    title: "Full Stack Developer Intern At Nexicorn AI",
    text: collabText,
  },{
    id: "1",
    title: "Learning Data Structures and Algorithms",
  },
  {
    id: "2",
    title: "Learning Devops",
  }
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Productivize Chrome Extension",
    text: "This Chrome Extension is designed to help users boost productivity and focus by blocking access to popular social media websites.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    url:"https://github.com/ArbajAnsari19/Productivize-chrome-extension"
  },
  {
    id: "1",
    title: "CraveEase",
    text: "A seamless food ordering app with robust login/logout security and convenient order history. Quick reorder for favorite items ensures an efficient user experience.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    url:"https://github.com/ArbajAnsari19/CarveEase"
  },
  {
    id: "2",
    title: "Course Selling App ",
    text: "Built a course-selling app with React frontend, Node.js/Express backend, and MongoDB integration for streamlined admin and efficient data management, facilitating future enhancements.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    url:"https://github.com/ArbajAnsari19/Course_app"
  },
  {
    id: "3",
    title: "Ochi.design",
    text: "Created an animated website inspired by Ochi.design award Winning Website, utilizing React, Tailwind, and Framer Motion. Seamlessly integrated animations with Framer Motion library, exploring the fusion of design and technology for a visually captivating experience.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    url:"https://shiny-toffee-486f60.netlify.app"
  },
  {
    id: "4",
    title: "Magma",
    text: "Cloned an award-winning website, harmonizing creativity and technology seamlessly. Utilized GSAP for smooth animations and Locomotive Scroll for sophisticated scrolling effects, enhancing the website's visual appeal.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    url:"https://658ad8a2caaaa7a11cca8f73--steady-blini-a3dd7a.netlify.app/"
  },
  {
    id: "5",
    title: "KoinX",
    text: "Integrated TradingView's live interactive BTCUSD and ETH charts, leveraging Coingecko's /search/trending API for the top 3 trending coins. Developed a responsive UI adhering to Figma design guidelines, ensuring seamless user experience across devices.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    url:"https://github.com/ArbajAnsari19/Magma_Awaards_winning_website"
  },
];

export const socials = [
  {
    id: "0",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/arbaj-ansari-iitr/",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/Arbaj_dev",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/_arbaj._/",
  },
  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/arbaj.ali.3591",
  },
];
