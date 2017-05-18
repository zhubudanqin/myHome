<?php

function read($filename){ 
	if(file_exists($filename)){ 
	 $content = file_get_contents($filename); 
	 $json = json_decode($content,true); 
	}else{ 
	 $json = '{"msg":"The file does not exist."}'; 
	} 
	return $json; 
} 

$callback = $_GET['callback'];
//]$type = $_GET['type'];
sleep(1);
$data = read("renderBusinessPage.json");
echo $callback.'('.json_encode($data).')';
exit;
 
?>