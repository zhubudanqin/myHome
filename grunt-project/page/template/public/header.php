<?php
	header("Content-Type: text/html; charset=UTF-8");
	$baseCssUrl = '/web_fe/.tmp/css/';
	$debug = true;
	$baseJsUrl = '/';
?>
<!DOCTYPE html>
<html>
<head>
<title>悟空找房</title>
<meta charset="utf-8"/>
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="content-type" content="text/html;charset=utf-8">
<link rel="shortcut icon" href="img/source/favicon.ico">
<meta name="description" content="">
<link rel="stylesheet" type="text/css" href="<?php echo $baseCssUrl?>public.css">
<link rel="stylesheet" type="text/css" href="font/iconfont.css">
</head>
<body class="<?php echo !empty($pageName)?$pageName:""?>">


<!--公共头部-->
<div class="publicHead">
    <!--定义主体内容为1200-->
	<div class="indexMainFrame">
		<!--左侧logo及城市切换-->
		<div id="left">
			<div class="logo"><img src="img/source/public/logo.png" width="171" height="40"/></div>
			<!--城市选择-->
			<div class="cityGetName">
			    <!--当前城市-->
				<span>[</span>&nbsp;&nbsp;<em id="City"><b>上海</b><span class="wk_iconfont headerSanJiao">&#xe60b;</span></em><span>]</span>
				<!--城市下拉-->
				<div class="cityList">
					<div class="cityListFrame">
					    <!--radio选择城市类别-->
						<div class="areaSelect">
							<span city-class="1" id="city_in" class="select">国内城市</span>
							<span city-class="2" id="city_out">国际城市</span>
						</div>
						<!--国内具体城市列表-->
						<div class="cityDetail" city-detail-num="1">
						    <!--当前城市-->
							<div class="cityModel">
								<div class="cityTitle"><span>当前城市</span></div>
								<ul class="cityContent">
									<li><a href="#" id="location_city">上海</a></li>
								</ul>
							</div>
							<!--热门城市-->
							<div class="cityModel">
								<div class="cityTitle"><span>热门城市</span></div>
								<ul class="cityContent">
                                	<li><a href="#">北京</a></li>
                                	<li><a href="#">上海</a></li>
                                	<li><a href="#">深圳</a></li>
                                	<li><a href="#">杭州</a></li>
                                	<li><a href="#">苏州</a></li>
                                	<li><a href="#">南京</a></li>
                                	<li><a href="#">杭州</a></li>
                                    <li><a href="#">苏州</a></li>
                                    <li><a href="#">南京</a></li>
                                </ul>
                            </div>
                            <!--全部城市-->
                            <div class="cityModel">
                            	<div class="cityTitle"><span>全部城市</span></div>
                            	<ul class="cityContent">
                                	<li><a href="#">北京</a></li>
                                    <li><a href="#">上海</a></li>
                                    <li><a href="#">重庆</a></li>
                                    <li><a href="#">南京</a></li>
                                    <li><a href="#">无锡</a></li>
                                    <li><a href="#">镇江</a></li>
                                    <li><a href="#">苏州</a></li>
                                    <li><a href="#">南通</a></li>
                                    <li><a href="#">扬州</a></li>
                                    <li><a href="#">常州</a></li>
                                    <li><a href="#">杭州</a></li>
                                    <li><a href="#">嘉兴</a></li>
                                    <li><a href="#">宁波</a></li>
                                    <li><a href="#">绍兴</a></li>
                                    <li><a href="#">合肥</a></li>
                                    <li><a href="#">福州</a></li>
                                    <li><a href="#">南昌</a></li>
                                    <li><a href="#">新乡</a></li>
                                    <li><a href="#">广州</a></li>
                                    <li><a href="#">深圳</a></li>
                                </ul>
                            </div>
						</div>
						<!--国际城市列表-->
						<div class="cityDetail" city-detail-num="2" style="display:none">
                            <div class="cityModel">
                            	<div class="cityTitle"><span>国际城市</span></div>
                            	<ul class="cityContent">
                            		<li><a href="/NY" id="location_city">纽约</a></li>
                            	</ul>
                            </div>
						</div>
					</div>
				</div>
		    </div>
	    </div>
	    <div class="headerR">
             <!--中间导航列表-->
            <div id="middle">
                <ul class="nav">
                    <li><a href="#" class="blue" style="margin-left:0px;">首页</a></li>
                    <li><a href="#">新房</a></li>
                    <li><a href="#">二手房</a></li>
                    <li><a href="#">地图找房</a></li>
                    <li><a href="#">卖房</a></li>
                    <li><a href="#">发现</a></li>
                    <li><a href="#">APP</a></li>
                    <li><a href="#">悟空贷</a></li>
                </ul>
            </div>
             <!--右侧登录注册-->
            <div id="right">
                <div class="wk_iconfont">&#xe614;</div>
                <p class="loginStatus headerLoginButton"><a href="#">13555555555</a> <a class="quitButtonNei"></a></p>
            </div>   
        </div>
	</div>
</div>
