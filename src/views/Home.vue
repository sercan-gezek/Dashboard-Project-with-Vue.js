<template>
<div>
<div class="container-fluid">
  <div class="row">
    <div class="col-lg-2">
      <div class="left-sidebar">
        <div class="left-content">
          <div class="logo">
            <h6>Logo</h6>
          </div>
          <div class="left-content-head">
            <h6>Account</h6>
          </div>
          <Menu/>
          <Group/>

        </div>
      </div>
    </div>
    <div class="col-lg-7">Anasayfa</div>
    <div class="col-lg-3">
      <div class="right-sidebar">

      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Group from "@/components/Group.vue";
export default {
  name: 'Home',
  components: {
    Menu, Group

  }
}
</script>

<style scoped>


</style>
