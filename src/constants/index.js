const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "archive",
    name: "Achievements", // changed from "Archive"
    icon: "trash.png",
    canOpen: true,
  },
  {
    id: "workexperience",
    name: "Experience",
    icon: "maps.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Nov 29, 2025",
    title:
      "🧑‍💻 What Still Slows React Developers Down While Building Modern UIs?",
    image: "/images/blog1.png",
    link: "https://why-react-ui-still-feels-slow.hashnode.dev/what-still-slows-react-developers-down-while-building-modern-uis",
  },
  {
    id: 2,
    date: "Nov 29, 2025",
    title:
      "🚀 Why Micro-Frontends Are Becoming the Future of Scalable Web Apps (2025)",
    image: "/images/blog2.png",
    link: "https://frontend-microservices.hashnode.dev/why-micro-frontends-are-becoming-the-future-of-scalable-web-apps-2025",
  },
  {
    id: 3,
    date: "Nov 29, 2025",
    title:
      "🖥 Why React Server Components Are Changing Frontend Development in 2025",
    image: "/images/blog3.png",
    link: "https://react-server.hashnode.dev/why-react-server-components-are-changing-frontend-development-in-2025",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Python", "Django", "Java", "Spring Boot"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "AWS", "Jenkins", "SonarQube"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/yashuyouwaraj",
  },
  {
    id: 2,
    text: "GeeksForGeeks",
    icon: "/icons/GeeksForGeeks.svg",
    bg: "#4bcb63",
    link: "https://www.geeksforgeeks.org/profile/amanyasu?from=explore&tab=activity",
  },
  {
    id: 3,
    text: "LeetCode",
    icon: "/icons/leetcode.svg",
    bg: "#ff866b",
    link: "https://leetcode.com/u/yashuyouwaraj/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/yashu-youwaraj/",
  },
  {
    id: 5,
    text: "Mail",
    icon: "/icons/mail.svg",
    bg: "#ea4335",
    link: "mailto:yashuyouwaraj123@gmail.com",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/Pic9.jpg",
  },
  {
    id: 2,
    img: "/images/Pic5.jpg",
  },
  {
    id: 3,
    img: "/images/Pic1.jpg",
  },
  {
    id: 4,
    img: "/images/Pic7.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "AI-Powered Application Tracking System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-1", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "ATS Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The AI-Powered Application Tracking System is a smart, streamlined platform built to automate and elevate the hiring journey for both candidates and recruiters.",
            "Instead of a basic job portal, it delivers an intelligent experience with AI-driven résumé parsing, instant matching, and real-time application insights.",
            "Think of it as having a personal hiring assistant that works 24/7—analyzing applications, tracking statuses, and keeping everything organized effortlessly.",
            "It’s built with React, Zustand, and PuterJS, ensuring fast performance, seamless state management, cloud-like file handling, and a smooth, modern interface.",
          ],
        },
        {
          id: 2,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ai-powered-application-tracking-system.onrender.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Ats.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/Ats.png",
        },
        {
          id: 5,
          name: "Github Repository",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/yashuyouwaraj/AI-Powered-Application-Tracking-System",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Amazon Clone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-90",
      windowPosition: "top-[21vh] left-7",
      children: [
        {
          id: 1,
          name: "Amazon Clone.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The Amazon-Clone is a sleek, front-end eCommerce experience built to recreate the feel of browsing a real online marketplace using nothing but HTML, CSS, and vanilla JavaScript.",
            "Instead of a simple static layout, it delivers an interactive shopping flow with dynamic product listings, a smart cart system, and a smooth checkout journey—right in the browser.",
            "Think of it like a mini Amazon store you can explore: add items, review orders, and even track deliveries, all powered through clean, client-side logic.",
            "It’s crafted with lightweight code, fast performance, and pixel-perfect styling, proving how powerful a fully responsive eCommerce UI can be without any frameworks.",
          ],
        },
        {
          id: 2,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://yashuyouwaraj.github.io/Amazon-Clone/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Amazon-clone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/Amazon.png",
        },
        {
          id: 5,
          name: "Github Repository",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/yashuyouwaraj/Amazon-Clone",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "K72",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-60 left-80",
      windowPosition: "top-[33vh] left-11",
      children: [
        {
          id: 1,
          name: "K72.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The K72 starter template is a high-performance front-end foundation built with React, Vite, and GSAP, crafted to help developers build modern, animation-rich web applications with zero friction.",
            "Think of it as your personal “web-app accelerator”: a powerful base where routing, styling, code quality, and animation capabilities are already wired in — letting you focus on building experiences, not configs.",
            "It’s built for speed, scalability, and visual polish, with GSAP enabling smooth, world-class animations, Vite delivering instant builds, and React providing flexibility for any UI pattern you want to create.",
          ],
        },
        {
          id: 2,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://k72-phi-seven.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "K72.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/k72.png",
        },
        {
          id: 5,
          name: "Github Repository",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/yashuyouwaraj/K72",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 4
    {
      id: 8,
      name: "Responsive HomePage",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 right-20",
      windowPosition: "top-[44vh] left-0",
      children: [
        {
          id: 1,
          name: "Responsive-Home-Page.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-50 left-5",
          description: [
            "The Responsive Home Page is a clean and modern landing interface designed to look stunning across all devices.",
            "Instead of a simple static layout, it delivers smooth responsiveness, polished spacing, and a layout that adapts beautifully on any screen.",
            "Think of it as a showcase of front-end fundamentals done right—simple, elegant, and crafted with precision.",
            "It's built using HTML5, CSS3, and JavaScript, giving it fast performance, easy customization, and a premium visual experience.",
          ],
        },
        {
          id: 2,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://responsive-home-page-seven.vercel.app/",
          position: "top-10 right-80",
        },
        {
          id: 3,
          name: "Responsive-Home-Page.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-10 right-25",
          imageUrl: "/images/Responsive.png",
        },
        {
          id: 5,
          name: "Github Repository",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/yashuyouwaraj/Responsive-Home-Page",
          position: "top-60 right-10",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Pic4.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/Pic3.jpg",
    },
    {
      id: 3,
      name: "casual-me2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/Pic6.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/Pic9.jpg",
      description: [
        "Hey! I’m Yashu 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, Next.js, Node.js, MongoDB, PostgresSQL—and I love making things feel smooth, fast, and just a little bit delightful.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMinimized: false,
    isMaximized: false,
    maximizeData: null,
    positionX: 0,
    positionY: 0,
    width: 0,
    height: 0,
  },
  contact: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMinimized: false,
    isMaximized: false,
    maximizeData: null,
    positionX: 0,
    positionY: 0,
    width: 0,
    height: 0,
  },
  resume: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMinimized: false,
    isMaximized: false,
    maximizeData: null,
    positionX: 0,
    positionY: 0,
    width: 0,
    height: 0,
  },
  safari: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMinimized: false,
    isMaximized: false,
    maximizeData: null,
    positionX: 0,
    positionY: 0,
    width: 0,
    height: 0,
  },
  photos: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMinimized: false,
    isMaximized: false,
    maximizeData: null,
    positionX: 0,
    positionY: 0,
    width: 0,
    height: 0,
  },
  terminal: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMinimized: false,
    isMaximized: false,
    maximizeData: null,
    positionX: 0,
    positionY: 0,
    width: 0,
    height: 0,
  },
  txtfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMinimized: false,
    isMaximized: false,
    maximizeData: null,
    positionX: 0,
    positionY: 0,
    width: 0,
    height: 0,
  },
  imgfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMinimized: false,
    isMaximized: false,
    maximizeData: null,
    positionX: 0,
    positionY: 0,
    width: 0,
    height: 0,
  },
  archive: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMinimized: false,
    isMaximized: false,
    maximizeData: null,
    positionX: 0,
    positionY: 0,
    width: 0,
    height: 0,
  },
  achievementpdf: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMinimized: false,
    isMaximized: false,
    maximizeData: null,
    positionX: 0,
    positionY: 0,
    width: 0,
    height: 0,
  },
  workexperience: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    isMinimized: false,
    isMaximized: false,
    maximizeData: null,
    positionX: 0,
    positionY: 0,
    width: 0,
    height: 0,
  },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

const achievementsByCategory = {
  certifications: [
    {
      id: 1,
      name: "Machine Learning",
      file: "Machine_Learning.pdf",
      dateEarned: "Nov 24, 2022",
      icon: "📜",
    },
    {
      id: 2,
      name: "Databases and SQL for Data Science with Python",
      file: "DatabaseandSQLforDataSciencewithPython.pdf",
      dateEarned: "Nov 28, 2022",
      icon: "📜",
    },
    {
      id: 3,
      name: "Python Programming:A Concise Introduction",
      file: "Python.pdf",
      dateEarned: "Mar 19, 2022",
      icon: "📜",
    },
    {
      id: 4,
      name: "SQL(Basic)",
      file: "SQL.pdf",
      dateEarned: "Nov 24, 2022",
      icon: "📜",
    },
    {
      id: 5,
      name: "AWS Academy Machine Learning Foundations",
      file: "AWS.pdf",
      dateEarned: "Nov 17, 2022",
      icon: "📜",
    },
  ],
  publications: [
    {
      id: 4,
      name: "Smart Mining System with Crystal Classification of Ores and Industrial Management",
      file: "Publication.pdf",
      dateEarned: "Apr 4, 2024",
      icon: "📄",
    },
  ],
  internships: [
    {
      id: 5,
      name: "Verzeo Digital Marketing Internship",
      file: "DigitalMarketinginternship.pdf",
      dateEarned: "Aug 01, 2022 - Sep 09, 2022",
      icon: "🎓",
    },
    {
      id: 6,
      name: "Verzeo Machine Learning with Python Internship",
      file: "ML_internship.pdf",
      dateEarned: "Aug 01, 2022 - Sep 09, 2022",
      icon: "🎓",
    },
    {
      id: 7,
      name: "Personifwy Data Science with Python Internship",
      file: "Yashu_Aug_2023_internship_44824.pdf",
      dateEarned: "Aug 01, 2023 - Sep 30, 2023",
      icon: "🎓",
    },
  ],
};

export { achievementsByCategory };

const workExperiences = [
  {
    id: 1,
    company: "Tata Consultancy Services",
    designation: "Systems Engineer",
    duration: "April 2025 - Present",
    role: "Java Developer contributing to the design and development of a modern, secure, and scalable banking system",
    tech: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Git",
      "GitHub",
      "AWS",
      "SonarQube",
      "Jenkins",
      "Bitbucket",
      "COBOL",
    ],
  },
  // {
  //   id: 2,
  //   company: "Digital Innovations Ltd.",
  //   designation: "Full Stack Developer",
  //   duration: "Jan 2022 - May 2023",
  //   role: "Developed end-to-end web applications, implemented real-time features, and managed database optimization",
  //   tech: ["React", "Express.js", "MongoDB", "Next.js", "TailwindCSS", "AWS"],
  // },
  // {
  //   id: 3,
  //   company: "StartUp Hub",
  //   designation: "Junior Web Developer",
  //   duration: "Aug 2021 - Dec 2021",
  //   role: "Built responsive UI components, fixed bugs, and collaborated with design team on UX improvements",
  //   tech: ["React", "JavaScript", "CSS", "Git", "REST APIs", "Figma"],
  // },
];

export { workExperiences };
