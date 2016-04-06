module.exports = function(options) {
    var api = require('./api')(options);
    return {

        /**
         * @api {get} /goodsSku/getSkuListByGoodsIds
         * @apiName 搜索Sku
         * @apiParam {String} goods_ids
         * @apiParam {String} status 0|1
         * @apiGroup
         * @return Array
         */
        getSku: function(data) {
            return api.get('/goods/getSkuListByGoodsIds',data);
        },
        /**
        * @param UpdateThemeCollocationGoodsRequest $request
        * POST: theme-collocation/goods/update
        * @api {post} /theme-collocation/goods/update
        * @return string
        *
        * @apiParam  $ids[] Integer 主题搭配详细产品id
        * @apiParam  $theme_collocation_id Integer 主题搭配id
        * @apiParam  $goods_id[] Integer 产品id
        * @apiParam  $goods_sku_id[] Integer 产品sku_id
        * @apiParam  $label_name[] String 标签名
        * @apiParam  $label_description[] String 标签描述
        * @apiParam  $label_x[] Double 标签x坐标
        * @apiParam  $label_y[] Double 标签y坐标
        * @apiParam  $status[] Integer 标签启用状态
        */
        UpdateThemeCollocationGoods: function(data) {
            return api.post('/theme-collocation/goods/update',data);
        },

        /**
        * 主题搭配详情
        * @param Request $request
        * GET: theme-collocation/view
        *
        * @return string
        * @internal param  $id Integer 主题搭配id
        */
        getThemeCollocation: function(data) {
            return api.get('/theme-collocation/view',data);
        },

        /**
        * 创建主题搭配
        * @param CreateThemeCollocationRequest $request
        * POST: theme-collocation/create
        *
        * @return string
        *
        * @internal param  $name String 主题搭配名
        * @internal param  $goods_collocation_id Integer 搭配套餐id
        * @internal param  $status Integer 上架状态
        * @internal param  $sort_id Integer 排序号
        * @internal param  $template_id Integer PC模板id
        * @internal param  $mobile_template_id Integer 移动端模板id
        * @internal param  $content String PC模板内容
        * @internal param  $mobile_content String 移动端模板内容
        * @internal param  $summary String 内容概括
        * @internal param  $description String 详细描述
        * @internal param  $share_qqzone String
        * @internal param  $share_weibo String
        * @internal param  $share_weixin_title String
        * @internal param  $share_weixin_content String
        */
        createThemeCollocation: function(data) {
            return api.post('/theme-collocation/create',data);
        },

        /**
        * 更新主题搭配
        * @param StoreThemeCollocationRequest $request
        * POST: theme-collocation/updateAllDetail
        *
        * @return string
        *
        * @internal param  $id Integer 主题搭配id
        * @internal param  $name String 主题搭配名
        * @internal param  $goods_collocation_id Integer 搭配套餐id
        * @internal param  $status Integer 上架状态
        * @internal param  $sort_id Integer 排序号
        * @internal param  $template_id Integer PC模板id
        * @internal param  $mobile_template_id Integer 移动端模板id
        * @internal param  $content String PC模板内容
        * @internal param  $mobile_content String 移动端模板内容
        * @internal param  $summary String 内容概括
        * @internal param  $description String 详细描述
        * @internal param  $share_qqzone String
        * @internal param  $share_weibo String
        * @internal param  $share_weixin_title String
        * @internal param  $share_weixin_content String
        * @internal param  $primary_cover_id Integer 主图id
        * @internal param  $album_ids Array 相册图id
        * @internal param  $theme_collocation_goods Array 主题搭配的可移动标签
        * @internal param  $theme_collocation_tags Array 主题搭配的所属标签
        */
        updateThemeCollocation: function(data) {
            return api.post('/theme-collocation/updateAllDetail',data);
        },


        /**
        * 获取可选择的标签列表
        * GET: tag/theme-collocation/getTagList
        *
        * @return string
        *
        */
        getTagList: function(data) {
            return api.get('/tag/theme-collocation/getTagList',data);
        },

        /**
        * 创建新标签目录
        * @param CreateThemeCollocationTagCategoryRequest $request
        * POST: tag/theme-collocation/category/create
        *
        * @return string
        *
        * @internal param $name String Tag类别名称
        * @internal param $keywords String Tag关键字
        * @internal param $description String Tag描述
        * @internal param $sort_id Integer
        * @internal param $status Integer 是否启用
        */
        createTagCategory: function(data) {
            return api.post('/tag/theme-collocation/category/create',data);
        },

        /**
        * 删除标签目录
        * @param Request $request
        * POST: tag/theme-collocation/category/delete
        *
        * @return string
        *
        * @internal param $id Integer Tag类别id
        */
        deleteTagCategory: function(data) {
            return api.post('/tag/theme-collocation/category/delete',data);
        },

        /**
        * 标签目录批量排序
        * @param Request $request
        * POST: tag/theme-collocation/category/updateSortIdMultiply
        *
        * @return string
        *
        * @internal param  $ids Array key=>theme_collocation_tag_category_id, val=>sort_id
        */
        updateTagCategorySortIdMultiply: function(data) {
            return api.post('/tag/theme-collocation/category/updateSortIdMultiply',data);
        },

        /**
        * 创建一个标签目录下的标签
        * @param CreateThemeCollocationTagRequest $request
        * POST: tag/theme-collocation/category/detail/create
        *
        * @return string
        *
        * @internal param $theme_collocation_tag_category_id Integer Tag类别id
        * @internal param $name Integer 标签名
        * @internal param $sort_id Integer
        */
        createTag: function(data) {
            return api.post('/tag/theme-collocation/category/detail/create',data);
        },

        /**
        * 删除一个标签目录下的标签
        * @param Request $request
        * POST: tag/theme-collocation/category/detail/delete
        *
        * @return string
        *
        * @internal param $id Integer 标签id
        */
        deleteTag: function(data) {
            return api.post('/tag/theme-collocation/category/detail/delete',data);
        },

        /**
        * 标签批量排序
        * @param Request $request
        * POST: tag/theme-collocation/category/detail/updateSortIdMultiply
        *
        * @return string
        *
        * @internal param  $ids Array key=>tag_id, val=>sort_id
        */
        updateTagSortIdMultiply: function(data) {
            return api.post('/tag/theme-collocation/category/detail/updateSortIdMultiply',data);
        },

        /**
         * @api {get} /theme-collocation/getList
         * @apiName 主题搭配列表
         * @apiGroup
         * @return string
         */
        getThemeCollocationList: function(data) {
            return api.get('/theme-collocation/getList',data);
        },
        getThemeCollocationListUrl: options.host + '/theme-collocation/getList',

        /**
         * 上下架批量操作
         * @param Request $request
         * POST: theme-collocation/updateStateMultiply
         *
         * @return string
         *
         */
        updateStateMultiply: function(data) {
            return api.post('/theme-collocation/updateStateMultiply',data);
        },

        /**
         * 批量排序
         * @param Request $request
         * POST: theme-collocation/updateSortIdMultiply
         *
         * @return string
         *
         */
        updateSortIdMultiply: function(data) {
            return api.post('/theme-collocation/updateSortIdMultiply',data);
        },

        /**
         * 排序
         * @param Request $request
         * POST: theme-collocation/updateSortId
         *
         * @return string
         *
         */
        updateSortId: function(data) {
            return api.post('/theme-collocation/updateSortId',data);
        },

        /**
         * 删除主题
         * @param Request $request
         * POST: theme-collocation/delete
         *
         * @return string
         *
         */
        deleteThemeCollocation: function(data) {
            return api.post('/theme-collocation/delete',data);
        },

        /**
         * @api {get} /tag/theme-collocation/getTagList
         * @apiName 属性标签列表
         * @apiGroup
         * @return string
         */
        getTagsList: function(data) {
            return api.get('/tag/theme-collocation/getTagList',data);
        },

        /**
         * 获取首页主题推荐列表
         * @api {get} /theme-collocation/selected/getIndexList
         * @apiName getIndexList
         * @apiGroup
         * @return string
         */
        getIndexAdList: function(data) {
            return api.get('/theme-collocation/selected/getIndexList',data);
        },
        getIndexAdListUrl: options.host + '/theme-collocation/selected/getIndexList',

        /**
         * 更新首页单个主题内容
         * @api {post} /theme-collocation/selected/updateIndex
         * @apiName updateIndex
         * @apiGroup
         * @return string
         */
        updateIndexAdData: function(data) {
            return api.post('/theme-collocation/selected/updateIndex',data);
        },

        /**
         * 更新首页多个主题内容
         * @api {post} /theme-collocation/selected/updateIndexMultiply
         * @apiName updateIndexMultiply
         * @apiGroup
         * @return string
         */
        updateIndexMultiply: function(data) {
            return api.post('/theme-collocation/selected/updateIndexMultiply',data);
        },

        /**
         * 发布首页主题内容
         * @api {get} /theme-collocation/selected/updateIndexPreviewToPublish
         * @apiName updateIndexPreviewToPublish
         * @apiGroup
         * @return string
         */
        updateIndexPreviewToPublish: function(data) {
            return api.post('/theme-collocation/selected/updateIndexPreviewToPublish',data);
        }
    };
};
