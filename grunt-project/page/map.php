<?php
    header("Content-Type: text/html; charset=UTF-8");
    $baseCssUrl = '/myHome/wap_tn/.tmp/css/';
    $debug = true;
    $baseJsUrl = '/myHome/wap_tn/app/';
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
	<title>Document</title>
	<!-- 此js必加上start-->
    <script type="text/javascript">
    ! function(e, n) {
        var t = e.documentElement,
            i = "orientationchange" in n ? "orientationchange" : "resize",
            o = function() {
                var e = t.clientWidth;
                e && (t.style.fontSize = (20 * (e / 375)) + "px")
            };
        n.globalCheckIsInWebview = function() {
            var e = document.cookie.match(new RegExp("(^| )deviceType=([^;]*)(;|$)"));
            return e && e[2] && ("0" == e[2] || "1" == e[2]) ? !0 : !1
        }, o(), e.addEventListener && (n.addEventListener(i, o, !1), e.addEventListener("DOMContentLoaded", o, !1))
    }(document, window);
    </script>
    <!-- 此js必加上end-->
	<link rel="stylesheet" type="text/css" href="<?php echo $baseCssUrl?>mypublic.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo $baseCssUrl?>map.css" />
</head>
<body>
	<div class="content">
			<div class="map" id="allmap">
			</div>
			<div class="mapSet">
				<div class="industryinfo clearfix">
					<a href="javascript:;" class="on">交通</a>
					<a href="javascript:;">医疗</a>
					<a href="javascript:;">教育</a>
					<a href="javascript:;">商业</a>
				</div>
				<div class="surroundinfobox">
					<span></span>
					<ul id="surroundinfo">
						<li>
							<p class="add">上海</p>
							<p>地址</p>
							<p>1383838438</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=4WGv4Z7nZZECSjKXKMyELxi5"></script>
<input type="hidden" id="lon" value="121.498568">
<input type="hidden" id="lat" value="31.216456">
<input type="hidden" id="estateName" value="DFS旗下旗舰店">
		<script id="requirejs" src="<?php echo $baseJsUrl?>lib/require.min.js" data-main="<?php echo $baseJsUrl?>main.js" data-page="map"></script>
</body>
</html>