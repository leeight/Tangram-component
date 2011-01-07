/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 *
 * path: ui/progressBar/ProgressBar.js
 * author: berg
 * version: 1.0.0
 * date: 2010/09/03
 */


///import baidu.ui.progressBar;
///import baidu.ui.createUI;

///import baidu.dom.insertHTML;
///import baidu.dom.setStyle;
///import baidu.dom._styleFilter.px;

///import baidu.string.format;
///import baidu.dom.remove;

/**
 *
 * 进度条控件
 * @param {Object} options 配置参数.
 */
baidu.ui.progressBar.ProgressBar = baidu.ui.createUI(function(options) {
}).extend({
    uiType: 'progressBar',
<<<<<<< HEAD
	  tplBody: '<div id="#{id}" class="#{class}">#{bar}</div>',
=======
	tplBody: '<div id="#{id}" class="#{class}">#{bar}</div>',
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
    tplBar: '<div id="#{barId}" class="#{barClass}"></div>',

    //初始化时，进度条所在的值
    value: 0,

<<<<<<< HEAD
    _min: 0,
    _max: 100,
	 
   //位置变换
	  axis: {
		    horizontal: {offsetSize: 'offsetWidth', size: 'width'},
		    vertical: {offsetSize: 'offsetHeight', size: 'height'}
	  },
    
=======
    layout: 'horizontal',

    _min: 0,
    _max: 100,
	 //位置变换
	axis: {
		horizontal: {offsetSize: 'offsetWidth', size: 'width'},
		vertical: {offsetSize: 'offsetHeight', size: 'height'}
	},
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
    /**
     * 获得控件字符串
     * @return {string} HTML string.
     */
<<<<<<< HEAD
	  getString: function() {
		    var me = this;
		    return baidu.format(me.tplBody, {
			      id: me.getId(),
			      'class' : me.getClass(),
=======
	getString: function() {
		var me = this;
		return baidu.format(me.tplBody, {
			id: me.getId(),
			'class' : me.getClass(),
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
            bar: baidu.format(me.tplBar, {
                barId: me.getId('bar'),
                barClass: me.getClass('bar')
            })
		    });
	  },

	  /**
	   * 渲染进度条
     * @param {HTMLElement} target
<<<<<<< HEAD
     */
	  render: function(target) {
		    var me = this,
=======
	 */
	render: function(target) {
		var me = this,
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
            main;

        if (!target) {
            return;
        }

<<<<<<< HEAD
        baidu.dom.insertHTML(me.renderMain(target), 'beforeEnd', me.getString());
		    me.dispatchEvent('onload');
=======
        baidu.dom.insertHTML(
            me.renderMain(target),
            'beforeEnd',
            me.getString()
        );
		me.dispatchEvent('onload');

>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
        me.update();
	  },

    /**
     * 更新progressBar状态
     * @param {object} options 参数.
     */
    update: function(options) {
        var me = this;

        options = options || {};
        baidu.object.extend(me, options);

        me.value = Math.max(Math.min(me.value, me._max), me._min);
        if (me.value == me._lastValue) {
            return;
        }
		
        var len = me.axis[me.layout].size;
        baidu.dom.setStyle(me.getBar(), len, me._calcPos(me.value));
        me._lastValue = me.value;

<<<<<<< HEAD
		    me.dispatchEvent('update');
=======
		me.dispatchEvent('update');
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
    },

    /**
     * 获得当前的value
     * @return {number} value.
     */
    getValue: function() {
        var me = this;
        return me.value;
    },

    /**
     * 将value转换为位置信息
     */
    _calcPos: function(value) {
        var me = this;
<<<<<<< HEAD
		    var len = me.getBody()[me.axis[me.layout].offsetSize];
=======
		var len = me.getBody()[me.axis[me.layout].offsetSize];
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
        return value * (len) / (me._max - me._min);
    },

    /**
     * 禁用进度条
     */
    disable: function() {
        this.disabled = true;
    },

    /**
     * 启用进度条
     */
    enable: function() {
        this.disabled = false;
    },

    /**
     * 获取target元素
     * @return {HTMLElement} target.
     */
    getTarget: function() {
        return baidu.g(this.targetId);
    },

    /**
     * 获取进度条元素
     * @return {HTMLElement} bar.
     */
    getBar: function() {
        return baidu.g(this.getId('bar'));
    },

    /**
     * 销毁当前实例
     */
    dispose: function() {
        var me = this;
        baidu.dom.remove(me.getId());
    }
});
