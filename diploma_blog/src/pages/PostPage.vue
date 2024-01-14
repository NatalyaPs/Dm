<!-- страница для стора - называлась PostPage -->



<!-- ************************************************ -->




<template>
    <div>
        <!-- <MyInput
            v-model="searchQuery"
            placeholder="Поиск"
        /> -->


            <!-- раскомментировать -->
        <MyInput
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Поиск"
        />
        <div class="app_btns">
            <MyButton
                @click="showDialog"
            >
                Создать пост
            </MyButton>


            <!-- <MySelect
                v-model="selectedSort"
                :options="sortOptions"
            /> -->
            

            <!-- раскомментировать -->
            <MySelect
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
                :options="sortOptions"
            />
        </div>
        <MyDialog v-model:show="dialogVisible">
            <PostForm
                @create="createPost"
            />
        </MyDialog>
        <PostList 
            :posts="sortedAndSearhedPosts"
            @remove="removePost"
            v-if="!isPostLoading"
        />
        <div v-else>Загрузка...</div>


        <div ref="observer"></div>

        
        <!-- <div v-intersection="loadMorePosts" class="observer"></div> -->
        <!-- <div class="page__wrapper">
            <div
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                class="page"
                :class="{
                    'current-page': page === pageNumber
                    }"
                @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div> -->


    </div>
    
    <!-- прослушиваем событи от ребенка @remove и вызываем на него соответствующую ф-ю-->
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyDialog from '@/components/UI/MyDialog.vue';
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";

import axios from 'axios';
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

export default {
    name: 'PostPage',
    components: { PostForm, PostList, MyDialog, MyButton, MySelect, MyInput },
    data() {
        return {
            // 1111111111111111111
            dialogVisible: false,
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'setPage',
            setSearchQuery: 'setSearchQuery',
            setSelectedSort: 'setSelectedSort',
            // 11111111111111111111
            // createPost: 'createPost',
        }),
        ...mapActions({
            loadMorePosts: 'loadMorePosts',
            fetchPosts: 'fetchPosts'
        }),
        // 111111111111111
        createPost(post) {
            this.posts.unshift(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true;
        },
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        ...mapState({
            posts: state => state.posts,  
            isPostLoading: state => state.isPostLoading,
            selectedSort: state => state.selectedSort,
            searchQuery: state => state.searchQuery,
            page: state => state.page,
            limit: state => state.limit,
            totalPages: state => state.totalPages,
            sortOptions:  state => state.sortOptions,
        }),
        ...mapGetters({
            sortedPost: 'sortedPost',
            sortedAndSearhedPosts: 'sortedAndSearhedPosts'
        })
    },
}
</script>

<style lang="scss">

</style>