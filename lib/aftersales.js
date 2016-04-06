/**
 * 文章相关api
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
module.exports = function(options) {
    var api = require('./api')(options);

    return {
        /**
         * @api {get} /aftersales/aftersales
         * @apiName 售后申请列表
         * @apiGroup
         * @return {data} 返回参数
         */
        getAftersales: function(data) {
            return api.get('/aftersales/aftersales', data);
        },
        /**
         * @api {get} /aftersales/aftersales
         * @apiName 售后申请详情
         * @apiGroup
         * @return {data} 返回参数
         */
        getItem: function(id, data) {
            return api.get('/aftersales/aftersales/' + id, data);
        },
        /**
         * @api {get} /aftersales/aftersales
         * @apiName 修改售后申请详情
         * @apiGroup
         * @return {data} 返回参数
         */
        putItem: function(id, data) {
            return api.put('/aftersales/aftersales/' + id, data);
        },
        /**
         * @api {get} /aftersales/aftersales
         * @apiName 售后申请详情用户记录
         * @apiGroup
         * @return {data} 返回参数
         */
        getFeedbackLog: function(data) {
            return api.get('/aftersales/feedbackLog', data);
        },
        /**
         * @api {get} /aftersales/aftersales
         * @apiName 售后申请详情用户记录
         * @apiGroup
         * @return {data} 返回参数
         */
        postFeedbackLog: function(data) {
            return api.post('/aftersales/feedbackLog', data);
        },
        /**
         * @api {get} /aftersales/aftersales
         * @apiName 售后申请详情用户记录标签
         * @apiGroup
         * @return {data} 返回参数
         */
        getFeedbackNote: function(data) {
            return api.get('/feedback/feedbackNote', data);
        },
        /**
         * @api {get} /aftersales/aftersales
         * @apiName 提交售后申请详情用户记录标签
         * @apiGroup
         * @return {data} 返回参数
         */
        postFeedbackNote: function(data) {
            return api.post('/feedback/feedbackNote', data);
        },
        /**
         * @api {get} /aftersales/aftersales
         * @apiName 绑定售后申请详情用户记录标签
         * @apiGroup
         * @return {data} 返回参数
         */
        postFeedbackLogNote: function(data) {
            return api.post('/feedback/feedbackLogNote', data);
        },
        /**
         * @api {get} /aftersales/order
         * @apiName  创建换货订单
         * @apiGroup
         * @return {data} 返回参数
         */
        postAftersalesOrder: function(data) {
            return api.post('/aftersales/order', data);
        }
    };
};
