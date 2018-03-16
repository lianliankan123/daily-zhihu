import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import article from './views/article'
import theme from './views/theme'
import user from './views/user'
import userIndex from './views/userIndex'
import follow from './views/follow'
import discover from './views/discover'
import login from './views/login'
import registe from './views/registe'
Vue.use(Router)
const router = new Router({
	mode: 'hash',
	routes: [
		{
		path: '/home',
		component: home,
		children:[
			{path:'/home/follow', component:follow},
			{path:'/home/discover', component:discover}
		],
		name: 'home'
	}, {
		path: '/article',
		component: article,
		name: 'article'
	}, {
		path: '/theme',
		component: theme,
		name: 'theme'
	}, {
		path: "/user",
		component: user,
		name: 'user'
	}, {
            path: "/userIndex",
            component: userIndex,
            name: 'userIndex'
	}, {
			path: "/login",
			component: login,
			name: "login"
	}, {
			path: "/registe",
			component: registe,
			name:"registe"
	}]
})
export default router