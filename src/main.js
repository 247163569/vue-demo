
//导入vue
import Vue from 'vue'
//导入vue-router,并且使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入 vue-resource，并使用
import VueResource from 'vue-resource'
Vue.use(VueResource)
//导入pages下的home.vue和detail.vue
import Home from './pages/Home'
import Detail  from './pages/Detail'

//定义路由的配置
const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path:'/detail',
    component:Detail
  }
]
//创建路由的实例
const router = new VueRouter({
  routes
})
new Vue({
  el:'#app',
  data(){
    return {
      transitionName:"slide"
    }
  },
  router,
  watch:{
    '$route'(to,from){
        const toDepth = to.path.substring(0, to.path.length-2).split('/').length
        const fromDepth = from.path.substring(0, from.path.length-2).split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
      }
  }
})

