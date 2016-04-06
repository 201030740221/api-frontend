var api, reqwest;

reqwest = require('reqwest');

api = function(method, url, data, options) {
    var config = {
        method: method || 'get',
        url: url,
        data: data || null,
        headers:{
            "X-Requested-With": 'XMLHttpRequest'
        },
        success: function(res){
            if(options.success)
                options.success.call(this,{
                    data: res,
                    url: options.baseUrl,
                    method: method
                });
        },
        error: function (error) {
            options.error && options.error.call(this, error);
        }
    }

    if (options.crossDomain){
        config.crossOrigin = true;
        config.withCredentials = true;
    }

    if (options.headers) {
        var headers = options.headers
        ,   headerName
        ,   headerValue

        for (headerName in headers) {
            headerValue = headers[headerName]

            if (typeof headerValue === 'function') {
                headerValue = headerValue(config)
            }

            if (headerValue) {
                config.headers[headerName] = headerValue;
            }
        }
    }

    return reqwest(config);
};

module.exports = function(options) {
    return {
        rest: function(url){

            var apiUrl = options.host + url;

            var RestApi = function(url){
            };

            function getUrlParams( restUrl, args){
                var len = args.length,
                    data = args[len-1];
                // 封装 url
                var urlParams = restUrl.match(/(\{\{\w+\}\})/ig);
                urlParams && urlParams.map(function(_urlParams, index){
                  restUrl = restUrl.replace(_urlParams, args[index]);
                });

                return {
                  url: restUrl,
                  data: typeof data === "object"? data :null
                }
            }

            // 查询列表
            RestApi.prototype.find = function() {
                var urlData = getUrlParams(apiUrl, arguments);
                return api('get', urlData.url , urlData.data, options);
            };

            // 查询一条数据
            RestApi.prototype.findOne = function() {
                var urlData = getUrlParams(apiUrl + '/{{id}}', arguments);
                return api('get', urlData.url , urlData.data, options);
            };

            // 添加一条数据
            RestApi.prototype.add = function() {
                var urlData = getUrlParams(apiUrl, arguments);
                return api('post', urlData.url, urlData.data, options);
            };

            // 更新一条数据
            RestApi.prototype.update = function(id, data) {
                var urlData = getUrlParams(apiUrl + '/{{id}}', arguments);
                return api('put', urlData.url, urlData.data, options);
            };

            // 删除一条数据
            RestApi.prototype.remove = function(id, data) {
                var urlData = getUrlParams(apiUrl + '/{{id}}', arguments);
                return api('delete', urlData.url, urlData.data, options);
            };

            return new RestApi(url);
        },
        get: function(url, data) {
            options.baseUrl = url;
            if(options.filter)
                data = options.filter.call(this,{
                    data: data,
                    url: options.baseUrl,
                    method: "get"
                });

            return api('get', options.host + url, data, options);
        },
        post: function(url, data) {
            options.baseUrl = url;
            if(options.filter)
                data = options.filter.call(this,{
                    data: data,
                    url: options.baseUrl,
                    method: "get"
                });

            return api('post', options.host + url, data, options);
        },
        patch: function(url, data) {
            options.baseUrl = url;
            if(options.filter)
                data = options.filter.call(this,{
                    data: data,
                    url: options.baseUrl,
                    method: "get"
                });

            return api('patch', options.host + url, data, options);
        },
        put: function(url, data) {
            options.baseUrl = url;
            if(options.filter)
                data = options.filter.call(this,{
                    data: data,
                    url: options.baseUrl,
                    method: "get"
                });

            return api('put', options.host + url, data, options);
        },
        remove: function(url, data) {
            options.baseUrl = url;
            if(options.filter)
                data = options.filter.call(this,{
                    data: data,
                    url: options.baseUrl,
                    method: "get"
                });

            return api('delete', options.host + url, data, options);
        }
    };
};
