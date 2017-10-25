import Vue from 'vue'
import App from './index.vue'
import RestAppService from '../rest/RestAppService';
import RestService from '../rest/RestService';


/*
 new Vue({
 render: h => h(App)
 }).$mount('#app')
 */

if (window.device === 'app') {

    Vue.prototype.restApi = new RestAppService();
    window.apiready = function () {
        new Vue({
            render: h => h(App)
        }).$mount('#app');

    }

} else {
    Vue.prototype.restApi = new RestService();
    new Vue({
        render: h => h(App)
    }).$mount('#app');

}
