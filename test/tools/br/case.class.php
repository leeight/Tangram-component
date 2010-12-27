<?php
/**
 * for case running
 *
 * @author bell
 */
class Kiss{
	public $projroot;
	/**
	 * case name
	 * @var string
	 */
	public $name;

	public $path;

	private $ext;
	/**
	 * type of case is core or another
	 * @var boolean
	 */
	public $is_core;
	/**
	 * true means qunit, false means jsspec
	 * @var boolean
	 */
	public $js_frame;
	/**
	 * case id shown in html
	 * @var string
	 */
	public $case_id;

	/**
	 * 某些用例是空的，应该直接过滤掉
	 * @var unknown_type
	 */
	public $empty = false;

	/**
	 *
	 * @param string $projroot root of project
	 * @param string $name namespace of case
	 */
	function __construct($projroot = '../../../', $name = 'baidu.ui.dialog.Dialog', $ext='js'){
		$this->projroot = $projroot;
		$this->name = $name;
		$this->ext = $ext;
		if(strlen($ext)>0){
			$ns = explode('.', $name);
			$n = array_pop($ns);
			array_push($ns, $ext, $n);
			$path = implode('/', $ns);
		}else{
			$path = implode('/', explode('.', $name));
		}

		$this->path = $this->projroot.'test/'.$path.'.js';
		if(filesize($this->path)<20){
			$this->empty = true;
			return;
		}
		$this->is_core();
		$this->js_frame();
		$this->case_id = 'id_case_'.join('_', explode('.', $name));
	}

	/**
	 * 判断一个js是否core
	 */
	private function is_core(){
		$filename = $this->projroot.'release/core.js';
		if(!is_file($filename))
		{
			$this->is_core = false;
			return;
		}
		if($handle = fopen($filename, 'r')){
			$contents = fread($handle, filesize($filename));
			if(sizeof(explode($contents, "//import $this->name;"))==1){
				$this->is_core = false;
			}else{
				$this->is_core = true;
			}
			fclose($handle);
		}else{
			$this->is_core = false;
		}
	}

	private function js_frame(){
		$filename = $this->path;
		if(filesize($filename)>20 && $handle = fopen($filename, 'r')){
			$contents = fread($handle, filesize($filename));
			$this->js_frame = sizeof(explode('module', $contents))>1;
			fclose($handle);
		}else{
		}
	}

	public function print_js(){
		/* load test frame */
		if($this->js_frame){
			print '<script type="text/javascript" src="../jquery-1.3.2.js"></script>'."\n";
			print '<script type="text/javascript" src="../testrunner.js"></script>'."\n";
			print '<script type="text/javascript" src="js/ext_qunit.js"></script>'."\n";
			print '<link media="screen" href="../testsuite.css" type="text/css" rel="stylesheet" />'."\n";
		}else{
//			print '<script type="text/javascript" src="../JSSpec.js"></script>'."\n";
//			print '<script type="text/javascript" src="../DiffMatchPatch.js"></script>'."\n";
			print '<script type="text/javascript" src="js/ext_jsspec.js"></script>'."\n";
//			print '<link media="screen" href="../specs.css" type="text/css" rel="stylesheet"/>'."\n";
		}
		print '<script type="text/javascript" src="../tools.js"></script>'."\n";
		print '<script type="text/javascript" src="../UserAction.js"></script>'."\n";

		/* load case source*/
		//		print '<script type="text/javascript" src="'.$this->projroot.'src/loader.js"></script>'."\n";
		//		print '<script type="text/javascript">Include("'.$this->name.'");</script>'."\n";
		print "<script src='import.php?f=$this->name' ></script>\n";

		/* load case and case dependents*/
		if(strlen($this->ext)>0){
			$ps = explode('.', $this->name);
			array_pop($ps);
			array_push($ps, 'js' ,'tools');
			print '<script type="text/javascript" src="'.$this->projroot.'test/'.implode('/', $ps).'.js"></script>'."\n";
		}
		print '<script type="text/javascript" src="'.$this->path.'"></script>'."\n";
	}

	public function match($matcher){
		if($matcher == '*')
		return true;
		$len = strlen($matcher);

		/**
		 * 处理多选分支，有一个成功则成功，filter后面参数使用|切割
		 * @var unknown_type
		 */
		$ms = explode('|', $matcher);
		if(sizeof($ms)>1){
			foreach($ms as $matcher1){
				if($this->match($matcher1))
				return true;
			}
			return false;
		}

		/**
		 * 处理反向选择分支
		 */
		if(substr($matcher, 0, 1) == '!'){
			$m = substr($matcher, 1);
			if(substr($this->name, 0, strlen($m)) == $m)
			return false;
			return true;
		}

		if($len > strlen($this->name)){
			return false;
		}
		return substr($this->name, 0, $len) == $matcher;
	}

	public static function listcase($matcher="*", $projroot = '../../../'){
		$srcpath = $projroot.'src/';
		$testpath = $projroot.'test/';
		require_once 'filehelper.php';
		$caselist = getSameFile($srcpath, $testpath, '');
		foreach($caselist as $caseitem){
			/*将文件名替换为域名方式，替换/为.，移除.js*/
			$name = str_replace('/','.',substr($caseitem,0, -3));
			$c = new Kiss($projroot, $name);
			if($c->empty)
			continue;
			if($c->match($matcher)){
				print("<a href=\"javascript:void(0)\" id=\"$c->case_id\" class=\"jsframe_"
				.($c->js_frame?"qunit":"jsspec")
				."\" target=\"_blank\" title=\"$name\" onclick=\"run('$name');\$('#id_rerun').html('$name');return false;\">"
				/*过长的时候屏蔽超出20的部分，因为隐藏的处理，所有用例不能直接使用标签a中的innerHTML，而应该使用title*/
				.(strlen($name)>20?(substr($name,0,18)."..."):$name)."</a>");
			}
		}
	}
	
	public static function listSrcOnly($matcher="*", $projroot = '../../../'){
		$srcpath = $projroot.'src/';
		$testpath = $projroot.'test/';
		require_once 'filehelper.php';
		$caselist = getSrcOnlyFile($srcpath, $testpath, '');
		$srcList = array();
		foreach($caselist as $case){
			$c = array();
			$c = explode('/',$case);
			if(count($c) >= 4)
			array_push($srcList,$case);
		}
		return $srcList;

	}
}
?>