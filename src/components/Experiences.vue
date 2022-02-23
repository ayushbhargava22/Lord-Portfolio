<template>
  <div class="expirence">
    <div class="expirence-container">
      <h1 class="experiences-heading">Experiences</h1>
      <div class="grid-con">
        <div class="experiences-card" v-for="exp in experiences" :key="exp.id">
          <div class="expierence-card-dark flex flex-column">
              <div class="top">
                <h2>{{exp.companyName}}</h2>
              </div>
              <div class="bottom flex flex-column">
                <h2>{{exp.designation}}</h2>
                <h3>{{exp.duration}}</h3>
                <span>{{exp.about}}</span>
              </div>
          </div>        
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['experiences']),
  }
}
</script>

<style scoped>
  .expirence-container {
    flex: 1 1;
    margin-bottom: 20px;
    margin-top: 50px;
  }
  .experiences-heading {
    font-size: 3rem;
  }
  .grid-con {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(290px,1fr));
    grid-gap: 1rem 1rem;
    gap: 1rem 1rem;
  }
  .expierence-card-dark {
    position: relative;
    box-shadow: 0 10px 30px -15px rgb(0 0 0 / 20%);
    border-radius: 10px;
    border: 1px solid hsla(0,0%,82.7%,.397);
    background-color: #171c28;
  }
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    border-radius: 10px;
    border:1px solid rgb(20,124,244);
    background: linear-gradient(90deg, #800080, #82008f, #81009e, #7d00b0, #7500c2, #6700d5, #4f00ea, #000fff);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

  }
  .bottom {
    margin-top: 40px;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .bottom h3 {
    margin-top: 15px;
    margin-bottom: 20px;
  }
</style>