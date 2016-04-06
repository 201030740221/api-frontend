module.exports = function(options) {
    var api = require('./api')(options);
    return {

        getRegisterList: function(activityId,data) {
            return api.get('/activity/'+activityId+'/register',data);
        },

        removeRegister: function (activityId, registerId) {
            return api.remove('/activity/'+activityId+'/register/'+registerId);
        },

        addRegister: function(activityId,data) {
            return api.post('/activity/'+activityId+'/register',data);
        },

        RegisterDetail: function (activityId, registerId) {
            return api.get('/activity/'+activityId+'/register/'+registerId);
        },

        updateRegisterDetail: function (activityId, registerId,data) {
            return api.put('/activity/'+activityId+'/register/'+registerId,data);
        },

     /*   getSigninLogs: function (activityId, registerId) {
            return api.get('/activity/'+activityId+'/register/'+registerId+'/logs');
        },*/
        getRegisterLogs: api.rest('/activity/{{activityId}}/register/{{registerId}}/logs'),

        updateRegisterStatus: function (activityId, registerId,data) {
            return api.put('/activity/'+activityId+'/register/'+registerId+'/status',data);
        }
    };
};
