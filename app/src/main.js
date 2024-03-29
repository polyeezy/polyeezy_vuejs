import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from './components/Container'
import Home from './vues/Home/Home.vue';

require('../node_modules/materialize-css/dist/css/materialize.min.css');
require('../node_modules/materialize-css/dist/js/materialize.min.js');

Vue.config.productionTip = false;

Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/portfolio/:cat',
        component: Home,
        name: 'portfolio-cat'
    },
    {
        path: '*',
        redirect: '/',
    }
];

var router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
});

new Vue({
    router,
    render: h => h(Container)
}).$mount('#app')

