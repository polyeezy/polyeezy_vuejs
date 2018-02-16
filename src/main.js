import Vue from 'vue'
import App from './vues/Home/Home.vue'
import NotFound from './vues/Home/Home.vue'

require('../node_modules/materialize-css/dist/css/materialize.min.css');
require('../node_modules/materialize-css/dist/js/materialize.min.js');

Vue.config.productionTip = false;

const routes = {
    '/': App,
    '/portfolio': App
}

new Vue({
  render: h => h(App)
}).$mount('#app')

new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent () {
            return routes[this.App] || NotFound
        }
    },
    render (h) { return h(this.ViewComponent) }
})