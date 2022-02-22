<template>
  <div class="work-container flex">
    <div class="left">
        <img src="../assets/programmer.svg">
    </div>

    <div class="right flex flex-column">
      <div class="section-intro">
        <h1>What I do</h1>
        <span>{{whatIDo}}</span>
      </div>
      <div class="logos">

      </div>
      <div class="features flex" v-for="feature in whatIdoFeatures" :key="feature.id">
        <span>⚡</span>
        <span class="feature">{{ feature.feature }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['whatIDo', 'whatIdoFeatures']),
  }
}
</script>

<style scoped>
  .work-container {
    margin-top: 100px;
    margin-bottom: 50px;
    justify-content: space-between;
     font-family: 'Montserrat', sans-serif;
  }
  .left,
  .right {
    width: 50%;
  }
  .left img {
    width: 100%;
  }
  .right {
    margin-left: 50px;
  }
  .section-intro {
    margin-bottom: 20px;
  }
  .section-intro span {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 500;
  }
  .section-intro h1 {
    font-size: 3rem;
    margin-bottom: 15px;
    font-weight: bold;
  }
  .feature {
    line-height: 1.5;
    font-weight: bold;
    padding-bottom: 15px;
  }
  .features {
    font-size: 1.2rem;
  }
</style>