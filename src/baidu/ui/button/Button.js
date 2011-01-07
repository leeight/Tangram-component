/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
<<<<<<< HEAD
 *
 * path: ui/button/Button.js
 * author: zhangyao,lixiaopeng
 * version: 1.0.0
 * date: 2010-08-05
=======
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
 */


//依赖包
///import baidu.ui.createUI;
///import baidu.ui.Base.setParent;
///import baidu.ui.Base.getParent;
///import baidu.object.extend;
///import baidu.string.format;
///import baidu.dom.g;
///import baidu.dom.removeClass;
///import baidu.dom.addClass;
///import baidu.dom.insertHTML;
///import baidu.dom.remove;

//声明包

///import baidu.ui.button;
///import baidu.ui.behavior.statable;


/**
 * button基类，创建一个button实例
 *
<<<<<<< HEAD
 * @config {string}                     content			按钮文本信息
 * @config {Boolean}                    disabled		按钮是否有效，默认为false
 * @config {Function}                   onmouseover		鼠标悬停在按钮上时触发
 * @config {Function}                   onmousedown		鼠标按下按钮时触发
 * @config {Function}                   onmouseup		按钮弹起时触发
 * @config {Function}                   onclick         按钮点击时调用
 * @config {Function}                   onmouseout		鼠标移出按钮时触发
 * @config {Function}                   ondisable		按钮失效时触发
 * @config {Function}                   onenable		按钮有效时触发
 * @return {Button}                                     Button类.
=======
 * @author: zhangyao,lixiaopeng, berg
 *
 * @config {String} content 按钮文本信息
 * @config {Boolean} disabled 按钮是否有效，默认为false
 * @config {Function} onmouseover 鼠标悬停在按钮上时触发
 * @config {Function} onmousedown 鼠标按下按钮时触发
 * @config {Function} onmouseup 按钮弹起时触发
 * @config {Function} onclick 按钮点击时调用
 * @config {Function} onmouseout 鼠标移出按钮时触发
 * @config {Function} ondisable 按钮失效时触发
 * @config {Function} onenable 按钮有效时触发
 * @return {baidu.ui.Button} Button类.
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
 */

baidu.ui.button.Button = baidu.ui.createUI(new Function).extend({
    //ui控件的类型，传入给UIBase **必须**
    uiType: 'button',
    //ui控件的class样式前缀 可选
    //classPrefix     : "tangram-button-",
<<<<<<< HEAD
    tplBody: '<div id="#{id}" #{statable}>#{content}</div>',
=======
    tplBody: '<div id="#{id}" #{statable} class="#{class}">#{content}</div>',
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
    disabled: false,
    statable: true,

    /**
     *  获得button的HTML字符串
     *  @private
<<<<<<< HEAD
     *  @return {string} string.
=======
     *  @return {String} string.
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
     */
    _getString: function() {
        var me = this;
        return baidu.format(me.tplBody, {
<<<<<<< HEAD
            id: me.getId(),
            statable: me._getStateHandlerString(),
=======
		    id: me.getId(),
            statable: me._getStateHandlerString(),
		    'class' : me.getClass(),
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
            content: me.content
        });
    },

    /**
     *  将button绘制到DOM树中。
     *  @public
     *  @param {HTMLElement} target
     *  @return void.
     */
<<<<<<< HEAD
    render: function(target) {
        var me = this,
            body;
        me.addState('click', 'click');
        baidu.dom.insertHTML(me.renderMain(target), 'beforeEnd', me._getString());

        body = baidu.g(target).lastChild;
        if (me.title)
           body.title = me.title;

        me.disabled ? me.setState('disabled');
        me.dispatchEvent('onload');
    },
=======
	render: function(target) {
		var me = this,
            body;
        me.addState('click', 'click');
        baidu.dom.insertHTML(
            me.renderMain(target),
            'beforeEnd',
            me._getString()
        );

        body = baidu.g(target).lastChild;
        if (me.title) {
           body.title = me.title;
        }

        me.disabled && me.setState('disabled');
        me.dispatchEvent('onload');
	},
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b

    /**
     *  判断按钮是否处于失效状态。
     *  @pubic
     *  @return {Boolean} state.
     */
<<<<<<< HEAD
    isDisabled: function() {
        var me = this,
            id = me.getId();
        return me.getState()['disabled'];
    },
=======
	isDisabled: function() {
		var me = this,
            id = me.getId();
        return me.getState()['disabled'];
	},
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b

    /**
     *  销毁实例。
     *  @pubic
     *  @return void.
     */
<<<<<<< HEAD
    dispose: function() {
      var me = this,
          body = me.getBody();
=======
	dispose: function() {
		var me = this,
		    body = me.getBody();
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b

        //删除当前实例上的方法
        baidu.each(me._allEventsName, function(item,index) {
            body['on' + item] = null;
        });

        baidu.dom.remove(body);
<<<<<<< HEAD
        baidu.lang.Class.prototype.dispose.call(me);
    },
=======
		baidu.lang.Class.prototype.dispose.call(me);
	},
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b

    /**
     * 触发button事件
     * @pubic
<<<<<<< HEAD
     * @param {string} eventName
=======
     * @param {String} eventName
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
     * @param {Object} e
     * */
    fire: function(eventName,e) {
        var me = this, en = eventName.toLowerCase();
        if (me.getState()['disabled']) {
            return;
        }
        me.setState(eventName);
<<<<<<< HEAD
        me._fireEvent(eventName, null, null, e);
=======
    },

    /**
     * 更新button的属性
     * @param {Object} options  更新button的属性.
     * */
    update: function(options) {
        options = options || {};
        var me = this;
        baidu.extend(me, options);
        if (options.content) {
            me.getBody().innerHTML = options.content;
        }

        me.dispatchEvent('onupdate');
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
    }
});
