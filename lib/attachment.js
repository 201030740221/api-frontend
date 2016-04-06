/**
 * 附件管理 API
 */

module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /attachment/create
         * @apiName 创建附件
         * @apiGroup category
         * @return {data} 数据
         */
        createAttachment: function(data) {
            return api.post('/attachment/create',data);
        },
        /**
         * @api {get} /attachment/update
         * @apiName 更新附件
         * @apiGroup category
         * @return {data} 数据
         */
        updateAttachment: function(data) {
            return api.post('/attachment/update',data);
        },
        /**
         * @api {get} /attachment/delete
         * @apiName 删除附件
         * @apiGroup category
         * @return {data} 数据
         */
        removeAttachment: function(data) {
            return api.post('/attachment/delete',data);
        },
    };
};
