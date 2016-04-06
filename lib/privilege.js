module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /user
         * @apiName 后台用户列表
         * @apiGroup
         * @return {data} 返回参数
         */
        getPrivilegeUsers: function(data) {
            return api.get('/user', data);
        },
        getPrivilegeUsersUrl: options.host + '/user',

        /**
         * @api {post} /user/create
         * @apiName 添加后台用户
         * @apiGroup
         * @return {data} 返回参数
         */
        createPrivilegeUser: function(data) {
            return api.post('/user',data);
        },

        /**
         * @api {post} /user/update
         * @apiName 后台用户更新
         * @apiGroup
         * @return {data} 返回参数
         */
        updatePrivilegeUser: function(id,data) {
            return api.put('/user/'+id,data);
        },

        /**
         * 删除后台用户
         * @return {data} 返回参数
         */
        removePrivilegeUser: function (id, data) {
            return api.remove('/user/' + id, data);
        },


        /**
         * @api {get} /privilege/roles
         * @apiName 后台角色管理列表
         * @apiGroup
         * @return {data} 返回参数
         */
        getPrivilegeRoles: function() {
            return api.get('/privilege/roles');
        },
        getPrivilegeRolesUrl: options.host + '/privilege/roles',

        /**
         * @api {post} /privilege/roles
         * @apiName 添加后台角色
         * @apiGroup
         * @return {data} 返回参数
         */
        addPrivilegeRoles: function(data) {
            return api.post('/privilege/roles',data);
        },

        /**
         * 获取角色组详情
         * @return {data} 返回参数
         */
        getRolesDetail: function (id, data) {
            return api.get('/privilege/roles/'+id, data);
        },

        /**
         * 删除角色组详情
         * @return {data} 返回参数
         */
        removeRolesDetail: function (id, data) {
            return api.remove('/privilege/roles/' + id, data);
        },

        /**
         * @api {put} /privilege/roles/id
         * @apiName 更新后台角色详情
         * @apiGroup
         * @return {data} 返回参数
         */
        updatePrivilegeRoles: function(id,data) {
            return api.put('/privilege/roles/'+id,data);
        },

        getRoleResources: function(data){
            return api.get('/privilege/resources',data);
        }
    };
};
