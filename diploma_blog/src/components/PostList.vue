<template>
    <div>
        <PostItem
            v-for="post in posts"
            :post="post"
        />
    </div>
</template>

<script>
import PostItem from '@/components/PostItem';
export default {
    components: {PostItem},
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    name: 'PostList',

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

</style>