/**
 * ERP API
 */

module.exports = function(options) {
    var api = require('./api')(options);
    return {
        listUrl: options.host + '/erp/supplier/supplier',
        visitListUrl: options.host + '/erp/supplier/visit',
        talkListUrl: options.host + '/erp/supplier/negotiation',
        /**
         * @api {get} /erp/supplier/supplier
         * @apiName  获取供应商列表
         * @apiGroup  erp
         * @return {data} 数据
         */
        get: function(data) {
            if (data && data.id) {
                return api.get('/erp/supplier/supplier/' + data.id);
            }
            else {
                return api.get('/erp/supplier/supplier',data);
            }
        },
        /**
         * @api {post} /erp/supplier/supplier
         * @apiName  添加供应商
         * @apiGroup  erp
         * @return {data} 数据
         */
        add: function(data) {
            return api.post('/erp/supplier/supplier',data);
        },
        /**
         * @api {delete} /erp/supplier/supplier
         * @apiName  删除供应商
         * @apiGroup  erp
         * @return {data} 数据
         */
        remove: function(data) {
            if (data && data.id) {
                return api.remove('/erp/supplier/supplier/' + data.id);
            }
        },
        /**
         * @api {put} /erp/supplier/supplier
         * @apiName  修改供应商
         * @apiGroup  erp
         * @return {data} 数据
         */
        edit: function(data) {
            return api.put('/erp/supplier/supplier/' + data.id, data);
        },
        /**
         * @api {post} /erp/supplier/visit
         * @apiName  添加拜访纪录
         * @apiGroup  erp
         * @return {data} 数据
         */
        addVisitRecord: function(data) {
            return api.post('/erp/supplier/visit', data);
        },
        /**
         * @api {put} /erp/supplier/visit
         * @apiName  编辑拜访纪录
         * @apiGroup  erp
         * @return {data} 数据
         */
        editVisitRecord: function(data) {
            if (data && data.id) {
                return api.put('/erp/supplier/visit/' + data.id, data);
            }
        },
        /**
         * @api {delete} /erp/supplier/visit
         * @apiName  删除拜访纪录
         * @apiGroup  erp
         * @return {data} 数据
         */
        removeVisitRecord: function(data) {
            if (data && data.id) {
                return api.remove('/erp/supplier/visit/' + data.id);
            }
        },
        /**
         * @api {post} /erp/supplier/negotiation
         * @apiName  添加谈判纪录
         * @apiGroup  erp
         * @return {data} 数据
         */
        addTalkRecord: function(data) {
            return api.post('/erp/supplier/negotiation', data);
        },
        /**
         * @api {put} /erp/supplier/negotiation
         * @apiName  编辑谈判纪录
         * @apiGroup  erp
         * @return {data} 数据
         */
        editTalkRecord: function(data) {
            if (data && data.id) {
                return api.put('/erp/supplier/negotiation/' + data.id, data);
            }
        },
        /**
         * @api {delete} /erp/supplier/negotiation
         * @apiName  删除谈判纪录
         * @apiGroup  erp
         * @return {data} 数据
         */
        removeTalkRecord: function(data) {
            if (data && data.id) {
                return api.remove('/erp/supplier/negotiation/' + data.id);
            }
        }
    };
};
