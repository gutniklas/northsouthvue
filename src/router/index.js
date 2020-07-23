import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import User from '../components/User.vue'
import Texttitle from '../components/Texttitle.vue'
import Liang from '../components/dynasty/Liang.vue'
import Song from '../components/dynasty/Song.vue'
import Qi from '../components/dynasty/Qi.vue'
import Wei from '../components/dynasty/Wei.vue'
import Xiaoqi from '../components/dynasty/Xiaoqi.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},

	{
		path: '/home',
		name: 'Home',
		component: Home,

		redirect: '/user',
		children: [{
				path: '/user',
				name: 'User',
				component: User,
				meta: {
					requireAuth: true
				}
			},
			{
				path: '/liang',
				name: 'Liang',
				component: Liang,
				meta: {
					requireAuth: true
				},
				childeren: [
				]
			},
			{
				path: '/song',
				name: 'Song',
				component: Song,
				meta: {
					requireAuth: true
				},
				childeren: [
				]
			},
			{
				path: '/qi',
				name: 'Qi',
				component: Qi,
				meta: {
					requireAuth: true
				},
				childeren: [
				]
			},
			{
				path: '/wei',
				name: 'Wei',
				component: Wei,
				meta: {
					requireAuth: true
				},
				childeren: [
				]
			},
			{
				path: '/xiaoqi',
				name: 'Xiaoqi',
				component: Xiaoqi,
				meta: {
					requireAuth: true
				},
				childeren: [
				]
			},
		]
	},
	{
			path: '/texttitle',
			name: 'Texttitle',
			component: Texttitle
		}


]

const router = new VueRouter({
	routes
})

export default router
