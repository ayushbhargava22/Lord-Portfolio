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
    ]
  },
  mutations: {
  },
  actions: {},
})