<template>
  <HeaderComp/>
  <div class="app">
    <router-view></router-view>
  </div>
  <FooterComp/>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
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
  font-family: 'Merriweather Sans', sans-serif;
}
a {
    text-decoration: none;
    // cursor: pointer;
}
.app {
  min-height: calc(100vh - 175px);   // минус высота хедера и футера calc(100vh - 140px)
}
.center {
  padding-left: calc(50% - 700px);
  padding-right: calc(50% - 700px);
}
@media (max-width: 1140px) {
  .center {
    padding-left: calc(50% - 510px);
    padding-right: calc(50% - 510px);
  }
}
@media (max-width: 1024px) {
  .center {
    padding-left: calc(50% - 450px);
    padding-right: calc(50% - 450px);
  }
}
@media (max-width: 1024px) {
  .center {
    padding-left: calc(50% - 172px);
    padding-right: calc(50% - 172px);
  }
}
</style>