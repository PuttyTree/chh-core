/**
 * Created by yongli.chen on 2017/9/19.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from "../modules/home/home";
import Login from '../modules/login/login';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }
];

const router = new VueRouter({
    routes
});

export default router