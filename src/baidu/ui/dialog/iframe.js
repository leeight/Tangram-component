/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 *
 * path: ui/dialog/iframe.js
 * author: berg
 * version: 1.0.0
 * date: 2010-05-18
 */

<<<<<<< HEAD
=======
/**
 * 应用实现 iframe
 *
 * @param  {String}             iframeSrc               iframe的url.
 * @param  {Object}             options optional        选项参数.
 *
 */

>>>>>>> 2692f8ef59b3e9a30f5cf3d1ed104a7b8fa169c7
///import baidu.ui.dialog;
///import baidu.ui.dialog.Dialog;
///import baidu.string.format;
///import baidu.browser.ie;

<<<<<<< HEAD
/**
 * 应用实现 iframe
 *
 * @param  {string} iframeSrc iframe的url.
 * @param  {Object} options optional 选项参数.
 */
=======
>>>>>>> 2692f8ef59b3e9a30f5cf3d1ed104a7b8fa169c7
baidu.ui.dialog.iframe = function(iframeSrc, options) {
    options = options || {};
    var dialog = new baidu.ui.dialog.Dialog(options),
        iframe = 'iframe',
        iframeElement;
    dialog.contentText = baidu.format(
        dialog.tplIframe,
            iframeSrc,
            dialog.getId(iframe),
            dialog.getClass(iframe),
            dialog.iframeName ? dialog.iframeName : dialog.getId(iframe)
    );
    dialog.render();

<<<<<<< HEAD
    // 让IE强制rerender,否则iframe可能出不来
=======
    //让IE强制rerender,否则iframe可能出不来
>>>>>>> 2692f8ef59b3e9a30f5cf3d1ed104a7b8fa169c7
    iframeElement = dialog.getContent().firstChild;
    if (baidu.browser.ie) {
        iframeElement.src = dialog.getContent().firstChild.src;
    }

<<<<<<< HEAD
    // 解决iframe加载后无法准确定位dialog的问题
=======
    //解决iframe加载后无法准确定位dialog的问题
>>>>>>> 2692f8ef59b3e9a30f5cf3d1ed104a7b8fa169c7
    baidu.on(iframeElement, 'onload', function() {
        dialog.update(dialog);
    });

    dialog.open();
    return dialog;
};

// 通过extend方法扩展默认属性
baidu.ui.dialog.Dialog.extend({
    tplIframe: "<iframe width='100%' height='100%' frameborder='0' scrolling='no' src='#{0}' name='#{3}' id='#{1}' class='#{2}'></iframe>"
});
