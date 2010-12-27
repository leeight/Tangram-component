<?php
require_once 'lib/Request.php';
$r = new Request($_SERVER);
$filter = $r->contain('filter') ? $r->get('filter') : '*';
$quirk = $r->get('quirk') || false;
if(!$quirk){?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<?php }?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Tangram UI Test Index Page</title>
<script type="text/javascript" src="../jquery-1.3.2.js"></script>
<script type="text/javascript" src="js/run.js"></script>
<link media="screen" href="../tangramtest.css" type="text/css"
	rel="stylesheet" />
</head>
<body>
<div id="title">
<h1>Tangram Test Index Page</h1>
<p><a href="http://fe.baidu.com/nighty/tangram/">Tangram Nighty Document</a></p>
</div>
<div id="id_control" class="control"><input id="id_control_runnext"
	type="checkbox" />自动下一个<input id="id_control_breakonerror"
	type="checkbox" />出错时终止<input id="id_control_clearstatus" type="button"
	value="清除用例状态"
	onclick="$('.testlist a').removeClass('running_case pass_case fail_case');" /></div>
<div id="id_testlist_status" class="testliststatus"
	onclick="$('#id_showSrcOnly').slideToggle('slow');"
	style="float: left; clear: both">遗漏用例</div>
<div id="id_showSrcOnly" style="clear: both;"><?php 
require_once "case.class.php";
$str = $_SERVER['QUERY_STRING'];
if(preg_match("/showsrconly/i",$str))
var_dump(Kiss::listSrcOnly());
?></div>
<div class="testliststatusbar">
<div id="id_testlist_status" class="testliststatus"
	onclick="$('#id_testlist').slideToggle('slow');" style="float: left">用例目录</div>
</div>
<div id="id_rerun" onclick="run($('#id_rerun').html());return false;"></div>
<div style="clear: both"></div>
<div id="id_testlist" class="testlist"><?php 
/*分析所有源码与测试代码js文件一一对应的文件并追加到当前列表中*/
require_once "case.class.php";
Kiss::listcase($filter);
?>
<div style="clear: both; overflow: hidden"></div>
</div>
<div id="id_runningarea" class="runningarea"
	style="border: solid; display: none"></div>
<div id="id_reportarea" class="reportarea" style="display: none"></div>

</body>
</html>
