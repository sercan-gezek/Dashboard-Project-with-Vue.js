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
                  <h5>Activity</h5>
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

            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 p-0">
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
              <div class="right-sidebar-box-top">
                <div class="right-sidebar-box-top-left">
                  <div class="circle-box-2">
                    <img src="@/assets/img/Iconly/img-icon.svg" alt="Icon" />
                  </div>
                </div>
                <div class="right-sidebar-box-top-right">
                  <h3>Disaster Donation</h3>
                  <p>Emily Hofter</p>
                </div>
              </div>
              <div class="right-sidebar-box-middle">
                <h5>Progress</h5>
                <p>80%</p>
              </div>
              <div class="line-content">
                <div class="line-white"></div>
                <div class="line-yellow"></div>
              </div>
              <div class="right-sidebar-box-bottom">
                <div class="right-sidebar-box-bottom-left">
                  <img src="@/assets/img/Iconly/Bold/Chat.svg" class="img-fluid" alt="Chat" /><span>123</span>
                </div>
                <div class="right-sidebar-box-bottom-right">
                  <img src="@/assets/img/Iconly/Bold/Clock.svg" class="img-fluid" alt="Clock" /><span>2 days left</span>
                </div>
              </div>
            </div>
            <div class="right-sidebar-box">
              <div class="right-sidebar-box-top">
                <div class="right-sidebar-box-top-left">
                  <div class="circle-box-2">
                    <img src="@/assets/img/Iconly/img-icon.svg" alt="Icon" />
                  </div>
                </div>
                <div class="right-sidebar-box-top-right">
                  <h3>Disaster Donation</h3>
                  <p>Emily Hofter</p>
                </div>
              </div>
              <div class="right-sidebar-box-middle">
                <h5>Progress</h5>
                <p>80%</p>
              </div>
              <div class="line-content">
                <div class="line-white"></div>
                <div class="line-yellow"></div>
              </div>
              <div class="right-sidebar-box-bottom">
                <div class="right-sidebar-box-bottom-left">
                  <img src="@/assets/img/Iconly/Bold/Chat.svg" class="img-fluid" alt="Chat" /><span>123</span>
                </div>
                <div class="right-sidebar-box-bottom-right">
                  <img src="@/assets/img/Iconly/Bold/Clock.svg" class="img-fluid" alt="Clock" /><span>2 days left</span>
                </div>
              </div>
            </div>
            <div class="right-sidebar-box">
              <div class="right-sidebar-box-top">
                <div class="right-sidebar-box-top-left">
                  <div class="circle-box-2">
                    <img src="@/assets/img/Iconly/img-icon.svg" alt="Icon" />
                  </div>
                </div>
                <div class="right-sidebar-box-top-right">
                  <h3>Disaster Donation</h3>
                  <p>Emily Hofter</p>
                </div>
              </div>
              <div class="right-sidebar-box-middle">
                <h5>Progress</h5>
                <p>80%</p>
              </div>
              <div class="line-content">
                <div class="line-white"></div>
                <div class="line-yellow"></div>
              </div>
              <div class="right-sidebar-box-bottom">
                <div class="right-sidebar-box-bottom-left">
                  <img src="@/assets/img/Iconly/Bold/Chat.svg" class="img-fluid" alt="Chat" /><span>123</span>
                </div>
                <div class="right-sidebar-box-bottom-right">
                  <img src="@/assets/img/Iconly/Bold/Clock.svg" class="img-fluid" alt="Clock" /><span>2 days left</span>
                </div>
              </div>
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
export default {
  name: 'Activity',
  components: {
    Menu, Group

  }
}
</script>

<style scoped>

</style>
