/**
 * Tangram
 * Copyright 2010 Baidu Inc. All rights reserved.
 * @path:data/dataSource/ajax.js
 * @author:Walter
 * @version:1.0.0
 * @date:2010-11-30
 */
///import baidu.data.dataSource.DataSource;
///import baidu.ajax.request;
///import baidu.json.stringify;


/**
 * 异步调用数据源类
 * @param {string}     url                           数据源地址.
 * @param {Object}     [options]                     配置.
 * @param {Number}     [options.maxCache = 10]       缓存数据的最大个数.
 * @param {Boolean}    [options.cache = true]        是否使用缓存.
 * @param {Function}   [optons.transition]           转换数据算法.
 * @param {Function}   [options.onbeforeget]         beforeget事件.
 */
baidu.data.dataSource.ajax = function(url, options) {
    options = baidu.object.extend({
        url: url
    }, options || {});

    var dataSource = new baidu.data.dataSource.DataSource(options);

	/**
	 * 获取数据
	 * @param {Object}    options                 配置.
	 * @param {string}    [options.key = url + param]     用于存取缓存.
	 * @param {string}    [options.method = 'GET']        请求的类型.
	 * @param {Object}    [options.param]                 需要发送的数据.
	 * @param {Function}  [options.onsuccess]             加载成功回调函数.
	 * @param {Function}  [options.onfailure]             加载失败回调函数.
	 * @param {Object}    [options.ajaxOption]            request参数.
	 */
    dataSource.get = function(options) {
        var me = this;
        options = options || {};
        options.key = options.key || (me.url + (options.param ? '?' + baidu.json.stringify(options.param) : ''));
        if (!me.dispatchEvent('onbeforeget', options)) {
            baidu.ajax.request(me.url, me.ajaxOption ||
            {
                method: options.method || 'get',
                data: options.param,
                onsuccess: function(xhr, responseText) {
                    me.source = responseText;
                    me._get(options);
                },
                onfailure: function(xhr) {
                    options.onfailure && options.onfailure.call(me, xhr);
                }
            });
        }
    };
    return dataSource;
};
