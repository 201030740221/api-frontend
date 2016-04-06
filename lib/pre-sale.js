module.exports = function(options) {
    var api = require('./api')(options);
    return {

        /**
         * @api {get} /presale
         * @apiName 获取预售列表
         * @apiGroup
         * @return  string
         */
        getPreSaleList: function(data) {
            return api.get('/presale',data);
        },

        /**
         * @api {post} /presale/updateSortIdMultiply
         * @apiName 更新预售列表排序
         * @apiGroup
         * @return  string
         */
        updateSortIdMultiply: function(data) {
            return api.post('/presale/updateSortIdMultiply',data);
        },

        /**
         * @api {post} /presale
         * @apiName 创建预售
         * @apiGroup
         * @return  string
         */
        createPreSale: function(data) {
            return api.post('/presale',data);
        },

        /**
         * @api {get} /presale/{presaleId}
         * @apiName 获取预售详情
         * @apiGroup
         * @return  string
         */
        getPreSaleDetail: function(id,data) {
            return api.get('/presale/'+id,data);
        },


        /**
         * @api {put} /presale/{presaleId}
         * @apiName 更新预售
         * @apiGroup
         * @return  string
         */
        updatePreSale: function(id,data) {
            return api.put('/presale/'+id,data);
        },

        /**
         * @api {remove} /presales/{presaleId}
         * @apiName 删除一个预售
         * @apiGroup
         * @return  string
         */
        removePreSale: function(id,data) {
            return api.remove('/presale/'+id,data);
        },

        /**
         * @api {post} /presale/changeStatus
         * @apiName 更新预售状态
         * @apiGroup
         * @return  string
         */
        updatePreSaleStatus: function(data) {
            return api.post('/presale/changeStatus',data);
        },

        /**
         * @api {get} /presales/{presaleId}/batches
         * @apiName 返回所有该预售下的批次
         * @apiGroup
         * @return  string
         */
        getPreSaleBatchs: function(id,data) {
            return api.get('/presales/'+id+'/batches',data);
        },

        /**
         * @api {post} /presales/{presaleId}/batches
         * @apiName 为指定的预售保存一个批次
         * @apiGroup
         * @return  string
         */
        postPreSaleBatchs: function(id,data) {
            return api.post('/presales/'+id+'/batches',data);
        },

        /**
         * @api {put} /presales/{presaleId}/batches/{batchId}
         * @apiName 为指定的预售更新一个批次
         * @apiGroup
         * @return  string
         */
        updatePreSaleBatchs: function(id,batchId,data) {
            return api.put('/presales/'+id+'/batches/'+batchId,data);
        },

        /**
         * @api {remove} /presales/{presaleId}/batches/{batchId}
         * @apiName 删除指定预售的一个批次
         * @apiGroup
         * @return  string
         */
        removePreSaleBatchs: function(id,data) {
            return api.remove('/presales/'+id+'/batches',data);
        },

        /**
         * @api {get} /presales/{presaleId}/reminders
         * @apiName 返回提醒记录
         * @apiGroup
         * @return  string
         */
        getPreSaleRemind: function(id,data) {
            return api.get('/presales/'+id+'/reminders',data);
        },

        /**
         * @api {get} /presales/{presaleId}/orders
         * @apiName 返回预售记录
         * @apiGroup
         * @return  string
         */
        getPreSaleLog: function(id,data) {
            return api.get('/presales/'+id+'/orders',data);
        },

        /**
         * @api {get} /dynamic-templates/getList
         * @apiName 获取所有预售模板
         * @apiGroup
         * @return  string
         */
        getPreSaleTemplates: function(data) {
            return api.get('/dynamic-templates/getList',data);
        }
    };
};
