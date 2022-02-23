import { createStore } from 'vuex';

export default createStore({
  state: {
    firstName: 'Ayush',
    lastName: 'Bhargava',
    grettings: {
      title: 'Ayush Bhargava',
      nickName: 'Aashu',
      subTitle: 'A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact',
      resumeLink: null,
      githubProfile: null,
    },
    links: {
      github: 'https://github.com/ayushbhargava22',
      linkedin: 'https://www.linkedin.com/in/ayush-bhargava2205/',
      instagram: 'https://www.instagram.com/ayush_.bhargava/',
      gmail: 'ayushbhargava2205@gmail.com',
      twitter: '',
      facebook: '',
      stackOverFlow: '',
      medium: '',
      resume: 'https://drive.google.com/file/d/1MG54VAtIjDfbp0hDd3Rtk-E08nBOea1P/view?usp=sharing'
    },
    whatIDo: 'Crazy Full Stack developer who wants to explore every tech stack', 
    whatIdoFeatures: [
      {
        id: 1,
        feature: 'Develop highly interactive Front end / User Interfaces for your web and mobile applications'
      },
      {
        id: 2,
        feature: 'Progressive Web Applications ( PWA ) in normal and SPA Stacks'
      },
      {
        id: 3,
        feature: 'Integration of third party services such as Firebase/ AWS / Digital Ocean'
      }
    ],
    education: [
      {
        id: 1,
        universityName: 'Harvard University',
        Stream: 'Master of Science in Computer Science',
        batch: 'September 2017 - April 2019',
      },
      {
        id: 2,
        universityName: 'Stanford Univeristy',
        Stream: 'Bachelor of Science in Computer Science',
        batch: 'September 2013 - April 2017',
      }
    ],
    experiences: [
      {
        id: 1,
        companyName: 'Microsoft',
        designation: 'Software Developer',
        duration: 'June 2018 - Present',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        companyName: 'Google',
        designation: 'Software Developer',
        duration: 'June 2016 - May 2018',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        companyName: 'Airbnb',
        designation: 'Software Developer',
        duration: 'June 2015 - May 2016',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      }
    ],
    projects: [
      {
        id: 1,
        projectName: 'Olx Clone',
        projectDescp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        projectTech: ['JavaScript', 'Html', 'CSS'],
        gitHubLink: 'https://github.com/'
      },
      {
        id: 2,
        projectName: 'Todo Application',
        projectDescp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        projectTech: ['JavaScript', 'Html', 'CSS'],
        gitHubLink: 'https://github.com/'
      },
      {
        id: 3,
        projectName: 'GitHub Finder',
        projectDescp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        projectTech: ['JavaScript', 'Html', 'CSS'],
        gitHubLink: 'https://github.com/'
      },
      {
        id: 4,
        projectName: 'React Blog App',
        projectDescp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        projectTech: ['JavaScript', 'Html', 'CSS'],
        gitHubLink: 'https://github.com/'
      },
      {
        id: 5,
        projectName: 'Zomato App Clone',
        projectDescp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        projectTech: ['JavaScript', 'Html', 'CSS'],
        gitHubLink: 'https://github.com/'
      },
      {
        id: 6,
        projectName: 'Education Website',
        projectDescp: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        projectTech: ['JavaScript', 'Html', 'CSS'],
        gitHubLink: 'https://github.com/'
      },
    ],
    certication: [
      {
        id: 1,
        certificateName: 'Google Code-In Finalist',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, Inducation ve lorem hushd',
        tags: ['Certification', 'Award Letter', 'Google']
      },
      {
        id: 2,
        certificateName: 'Google Assistant Action',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, Inducation ve lorem hushd',
        tags: ['Certification', 'Award Letter', 'Google']
      },
      {
        id: 3,
        certificateName: 'Microsoft Hackathon Finalist',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, Inducation ve lorem hushd',
        tags: ['Certification', 'Award Letter', 'Google']
      }
    ]
  },
  mutations: {
  },
  actions: {},
})