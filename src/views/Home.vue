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
          <Group/>
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
          <div class="col-lg-6">
            <div class="middle-content-message-2">
            <h5>Trendy Posts Today</h5>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="circle-content">
              <div class="circle-box">
                <img src="@/assets/img/Iconly/img-icon.svg" alt="Icon" />
              </div>
              <div class="circle-box">
                <img src="@/assets/img/Iconly/img-icon.svg" alt="Icon" />
              </div>
              <div class="circle-box">
                <img src="@/assets/img/Iconly/img-icon.svg" alt="Icon" />
              </div>
              <div class="circle-box">
                <img src="@/assets/img/Iconly/img-icon.svg" alt="Icon" />
              </div>
              <div class="circle-box-other">
                <img src="@/assets/img/Iconly/plus.svg" alt="Icon" />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-6 mt-3">
                <MiddleBox/>
              </div>
              <div class="col-lg-6 mt-3">
                <MiddleBox/>
              </div>
              <div class="col-lg-6 mt-3">
                <MiddleBox/>
              </div>
              <div class="col-lg-6 mt-3">
                <MiddleBox/>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-3">
            <div class="middle-box-big">
              <img src="@/assets/img/Iconly/img-icon.svg" alt="Icon" />
              <div class="middle-head">
                <p>Unboxing Time</p>
                <h6>Amoeba</h6>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3">
      <div class="right-sidebar">
        <div class="right-sidebar-content">
          <img src="@/assets/img/Iconly/Bold/Upload.svg" alt="Icon" />
          <img src="@/assets/img/Iconly/Bold/Alert.svg" alt="Icon" />
          <div class="circle-box">
            <img src="@/assets/img/Iconly/img-icon.svg" alt="Icon" />
          </div>
        </div>
        <div class="right-sidebar-head">
          <h5>Popular Activities</h5>
          <div class="right-sidebar-box">
            <p>lasdasdl amsdak sldkaslda sdalsdklaskdl</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Group from "@/components/Group.vue";
import MiddleBox from "@/components/MiddleBox.vue";
export default {
  name: 'Home',
  components: {
    Menu, Group, MiddleBox

  }
}
</script>

<style scoped>


</style>
