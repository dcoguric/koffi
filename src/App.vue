<template>
<div id="app-div">
  <router-link to="/">
    <div class="header">
    <img src="@/assets/koffi-logo.png" alt="">
    <h1>koffikoffi</h1>
  </div>
  </router-link>
  <router-view/>
  
  <footer>
    <img src="@/assets/question-mark.png" @click="learnMore()" alt="">
    <h5 v-show="showInfo"> - by cogi for obi :3</h5>
    <a href="https://www.deezer.com/us/playlist/11520562024">
      <img src="@/assets/music.png" alt="">
    </a>
  </footer>
</div>
</template>

<script>
export default {
  methods: {
    learnMore() {
      this.showInfo = true;
      setTimeout(() => {
        this.showInfo = false;
      }, 2000);
    }
  },
  data() {
    return {
      showInfo: false
    };
  }
}
</script>

<style>
footer {
  display: flex;
  width: 90%;
  margin: 5px auto 0px;
  justify-content: space-between;
}

footer img {
  cursor: pointer;
  width: 60px;
  background-color: #997D54;
  border-radius: 18px;
  padding: 15px;
}

h5 {
  margin-top: 17px;
  margin-right: 30px;
}

#app-div {
  max-width: 476px;
  margin: auto;
}

body {
  margin: 0px;
  padding: 0px;
}

  * {
    font-family: 'Belanosima', sans-serif;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .header {
    display: flex;
    align-items: center;
    margin: auto;
    width: fit-content;
  }

  .header img {
    width: 120px;
  }

  .header h1 {
    font-size: 48px;
    color: #997D54;
    margin: 10px 5px;
  }

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
