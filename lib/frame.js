/**
 * 广告推荐位 API
 */

module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /frame/pageModule
         * @apiName 返回页面推荐位模块
         * @apiGroup  frame
         * @return {data} 数据
         */
        pageModule: function() {
            return api.get('/frame/pageModule');
        },
        /**
         * @api {get} /frame/frame/{id}
         * @apiName 返回模块推荐位
         * @apiGroup  frame
         * @return {data} 数据
         */
        getFrame: function(id, data) {
            if (id) {
                return api.get('/frame/frame/' + id, data);
            } else {
                return api.get('/frame/frame', data);
            }
        },
        /**
         * @api {post} /frame/frame/
         * @apiName 添加模块推荐位
         * @apiGroup  frame
         * @return {data} 数据
         */
        addFrame: function(data) {
            return api.post('/frame/frame', data);
        },
        /**
         * @api {put} /frame/frame/{id}
         * @apiName 修改模块推荐位
         * @apiGroup  frame
         * @return {data} 数据
         */
        updateFrame: function(id, data) {
            return api.put('/frame/frame/' + id, data);
        },
        /**
         * @api {detele} /frame/frame/{id}
         * @apiName 删除模块推荐位
         * @apiGroup  frame
         * @return {data} 数据
         */
        removeFrame: function(id, data) {
            return api.remove('/frame/frame/' + id, data);
        },
        /**
         * @api {get} /frame/position/{id}
         * @apiName  获取单一模块推荐位
         * @apiGroup  frame
         * @return {data} 数据
         */
        getPosition: function(id, data) {
            return api.get('/frame/position/' + id, data);
        },
        /**
         * @api {put} /frame/position/{id}
         * @apiName  获取单一模块推荐位
         * @apiGroup  frame
         * @return {data} 数据
         */
        updatePosition: function(id, data) {
            return api.put('/frame/position/' + id, data);
        },
        /**
         * @api {get} /frame/ad/{id}
         * @apiName  获取单一广告推荐位
         * @apiGroup  frame
         * @return {data} 数据
         */
        getAd: function(id, data) {
            return api.get('/frame/ad/' + id, data);
        },
        /**
         * @api {post} /frame/ad/{id}
         * @apiName  获取单一广告推荐位
         * @apiGroup  frame
         * @return {data} 数据
         */
        addAd: function(data) {
            return api.post('/frame/ad', data);
        },
        /**
         * @api {put} /frame/ad/{id}
         * @apiName  获取单一广告推荐位
         * @apiGroup  frame
         * @return {data} 数据
         */
        updateAd: function(id, data) {
            return api.put('/frame/ad/' + id, data);
        },
        /**
         * @api {get} /frame/recommendation/{id}
         * @apiName  获取单一推荐位
         * @apiGroup  frame
         * @return {data} 数据
         */
        getRecommendation: function(id, data) {
            return api.get('/frame/recommendation/' + id, data);
        },
        /**
         * @api {post} /frame/recommendation/{id}
         * @apiName  获取单一推荐位
         * @apiGroup  frame
         * @return {data} 数据
         */
        addRecommendation: function(data) {
            return api.post('/frame/recommendation', data);
        },
        /**
         * @api {put} /frame/recommendation/{id}
         * @apiName  获取单一推荐位
         * @apiGroup  frame
         * @return {data} 数据
         */
        updateRecommendation: function(id, data) {
            return api.put('/frame/recommendation/' + id, data);
        },
        /**
         * @api {get} /frame/getStashFrame
         * @apiName   获取临时版本数据
         * @apiGroup  frame
         * @return {data} 数据
         */
        getStashFrame: function(data) {
            return api.get('/frame/getStashFrame', data);
        },
        /**
         * @api {put} /frame/saveStashFrame
         * @apiName    保存临时版本数据
         * @apiGroup  frame
         * @return {data} 数据
         */
        saveStashFrame: function(data) {
            return api.post('/frame/saveStashFrame', data);
        },
        /**
         * @api {put} /frame/saveStashFrame
         * @apiName     发布临时版本数据
         * @apiGroup  frame
         * @return {data} 数据
         */
        publishStashFrame: function(data) {
            return api.post('/frame/publishStashFrame', data);
        },
        /**
         * @api {put} /page/index/preview
         * @apiName     前台预览地址
         * @apiGroup  page
         * @return {data} 数据
         */
        previewWebUrl: options.host + '/page/index/preview',
        /**
         * @api {post} /frame/schedule
         * @apiName   创建时间
         * @apiGroup  frame
         * @return {data} 数据
         */
        saveSchedule: function(data) {
            return api.post('/frame/schedule', data);
        },
        /**
         * @api {put} /frame/schedule/{$id}
         * @apiName    保存时间
         * @apiGroup  frame
         * @return {data} 数据
         */
        updateSchedule: function(id, data) {
            return api.put('/frame/schedule/'+id, data);
        },
        getAdTypeFix: function(data){
            return api.get('/frame/getAdTypeFix', data);
        }
    };
};
