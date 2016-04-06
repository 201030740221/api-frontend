/**
 * 活动管理 API
 */

module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /activity/activity
         * @apiName 活动 API
         * @apiGroup activity
         * @return {data} 数据
         */
        activity: api.rest('/activity'),
        promotionGoods: api.rest('/activity/{{activityId}}/promotionGoods'),
        promotionOrder: api.rest('/activity/{{activityId}}/promotionOrder'),
        /**
         * @api {put} activity/{activityId}/status
         * @apiName 修改活动状态
         * @apiGroup activity
         * @return {data} 数据
         */
        changeActivityStatus: function(id, data) {
            return api.put('/activity/' + id + '/status', data);
        },
        /**
         * @api {put} activity/{activityId}/status
         * @apiName 修改商品促销状态
         * @apiGroup activity
         * @return {data} 数据
         */
        changeActivityPromotionGoodsStatus: function(activityId, promotionGoodsId, data) {
            return api.put('/activity/' + activityId + '/promotionGoods/' + promotionGoodsId + '/status', data);
        },
        /**
         * @api {put} activity/{activityId}/status
         * @apiName 修改订单促销状态
         * @apiGroup activity
         * @return {data} 数据
         */
        changeActivityPromotionOrderStatus: function(activityId, promotionOrderId, data) {
            return api.put('/activity/' + activityId + '/promotionOrder/' + promotionOrderId + '/status', data);
        },
        /**
         * @api {get} /activity/{$activityId}/statistics
         * @apiName 获取活动统计数据
         * @apiGroup activity
         * @return {data} 数据
         */
        activityStatistics: function(activityId, data) {
            return api.get('/activity/' + activityId + '/statistics', data);
        },
        exportTableUrl: function(id) {
            return options.host + '/activity/' + id + '/exportTable'
        },
    };
};
