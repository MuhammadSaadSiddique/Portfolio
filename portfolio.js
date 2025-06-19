import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Muhammad Saad Siddique',
  title: "Hi all, I'm Muhammad Saad Siddique",
  description:
    "I am a Software Developer with 5 years of experience providing high-impact web and mobile solutions for diverse industries and organizations. With a focus on Android and mobile development, I have a diverse skill set that includes SQL, MySQL, Python, Java, C++, C#, Kotlin, and Firebase. I specialize in designing, developing, and testing mobile and web-based applications and incorporating various technologies to optimize products. With a bachelor's Degree in Information Technology, I can implement software architecture, and design features.",
  resumeLink: '/resume.pdf',
};

export const openSource = {
  githubUserName: 'https://linkedin.com/in/muhammad-saad-siddique',
};

export const contact = {};

export const socialLinks = {
  // url: 'https://1hanzla100.github.io/',
  linkedin: 'https://linkedin.com/in/muhammad-saad-siddique',
  github: 'https://github.com/MuhammadSaadSiddique',
  // instagram: 'https://www.instagram.com/__hanzla100',
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ,
        '⚡ Building responsive static websites using Next.js',
        '⚡ Building RESTful APIs in Django & Django REST Framework',
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'Kotlin',
          fontAwesomeClassname: 'vscode-icons:file-type-kotlin',
        },
        {
          skillName: 'Java',
          fontAwesomeClassname: 'vscode-icons:file-type-java',
        },
        {
          skillName: 'Python',
          fontAwesomeClassname: 'logos:python',
        },
        {
          skillName: 'Android',
          fontAwesomeClassname: 'logos:android-icon',
        },
        {
          skillName: 'Github',
          fontAwesomeClassname: 'akar-icons:github-fill',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassname: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassname: 'logos:yarn',
        },
      ],
    },
  {
      title: 'Automation and Deployment',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
       
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases',
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions',
      ],
      softwareSkills: [
        // ? Check README To get icon details
       
        {
          skillName: 'Heroku',
          fontAwesomeClassname: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassname: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassname: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassname: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassname: 'logos:github-actions',
        },
       
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ,
        
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ,
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ,
        '⚡ Developing NFT Smart Contracts using ERC-721 Token Standard',
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ,
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassname: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassname: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassname: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassname: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          fontAwesomeClassname: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '90',
  },
];

export const educationInfo = [
  {
    schoolName: 'Pir Mehr Ali Shah University of Arid Agriculture Rawalpindi',
    subHeader: 'Bachelor of Information Technology',
    duration: 'September 2013. - August 2017',
    desc: 'Participated in the national program contest in 2016 and was awarded a certificate .',
    grade: 'Cgpa 3.53 out of 4',
    descBullets: [
      'Awarded Full scholarship from Governments due to grades. Achieve 2nd Position in Campus and 4th in University.',
      'Fnal year Project: Desiese Based Diet Plan System usng Java, Andoriad, Web Services, Sql Server and MySQL.',
      'Done projects on Swift, asp.net, Sql server, MySQL, Java, Android, Web Services, HTML, CSS, JavaScript, PHP, C++, C, C# and Python. ',
    ],
  },
];

export const experience = [
  {
    role: 'Senior Android Developer',
    company: 'Pakrism',
    companylogo: '/img/icons/common/pakrism.webp',
    date: 'Jan 2022 - May 2023',
    descBullets: [
      'Created a tourism application called Pakrism and implemented RxJava to optimize network calls, increase user engagement and reduce crash issues by 70%.',
      'Improved app performance by 80 % resulting in 2x increase in user engagement.',
      'Implemented unit and UI testing to ensure app stability.',
      'Implemented an MVVM structure to optimize code and data redundancy Redesigned an application for a better user experience and an intuitive UI.',
      'Designed, verified, and tested applications to meet user requirements.',
    ],
    desc: ''
  },
  {
    role: 'Full-Stack Developer | Data Analyst',
    company: 'Cytech Solutions',
    companylogo: '/img/icons/common/cytech.jpg',
    date: 'May 2018 - Dec 2021',
    descBullets: [
     'Streamlined data collection, preparation, analysis, and visualization to improve the accuracy and efficiency of reporting and insights.',
'Applied predictive analytics to analyze historical datasets and identify trends, uncover issues and develop solutions that result in an optimized cost and increased customer satisfaction by 45 %.',
'Reverse engineered android app by using JADX tool and identified vulnerabilities for the security team to analyze.',
'Increased the number of users on the app by 30 % in three months by applying data analysis to the current feature set and creating new features based on the results.',
'Created a Kotlin chat application using MVVM architecture, Realm, Socket.IO, and coroutines, which resulted in a 200 % increase in user retention and a reduction in user attrition by 80 %.',
'Full - stack developer with experience in multiple languages, including PHP, Python, C, Java, JavaScript, and Node.'
    ],
    desc: ''
  },
  {
    role: 'Moderator and Trainer (Volunteer)',
    date: 'May 2021 - Present',
    companylogo: '/img/icons/common/icodeguru.jpg',
    descBullets: [
      'Conducted training for 1000 live students, achieving a 93% knowledge retention rate, with a focus on key topics such as programming language, database design, android and web development. Moderated two weekly live Q&A sessions with a maximum of 200 students.',
      'Gave a small talk to a large group of students on the benefits of participating in hackathons, for example, learning new skills, team work, and gaining knowledge on current industry expertise. 10 % participants win prize in every hackathons',
      'Search for new hackathons and coding competitions so student can participate in those and gather there info which medium organizer using to communicate with participants, furthermore its advantages and disadvantages for students to participate in that.'
  ]
},
  {
    role: 'Blockchain/FullStack Developer',
    company: 'Freelance',
    companylogo: '/img/icons/common/OIP.jpg',
    date: 'Jan 2020 – Mar 2022',
    desc: 'I worked as Blockchain/FullStack Developer on a POSHMARK. POSHMARK is a MarketPlace for the productions. I built Fully Optimized and High Performance RESTful APIs using Ruby on Rails, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions. And I make front-end by using react. And I implemented the transaction by using Ethereum.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects = [
  {
    name: 'Fashionate',
    desc: 'A application to recieve old clothes and give them to needy people if useable else we send to industry to recycle. Give payment to giver as recived from industry.',
    github: 'https://github.com/MuhammadSaadSiddique/Fashionate'
  },
  {
    name: 'hCaptchaSolverApi',
    desc: 'HCAPTCHA Solver, reCaptcha v2, OCR Captcha.Chrome - Firefox Extension.Free 6000/month 🔥 on signup',
    github: 'https://github.com/noCaptchaAi/hCaptchaSolverApi',
    link: 'https://dash.nocaptchaai.com/'
  },
  {
    name: 'Disease Wise Diet Plan',
    desc: ' This android App is designed for Diet facilitation according to their disease because Healthy diet provides the body with fundamental nutrition.',
    github: 'https://github.com/MuhammadSaadSiddique/DiseaseWiseDietPlan',
  },
  {
    name: 'TmdbMovies App',
    desc: ' This app allows users to search movies and view their overview, cast, reviews and trailers. The movies can also be filtered to show users top rated, upcoming and popular movies. This app uses the API from themoviedb.org',
    github: 'https://github.com/MuhammadSaadSiddique/TmdbMovies',
  },
  
  {
    name: 'Leetcode Codding Problems',
    desc: 'Solvetion of Leetcode Codding Problems',
    github: 'https://github.com/MuhammadSaadSiddique/Codding-Problems',
    link:'https://leetcode.com/MuhammadSaadSiddique/'
  },
  {
    name: 'Find Mechanic App',
    desc: 'Find mechanic app is a mobile application that helps users to find the nearest mechanic in their area. The app is built using Android and Firebase.',
    github: 'https://github.com/MuhammadSaadSiddique/im3ch_android',
  },
  
];

export const feedbacks = [
  /*{
    name: 'Michael Honda',
    feedback:
      'Great work, thank you! You  was great to work with and did what I asked. Great communication. Timely replies. Attention to detail with great creativity He is the best guy. Always prompt and have never had an issue with their work.',
  },
  {
    name: 'Dannis Steppens',
    feedback:
      " Very detailed in terms of making sure client's projects are fulfilled and working correctly. Thank yo.",
  },*/
];

// See object prototype on SEO.jsx page
export const seoData = {
  title: 'Muhammad Saad Siddique',
  description:
    'A passionate Full Stack Developer and Blockchain Developer.',
  author: 'Muhammad Saad Siddique',
  image: 'https://avatars.githubusercontent.com/u/26270646?v=4',
  url: '/resume.pdf',
  keywords: [
    'Saad Siddique',
    'Muhammad Saad Siddique',
    '@MuhammadSaadSiddique',
    'Saad',
    'Portfolio',
    'Saad Portfolio ',
    'Muhammad Saad Siddique Portfolio',
  ],
};
