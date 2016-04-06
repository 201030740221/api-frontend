module.exports = function(options) {
    var api = require('./api')(options);
    return {

        getSigninList: function(activityId,data) {
            return api.get('/activity/'+activityId+'/signin',data);
        },

        removeSignin: function (activityId, signinId) {
            return api.remove('/activity/'+activityId+'/signin/'+signinId);
        },

        addSignin: function(activityId,data) {
            return api.post('/activity/'+activityId+'/signin',data);
        },

        SigninDetail: function (activityId, signinId) {
            return api.get('/activity/'+activityId+'/signin/'+signinId);
        },

        updateSigninDetail: function (activityId, signinId,data) {
            return api.put('/activity/'+activityId+'/signin/'+signinId,data);
        },

     /*   getSigninLogs: function (activityId, signinId) {
            return api.get('/activity/'+activityId+'/signin/'+signinId+'/logs');
        },*/
        getSigninLogs: api.rest('/activity/{{activityId}}/signin/{{signinId}}/logs'),

        updateSigninStatus: function (activityId, signinId,data) {
            return api.put('/activity/'+activityId+'/signin/'+signinId+'/status',data);
        }
    };
};
