module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /qiniu/uptoken 获取七牛直传图片所需要的token
         * @apiName  getQiniuToken
         * @apiGroup tools
         */
        getQiniuToken: function(data) {
            return api.get('/qiniu/uptoken', data);
        },
        /**
         * @api {get} /referral/log
         * @apiName 用户推荐列表
         * @apiGroup tools
         * @return {data} 数据
         */
        getReferralList: function(data) {
            return api.get('/referral/log', data);
        }
    };
};
