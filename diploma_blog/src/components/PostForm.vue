<template>
    <form @submit.prevent class="postForm">
        <h4>Создать пост</h4>
        <MyInput
            v-model="post.title"
            type="text"
            placeholder="Заголовок поста"
        />
        <MyInput 
            v-model="post.body"
            type="text"
            placeholder="Текст поста" 
        />
        <MyButton
            style="align-self: flex-end; margin-top: 15px"
            @click="createPost"
        >
            сохранить
        </MyButton>
        <!-- убрать инлайн стили в кнопке -->
    </form>
</template>

<script>
export default {
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
        createPost() {
        this.post.id = Date.now();
        this.$emit('create', this.post)
        this.post = {
            title: '',
            body: ''
        }
    }
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
