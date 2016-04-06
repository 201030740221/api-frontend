module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * 获取秒杀列表
         * @param  {[type]} aid  活动id
         * @param  {[type]} data 其他参数
         */
        list: function(data) {
            return api.get('/flash-sale', data);
        },
        get: function(id, data) {
            data = data || {};
            data.fsId = id;
            return api.get('/flash-sale/show', data);
        },
        remove: function(id) {
            var data = {};
            data.fsId = id;
            return api.post('/flash-sale/destroy/', data);
        },
        update: function(data) {
            return api.post('/flash-sale/update/', data);
        },
        create: function(data) {
            return api.post('/flash-sale/store/', data);
        },
        // 冻结
        freeze: function(id) {
            var data = {};
            data.fsId = id;
            return api.post('/flash-sale/freeze/', data);
        },
        // 激活
        activate: function(id) {
            var data = {};
            data.fsId = id;
            return api.post('/flash-sale/activate/', data);
        },
        // 冻结、激活二合一方法
        lock: function (id, isLock) {
            var method = isLock ? 'freeze' : 'activate';
            return this[method](id);
        },
        // 查看订阅提醒
        reminder: function(data) {
            return api.get('/flash-sale/reminder-users/' + data.id, data);
        },
        // 查看秒杀记录
        log: function(data) {
            return api.get('/flash-sale/logs/' + data.id, data);
        }
    };
};
