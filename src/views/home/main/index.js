import Vue from 'vue'
import App from './index.vue'

/*
 new Vue({
 render: h => h(App)
 }).$mount('#app')
 */

if (window.device) {
    window.apiready = function () {
        new Vue({
            render: h => h(App)
        }).$mount('#app')

    }

} else {
    new Vue({
        render: h => h(App)
    }).$mount('#app')

}
