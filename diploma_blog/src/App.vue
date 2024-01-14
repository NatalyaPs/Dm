<template>
  <HeaderComp/>
  <div class="app">
    <router-view></router-view>
  </div>
  <FooterComp/>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
// import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
  components: { HeaderComp, FooterComp },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
// a {
//     text-decoration: none;
//     cursor: pointer;
// }
.app {
  min-height: calc(100vh - 140px);
  // &_btns {
  //   display: flex;
  //   justify-content: space-between;
  //   margin: 15px, 0;
  // }

}
.center {
  padding-left: calc(50% - 700px);
  padding-right: calc(50% - 700px);
}
</style>
