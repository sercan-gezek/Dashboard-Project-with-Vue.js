<template>
<div>
<div class="group-area">
  <h6>Your Group</h6>
  <ul>
  <li><span class="box"><img src="@/assets/img/Iconly/ImageSquare.svg" alt="Icon" /></span>
    <a href="#">Figma Community</a>
  </li>
    <li><span class="box"><img src="@/assets/img/Iconly/ImageSquare.svg" alt="Icon" /></span>
    <a href="#">Behance Community</a>
  </li>
    <li><span class="box"><img src="@/assets/img/Iconly/ImageSquare.svg" alt="Icon" /></span>
    <a href="#">Dribbble Community</a>
  </li>
  </ul>
</div>
</div>
</template>

<script>
export default {
  name: "Group"
}
</script>

<style scoped>
.group-area ul li span.box{
  width:30px;
  height:30px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  background-color:#3734A9;
  margin:0 8px 0 0;
}
.group-area ul li{
  margin:25px 0 0 0;
  display:flex;
  align-items:center;
}
.group-area ul li a{
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #6E7278;

}
</style>