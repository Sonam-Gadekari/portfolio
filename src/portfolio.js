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
  username: "Sonam Gadekari",
  title: "Hi all, I'm Sonam",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with Java / Spring Boot/ Microservices / React JS / Angular frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SonamGadkari",
  linkedin: "https://www.linkedin.com/in/sonam-gadekari-a0b10b139/",
  gitlab: "https://github.com/Sonam-Gadekari",
  leetcode: "https://leetcode.com/u/SonamGadekari/",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Experienced Java Full Stack Developer",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Replatform your legacy applications to Microservices and React JS architecture"),
    emoji(
      "⚡ Deployment and Integration of third party services such as Kubernetes/ AWS / Openshift"
    )
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "React JS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },    
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql/nosql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Northwest Missouri State University",
      logo: require("./assets/images/Northwest.png"),
      subHeader: "Master of Science in Applied Computer Science",
      duration: "September 2018 - December 2019",
      desc: "Ranked Top student in the program",
      descBullets: [
        "Leon F Miller Graduate Grant to Top 1% students"
      ]
    },
    {
      schoolName: "KL University",
      logo: require("./assets/images/KLUniversity.png"),
      subHeader: "Bachelor of Technology in Electronics and Communication engineering",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Academic Merit Award being a Top student"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "65%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "35%" //Insert relative proficiency in percentage
    },    
    {
      Stack: "Programming",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technology Lead",
      company: "Synechron",
      companylogo: require("./assets/images/Synechron.png"),
      date: "June 2021 – Present",
      desc: "Develop a Web application using Java , Spring boot, Microservices, Camunda and React JS architecture",
      descBullets: [       
      ]
    },
    {
      role: "Software Engineer",
      company: "Keanesoft",
      companylogo: require("./assets/images/keanesoft.png"),
      date: "Feb 2020 – June 2021",
      desc: "Migrate a legacy monolithic application built on Java, Spring MVC, JSF to Microservices/Angular architecture."   
    },
    {
      role: "Consultant",
      company: "Northwest Missouri State university",
      companylogo: require("./assets/images/Northwest.png"),
      date: "Jan 2019 – Dec 2019",
    },
    {
      role: "Associate Consultant",
      company: "Capgemini",
      companylogo: require("./assets/images/Capgemini.png"),
      date: "Jan 2016 – Sep 2018",
      desc: "Develop applications in Java and Angular"
    },
    {
      role: "Software Engineer",
      company: "Syntel",
      companylogo: require("./assets/images/syntel.png"),
      date: "Jan 2014 – Sep 2016",
      desc: "Develop applications in Java and Angular"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications !",

  achievementsCards: [
    {
      title: "Star Performer at Capgemini",
      subtitle:
        "All code assignments are delivered without defects",
      image: require("./assets/images/Capgemini.png"),
      imageAlt: "Star performer",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/open?id=1C-jh-mvUiC4tVzjX5hdhRQ2OkxRflfkJ"
        }        
      ]
    },
    {
      title: "Certified in Azure Fundamentals",
      subtitle: "",
      image: require("./assets/images/azureFundamentals.png"),
      imageAlt: "Azure Fundas",
      footerLink: [
        {
          name: "Azure Fundamentals",
          url: "https://www.credly.com/badges/4f4d498d-7856-4aee-b89b-4ecc3a06b52a/public_url"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [
    {
      title: "Celebration of Quality",
      subtitle: "Web application developed using Spring boot",
      event_url: "https://www.linkedin.com/pulse/congratulations-2019-celebration-quality-student-denise-case/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = { 
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "sonamgadekari@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
