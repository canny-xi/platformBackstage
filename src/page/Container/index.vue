<style lang="less" scoped>
.wrapper {
  box-sizing: border-box;
  padding:100px 20px 0 220px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #edf2f5;
  .wrapper-inner {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>
<template>
  <div>
    <vue-side-bar></vue-side-bar>
    <div class="wrapper">
      <div class="wrapper-inner">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import sideBar from "@/components/sideBar";

export default {
  data() {
    return {};
  },
  components: {
    VueSideBar: sideBar
  }
};
</script>

