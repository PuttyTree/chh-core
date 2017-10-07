import Vue from 'vue'
import App from './index.vue'
import router from './router';
if (window.device) {
    window.device = function () {
        new Vue({
            router,
            render: h => h(App)
        }).$mount('#app')
    }
} else {
    new Vue({
        router,
        render: h => h(App)
    }).$mount('#app')
}

