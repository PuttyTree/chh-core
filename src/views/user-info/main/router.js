/**
 * Created by yongli.chen on 2017/9/19.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Login from '../modules/login/login';
import Address from '../modules/address/address';
import MyCar from '../modules/my-car/my-car';
import Consumption from '../modules/consumption/consumption';
import MyAddress from '../modules/my-address/my-address';

const routes = [
    {
        path: '',
        name: 'home',
        component: Login
    }/*,
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
    }, {
        path: '/consumption',
        name: 'consumption',
        component: Consumption
    }, {
        path: '/myaddress',
        name: 'myaddress',
        component: MyAddress

    }*/
];

const router = new VueRouter({
    routes
});

export default router