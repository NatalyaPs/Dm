<template>
    <div class="post-list">
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
        <h2 v-else class="zero-blog">Пока в нашем блоге нет записей</h2>
    </div>
    <!-- @remove="$emit('remove', post)" прокидываем событие @remove от ребенка наверх -->

    <!-- // ??? 111
                    @remove="$emit('remove', post)"   -->

                    <!-- @update="$emit('update', post)" -->
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
    padding: 3%;
}
.zero-blog {
    color: darkgreen;
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