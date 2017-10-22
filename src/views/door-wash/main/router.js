/**
 * Created by yongli.chen on 2017/9/19.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from "../modules/home/home";
import Reservation from '../modules/home/reservation';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
     },
    {
        path: '/reservation',
        name: 'reservation',
        component: Reservation
    }
];

const router = new VueRouter({
    routes
});

export default router