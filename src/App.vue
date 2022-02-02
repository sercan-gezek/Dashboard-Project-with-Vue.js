<template>
  <div>
  <div class="menu">
    <router-link to="/" tag="a" class="link">Anasayfa</router-link>
    <router-link to="/profile" tag="a" class="link">Hakkında</router-link>



  </div>
    <hr/>

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
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/mixins.scss";

body{
  background-color: red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu{
  width:100%;
  display: flex;
  justify-content:Center;
}
.link {
  border: 1px solid #000;
  border-radius: 10px;
  padding: 5px;
  text-decoration: none;
}
</style>

