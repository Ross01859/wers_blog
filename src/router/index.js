import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import headernav from '@/components/Headernav'
import contentnav from '@/components/Contentnav'
import about from '@/components/About'
import life from '@/components/Life'
import share from '@/components/Share'
import learn from '@/components/Learn'
import gbook from '@/components/Gbook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components:{
      	head:headernav,
      	content:contentnav
      }
    },
    {
      path: '/home',
      redirect:'/'
    },
    {
      path: '/about',
      components:{
      	head:headernav,
      	content:about
      }
    },
    {
      path: '/life',
      components:{
      	head:headernav,
      	content:life
      }
    },
    {
      path: '/share',
      components:{
      	head:headernav,
      	content:share
      }
    },
    {
      path: '/learn',
      components:{
      	head:headernav,
      	content:learn
      }
    },
    {
      path: '/gbook',
      components:{
      	head:headernav,
      	content:gbook
      }
    }
  ]
})
