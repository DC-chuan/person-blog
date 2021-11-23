import Vue from 'vue'
import App from './App.vue'

import { Tabs, TabPane, Button, Col, Result } from 'element-ui';
import VueRouter from 'vue-router';
import router from './router'
Vue.config.productionTip = false

Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.use(Button);
Vue.use(Col);
Vue.use(Result)
Vue.use(VueRouter)


new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    router: router,
}).$mount('#app')