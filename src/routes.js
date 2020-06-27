import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home'
import Login from '@/components/Login';
import Register from '@/components/Registration';
import Items from '@/components/Items';
import UserItems from "@/components/UserItems";

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home},
        { path: '/Items', component: Items, meta: {requiresAuth: true} },
        { path: '/Items/Me', component: UserItems, meta: {requiresAuth: true} },
        { path: '/Login', component: Login },
        { path: '/Register', component: Register },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (sessionStorage.getItem('userId') !== null) {
            next()
            return
        }
        next('/')
    } else {
        next()
    }
});