<?php
function sendmail($body, $debug = false){
	include('Mail.php');
//	$recipients         = 'shenlixia@baidu.com';
	$headers['From']    = 'shenlixia@baidu.com';
	$headers['To']      = 'yangbo <yangbo@baidu.com>';
	$headers['Subject'] = '批量运行结果——tangram component';
	$params['host'] = 'hotswap-c.baidu.com';//email.baidu.com';
	$headers['Content-type'] = "text/html;charset=utf-8";//设置邮件内容为html格式
	$params['username'] = 'shenlixia';
	$params['password'] = 'baidu@123';
	$params['auth'] = false;
	$params['debug'] = true;
	// Create the mail object using the Mail::factory method
	$mail_object =& Mail::factory('smtp', $params);
	$result = $mail_object->send($headers['To'], $headers, $body);
	
}

/**添加一个直接发送邮件的链接
 if(array_key_exists('sendmail', $_GET)){
 sendmail($_GET['sendmail']);
 }
 */
//var_dump(ini_get('include_path'));
//sendmail('test', true);
?>