module("baidu.ui.tab.Tab");

/**
 * <ul>
 * check Tab method and attribute
 * <li> type : TAB
 */
test("Tab", function() {
	var t = new baidu.ui.tab.Tab( {
		content : [ {
			label : "label1",
			content : "<p>content1</p>"
		} ]
	});
	equals("tab", t.uiType.toLowerCase(), "check object type");
	ok(/label1/.test(t.getString()), "check getString - label");
	ok(/<p>content1<\/p>/.test(t.getString()), "check getString - content");
})

test("focus", function() {
	var options = {
		content : [ {
			label : "label1",
			content : "<p>content1</p>"
		}, {
			label : "label1",
			content : "<p>content1</p>"
		} ]
	}
	var t = new baidu.ui.tab.Tab(options);
	t.render(te.dom[0]);
	var l0 = t.getLabel(0), l1 = t.getLabel(1);
	t.focus(l1);
	ok(isShown(t.getContent(l1)), "focus on label 2, content 2 is shown");
	ok(!isShown(t.getContent(l0)), "focus on label 2, content 1 is hide");
	ok(/tangram-tab-current/.test(l1.className), "label 2 selected");
	ok(!/tangram-tab-current/.test(l0.className), "label 1 not selected");
	te.obj.push(t);
})

test("getLabels", function() {
	var options = {
		content : [ {
			label : "label1",
			content : "<p>content1</p>"
		}, {
			label : "label1",
			content : "<p>content1</p>"
		} ]
	}
	var t = new baidu.ui.tab.Tab(options);
	t.render(te.dom[0]);
	var _ul = t.getLabels();
	equals(_ul.nodeType, 1, "check ul type");
	equals(_ul.nodeName, "UL", "check ul type");
	equals(_ul.className, "tangram-tab-labels", "check class");
	te.obj.push(t);
})

test("getLabel", function() {
	var options = {
		content : [ {
			label : "label1",
			content : "<p>content1</p>"
		}, {
			label : "label1",
			content : "<p>content1</p>"
		} ]
	}
	var t = new baidu.ui.tab.Tab(options);
	t.render(te.dom[0]);
	equals(t.getLabel(0).firstChild.innerHTML, options.content[0].label,
			"check get label 0");
	equals(t.getLabel(1).firstChild.innerHTML, options.content[1].label,
			"check get label 1");
	equals(t.getAllLabelItems().length, 2, "check getAllLabelItems");
	equals(t.getAllLabelItems()[0].innerHTML, t.getLabel(0).innerHTML,
			"check getAllLabelItems");
	te.obj.push(t);
})

test("getContent", function() {
	var options = {
		content : [ {
			label : "label1",
			content : "<p>content1</p>"
		}, {
			label : "label1",
			content : "<p>content1</p>"
		} ]
	}
	var t = new baidu.ui.tab.Tab(options);
	t.render(te.dom[0]);
	ok(t.getContent(t.getLabel(0)).innerHTML, options.content[0].content,
			"check get content 0");
	ok(t.getContent(t.getLabel(1)).innerHTML, options.content[1].content,
			"check get content 1");
	te.obj.push(t);
})

test('getProp', function() {
	var options = {
		content : [ {
			label : "label1",
			content : "<p>content1</p>"
		}, {
			label : "label1",
			content : "<p>content1</p>"
		} ]
	}
	var t = new baidu.ui.tab.Tab(options);
	t.render(te.dom[0]);
	var l0 = t.getLabel(0), l1 = t.getLabel(1);
	equals(t.getProp(l0).name, 'tangram-TAB--' + t.guid + 'content0',
			'check get prop from label 0');
	equals(t.getProp(l1).name, 'tangram-TAB--' + t.guid + 'content1',
			'check get prop from label 1');
	te.obj.push(t);
})
