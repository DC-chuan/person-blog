import Vue from "vue";

import VueRouter from "vue-router";

import BlogDetail from '../pages/BlogDetail.vue';
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
    //修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default new VueRouter({
    routes: [{
        name: 'blogdetail',
        path: '/blogdetail',
        component: BlogDetail
    }]
})