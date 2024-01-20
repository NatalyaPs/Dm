<template>
    <div class="post center">
        <div>
            <h3 class="post_title">{{ post.title }}</h3>
            <p class="post_text">{{ post.body }}</p>
        </div>
        <div class="post_btns">
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
    border: 2px solid rgba(93, 137, 3, 0.30);
    border-radius: 12px;
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #2F4209;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &_title{
        font-size: 25px;
        margin-bottom: 12px;
    }
    &_text {
        font-size: 18px;
    }
    &_btns {
        display: flex;
        gap: 8px;
    }
}
@media (max-width: 1024px) {
    .post {
        flex-direction: column;
        justify-content: center;
        gap: 12px;
        &_text {
            font-size: 14px;
        }
    }
}
</style>