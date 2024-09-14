import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import xuesheng from '@/views/modules/xuesheng/list'
    import pingcebaogao from '@/views/modules/pingcebaogao/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import xinlipingce from '@/views/modules/xinlipingce/list'
    import storeup from '@/views/modules/storeup/list'
    import ceshileibie from '@/views/modules/ceshileibie/list'
    import pingcedajuan from '@/views/modules/pingcedajuan/list'
    import config from '@/views/modules/config/list'
    import discussxinliwenzhang from '@/views/modules/discussxinliwenzhang/list'
    import xinliwenzhang from '@/views/modules/xinliwenzhang/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/pingcebaogao',
        name: '评测报告',
        component: pingcebaogao
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/xinlipingce',
        name: '心理评测',
        component: xinlipingce
      }
      ,{
	path: '/storeup',
        name: '我的收藏',
        component: storeup
      }
      ,{
	path: '/ceshileibie',
        name: '测试类别',
        component: ceshileibie
      }
      ,{
	path: '/pingcedajuan',
        name: '评测答卷',
        component: pingcedajuan
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/discussxinliwenzhang',
        name: '心理文章评论',
        component: discussxinliwenzhang
      }
      ,{
	path: '/xinliwenzhang',
        name: '心理文章',
        component: xinliwenzhang
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
