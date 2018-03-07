/**
 * Created by sailengsi on 2017/4/30.
 */

/**
 * 用户模块
 * @type {Object}
 */
module.exports = [
	{
		name  : '登录',
		method: 'login',
		path  : '/user/login',
		type  : 'post',
	},
	{
		name  : '注册',
		method: 'register',
		path  : '/User/register',
		type  : 'post',
	},
	{
		name  : '获取用户列表',
		method: 'selectUser',
		path  : '/user/getusers',
		type  : 'post',
	},

	{
		name  : '添加修改用户公用接口',
		method: 'saveUser',
		path  : '/user/saveuser',
		type  : 'post',
	},
	{
		name  : '删除用户',
		method: 'deleteUser',
		path  : '/user/deleteuser',
		type  : 'post',
	},
	{
		name  : '获取用户信息',
		method: 'findUser',
		path  : '/user/finduser',
		type  : 'get',
	},

	{
		name  : '修改密码',
		method: 'updatePass',
		path  : '/user/updatepass',
		type  : 'post',
	},
	{
		name  : '设置权限',
		method: 'updateUserAccess',
		path  : '/user/updateuserAccess',
		type  : 'post',
	},
	{
		name  : '设置用户状态',
		method: 'updateUser',
		path  : '/user/updateuser',
		type  : 'post',
	}
];