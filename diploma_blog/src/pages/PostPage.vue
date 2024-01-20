<template>
    <div class="center">
        <MyInput
            v-model="searchQuery"
            placeholder="Поиск"
        />
        <div class="search-btn">
            <MyButton
                @click="showDialog"
            >
                Создать пост
            </MyButton>
            <MySelect
                v-model="selectedSort"
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
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyDialog from '@/components/UI/MyDialog.vue';
import MyButton from '@/components/UI/MyButton.vue';
import axios from 'axios';

export default {
    name: 'PostPage',
    components: { PostForm, PostList, MyDialog, MyButton, },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 20,
            totalPages: 0,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержанию'},
            ]
        }
    },
    methods: {
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
        async fetchPosts() {
            try {
                this.isPostLoading = true;
                // делаем запрос на сервис
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                // высчитываем ск-ко страниц. Общее кол-во постов делим на кол-во постов на 1 странице, округляя в большую сторону 
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = response.data;
            } catch (error) {
                alert('Ошибка');
            } finally {
                this.isPostLoading = false;
            }
        },
        // для загрузки бесконечной ленты постов "загрузить больше сообщений"
        async loadMorePosts() {
            try {
                this.page += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                // высчитываем ск-ко страниц. Общее кол-во постов делим на кол-во постов на 1 странице, округляя в большую сторону
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data]; // добавляем посты в конец массива для ленты
            } catch (error) {
                alert('Ошибка');
            } 
        },
    },
    mounted() {
        // отслеживание пересечения эл-та, т.е.разделителя наших постов по 10шт
        this.fetchPosts();
        // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        // начинаем следить за перечечением
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries, observer) => { // отработает, когда пересечем эл-т . Единожды !
            if(entries[0].isIntersecting && this.page < this.totalPages) {    //ограничение подгрузки в конце ленты
                this.loadMorePosts();
            }
        };
        const observer = new IntersectionObserver(callback, options); // создаваемый на основании этой опции колбэк
        observer.observe(this.$refs.observer);
    },
    computed: {
        // используем эту ф-ю как переменную, земенив :posts="posts" в PostList на :posts="sortedPosts"
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortedAndSearhedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
}
</script>

<style lang="scss">
.search-btn {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
}
</style>