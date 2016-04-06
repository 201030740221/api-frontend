/**
 * 商品分类管理 API
 */

module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /category/getList
         * @apiName 获得商品分类
         * @apiGroup category
         * @return {data} 数据
         */
        listApi: options.host + '/category/getList',
        getList: function(data) {
            return api.get('/category/getList',data);
        },
        update: function (data) {
            return api.post('/category/update', data);
        },
        add: function (data) {
            return api.post('/category/create', data);
        },
        remove: function (data) {
            return api.post('/category/delete', data);
        },
        /**
         * 置顶，置底
         * @param  {[type]}  type 类型，up or down
         * @return {[type]}  handle_id 当前操作的分类id
         */
        sortDigg: function (data) {
            return api.post('/category/updateSortByParent', data);
        },
        /**
         * 上移，下移
         * @param  {[type]}  type 类型，up or down
         * @return {[type]}  handle_id 当前操作的分类id
         */
        sort: function (data) {
            return api.post('/category/updateSortBySibling', data);
        }
    };
};
