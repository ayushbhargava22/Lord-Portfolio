<template>
  <div class="footer flex">
    <div class="left flex flex-column">
      <div class="footer-title">
        <h1>Reach Out to me!</h1>
        <span>Discuss a project or just want to say h1? My inbox is open for all</span>
      </div>
      <div class="wanna-be">
        <h2>{{footer.wannaBe}}</h2>
      </div>
      <div class="location flex flex-column">
        <span>{{footer.location}}</span>
        <span>Open for opportunities: Yes</span>
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
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['footer','links']),
  }
}
</script>

<style scoped>
.social-list {
    margin-top: 10px;
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
  .footer {
    margin-top: 40px;
    margin-bottom: 70px;
  }
  .left {
    width: 70%;
  }
  .wanna-be {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .footer-title h1 {
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 3rem;
  }
  .footer-title span {
    color: #868e98;
    text-transform: uppercase;
  }
  .location span:first-child {
    margin-bottom: 10px;
  }
</style>