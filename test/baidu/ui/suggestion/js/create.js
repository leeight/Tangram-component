module("baidu.ui.suggestion.create");

test("create", function() {
	var input = testingElement.dom[0];
	var sugg = baidu.ui.suggestion.create(input);
	testingElement.obj.push(sugg);
	var suggElement = sugg.getMain();
	ok(suggElement, "dom created");
	ok(!isShown(suggElement), "hide default");
	equals(sugg.uiType, "suggestion", "check type");
	equals(sugg.targetId, input.id, "check target");
});

test("create input in container", function() {
	var input = testingElement.dom[0];
	var div = document.createElement("div");
	div.appendChild(input);
	document.body.appendChild(div);
	var sugg = baidu.ui.suggestion.create(input);
	testingElement.obj.push(sugg);
	testingElement.dom.push(div);
	var suggElement = document.body.lastChild;
	ok(suggElement, "dom created");
	ok(!isShown(suggElement), "hide default");
	equals(sugg.uiType, "suggestion", "check type");
	equals(sugg.targetId, input.id, "check target");
});
