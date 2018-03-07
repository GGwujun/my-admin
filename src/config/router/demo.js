/**
 * Created by sailengsi on 2017/4/30.
 */
import {
	Home,
	Content,
	Modules
} from '../../components/';

module.exports = [{
	path: '/demo',
	name: '真实交互',
	icon: 'inbox',
	component: Home,
	redirect: '/demo/user',
	children: [{
		path: 'user',
		name: '用户管理',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/user/list',
		children: [{
			path: 'list',
			name: '用户列表',
			icon: 'reorder',
			component: Modules.Demo.User.List
		}, {
			path: 'edit',
			name: '编辑用户',
			icon: 'edit',
			component: Modules.Demo.User.Edit
		}, {
			path: 'access',
			hidden: true,
			name: '设置权限',
			icon: 'edit',
			component: Modules.Demo.User.Access
		}]
	}, {
		path: 'course',
		name: '课程管理',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/article/list',
		children: [{
			path: 'list',
			name: '课程列表',
			icon: 'reorder',
			component: Modules.Demo.Course.List
		}, {
			path: 'edit',
			name: '编辑课程',
			icon: 'edit',
			component: Modules.Demo.Course.Edit
		}]
	},
	{
		path: 'class',
		name: '课程分类',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/class/list',
		children: [{
			path: 'list',
			name: '分类列表',
			icon: 'reorder',
			component: Modules.Demo.Class.List
		}, {
			path: 'edit',
			name: '编辑分类',
			icon: 'edit',
			component: Modules.Demo.Class.Edit
		}]
	},
	{
		path: 'message',
		name: '消息管理',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/message/list',
		children: [{
			path: 'list',
			name: '消息列表',
			icon: 'reorder',
			component: Modules.Demo.Message.List
		}, {
			path: 'edit',
			name: '发送消息',
			icon: 'edit',
			component: Modules.Demo.Message.Edit
		}]
	}
	]
}];