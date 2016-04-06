module.exports = function(options) {
    var api = require('./api')(options);
    return {

        getAdditionalBuy: function(activityId,data) {
            return api.get('/activity/'+activityId+'/additionalBuy',data);
        },

        removeAdditionalBuy: function (activityId, additionalBuyId) {
            return api.remove('/activity/'+activityId+'/additionalBuy/'+additionalBuyId);
        },

        createAdditionalBuy: function(activityId,data) {
            return api.post('/activity/'+activityId+'/additionalBuy',data);
        },

        additionalBuyDetail: function (activityId, additionalBuyId) {
            return api.get('/activity/'+activityId+'/additionalBuy/'+additionalBuyId);
        },

        updateAdditionalBuyDetail: function (activityId, additionalBuyId,data) {
            return api.put('/activity/'+activityId+'/additionalBuy/'+additionalBuyId,data);
        },

        getAdditionalBuyLogs: api.rest('/activity/{{activityId}}/additionalBuy/{{additionalBuyId}}/logs'),

        updateAdditionalBuyStatus: function (activityId, additionalBuyId,data) {
            return api.put('/activity/'+activityId+'/additionalBuy/'+additionalBuyId+'/status',data);
        }
    };
};
