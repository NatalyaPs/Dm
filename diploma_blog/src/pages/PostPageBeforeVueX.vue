<template>
    <div>
        <MyInput
            v-model="searchQuery"
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
    
    <!-- прослушиваем событи от ребенка @remove и вызываем на него соответствующую ф-ю-->

    <!-- @update="updatePost" -->
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyDialog from '@/components/UI/MyDialog.vue';
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import axios from 'axios';

export default {
    name: 'PostPageBeforeVueX',
    components: { PostForm, PostList, MyDialog, MyButton, MySelect, MyInput },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: false, // индикатор загрузки - может заменить на крутилку?
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 20,
            totalPages: 0,
            // sortOptions: [
            //     {value: 'title', name: 'По названию'},
            //     {value: 'body', name: 'По содержанию'},
            // {value: 'id', name: 'По дате'},   // добавить сортировку по дате?
            // ]
        }
    },
    methods: {
        createPost(post) {
            // if(post.title !== '' && post.body !== '') {
                this.posts.unshift(post);
            // } else {
            //     alert('Заполните все поля формы')
            // }
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        //   ***********
        // updatePost(updatedPost) {
        //     this.posts = this.posts.map(post => {
        //         if (post.id === updatedPost.id) {
        //             post.title = updatedPost.title;
        //             post.body = updatedPost.body;
        //         }
        //         return post;
        //     });
        // },
        showDialog() {
            this.dialogVisible = true;
        },

        // changePage(pageNumber) {
        //   this.page = pageNumber;
        //   this.fetchPosts(); // можно сделать в watch
        // },

        // https://ru.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
        // загружаем данные
        async fetchPosts() {
            try {
                this.isPostLoading = true;
                // this.$refs.observer                       //////////////////////// ??????????????????
            // делаем запрос на сервис
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                // высчитываем ск-ко страниц. Общее кол-во постов делим на кол-во постов на 1 странице, округляя в большую сторону (101 / 10 = 11)
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
                // this.page + 1;
                this.page += 1;
                // this.isPostLoading = true;
                // делаем запрос на сервис
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                // высчитываем ск-ко страниц. Общее кол-во постов делим на кол-во постов на 1 странице, округляя в большую сторону (101 / 10 = 11)
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = [...this.posts, ...response.data]; // добавляем посты в конец массива для ленты
            } catch (error) {
                alert('Ошибка');
            } 
        // finally {
        //   this.isPostLoading = false;
        // }
        },
    },
    mounted() {
        // отслеживание пересечения эл-та, т.е.разделителя наших постов по 10шт
        this.fetchPosts();
        // console.log(this.$refs.observer); ///     (1:54)
        // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        // начинаем следить за перечечением   (1:53   !!!!!!!!!!!!!!!!!!!!!!!!!!!!)
        const options = {
            // root: document.querySelector("#scrollArea"),
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries, observer) => { // отработает, когда пересечем эл-т . Единожды !
            if(entries[0].isIntersecting && this.page < this.totalPages) {    // 1:56 и 1:58 - ограничение подгрузки в конце ленты
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
    
    watch: {
      // ф-я наблюдатель отрабатывает на смену страницы
      // page() {
      //   this.fetchPosts()
      // }
      //-----------------
      // selectedSort(newValue) {
      //   this.posts.sort((post1, post2) => {
      //     // return post1[this.selectedSort] ?. localCompare(post2[this.selectedSort]);
      //     return post1[newValue] ?.localeCompare(post2[newValue])
      //   });
      // }
    }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 12px;
    &_btns {
        display: flex;
        justify-content: space-between;
        margin: 15px, 0;
    }
}

</style>