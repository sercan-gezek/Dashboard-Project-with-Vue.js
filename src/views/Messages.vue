<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 left-sidebar">
          <div class="left-content">
            <div class="logo">
              <h6>Logo</h6>
            </div>
            <div class="left-content-head">
              <h6>Account</h6>
            </div>
            <Menu/>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="container">
            <div class="middle-content">
              <div class="row">
                <div class="col-lg-6">
                  <input type="text" class="form-control" placeholder="Search">
                </div>
                <div class="col-lg-6 middle-content-message">
                  <h5>Hy, Oland!</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
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
export default {
  name: 'Home',
  components: {
    Menu

  }
}
</script>

<style scoped>


</style>
