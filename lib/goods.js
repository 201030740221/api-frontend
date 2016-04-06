/**
 * 商品管理 API
 */

module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /goods/getList
         * @apiName 获取商品列表
         * @apiGroup goods
         * @return {data} 数据
         */
        getList: function(data) {
            return api.get('/goods/getList',data);
        },

        /**
         * @api {get} /goods/getGoodsList`
         * @apiName 获取商品列表
         * @apiGroup goods
         * @return {data} 数据
         */
        getSpuList: function(data) {
            return api.get('/goods/getGoodsList',data);
        },

        /**
         * @api {get} /category/getList
         * @apiName 获取商品分类列表
         * @apiGroup goods
         * @return {data} 数据
         */
        getCategoryList: function(data) {
            return api.get('/category/getList',data);
        },

        getListUrl: options.host + '/goods/getList',
        /**
         * @api {get} /goods/getSkuList
         * @apiName 获取商品SKU列表
         * @apiGroup goods
         * @return {data} 数据
         */
        getSkuList: function(data) {
            return api.get('/goods/getSkuList',data);
        },

        /**
         * @api {get} /goods/getSkuListByGoodsIds
         * @apiName 根据商品id获取商品SKU列表
         * @apiGroup goods
         * @return {data} 数据
         */
        getSkuListByGoodsIds: function(data) {
            return api.get('/goods/getSkuListByGoodsIds',data);
        },

        getSkuListUrl: options.host + '/goods/getSkuList',
        attrGroupApi: options.host + '/attribute/group',
        /**
         * 获取sku属性组
         * @return {[type]} [description]
         */
        getSkuAttrGroup: function (data) {
            data = data || {};
            data.type = 0;
            return api.get('/attribute/group', data);
        },
        /**
         * 获取规格属性组
         * @return {[type]} [description]
         */
        getSpecsAttrGroup: function (data) {
            data = data || {};
            data.type = 1;
            return api.get('/attribute/group', data);
        },
        /**
         * 获取商品列表
         * @return {[type]} [description]
         */
        getGoodsList: function (data) {
            return api.get('/goods/goods', data);
        },
        getGoodsListUrl: options.host + '/goods/goods',
        /**
         * 增加商品
         * @return {[type]} [description]
         */
        addGoods: function (data) {
            return api.post('/goods/goods', data);
        },
        /**
         * 获取商品信息
         * @return {[type]} [description]
         */
        getGoods: function (id, data) {
            return api.get('/goods/goods/'+id, data);
        },
        /**
         * 编辑商品
         * @return {[type]} [description]
         */
        editGoods: function (id, data) {
            return api.put('/goods/goods/'+id, data);
        },
        /**
         * 删除商品
         * @return {[type]} [description]
         */
        removeGoods: function (id, data) {
            return api.remove('/goods/goods/' + id, data);
        },
        /**
         * 获取商品SKU
         * @return {[type]} [description]
         */
        getGoodsSku: function (data) {
            return api.get('/goods/sku', data);
        },
        getGoodsSkuUrl: options.host + '/goods/sku',
        /**
         * 增加商品SKU
         * @return {[type]} [description]
         */
        addGoodsSku: function (id, data) {
            return api. post('/goods/sku/'+ id, data);
        },
        /**
         * 修改商品SKU
         * @return {[type]} [description]
         */
        editGoodsSku: function (id, data) {
            return api.put('/goods/sku/'+ id, data);
        },
        /**
         * 删除商品SKU
         * @return {[type]} [description]
         */
        removeGoodsSku: function (id, data) {
            return api.remove('/goods/sku/'+ id, data);
        },
        /**
         * 获取商品详情
         * @return {[type]} [description]
         */
        getGoodsDetail: function (id,data) {
            return api.get('/goods/detail/'+id, data);
        },
        /**
         * 更新商品模板
         *
         */
        updateGoodsTemplate: function (data) {
            return api.post('/goods/sku/updateDetail', data);
        },
        /**
         * 获取商品默认模板
         *
         */
        getGoodsTemplate: function (id,data) {
            return api.get('/goodsTemplate/'+id, data);
        },
        /**
         * 更新 SKU 价格
         * @return {[type]} [description]
         */
        editGoodsSkuPrice: function (id, data) {
            return api.put('/goods/skuPrice/'+id, data);
        },
        getGoodsSkuPriceUrl: options.host + '/goods/skuPrice',
        /**
         * 调整 SKU 上下架
         * @return {[type]} [description]
         */
        editGoodsSkuStatus: function (data) {
            return api.post('/goods/skuStatus', data);
        },
        /**
         * 调整 SKU 上下架
         * @return {[type]} [description]
         */
        updateDefaultSku: function (data) {
            return api.post('/goods/updateDefaultSku', data);
        },
        /**
         * 调整 SKU 销售规格
         * @return {[type]} [description]
         */
        updateSkuSale: function (data) {
            return api.post('/goods/sku/updateSale', data);
        },
        /**
         * 调整 SKU SEO
         * @return {[type]} [description]
         */
        updateSkuSeo: function (data) {
            return api.post('/goods/sku/updateSeo', data);
        },
        /**
         * @api {put} /erp/product/search
         * @apiName  产品列表
         * @apiGroup  frame
         * @return {data} 数据
         */
        getProductSearch: function(data) {
            return api.get('/goods/search',data);
        },
        productSearchUrl: options.host + '/goods/search',
        /**
         * 获取属性组
         * @return {[type]} [description]
         */
        getAttributeGroup: function (data) {
            return api.get('/attribute/group', data);
        },
        /**
         * 添加属性组
         * @return {[type]} [description]
         */
        addAttributeGroup: function (data) {
            return api.post('/attribute/group/create', data);
        },
        /**
         * 删除属性组
         * @return {[type]} [description]
         */
        removeAttributeGroup: function (data) {
            return api.post('/attribute/group/delete', data);
        },
        /**
         * 编辑属性组
         * @return {[type]} [description]
         */
        updateAttributeGroup: function (data) {
            return api. post('/attribute/group/update', data);
        },
        /**
         * 获取属性
         * @return {[type]} [description]
         */
        getAttribute: function (data) {
            return api.get('/attribute/group/value', data);
        },
        /**
         * 添加属性
         * @return {[type]} [description]
         */
        addAttribute: function (data) {
            return api.post('/attribute/create', data);
        },
        /**
         * 删除属性
         * @return {[type]} [description]
         */
        removeAttribute: function (data) {
            return api.post('/attribute/delete', data);
        },
        /**
         * 编辑属性
         * @return {[type]} [description]
         */
        updateAttribute: function (data) {
            return api.post('/attribute/update', data);
        },
        /**
         * 编辑属性排序
         * @return {[type]} [description]
         */
        updateAttributeSort: function (data) {
            return api.post('/attribute/sort', data);
        },
        /**
         * 获取属性值
         * @return {[type]} [description]
         */
        getAttributeValue: function (data) {
            return api.get('/attribute/value', data);
        },
        /**
         * 添加属性值
         * @return {[type]} [description]
         */
        addAttributeValue: function (data) {
            return api.post('/attribute/value/create', data);
        },
        /**
         * 删除属性值
         * @return {[type]} [description]
         */
        removeAttributeValue: function (data) {
            return api.post('/attribute/value/delete', data);
        },
        /**
         * 编辑属性值
         * @return {[type]} [description]
         */
        updateAttributeValue: function (data) {
            return api.post('/attribute/value/update', data);
        },
        /**
         * 获取属性小节
         * @return {[type]} [description]
         */
        getAttributeSection: function (data) {
            return api.get('/attribute/section', data);
        },
        /**
         * 添加属性小节
         * @return {[type]} [description]
         */
        addAttributeSection: function (data) {
            return api.post('/attribute/section/create', data);
        },
        /**
         * 删除属性小节
         * @return {[type]} [description]
         */
        removeAttributeSection: function (data) {
            return api.post('/attribute/section/delete', data);
        },
        /**
         * 编辑属性小节
         * @return {[type]} [description]
         */
        updateAttributeSection: function (data) {
            return api.post('/attribute/section/update', data);
        },
        /**
         * 绑定属性小节
         * @return {[type]} [description]
         */
        bindAttributeSection: function (data) {
            return api.post('/attribute/section/bind', data);
        },
        /**
         * 排序属性小节
         * @return {[type]} [description]
         */
        sortAttributeSection: function (data) {
            return api.post('/attribute/section/sort', data);
        },
        /**
         * 更新标签
         * @return {[type]} [description]
         */
        goodsSkuTagUpdate: function (data) {
            return api.post('/goods/sku/tagUpdate', data);
        },
        /**
         * 模板列表
         * @return {[type]} [description]
         */
        goodsTemplate: function (data) {
            return api.get('/goodsTemplate', data);
        },
        /**
         * 更换模板
         * @return {[type]} [description]
         */
        updateTemplateId: function (data) {
            return api.post('/goods/sku/updateTemplateId', data);
        },
        /**
         * 获取商品印象标签
         * @return {[type]} [description]
         */
        getGoodsTags: function (data) {
            return api.get('/goods/tag', data);
        }

    };
};
