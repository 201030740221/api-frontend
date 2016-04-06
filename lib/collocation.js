module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /goods-collocation/search
         * @apiName 搜索搭配套餐
         * @apiParam {Array} keywords 关键字数组
         * @apiGroup
         * @return Object
         */
        searchGoodsCollocationList: function(data) {
            return api.get('/goods-collocation/search',data);
        },
        /**
         * @api {get} /goods-collocation/getList
         * @apiName 获取以id为主商品的搭配套餐
         * @apiGroup
         * @return  string
         */
        getGoodsCollocationList: function(data) {
            return api.get('/goods-collocation/getList',data);
        },

        /**
         * @api {get} /goods-collocation/create
         * @apiName 创建搭配套餐
         * @apiGroup
         * @return string
         */
        createGoodsCollocation: function(data) {
            return api.post('/goods-collocation/create',data);
        },

        /**
         * @api {post} /goods-collocation/view
         * @apiName 查看搭配套餐详情
         * @apiGroup
         * @return string
         */
        viewGoodsCollocation: function(data) {
            return api.get('/goods-collocation/view',data);
        },

        /**
         * @api {post} /goods-collocation/delete
         * @apiName 删除搭配套餐
         * @apiGroup
         * @return string
         */
        deleteGoodsCollocation: function(id,data) {
            return api.remove('/goods-collocation/delete/'+id,data);
        },

        /**
         * @api {post} /goods-collocation/update
         * @apiName 更新搭配套餐
         * @apiGroup
         * @return string
         */
        updateGoodsCollocation: function(id,data) {
            return api.put('/goods-collocation/update/'+id,data);
        },

        /**
         * @api {post} /goods-collocation/updateAllDetail
         * @apiName 更新搭配套餐
         * @apiGroup
         * @return string
         */
        updateAllDetailCollocation: function(data) {
            return api.post('/goods-collocation/updateAllDetail',data);
        },


        /**
         * @api {get} /goods-collocation/getListRelation
         * @apiName 获取商品的已参与但非主商品的套餐
         * @apiGroup
         * @return string
         */
        getCollocationRelation: function(data) {
            return api.get('/goods-collocation/getListRelation',data);
        },


        /**
         * @api {post}
         * @apiName 批量上下架
         * @apiGroup
         * @return string
         */
        updateStateMultiply: function(data) {
            return api.put('/goods-collocation/status',data);
        },

        /**
         * @api {post}
         * @apiName 排序
         * @apiGroup
         * @return string
         */
        updateSort: function(data) {
            return api.put('/goods-collocation/sort',data);
        }
    };
};
