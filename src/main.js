import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import About from './components/About.vue'
import Other from './components/Other.vue'
const Lazy = r => require.ensure([], () => r(require('./components/LazyLoadMePlease.vue')))
const Home = { template: '<div><h2>Home Page</h2></div>'}
const Contact = { template: '<div><h2>Contact Page</h2></div>'}

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/lazy', component: Lazy },
  { path: '/contact', component: Contact },
  { path: '/other', component: Other }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
