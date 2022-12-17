/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Suraj Jadhav",
  title: "Hi, I'm Suraj",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with TypeScript / Nodejs / Reactjs / MySQL and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/14yPfqhsaKZCd-03sJP7BABadZO3w4stM/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/surajjadhav7",
  linkedin: "https://www.linkedin.com/in/jadhavsuraj7/",
  gmail: "jadhavsuraj777@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build Scalable and Reliable Backend for your web and mobile Applications"
    ),
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Integration of third party services such as AWS / GCP")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "80%"
    },
    {
      Stack: "Systems Design",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Turing.com",
      companylogo: require("./assets/images/turingLogo.png"),
      date: "May 2022 – Present",
      desc: "Working in Supply team reponsible for UI (React) and Backfilling for Resume Parsing. Worked on improving Search latency of Search Service used to search developers by turing customers. Microservice is built with NestJS, Elasticsearch, Logstash, MySQL.",
      descBullets: []
    },
    {
      role: "Jr. Software Engineer",
      company: "Sephora",
      companylogo: require("./assets/images/sephoraLogo.png"),
      date: "Sept 2021 – April 2022",
      desc: "Worked on Product Details Page, Product waitlist and Reviews Section of Sephora's 18 South Asian websites. Implemented Preview Submission of Review with third party API which instantly sends feedback to user reducing wait time of 4-5 days to few miliseconds."
    },
    {
      role: "System Engineer",
      company: "Infosys",
      companylogo: require("./assets/images/infosysLogo.png"),
      date: "March 2019 – Aug 2021",
      desc: "Developed a scripting tool which helps reduce transaction time by 90%. Handled DevOps Migration process of previous shell scripts and C++ codes. Worked for brief in QA team with Python, Robot Framework and Selenium on Apple's Internal Data Science and Analytics tool."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: false, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle: "Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Javascript Algorithms and Data Structures",
      subtitle: "",
      image: require("./assets/images/fccLogo.jpeg"),
      imageAlt: "FeeCodeCamp Logo",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.freecodecamp.org/certification/suraj055/javascript-algorithms-and-data-structures"
        }
      ]
    },
    {
      title: "HackerRank Problem Solving (Intermediate) Certificate",
      subtitle: "",
      image: require("./assets/images/hackerrankLogo.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "500+ Problems Solved on Leetcode",
      subtitle: "",
      image: require("./assets/images/leetcodeLogo.png"),
      imageAlt: "Leetcode Logo",
      footerLink: [
        {
          name: "Profile Link",
          url: "https://leetcode.com/SurajJadhav7/"
        }
      ]
    },
    {
      title: "Python (Advanced) Certificate",
      subtitle: "",
      image: require("./assets/images/pythonLogo.jpg"),
      imageAlt: "Python Logo",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.hackerrank.com/certificates/b839041c0e78"
        }
      ]
    },
    {
      title: "Complete Web Development Bootcamp Certification",
      subtitle: "",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.udemy.com/certificate/UC-a83b14f3-c74f-43cf-9ec4-16b702ea403b/"
        }
      ]
    },
    {
      title: "Responsive Web Design Certification",
      subtitle: "",
      image: require("./assets/images/webdesignLogo.png"),
      imageAlt: "webdesignLogo Logo",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.freecodecamp.org/certification/suraj055/responsive-web-design"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8407900055",
  email_address: "jadhavsuraj777@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
