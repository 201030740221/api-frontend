module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
        * @api {get} /navigation/getList
        * @apiName 获取导航列表
        * @param $id Integer 导航id,可选,有此参数则传递该id下的列表
        * @param $status Integer 状态,可选,当不填id时才生效,0无效,1有效
        */
        getNavigationList: function(data) {
            return api.get('/navigation/getList',data);
        },
        /**
        * @api {post} /navigation/create
        * @apiName 创建一个导航项
        * @param $name String
        * @param $real_uri String
        * @param $uri String
        * @param $sort_id Integer
        * @param $parent_id Integer
        * @param $attachment_id Integer
        */
        createNavigation: function(data) {
            return api.post('/navigation/create',data);
        },
        /**
        * @api {post} /navigation/update
        * @apiName 更新一个导航项
        * @param $id Integer
        * @param $name String
        * @param $real_uri String
        * @param $uri String
        * @param $sort_id Integer
        * @param $attachment_id Integer
        */
        updateNavigation: function(data) {
            return api.post('/navigation/update',data);
        },
        /**
        * @api {post} /navigation/delete
        * @apiName 删除一个导航项，会将子导航项一并删除
        * @param $id Integer
        */
        deleteNavigation: function(data) {
            return api.post('/navigation/delete',data);
        },
        /**
        * @api {post} /navigation/updateStatusMultiply
        * @apiName 批量开启关闭导航
        * @param $ids Array
        * @param $status Array
        */
        updateNavigationStatusMultiply: function(data) {
            return api.post('/navigation/updateStatusMultiply',data);
        },
        /**
        * @api {post} /navigation/updateSortIdMultiply
        * @apiName 批量排序导航
        * @param $ids Array
        * @param $sort_ids Array
        */
        updateNavigationSortIdMultiply: function(data) {
            return api.post('/navigation/updateSortIdMultiply',data);
        },
        /**
        * @api {post} /navigation/publish
        * @apiName 发布
        */
        publish: function(data) {
            return api.post('/navigation/publish',data);
        }

    };
};
