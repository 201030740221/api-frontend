/**
 * 评价晒单管理 API
 */

module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /comment/goods
         * @apiName 获取评论列表
         * @apiGroup goods
         * @return {data} 数据
         */
        getCommentList: function(data) {
            return api.get('/comment/goods',data);
        },

        /**
         * @api {patch} /comment/goods
         * @apiName 更新评论
         * @apiGroup goods
         * @return {data} 数据
         */
        updateComment: function(id,data) {
            return api.put('/comment/goods/' + id, data);
        },

        /**
         * @api {post} /comment/goods/reply
         * @apiName 新增回复
         * @apiGroup goods
         * @return {data} 数据
         */
        replyComment: function(data) {
            return api.post('/comment/goods/reply',data);
        },

        /**
         * @api {post} /comment/goods/reply/{id}
         * @apiName 删除回复
         * @apiGroup goods
         * @return {data} 数据
         */
        removeReply: function(id, data) {
            return api.remove('/comment/goods/reply/' + id, data);
        },

        /**
         * @api {post} /comment/goods/reply/{id}
         * @apiName 编辑更新回复
         * @apiGroup goods
         * @return {data} 数据
         */
        updateReply: function(data) {
            return api.put('/comment/goods/reply/' + data.id, data);
        },
        /**
         * @api {get} /comment/goods/tag
         * @apiName 获取印象标签列表
         * @apiGroup goods
         * @return {data} 数据
         */
        getCommentTagsList: function(data) {
            return api.get('/comment/goods/tag',data);
        },

        /**
         * @api {post} /comment/goods/tag
         * @apiName 新增印象标签
         * @apiGroup goods
         * @return {data} 数据
         */
        addCommentTag: function(data) {
            return api.post('/comment/goods/tag',data);
        },

        /**
         * @api {patch} /comment/goods/tag
         * @apiName 更新印象标签
         * @apiGroup goods
         * @return {data} 数据
         */
        updateCommentTag: function(id,data) {
            return api.patch('/comment/goods/tag/'+id,data);
        },

        /**
         * @api {DELETE} /comment/goods/tag
         * @apiName 删除印象标签
         * @apiGroup goods
         * @return {data} 数据
         */
        deleteCommentTag: function(id,data) {
            return api.remove('/comment/goods/tag/'+id,data);
        },

        /**
         * @api {post} /comment/goods/goods/batch-update
         * @apiName 批量更新评论
         * @apiGroup goods
         * @return {data} 数据
         */
        batchUpdateComment: function(data) {
            return api.post('/comment/goods/batch-update',data);
        },

        /**
         * @api {get} /comment/goods/config
         * @apiName 获取评论设置
         * @apiGroup
         * @return {data} 数据
         */
        getCommentConfigList: function(data) {
            return api.get('/comment/goods/config',data);
        },
        /**
         * @api {post} /comment/goods/config/batch-set
         * @apiName 设置评论配置
         * @apiGroup goods
         * @return {data} 数据
         */
        setComment: function(data) {
            return api.post('/comment/goods/config/batch-set',data);
        },
        getConfig: function (data) {
            return this.getCommentConfigList(data);
        },
        setConfig: function (data) {
            return this.setComment(data);
        },

        /**
         * @api {post} /comment/goods
         * @apiName 新增
         * @apiGroup
         * @return {data} 数据
         */
        createVirtualComment: function(data) {
            return api.post('/comment/goods',data);
        },
    };
};
