<html>
<head>
<script type="text/javascript" src="../jquery-1.3.2.js"></script>
<?php
$release = preg_match('/release=true/i', $_SERVER['QUERY_STRING']);
if($release == 0 && array_key_exists('f', $_GET))
print "<script type='text/javascript' src='../br/import.php?f={$_GET['f']}'></script>";
else
print "<script type='text/javascript' src='../../../release/all_release.js'></script>";
?>
</head>
<body>
</body>
</html>
