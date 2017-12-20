import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import article from './views/article'
import theme from './views/theme'
import user from './views/user'
Vue.use(Router)
const router = new Router({
	mode: 'hash',
	routes: [{
		path: '/home',
		component: home,
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
	}]
})
export default router