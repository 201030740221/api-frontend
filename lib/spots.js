module.exports = function(options) {
    var api = require('./api')(options);
    /**
    * http://swagger-ui.tools.sipin.one/?url=http://gogs-git-binary.sipin.one/public/sipin-web-api/web-api-release/platform/admin/spot/api-20151022-1119.json#/
    */
    return {
        /**
        * @api {post} /spot
        * @apiName 创建一个spot
        * @apiParam {String} title 活动标题
        * @apiParam {String} tactic_tip 游戏攻略
        * @apiParam {String} success_tip 游戏通过
        * @apiParam {String} fail_tip 游戏失败
        * @apiParam {String} rule_title 规则标题
        * @apiParam {String} rule_content 规则内容
        * @apiParam {String} more_activity_title 更多活动标题
        * @apiParam {Number} more_activity_thumb 更多活动宣传图
        * @apiParam {String} more_activity_href 更多活动链接
        * @apiParam {String} additional_title 活动活动补充说明标题
        * @apiParam {String} additional_content 活动活动补充说明内容
        * @apiGroup
        * @return Array
        */
        createSpot: function(data) {
            return api.post('/spot',data);
        },
        getSpotList: function(data) {
            return api.get('/spot',data);
        },
        getSpot: function(id, data) {
            return api.get('/spot/' + id,data);
        },
        updateSpot: function(id, data) {
            return api.put('/spot/' + id,data);
        },
        removeSpot: function(id, data) {
            return api.remove('/spot/' + id,data);
        },
        /**
        * @api {post} /spots/:spotId/scenes
        * @apiName 创建一个scene
        * @apiParam {String} spotId 游戏id
        * @apiParam {Number} origin_img 原图
        * @apiParam {Number} game_img 游戏图
        * @apiParam {String} title 场景标题
        * @apiParam {String} href 场景图链接
        * @apiParam {String} weixin_share_title 微信分享标题
        * @apiParam {String} weixin_share_content 微信分享内容
        * @apiParam {String} weibo_share_content 微博分享内容
        * @apiParam {String} begin_at 开放时间
        * @apiParam {String} end_at 结束时间
        * @apiParam {Number} during_time 游戏时间
        * @apiParam {Number} error_cut_time 错误扣减
        * @apiParam {Number} additional_time 额外获得
        * @apiParam {Boolean} is_publish 是否发布
        * @apiParam {String} items 找茬个数
        * @apiParam {String} prizes 奖品数
        * @apiParam {String} release_time 公布时间
        * @apiGroup
        * @return Array
        */
        createScenes: function(spotsId, data) {
            return api.post('/spots/' + spotsId + '/scenes',data);
        },
        getScenesList: function(spotsId, data) {
            return api.get('/spots/' + spotsId + '/scenes',data);
        },
        getScenes: function(spotsId, id, data) {
            return api.get('/spots/' + spotsId + '/scenes/' + id,data);
        },
        updateScenes: function(spotsId, id, data) {
            return api.put('/spots/' + spotsId + '/scenes/' + id,data);
        },
        removeScenes: function(spotsId, id, data) {
            return api.remove('/spots/' + spotsId + '/scenes/' + id,data);
        },
        getScenesCheatLogs: function(spotId, scenesId, data) {
            return api.get('/spots/' + spotId + '/scenes/' + scenesId + '/cheat-logs',data);
        },
        getScenesLogs: function(spotId, scenesId, data) {
            return api.get('/spots/' + spotId + '/scenes/' + scenesId + '/logs',data);
        },
        updateSpotLogs: function(spotId, scenesId, id, data) {
            return api.put('/spots/' + spotId + '/scenes/' + scenesId + '/logs/' + id,data);
        },
        removeSpotLogs: function(spotId, scenesId, id, data) {
            return api.remove('/spots/' + spotId + '/scenes/' + scenesId + '/logs/' + id,data);
        },
        getScenesWinners: function(spotId, scenesId, data) {
            return api.get('/spots/' + spotId + '/scenes/' + scenesId + '/winners',data);
        },
        publishScenesWinners: function(spotId, scenesId, data) {
            return api.post('/spots/' + spotId + '/scenes/' + scenesId + '/publish',data);
        }
    };
};
