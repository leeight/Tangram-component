/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 *
 * path: ui/dialog/Dialog$button.js
 * author: lixiaopeng
 * version: 1.0.0
 * date: 2010/11/18
 */

///import baidu.ui.dialog;
///import baidu.ui.dialog.Dialog;
///import baidu.ui.button.Button;
///import baidu.object.each;


/**
 * 根据this.buttons创建dialog下部的buttons
 * butions格式
 * {
 *  name,{baidu.ui.button.Button相同的参数}
 * }
 * */
baidu.extend(baidu.ui.dialog.Dialog.prototype, {
    /**
     * 创建底部按钮
<<<<<<< HEAD
     */
    createButtons: function() {
        var me = this;
        baidu.object.each(this.buttons, function(opt, name) {
           baidu.extend(opt, {
               classPrefix: me.classPrefix + '-' + name,
               skin: me.skin ? me.skin + '-' + name : '',
               element: me.getFooter(),
               autoRender: true,
               parent: me
           });
           var buttonInstance = baidu.ui.create(baidu.ui.button.Button, opt);
           me.buttonInstances[name] = buttonInstance;
       });
=======
     * @param {Object} option 创建按钮的options
     * @param {String} name 按钮的唯一标识符
     * @return void
     * */
    createButton:function(option,name){
        var me = this;
        baidu.extend(option,{
            classPrefix : me.classPrefix + "-" + name,
            skin : me.skin ? me.skin + "-" + name : "",
            element : me.getFooter(),
            autoRender : true,
            parent : me
        });
        var buttonInstance = baidu.ui.create(baidu.ui.button.Button, option);
        me.buttonInstances[name] = buttonInstance;
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
    },

    /**
     * 删除底部按钮
<<<<<<< HEAD
     */
    removeButtons: function() {
        var me = this;
        baidu.object.each(me.buttonInstances, function(button,key) {
=======
     * @param {String} name 按钮的唯一标识符
     * @return void
     * */
    removeButton:function(name){
        var me = this,
            button = me.buttonInstances[name];
        if(button){
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
            button.dispose();
            delete(me.buttonInstances[name]);
            delete(me.buttons[name]);
        }
    }
});

baidu.ui.dialog.Dialog.register(function(me) {
    //存储button实例
    me.buttonInstances = {};

    //在onLoad时创建buttons
<<<<<<< HEAD
    me.addEventListener('onload', function() {
        me.createButtons();
    });

    //在dispose时同时dispose buttons
    me.addEventListener('ondispose', function() {
        me.removeButtons();
=======
    me.addEventListener("onload",function(){
        baidu.object.each(me.buttons,function(opt, name){
            me.createButton(opt,name);
        });
    });

    //在dispose时同时dispose buttons
    me.addEventListener("ondispose",function(){
        baidu.object.each(me.buttons,function(opt, name){
            me.removeButton(name);
        });
    });

    //在update时同时update buttons
    me.addEventListener("onupdate",function(){
        baidu.object.each(me.buttons,function(opt, name){
            me.buttonInstances[name] ? me.buttonInstances[name].update(opt) : me.createButton(opt,name); 
        });
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
    });
});
