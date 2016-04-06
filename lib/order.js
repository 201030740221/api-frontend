/**
 * 商品管理 API
 */

module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * 获取订单列表
         * @return {[type]} [description]
         */
        getOrderList: function (data) {
            return api.get('/order/order', data);
        },

        /**
         * 删除订单
         * @return {data} 返回参数
         */
        removeOrder: function (id, data) {
            return api.remove('/order/order/'+id, data);
        },

        /**
         * 获取订单详情
         * @return {data} 返回参数
         */
        getOrderDetail: function (id, data) {
            return api.get('/order/order/'+id, data);
        },
        /**
         * 根据发票id获取订单详情
         * @return {[type]} [description]
         */
        getOrderDetailByInvoiceId: function (id,data) {
            return api.put('/order/order/'+id, data);
        },


        /**
         * 获取订单回收站列表
         * @return {[type]} [description]
         */
        getOrderRecycle: function (data) {
            return api.get('/order/getTrashedOrder', data);
        },

        /**
         * 还原订单
         * @return {data}
         */
        restoreOrder: function (data) {
            return api.post('/order/restoreOrder', data);
        },

        /**
         * 获取订单用户记录列表
         * @return {data}
         */
        getFeedbackLog: function (data) {
            return api.get('/order/feedbackLog', data);
        },
        /**
         * 更新用户记录
         * @return {data}
         */
        updateFeedbackLog: function (data) {
            return api.post('/order/feedbackLog', data);
        },
        /**
         * 更新用户记录标签
         * @return {data}
         */
        updateFeedbackLogNote: function (data) {
            return api.post('/feedback/feedbackLogNote', data);
        },

        /**
         * 获取订单采购
         * @return {data}
         */
        getDocumentLog: function (data) {
            return api.get('/order/document', data);
        },

        /**
         * 获取印象标签
         * @return {data}
         */
        getFeedbackNote: function (data) {
            return api.get('/feedback/feedbackNote', data);
        },
        /**
         * 新增印象标签
         * @return {data}
         */
        addFeedbackNote: function (data) {
            return api.post('/feedback/feedbackNote', data);
        },


        /**
         * 创建发票
         * @return {data}
         */
        createInvoice: function (data) {
            return api.post('/member/createInvoice', data);
        },
        /**
         * 创建发票快递
         * @return {data}
         */
        createInvoiceExpress: function (data) {
            return api.post('/order/createInvoiceExpress', data);
        },
        /**
         * 更新发票
         * @return {data}
         */
        updateInvoice: function (data) {
            return api.post('/order/invoice', data);
        },
        /**
         * 更新发票打印状态
         * @return {data}
         */
        updateInvoicePrint: function (data) {
            return api.post('/order/updateInvoicePrint', data);
        },


        /**
         * 新增订单配送
         * @return {data}
         */
        createExpress: function (data) {
            return api.post('/order/express', data);
        },
        /**
         * 更新订单配送方式
         * @return {data}
         */
        updateExpress: function (id,data) {
            return api.put('/order/express/'+id, data);
        },

        /**
         * 更新用户订单信息
         * @return {data}
         */
        updateAddress: function (data) {
            return api.post('/member/updateAddress', data);
        },

        /**
         * 更新订单配送方式
         * @return {data}
         */
        updateExpress: function (id,data) {
            return api.put('/order/express/'+id, data);
        },

        /**
         * 更新订单送装时间
         * @return {data}
         */
        updateDelivery: function (id,data) {
            return api.put('/order/delivery/'+id, data);
        },

    };
};
