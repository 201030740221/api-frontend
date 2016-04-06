module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         *
         * @apiName 获取省市区信息
         * @apiGroup
         * @return {data} 返回参数
         */
        getRegion: function() {
            return api.get('/region/region');
        }
    };
};
