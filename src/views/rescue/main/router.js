/**
 * Created by yongli.chen on 2017/9/19.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from "../modules/home/home";
import List from  '../modules/list/list';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/list',
        name: 'list',
        component: List
    }
];

const router = new VueRouter({
    routes
});

export default router