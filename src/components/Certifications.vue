<template>
  <div class="certification">
    <div class="certification-container">
      <h1 class="certification-heading">Achievements And Certifications 🏆</h1>
      <span class="certication-defination">Achievements, Certications, Award Letters and some cool stuff that i have done!</span>
      <div class="grid-con">
        <div class="certificate-card" v-for="(certificate, index) in certification" :key="certificate.id"> 
          <div class="certificate-card-dark flex flex-column">
              <div class="top">
                <img src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-certificate-online-learning-vitaliy-gorbachev-blue-vitaly-gorbachev.png"/>
              </div>
              <div class="bottom">
                <h2>{{certificate.certificateName}}</h2>
                <span>{{certificate.description}}</span>
                <div class="tags-container flex">
                  <div class="tags" v-for="tag in certification[index].tags" :key="tag">
                    {{tag}}
                  </div>
                </div>
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
    ...mapState(['certification']),
  }
}
</script>

<style scoped> 
 .certification-container {
    flex: 1 1;
    margin-bottom: 20px;
    margin-top: 50px;
  }
  .certification {
    margin-top: 30px;
    margin-bottom: 20px;
  }  
  .certification-heading {
    font-size: 3rem;
    font-weight: bold;
  }
  .certication-defination {
    text-transform: uppercase;
    margin-top: 5px;
  }
  .grid-con {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(290px,1fr));
    grid-gap: 1rem 1rem;
    gap: 1rem 1rem;
  }
  .certificate-card-dark {
    position: relative;
    box-shadow: 0 10px 30px -15px rgb(0 0 0 / 20%);
    border-radius: 10px;
    border: 1px solid hsla(0,0%,82.7%,.397);
    background-color: #171c28;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .top {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  img {
    height: 150px;
  }
  .bottom h2 {
    margin-bottom: 20px;

  }
  .bottom {
    margin-bottom: 20px;
  }
  .tags-container {
    margin-top: 15px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  .tags {
    background-color: #55198b;
    vertical-align: middle;
    align-items: center;
    border-radius: 4px;
    display: inline-flex;
    font-size: 0.75rem;
    height: 1.7rem;
    justify-content: center;
    line-height: 1.5;
    white-space: nowrap;
    margin: 0 0.5rem 0.5rem 0;
    padding: 0 0.75rem;
    cursor: pointer;
  }
</style>