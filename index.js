var webapi, assign;

assign = require('object-assign');

webapi = function(options) {
    return assign({
        member: require('./lib/member')(options),
        collocation: require('./lib/collocation')(options),
        themeCollocation: require('./lib/theme-collocation')(options),
        navigation: require('./lib/navigation')(options),
        frame: require('./lib/frame')(options),
        category: require('./lib/category')(options),
        goods: require('./lib/goods')(options),
        order: require('./lib/order')(options),
        coupon: require('./lib/coupon')(options),
        comment: require('./lib/comment')(options),
        upload: require('./lib/upload')(options),
        media: require('./lib/media')(options),
        preSale: require('./lib/pre-sale')(options),
        erp: require('./lib/erp')(options),
        supplier: require('./lib/supplier')(options),
        spots: require('./lib/spots')(options),
        tools: require('./lib/tools')(options),
        attachment: require('./lib/attachment')(options),
        user: require('./lib/user')(options),
        privilege: require('./lib/privilege')(options),
        article: require('./lib/article')(options),
        topic: require('./lib/topic')(options),
        tags: require('./lib/tag')(options),
        region: require('./lib/region')(options),
        lottery: require('./lib/lottery')(options),
        flashsale: require('./lib/flashsale')(options),
        activity: require('./lib/activity')(options),
        signin: require('./lib/signin')(options),
        register: require('./lib/register')(options),
        aftersales: require('./lib/aftersales')(options),
        additionalBuy: require('./lib/additional-buy')(options)
    });

};

module.exports = webapi;
