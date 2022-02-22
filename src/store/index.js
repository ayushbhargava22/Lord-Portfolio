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
    }
  },
  mutations: {
  },
  actions: {},
})