module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /user/checkLogin
         * @apiName 检查当前登录用户是否存在
         * @apiGroup
         * @return {data} 返回参数
         */
        checkLogin: function() {
            return api.get('/user/checkLogin');
        },
        login: function(data) {
            return api.post('/user/login', data);
        },
        logout: function() {
            return api.post('/user/logout');
        },
    };
};
