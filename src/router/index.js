import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/Layout/Layout'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/login/login'
import Container from '../components/Container/Container'
import test from '../components/test/test'
import FirstPage from '../components/content/FirstPage'
import SecondPage from '../components/content/SecondPage'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/first',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/container',
    name: 'Container',
    component: Container
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout,
    meta: {
      title: '',
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/firstpage',
    name: 'FirstPage',
    component: FirstPage
  },
  {
    path: '/secondpage',
    name: 'SecondPage',
    component: SecondPage
  }
  ]
})
