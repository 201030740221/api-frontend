module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /qiniu/uptoken
         * @apiName 七牛直传
         * @apiGroup
         * @return {data} 返回参数
         */
        getToken: function() {
            return api.get('/qiniu/uptoken');
        }
    };
};
