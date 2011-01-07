/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 *
 * path: ui/dialog/Dialog$smartCover.js
 * author: berg
 * version: 1.0.0
 * date: 2010-05-18
 */

///import baidu.ui.dialog.Dialog;
///import baidu.ui.smartCover;

/**
 * 智能遮罩，在ie6下遮住select等玩意儿
 * 当dialog显示的时候显示遮罩，隐藏的时候同时隐藏
 */
baidu.ui.dialog.Dialog.register(function(me) {
    me.addEventListener('onopen', function() {
        baidu.ui.smartCover.show(this);
    });
    me.addEventListener('onclose', function() {
        baidu.ui.smartCover.hide(this);
    });
<<<<<<< HEAD
    me.addEventListener('onupdate', function() {
=======
    me.addEventListener("onload", function(){
        baidu.ui.smartCover.update(this);
    });
    me.addEventListener("onupdate", function(){
>>>>>>> 613064b666d5492873827fe7548f75300aaa8e4b
        baidu.ui.smartCover.update(this);
    });
});
