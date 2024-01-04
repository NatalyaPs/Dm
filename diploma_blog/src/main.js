import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';  // импортируем массив UI компонентов - index.js в UI
import router from './router';
import store from './store';

const app = createApp(App);

// глобальная регистрация UI компонентов
components.forEach(component => {
    app.component(component.name, component)
});


app.use(store)
    .use(router)
    .mount('#app');
