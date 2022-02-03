<template>
<div class="menu">
<ul>
    <li><span><img src="@/assets/img/Iconly/Bold/Home.svg" class="img-fluid" alt="Home" /></span>
      <router-link to="/" tag="a">Anasayfa</router-link>
    </li>
  <li><span><img src="@/assets/img/Iconly/Bold/Profile.svg" class="img-fluid" alt="Profile" /></span>
    <router-link to="/profile" tag="a">My Profile</router-link>
  </li>
  <li><span><img src="@/assets/img/Iconly/Bold/Chat.svg" class="img-fluid" alt="Chat" /></span>
    <router-link to="/messages" tag="a">Messages</router-link>
  </li>
  <li><span><img src="@/assets/img/Iconly/Bold/Heart.svg" class="img-fluid" alt="Heart" /></span>
    <router-link to="/activity" tag="a">Activity</router-link>
  </li>
  <li><span><img src="@/assets/img/Iconly/Bold/Setting.svg" class="img-fluid" alt="Settings" /></span>
    <router-link to="/settings" tag="a">Settings</router-link>
  </li>
</ul>
</div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>
.menu{
  margin:34px 0 0 0;
}
.menu ul{
  margin:0;
  padding:0;
  list-style-type:none;
}
.menu ul a{
  text-decoration:none;
  color: #6E7278;
}
.menu ul li{
  display:flex;
  align-items:center;
  height:25px;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  margin: 35px 0 0 0;
}
.menu ul li span{
  margin: 0 15px 0 0;
}

</style>