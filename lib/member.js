module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /member/example
         * @apiName 例子
         * @apiGroup member
         * @return {member} 返回参数
         */
        example: function() {
            return api.get('/member/example');
        },
        /**
         * @api {get} /member
         * @apiName 用户列表
         * @apiGroup member
         * @return {data} 数据
         */
        getList: function(data) {
            return api.get('/member', data);
        },
        /**
         * @api {get} /memberPointList
         * @apiName 用户积分列表
         * @apiGroup member
         * @return {data} 数据
         */
        getPointList: function(data) {
            return api.get('/member/getPointList', data);
        },
        /**
         * @api {get} /member/pointAdjustment
         * @apiName 调整积分
         * @apiGroup member
         * @return {data} 数据
         */
        adjustPoint: function(data) {
            return api.post('/member/pointAdjustment', data);
        },
        /**
         * @api {get} /member/registrations
         * @apiName 用户注册统计
         * @apiGroup member
         * @return {data} 数据
         */
        getRegister: function(data) {
            return api.get('/member/registrations', data);
        },
        /**
         * @api {post} /member/createAddress
         * @apiName 创建地址
         * @apiGroup member
         * @return {data} 数据
         */
        createAddress: function(data) {
            return api.post('/member/createAddress', data);
        }
    };
};
