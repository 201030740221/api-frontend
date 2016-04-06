module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /topic 主题列表
         * @apiName  getCouponList
         * @apiGroup coupon
         */
        getTopics: function(data) {
            return api.get('/topic', data);
        },
        topicsListUrl: options.host + '/topic',
        /**
         * @api {post} /topic 添加主题
         * @apiName  getCouponList
         * @apiGroup coupon
         */
        addTopic: function(data) {
            return api.post('/topic', data);
        },
        /**
         * @api {detele} /topic/{id} 删除单条主题
         * @apiName  getCouponList
         * @apiGroup coupon
         */
        removeTopic: function(id, data) {
            return api.remove('/topic/'+id, data);
        },
        /**
         * @api {get} /topic/{id} 获得单条专题
         * @apiName  getCouponList
         * @apiGroup coupon
         */
        getTopic: function(id, data) {
            return api. get('/topic/'+id, data);
        },
        /**
         * @api {put} /topic/{id} 修改单条专题
         * @apiName  getCouponList
         * @apiGroup coupon
         */
        updateTopic: function(id, data) {
            return api.put('/topic/'+id, data);
        },

        /** @parker
         *
         * @api {get} /topic/pic 获取专题图片资源列表
         * @apiName  getTopicPic
         * @apiGroup topic
         */
        getTopicPicture: function(data) {
            return api.get('/topic/pic', data);
        },
        topicsPictureUrl: options.host + '/topic/pic',
        /**
         * @api {get} /topic/pic/export 导出专题图片资源路径
         * @apiName  export
         * @apiGroup topic
         */
        getTopicExport: function(data) {
            return api.get('/topic/pic/export', data);
        },
        /**
         * @api {post} /topic/pic/attach 关联专题图片资源
         * @apiName  attach
         * @apiGroup topic
         */
        updateTopicPicture: function(data) {
            return api.post('/topic/pic/attach', data);
        },
        /**
         * @api {post} /topic/pic/detach 取消专题图片资源关联
         * @apiName  attach
         * @apiGroup topic
         */
        removeTopicPicture: function(data) {
            return api.post('/topic/pic/detach', data);
        },
    };
};
