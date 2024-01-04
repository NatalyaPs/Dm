<template>
    <div class="post">
        <div>
            <h3 class="tytle">{{ post.tytle }}</h3>
            <p class="text">{{ post.body }}</p>
        </div>
        <div>
            <MyButton
                @click=""
            >
                Удалить
            </MyButton>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostItem',
    props: {
        post: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.post {
    padding: 12px;
    border: 2px solid grey;
    border-radius: 12px;
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>