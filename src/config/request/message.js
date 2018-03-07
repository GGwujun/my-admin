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
        method: 'selectMessage',
        path: '/Message/selectMessage',
        type: 'get',
    },
    {
        name: '添加/修改文章',
        method: 'saveMessage',
        path: '/Message/saveMessage',
        type: 'post',
    },

    {
        name: '删除文章',
        method: 'deleteMessage',
        path: '/Message/deleteMessage',
        type: 'post',
    },
    {
        name: '查看文章详情',
        method: 'findMessage',
        path: '/Message/findMessage',
        type: 'get',
    }
];