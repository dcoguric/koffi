<template>
<div id="app-div">
  <router-link to="/">
    <div class="header">
    <img src="@/assets/koffi-logo.png" alt="">
    <h1>koffikoffi</h1>
  </div>
  </router-link>
  <router-view/>
</div>
</template>

<script>
export default {
}
</script>

<style>

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
