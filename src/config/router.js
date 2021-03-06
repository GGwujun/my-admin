import {
	Login,
	Home,
	NotFound
} from '../components/';

module.exports = [{
	path: '/',
	redirect: to => {
		return 'login';
	},
	hidden: true
}, {
	path: '/login',
	component: Login,
	hidden: true
}, {
	path: '/404',
	component: Home,
	hidden: true,
	children: [{
		path: '',
		component: NotFound
	}]
}].concat(require('./router/demo.js'))
