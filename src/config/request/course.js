/**
 * Created by sailengsi on 2017/4/30.
 */
/**
 * 文章管理
 * @type {Object}
 */
module.exports = [
	{
		name: '获取文章列表',
		method: 'selectCourse',
		path: '/Course/selectCourse',
		type: 'get',
	},
	{
		name: '添加/修改文章',
		method: 'saveCourse',
		path: '/Course/saveCourse',
		type: 'post',
	},

	{
		name: '删除文章',
		method: 'deleteCourse',
		path: '/Course/deleteCourse',
		type: 'post',
	},
	{
		name: '查看文章详情',
		method: 'findCourse',
		path: '/Course/findCourse',
		type: 'post',
	},
	{
		name: '获取所有一级文章',
		method: 'selectPCourse',
		path: '/Course/selectPCourse',
		type: 'get',
	}
];