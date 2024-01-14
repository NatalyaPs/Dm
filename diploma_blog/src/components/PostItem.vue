<template>
    <div class="post">
        <div>
            <h3 class="tytle">{{ post.title }}</h3>
            <p class="text">{{ post.body }}</p>
        </div>
        <div class="post_btns">
            <!-- <MyButton
                @click="$router.push(`/posts/${post.id}`)"
            >
                Открыть
            </MyButton> -->
            <!-- <MyButton
                @click="$emit('update', post)"
            >
                Изменить
            </MyButton> -->
            <MyButton
                @click="$emit('remove', post)"
            >
                Удалить
            </MyButton>
        </div>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue';

export default {
    name: 'PostItem',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    components: { MyButton }
}
</script>

<style lang="scss" scoped>
.post {
    padding: 12px;
    border: 2px solid rgb(144, 189, 169);
    border-radius: 12px;
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_btns {
        display: flex;
        gap: 8px;
    }
}
</style>