module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /coupon/task 获取优惠券列表
         * @apiName  getCouponList
         * @apiGroup coupon
         */
        getCouponList: function(data) {
            return api.get('/coupon/task', data);
        },
        getCoupon: function(data) {
            return api.get('/coupon', data);
        },
        getCouponTask: function(id, data) {
            return api.get('/coupon/task/' + id, data);
        },
        removeCoupon: function(id, data) {
            return api.remove('/coupon/task/' + id, data);
        },
        updateCoupon: function(id, data) {
            return api.put('/coupon/task/' + id, data);
        },
        createCoupon: function(data) {
            return api.post('/coupon/task', data);
        },
         /**
         * @api {get} /coupon/member 获取用户优惠券列表
         * @apiName  getUserCoupon
         * @apiGroup coupon
         */
        getUserCoupon: function(data) {
            return api.get('/coupon/member', data);
        }
    };
};
