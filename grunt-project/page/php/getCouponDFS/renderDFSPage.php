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
$data = read("renderDFSPage.json");
sleep(1);
echo $callback.'('.json_encode($data).')';
exit;
 
?>