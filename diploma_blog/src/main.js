import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';  // импортируем массив импортов UI компонентов - index.js в UI
import router from '@/router/router';

const app = createApp(App)

// глобальная регистрация UI компонентов (см стр 3) - ф-я component
components.forEach(component => {
    app.component(component.name, component)
});

app.use(router)
app.mount('#app')