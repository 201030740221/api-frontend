/**
 * 广告推荐位 API
 */

module.exports = function(options) {
    var api = require('./api')(options);
    return {
        tag: api.rest('/tag/tag')
    };
};
