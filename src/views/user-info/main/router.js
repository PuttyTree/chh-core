/**
 * Created by yongli.chen on 2017/9/19.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '../modules/login/login';
import Address from '../modules/address/address';
import MyCar from '../modules/my-car/my-car';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/address/:tag',
        name: 'address',
        component: Address
    }, {
        path: '/mycar/',
        name: 'mycar',
        component: MyCar
    }
];

const router = new VueRouter({
    routes
});

export default router