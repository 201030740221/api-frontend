module.exports = function(options) {
    var api = require('./api')(options);
    return {

        getLotteryList: function(data) {
            return api.get('/lottery',data);
        },

        removeLottery: function (id, data) {
            return api.remove('/lottery/' + id, data);
        },

        addLottery: function(data) {
            return api.post('/lottery',data);
        },

        lotteryDetail: function (id, data) {
            return api.get('/lottery/' + id, data);
        },

        updateLotteryDetail: function (id, data) {
            return api.patch('/lottery/' + id, data);
        },

        lotteryRecord: function (data) {
            return api.get('/lottery/result', data);
        }

    };
};
