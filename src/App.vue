<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {


  }
}
</script>

<style lang="scss">
@import "./assets/normalize.css";
//@import "@/assets/scss/variables.scss";
//@import "@/assets/scss/mixins.scss";
@import "./assets/style.css";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

.link {
  border: 1px solid #000;
  border-radius: 10px;
  padding: 5px;
  text-decoration: none;
}
</style>

