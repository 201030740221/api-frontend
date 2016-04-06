/**
 * 文章相关api
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
module.exports = function(options) {
    var api = require('./api')(options);

    return {
        /**
         * @api {get} /user/checkLogin
         * @apiName 检查当前登录用户是否存在
         * @apiGroup
         * @return {data} 返回参数
         */
        getCategory: function(data) {
            return api.get('/article/categories', data);
        },
        addCategory: function(data) {
            return api.post('/article/categories', data);
        },
        updateCategory: function(id, data) {
            return api.put('/article/categories/' + id, data);
        },
        updateCategoryStatus: function(id, data) {
            return api.post('/article/categories/' + id + '/status', data);
        },
        listCategoryUrl: options.host + '/article/categories',
        listCategory: function(data) {
            return api.get('/article/categories', data);
        },
        removeCategory: function(id, data) {
            return api.remove('/article/categories/'+ id, data);
        },
        getInfo: function (id, data) {
            return api.get('/articles/' + id, data);
        },
        add: function(data) {
            return api.post('/articles', data);
        },
        update: function(data, id) {
            return api.put('/articles/' + id, data);
        },
        listUrl: options.host + '/articles',
        list: function(data) {
            return api.get('/articles', data);
        },
        remove: function(id, data) {
            return api.remove('/articles/' + id, data);
        },
        status: function(id, data) {
            return api.post('/articles/' + id + '/status', data);
        },
        sort: function(data) {
            return api.put('/articles/srot', data);
        },
        sync_url: options.host + '/articles/external/sync',
        sync: function(data) {
            return api.get('/articles/external/sync', data);
        },
        syncPublish: function(data) {
            return api.post('/articles/external/publish', data);
        },
        // 某节点下的头条列表
        getHeadlines: function(data) {
            return api.get('/article/node/headlines', data);
        },
        getHeadlines_url: options.host + '/article/node/headlines',
        addHeadlines: function(data) {
            return api.post('/article/node/headlines', data);
        },
        removeHeadlines: function(id, data) {
            return api.remove('/article/node/headlines/' + id, data);
        },
        editHeadlines: function(id, data) {
            return api.put('/article/node/headlines/' + id, data);
        },
        setHeadlinesStatus: function(data) {
            return api.put('/article/node/headlines/status', data);
        },
        setHeadlinesSort: function(data) {
            return api.put('/article/node/headlines/sort', data);
        },
        // 节点管理
        getNodeList: function (data) {
            return api.get('/article/nodes', data);
        },
        addNode: function (data) {
            return api.post('/article/nodes', data);
        },
        updateNode: function (id, data) {
            return api.put('/article/nodes/' + id, data);
        },
        updateNodeStatus: function (data) {
            return api.put('/article/nodes/status', data);
        },
        removeNode: function (id, data) {
            return api.remove('/article/nodes/' + id, data);
        },
        listNode: function (data) {
            return api.get('/article/nodes', data);
        },
        sortNode: function (data) {
            return api.put('/article/nodes/sort', data);
        },
        listNodeUrl: options.host + '/article/nodes',
        setDefault: function (id) {
            return api.post('/article/nodes/setDefault/' + id);
        }
    };
};
