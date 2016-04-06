/**
 * ERP API
 */

module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /goods/goods
         * @apiName  商品列表
         * @apiGroup  frame
         * @return {data} 数据
         */
        getGoodsList: function(data) {
            return api.get('/goods/goods',data);
        },
        /**
         * @api {get} /goods/detail/id
         * @apiName  获取商品信息
         * @apiGroup  frame
         * @return {data} 数据
         */
        getGoodsSource: function(id, data){
            return api.get('/goods/detail/'+ id, data);
        },
        /**
         * @api {get} /goods/sku/id
         * @apiName  获取商品sku
         * @apiGroup  frame
         * @return {data} 数据
         */
        getGoodsSku: function(id, data){
            return api.get('/goods/sku/'+ id, data);
        },
        getGoodsListUrl: options.host + '/goods/goods',
        getGoodsSkuPriceUrl: options.host + '/goods/skuPrice',
        /**
         * @api {put} /erp/product/product
         * @apiName  产品列表
         * @apiGroup  frame
         * @return {data} 数据
         */
        getProductList: function(data) {
            return api.get('/erp/product/product',data);
        },
        getProductListUrl: options.host + '/erp/product/product',
        /**
         * @api {put} /erp/product/search
         * @apiName  产品列表
         * @apiGroup  frame
         * @return {data} 数据
         */
        getProductSearch: function(data) {
            return api.get('/erp/product/search',data);
        },
        /**
         * @api {put} /erp/product/category
         * @apiName  分类
         * @apiGroup  frame
         * @return {data} 数据
         */
        getCategoryList: function(data) {
            return api.get('/erp/product/category', data);
        },
        /**
         * @api {put} /erp/product/category
         * @apiName  分类
         * @apiGroup  frame
         * @return {data} 数据
         */
        editCategory: function(id, data) {
            return api.put('/erp/product/category/'+id, data);
        },
        /**
         * @api {put} /erp/product/category
         * @apiName  分类
         * @apiGroup  frame
         * @return {data} 数据
         */
        addCategory: function(data) {
            return api.post('/erp/product/category', data);
        },
        /**
         * @api {put} /erp/product/category
         * @apiName  分类
         * @apiGroup  frame
         * @return {data} 数据
         */
        removeCategory: function(id, data) {
            return api.remove('/erp/product/category/'+id, data);
        },
        /**
         * @api {put} /erp/product/category
         * @apiName   分类列表
         * @apiGroup  page
         * @return {data} 数据
         */
        categoryListUrl: options.host + '/erp/product/category',
        /**
         * @api {put} /erp/product/category/updateSortByParent
         * @apiName  分类
         * @apiGroup  frame
         * @return {data} 数据
         */
        updateCategorySortByParent: function(data) {
            return api.post('/erp/product/category/updateSortByParent', data);
        },
        /**
         * @api {put} /erp/product/category/updateSortBySibling
         * @apiName  分类
         * @apiGroup  frame
         * @return {data} 数据
         */
        updateCategorySortBySibling: function(data) {
            return api.post('/erp/product/category/updateSortBySibling', data);
        },
        /**
         * @api {put} /goods/getUnit
         * @apiName  获取单位
         * @apiGroup  frame
         * @return {data} 数据
         */
        getUnit: function(data) {
            return api.get('/goods/getUnit', data);
        },
        /**
         * @api {put} /attribute/group/detail
         * @apiName  获取属性组
         * @apiGroup  frame
         * @return {data} 数据
         */
        attributeGroupDetail: function(data) {
            return api.get('/attribute/group/detail', data);
        },
        /**
         * @api {put} /erp/product
         * @apiName  添加产品
         * @apiGroup  frame
         * @return {data} 数据
         */
        addProduct: function(data){
            return api.post('/erp/product/product', data);
        },
        /**
         * @api {put} /erp/product
         * @apiName  编辑产品
         * @apiGroup  frame
         * @return {data} 数据
         */
        editProduct: function(id, data){
            return api.put('/erp/product/product/'+ id, data);
        },
        /**
         * @api {put} /erp/product
         * @apiName  获取产品信息
         * @apiGroup  frame
         * @return {data} 数据
         */
        getProduct: function(id, data){
            return api.get('/erp/product/product/'+ id, data);
        },
        /**
         * @api {put} /erp/product
         * @apiName  添加产品SKU
         * @apiGroup  frame
         * @return {data} 数据
         */
        addProductSku: function(data){
            return api.post('/erp/product/productSku', data);
        },
        /**
         * @api {put} /erp/product
         * @apiName  删除产品SKU
         * @apiGroup  frame
         * @return {data} 数据
         */
        removeProductSku: function(id, data){
            return api.remove('/erp/product/productSku/'+id, data);
        },
        /**
         * @api {put} /erp/product
         * @apiName  获取产品SKU
         * @apiGroup  frame
         * @return {data} 数据
         */
        getProductSku: function(id, data){
            return api.get('/erp/product/productSku/'+id, data);
        },
        /**
         * @api {put} /erp/product
         * @apiName  编辑产品SKU
         * @apiGroup  frame
         * @return {data} 数据
         */
        editProductSku: function(id, data){
            return api.put('/erp/product/productSku/'+id, data);
        },
        /**
         * @api {put} /erp/product
         * @apiName  添加产品
         * @apiGroup  frame
         * @return {data} 数据
         */
        productSkuList: function(data){
            return api.get('/erp/product/searchSkuList', data);
        },
        productSkuListUrl: options.host + '/erp/product/searchSkuList',
        /**
         * @api {put} /erp/product/search
         * @apiName  产品列表
         * @apiGroup  frame
         * @return {data} 数据
         */
        productList: function(data){
            return api.get('/erp/product/search', data);
        },
        productListUrl: options.host + '/erp/product/search',
        /**
         * @api {put} /erp/product
         * @apiName  规格组合
         * @apiGroup  frame
         * @return {data} 数据
         */
        removeProduct: function(data){
            return api.post('/erp/product/batchDelete', data);
        },
        /**
         * @api {put} /erp/product
         * @apiName  还原产品
         * @apiGroup  frame
         * @return {data} 数据
         */
        restoreProduct: function(data){
            return api.post('/erp/product/batchRestore', data);
        },
        /**
         * @api {put} /erp/product
         * @apiName  获取规格
         * @apiGroup  frame
         * @return {data} 数据
         */
        getAttributeGroup: function(data){
            return api.get('/erp/product/getAttributeGroup', data);
        },
    };
};
