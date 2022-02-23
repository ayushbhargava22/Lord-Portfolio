<template>
  <div class="education-container flex flex-column">
    <h1>Education</h1>
    <div class="education-list flex" v-for="edu in education" :key="edu.id">
      <div class="left">
        <img src="../assets/graduation-cap.png">
      </div>
      <div class="right flex flex-column">
        <h2>{{ edu.universityName }}</h2>
        <h3 class="stream">{{ edu.Stream }}</h3>
        <h3 class="batch">{{ edu.batch }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['education', 'achivements'])
  },
}
</script>

<style scoped>
  .education-container {
    margin-top: 40px;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
    width: 70%;
  }
  .education-container h1 {
    font-size: 3rem;
    font-weight: bold;
  }
  .education-list {
    justify-content: space-between;
    margin-top: 30px;
  }
  .right {
    width: 100%;
    line-height: 1.8;
    font-weight: bold;
    border-bottom: 3px solid grey;
    padding-bottom: 15px;
  }
  .left {
    width: 15%;
  }
  .left img {
    width: 60%;
    height: 80px;
  }
  .stream {
    font-size: 1.1rem;
    font-weight: bold;
  }
  .batch {
    font-size: 1.1rem;
    font-weight: normal;
  }
</style>