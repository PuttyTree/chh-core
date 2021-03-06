/**
 * Created by yongli.chen on 2017/9/19.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from "../modules/home/home";
import Comment from '../modules/comment/comment';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/comment',
        name: 'comment',
        component: Comment
    }
];

const router = new VueRouter({
    routes
});

export default router
