/**
 * 媒体库管理 API
 */

module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /attachment/upload
         * @apiName 上传资源
         * @apiGroup media
         * @return {data} 数据
         */
        uploadAttachment: function(data) {
            return api.post('/attachment/upload',data);
        },
        uploadAttachmentUrl: options.host + '/attachment/upload',
        /**
         * @api {delete} /attachment/delete
         * @apiName 删除资源
         * @apiGroup media
         * @return {data} 数据
         */
        deleteAttachment: function(data) {
            return api.post('/attachment/delete',data);
        },
        sort: function(data) {
            return api.post('/attachment/sort',data);
        }
    };
};
