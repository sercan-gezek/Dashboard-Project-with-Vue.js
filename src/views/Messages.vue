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


            </div>
          </div>
        </div>
        <div class="col-lg-7">Bu sayfa mesajlar sayfası</div>
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
  name: 'Messages',
  components: {
    Menu

  }
}
</script>

<style scoped>


</style>
