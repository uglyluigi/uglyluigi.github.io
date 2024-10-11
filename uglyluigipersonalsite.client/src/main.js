import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AboutMe from './components/AboutMe.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'
import Nonogram from './components/Nonogram.vue'
import CV from './components/CV.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: AboutMe },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
    { path: '/nonogram', component: Nonogram },
    { path: '/cv', component: CV }
]

const router = createRouter(
    {
        history: createMemoryHistory(),
        routes,
    }
);

createApp(App)
    .use(router)
    .mount('#app')
