<template>
  <div class="home-container flex flex-column">
    <!-- Introduction section -->
    <div class="self-introduction flex">
      <div class="about-section flex flex-column" >
          <div class="greet">
            <div class="flex name">
              <h1>Hi all, I'm {{firstName}}</h1>
              <div class="wave">
                <span>👋</span>
              </div>
            </div>
            <span class="nick-name">( {{grettings.nickName}} )</span>
          </div>
          <div class="introduction">
            <h2>{{grettings.subTitle}}</h2>
          </div>
          <div class="social-links">
            <ul class="social-list flex">
              <a :href="links.github">
                <li class="social-list"><img src="../assets/github.png"></li>
              </a>
              <a :href="links.linkedin">
                <li class="social-list"><img src="../assets/linkedin.png"></li>
              </a>
              <a :href="links.instagram">
                <li class="social-list"><img src="../assets/instagram.png"></li>
              </a>
              <a :href="`mailto:${links.gmail}`">
                <li class="social-list"><img src="../assets/gmail.png"></li>
              </a>
              <a :href="links.twitter">
                <li class="social-list"><img src="../assets/twitter.png"></li>
              </a>
              <a :href="links.facebook">
                <li class="social-list"><img src="../assets/facebook.png"></li>
              </a>
              <a :href="links.stackOverFlow">
                <li class="social-list"><img src="../assets/stack-overflow.png"></li>
              </a>
              <a :href="links.medium">
                <li class="social-list"><img src="../assets/medium.png"></li>
              </a>
            </ul>
          </div>
          <div class="buttons">
            <button class="resume">
              <a :href="links.resume">
                See My Resume
              </a>
            </button>
          </div>
      </div>
      <div class="random-image">
          <felling-proud></felling-proud>
      </div>
    </div>
    <!-- Work section -->
    <work></work>
    <!-- Education section -->
    <education></education>
    <!-- Experiences section -->
    <experiences></experiences>
    <!-- Projects -->
    <projects></projects>
    <!-- Certications -->
    <certications></certications>
    <!-- Footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import FellingProud from '../components/FellingProud.vue';
import Work from '../components/Work.vue';
import Education from '../components/Education.vue';
import Experiences from '../components/Experiences.vue';
import Projects from '../components/Projects.vue';
import Certications from '../components/Certifications.vue';
import Footer from '../components/Footer.vue';
import { mapState } from 'vuex';

export default {
  components: {
    FellingProud,
    Work,
    Education,
    Experiences,
    Projects,
    Certications,
    Footer
  },
  computed: {
    ...mapState(['grettings','firstName', 'links']),
  },
  methods: {
   
  } 
}
</script>

<style scoped>
  .home-container {
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
  }
  .about-section {
    margin-top: 80px;
  }
  .about-section,
   .random-image {
    width: 50%;
  }
  .greet {
    margin-bottom: 20px;
  }
  .introduction h2 {
    font-size: 1.8rem;
    line-break: auto;
    text-overflow: clip;
    line-height: 1.5;
    font-weight: normal;
  }
  .name {
    align-items: center;
  }
  .name h1,.wave {
    font-size: 3rem;
  }
  .introduction {
    margin-bottom: 20px;
  }
  .nick-name {
    margin-top: 20px;
    font-size: 1.3rem;
  }
  .social-list {
    text-decoration: none;
    list-style: none;
  }
  .social-list a {
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
  }
  .social-list a li img {
    fill: white;
    width: 35px;
    height: 35px;
  }
  .buttons {
    margin-top: 20px;
  }
  .resume {
    border: 1px solid #55198b;
    background-color: #55198b;
    padding: 12px 15px;
    border-radius: 5px;
  }
  .resume a {
    font-weight: 700;
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
</style>