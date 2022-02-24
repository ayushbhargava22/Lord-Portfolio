<template>
  <div class="headroom-wrapper">
    <header class="flex" :class="{ 'scrolled-nav': scrollPosition }">
      <router-link to="/" class="home-router">
        <span class="opening-name">&lt;</span>
        <span class="name">{{firstName}} {{lastName}}</span>
        <span class="closing-name"> /&gt;</span>
      </router-link>
      <ul class="navigation-list flex" v-show="!mobile">
        <li class="navigation-item">Skills</li>
        <li class="navigation-item">Work Experiences</li>
        <li class="navigation-item">Projects</li>
        <li class="navigation-item">Achivements</li>
        <li class="navigation-item">Contact Me</li>
      </ul>
      <div class="icon">
        <i class="far fa-bars" v-show="mobile" @click="toggleMobileNav" :class="{ 'icon-active': mobileNav }"></i>
      </div>
      <ul class="dropdown-nav" v-show="mobileNav">
        <li class="navigation-ite">Skills</li>
        <li class="navigation-ite">Work Experiences</li>
        <li class="navigation-ite">Projects</li>
        <li class="navigation-ite">Achivements</li>
        <li class="navigation-ite">Contact Me</li>
      </ul>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['firstName', 'lastName']),
  },
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen()
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 1050) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  },
}
</script>

<style scoped>
  .icon {
    color: #fff;
    margin-right: 10px;
    font-size: 2rem;
  }
  .headroom-wrapper {
    height: 100px;
    margin-top: 20px;
    margin-left: 20px;
  }
  .home-router {
    text-decoration: none;
    font-size: 1.4rem;
    font-family: 'Agustina', sans-serif;
    color: #fff;
    font-weight: 700;
  }
  .opening-name,
  .closing-name {
    font-family:'Courier New', Courier, monospace;
  }
  header {
    justify-content: space-between;
    align-items: center;
  }
  .navigation-list {
    justify-content: space-between;
    list-style: none;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
  }
  .navigation-item {
    margin-right: 50px;
    cursor: pointer;
  }
  .dropdown-nav {
    color: white;
    list-style: none;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: #171c28;
    top: 0;
    left: 0;
    padding-top: 40px;
  }
  .dropdown-nav li {
    margin-left: 0px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    margin-bottom: 20px;
  }
</style>