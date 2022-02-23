<template>
  <div class="headroom-wrapper">
    <header class="flex">
      <router-link to="/" class="home-router">
        <span class="opening-name">&lt;</span>
        <span class="name">{{firstName}} {{lastName}}</span>
        <span class="closing-name"> /&gt;</span>
      </router-link>
      <ul class="navigation-list flex">
        <li class="navigation-item">Skills</li>
        <li class="navigation-item">Work Experiences</li>
        <li class="navigation-item">Projects</li>
        <li class="navigation-item">Achivements</li>
        <li class="navigation-item">Contact Me</li>
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
  methods: {}
}
</script>

<style scoped>
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
</style>