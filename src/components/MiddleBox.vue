<template>
  <div class="middle-box">
    <img src="@/assets/img/Iconly/img-icon.svg" alt="Icon" />
    <div class="middle-head">
      <p>Love Your Self</p>
      <h6>Amoeba</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Middle-Box"
}
</script>

<style scoped>
.middle-box{
  height: 210px;
  background: linear-gradient(0deg, #3734A9, #3734A9), linear-gradient(180deg, rgba(54, 54, 54, 0) 73.91%, rgba(54, 54, 54, 0.46) 105.11%), #3734A9;
  border: 4px solid #FFFFFF;
  box-shadow: -5px 7px 34px #D7DBEA;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.middle-box .middle-head{
  position: absolute;
  bottom:13px;
  left:20px;
}
.middle-box .middle-head p{
  color: #fff;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  opacity: 0.8;
  margin: 0 0 4px 0;
}
.middle-box .middle-head h6{
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  margin:0;
}
</style>
