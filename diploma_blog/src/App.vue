<template>
  <PostForm/>
  <PostList/>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
  components: {PostForm, PostList},
  data() {
    return {
      posts: [
        {id: 1, tytle: 'заголовок 1', body: 'текст поста 1'},
        {id: 2, tytle: 'заголовок 2', body: 'текст поста 2'},
        {id: 3, tytle: 'заголовок 3', body: 'текст поста 3'},
      ]
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 12px;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
