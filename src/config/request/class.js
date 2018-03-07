/**
 * Created by sailengsi on 2017/4/30.
 */
/**
 * 文章管理
 * @type {Object}
 */
module.exports = [
	{
		name: '获取分类列表',
		method: 'selectClass',
		path: '/Class/selectClass',
		type: 'get',
	},
	{
		name: '添加/修改分类',
		method: 'saveClass',
		path: '/Class/saveClass',
		type: 'post',
	},
	{
		name: '查找分类',
		method: 'findClass',
		path: '/Class/findClass',
		type: 'post',
	},
	{
		name: '删除分类',
		method: 'deleteClass',
		path: '/Class/deleteClass',
		type: 'post',
	}
];