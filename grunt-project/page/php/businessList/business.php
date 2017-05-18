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
// $type = $_GET['type'];
// $status = $_GET['status'];
$data = read("business.json");

sleep(1);
echo $callback.'('.json_encode($data).')';
exit;
 
?>