<template>
    <div class="post-list center">
        <div v-if="posts.length > 0">
            <TransitionGroup name="postlist">
                <PostItem
                    v-for="post in posts"
                    :post="post"
                    :key="post.id"
                    
                    @remove="$emit('remove', post)"  
                />
            </TransitionGroup>
        </div>
        <h2 v-else class="post-list_zero-blog">Пока в нашем блоге нет записей</h2>
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
};
</script>

<style lang="scss" scoped>
.post-list {
    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
    &_zero-blog {
        color: #2F4209;
    }
}

.postlist-item {
    display: inline-block;
    margin-right: 10px;
}
.postlist-enter-active,
.postlist-leave-active {
    transition: all 0.3s ease;
}
.postlist-enter-from,
.postlist-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.postlist-move {
    transition: transform 0.3s ease;
}
</style>