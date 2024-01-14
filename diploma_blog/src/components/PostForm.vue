<template>
    <form @submit.prevent class="postForm">
        <h4></h4>
        <MyInput
            v-model.trim="post.title"
            type="text"
            placeholder="Заголовок поста"
        />
        <MyInput 
            v-model.trim="post.body"
            type="text"
            placeholder="Текст поста" 
        />
        <MyButton
            style="align-self: flex-end; margin-top: 15px"
            @click="createPost"
        >
            Сохранить
        </MyButton>
        <!-- убрать инлайн стили в кнопке -->
    </form>
</template>

<script>
// // ??? 111
// import {mapMutations} from 'vuex';

export default {
    // // ??? 111
    // ...mapMutations({

    // }),
    name: "PostForm",

    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        };
    },

    methods: {
        // ...mapMutations({
        //     setPage: 'setPage', //post/
        //     setSearchQuery: 'setSearchQuery',
        //     setSelectedSort: 'setSelectedSort',
        // }),
        createPost() {
            this.post.id = Date.now();
            // передаем данные от ребенка родителю
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
                }
        },
    }
};
</script>

<style lang="scss" scoped>
.postForm {
    display: flex;
    flex-direction: column;
    padding: 24px;
}
</style>
