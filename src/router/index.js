import Vue from 'vue'
import Router from 'vue-router'
import lazyLoad from '../lib/lazyLoad'
import About from '@/components/About'
import Home from '@/components/Home'
import Other from '@/components/Other'

Vue.use(Router)

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/lazy', component: lazyLoad('LazyLoadMePlease')},
  {path: '/other', component: Other}
]

export default new Router({
  routes,
  mode: 'history'
})
