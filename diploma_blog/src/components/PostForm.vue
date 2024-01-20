<template>
    <form @submit.prevent class="postForm center">
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
        <div class="btn-form">
            <MyButton
                @click="createPost"
            >
                Сохранить
            </MyButton>
        </div>
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
.btn-form {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
}
</style>
