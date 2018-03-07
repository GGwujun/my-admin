/**
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要用的接口
 * @type {Object}
 */
var request = [{
	module: 'user',
	name: '用户管理',
	list: require('./request/user.js')
}, {
	module: 'article',
	name: '文章管理',
	list: require('./request/article.js')
}, {
	module: 'course',
	name: '课程管理',
	list: require('./request/course.js')
}, {
	module: 'class',
	name: '分类管理',
	list: require('./request/class.js')
}, {
	module: 'message',
	name: '消息管理',
	list: require('./request/message.js')
}, {
	module: 'system',
	name: '系统设置',
	list: require('./request/system.js')
}, {
	module: 'open',
	name: '第三方接入',
	list: require('./request/open.js')
}];

module.exports = request;


