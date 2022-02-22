<template>
  <div>
    <div class="container flex flex-column">
      <Header></Header>
      <div>
         <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .flex  {
    display: flex;
  }
  .flex-column {
    flex-direction: column;
  }
  .container {
    background-color: #171c28;
    height: 100%;
  }
</style>
