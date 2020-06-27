import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Register from '@/components/Registration';
import Home from '@/components/Home';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { path: '/Home', component: Home},
        { path: '/', component: Login },
        { path: '/Register', component: Register },
    ]
});