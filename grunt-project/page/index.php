<?php
    header("Content-Type: text/html; charset=UTF-8");
    $baseCssUrl = '/myHome/wap_tn/.tmp/css/';
    $debug = true;
    $baseJsUrl = '/myHome/wap_tn/app/';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
    <script type="text/javascript" src="/myHome/wap_tn/app/util/resize.js"></script>
    <link rel="stylesheet" type="text/css" href="<?php echo $baseCssUrl?>mypublic.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo $baseCssUrl?>index.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo $baseCssUrl?>swiper.min.css" />

</head>
<body>
    <div class="wrapper">
        <!-- 顶部标题start -->
        <div class="top">
            <a class="back" href="javascript:history.go(-1)"><span></span></a>
            <div class="title"><span>首页</span></div>
        </div>
        <!-- 顶部标题end -->
        <!-- 头图轮播start -->
        <div class="banner temp-item block" type="advertisement" contentType="2" showNum="2" data-item-id="1" data-item-title="轮播图">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <img src="http://m.tuniucdn.com/fb2/t1/G2/M00/B9/9B/Cii-TFgIL1OIOB72AANmCTot7X4AADjIAF4zncAA2Yh77.jpeg">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <img src="http://m.tuniucdn.com/fb2/t1/G2/M00/17/A0/Cii-TlgywFyIX4FiAAFmKg0osFEAAEqBwKP4z0AAWZC03.jpeg">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <img src="http://m.tuniucdn.com/fb2/t1/G2/M00/A3/91/Cii-Tlf551KITVsjAAV_S9oJSKAAADMAwD4dbgABX9j23.jpeg">
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="http://www.tuniu.com/zt/FIJIQ3/">
                            <img src="http://m.tuniucdn.com/fb2/t1/G2/M00/D5/49/Cii-TFgRxo6IYwxfAAJ3cPI5UQ8AADyvAHb2sEAAneI53.jpeg">
                        </a>
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <!-- 头图轮播end -->
        <div class="index-menus-box">
            <ul>
                <li>
                    <a href="javascript:;">
                        <span class="icon-tuishui">
                            <img src="//m.tuniucdn.com/fb2/t1/G1/M00/49/1F/Cii9EVh8gUKIQhGJAAAH36cWZVcAAG_fwP_98oAAAg2740.png">
                        </span>
                        <h2>退税</h2>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <span class="icon-help">
                            <img src="//m.tuniucdn.com/fb2/t1/G2/M00/CC/9E/Cii-Tlh8gpeIYc8iAAAG3ZdBLtMAAGxXwP_-QIAAAb-448.png">
                        </span>
                        <h2>帮助中心</h2>
                    </a>
                </li>
                <li>
                    <a href="couponCenter.php">
                        <span class="icon-kaquan">
                            <img src="//m.tuniucdn.com/fb2/t1/G1/M00/47/A7/Cii9EVh8gxWIAtWlAAAJpVquBf8AAG-lAP_9j4AAAnC218.png">
                        </span>
                        <h2>卡券中心</h2>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <span class="icon-qidai">
                            <img src="//m.tuniucdn.com/fb2/t1/G1/M00/49/3C/Cii9EFh8gxSIY3G7AAAKYojIa0oAAG_kgP_9YQAAAp8592.png">
                        </span>
                        <h2 style="color:#8b8b8b;">敬请期待</h2>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 目的地start -->
        <div class="destination-nav">
            <div class="desti-tit">
                <h2>购物目的地</h2>
            </div>
            <div class="desti-con">
                <ul>
                    <li><a href="businessList.php">香港</a></li>
                    <li><a href="businessList.php">首尔</a></li>
                    <li><a href="javascript:;">冲绳</a></li>
                    <li><a href="javascript:;">新加坡</a></li>
                    <li><a href="javascript:;">泰国</a></li>
                    <li><a href="javascript:;">悉尼</a></li>
                    <li><a href="javascript:;">巴厘岛</a></li>
                    <li><a href="javascript:;">吴哥</a></li>
                    <li><a href="javascript:;">塞班岛</a></li>
                    <li><a href="javascript:;">关岛</a></li>
                    <li><a href="javascript:;">夏威夷</a></li>
                    <li><a href="javascript:;">新西兰</a></li>
                    <li><a href="javascript:;">塞班岛</a></li>
                </ul>
                <a href="javascript:;" class="dc-btn desti-all">显示全部</a>
                <a href="javascript:;" class="dc-btn desti-close">收起</a>
            </div>
        </div>
        <!-- 目的地end -->
        <!-- 商家活动start -->
        <div class="index-business-activity">
            <div class="iba-tit">
                <h2>精彩活动</h2>
            </div>
            <div class="business-activity-con">
                <a href="businessList.php">
                <img src="images/activi01.jpg">
                </a>
                <a href="businessList.php">
                    <img src="images/activi01.jpg">
                </a>
                <a href="businessList.php">
                    <img src="images/activi01.jpg">
                </a>
                <a href="businessList.php">
                    <img src="images/activi01.jpg">
                </a>
                <a href="businessList.php">
                    <img src="images/activi01.jpg">
                </a>
                <a href="businessList.php">
                    <img src="images/activi01.jpg">
                </a>
            </div>
        </div>
        <!-- 商家活动end -->
       <!-- 精选商铺start -->
        <div class="index-business">
            <div class="ib-tit">
                <h2>精选商铺</h2>
            </div>
            <div class="business-activity-con">
                <dl class="w-item">
                    <dt class="business-pic">
                        <img class="ui-lazyload" src="//m.tuniucdn.com/fb2/t1/G2/M00/78/E6/Cii-Tlhc3PmIB-wEAAJ5kIXFQ_QAAF77gMsStgAAnmo54_w640_h0_c0_t0.jpeg" data-original="//m.tuniucdn.com/fb2/t1/G2/M00/78/E6/Cii-Tlhc3PmIB-wEAAJ5kIXFQ_QAAF77gMsStgAAnmo54_w640_h0_c0_t0.jpeg">
                    </dt>
                    <dd>
                        <div class="text">
                            <p class="title">
                               DFS旗下T广场（香港广东道店）
                            </p>
                            <p class="subtitle">
                               Hong Kong Canton Road
                            </p>
                        </div>
                        <div class="cityTags">
                            <p>
                                香港
                            </p>
                        </div>
                        <div class="lookBtn">查看详情</div>
                    </dd>
                    <a href="//shopping.tuniu.cn/merchant/<%=list[i].id%>" class="item_link"></a>
                </dl>
                <dl class="w-item">
                    <dt class="business-pic">
                        <img class="ui-lazyload" src="//m.tuniucdn.com/fb2/t1/G2/M00/78/E6/Cii-Tlhc3PmIB-wEAAJ5kIXFQ_QAAF77gMsStgAAnmo54_w640_h0_c0_t0.jpeg" data-original="//m.tuniucdn.com/fb2/t1/G2/M00/78/E6/Cii-Tlhc3PmIB-wEAAJ5kIXFQ_QAAF77gMsStgAAnmo54_w640_h0_c0_t0.jpeg">
                    </dt>
                    <dd>
                        <div class="text">
                            <p class="title">
                               DFS旗下T广场（香港广东道店）
                            </p>
                            <p class="subtitle">
                               Hong Kong Canton Road
                            </p>
                        </div>
                        <div class="cityTags">
                            <p>
                                香港
                            </p>
                        </div>
                        <div class="lookBtn">查看详情</div>
                    </dd>
                    <a href="//shopping.tuniu.cn/merchant/<%=list[i].id%>" class="item_link"></a>
                </dl>
            </div>
        </div>
        <!-- 精选商铺end -->
        <!-- <div class="clearfix temp-item block" type="product" contenttype="1" shownum="8" data-item-id="2" data-item-title="热销列表">
            <div class="rcm-item">
                <div class="item-image">
                    <a class="product_link" href="//m.tuniu.com/temai/t_212091175">
                        <img class="ui-lazyload"  data-src="https://m.tuniucdn.com/filebroker/cdn/vnd/9b/5b/9b5bbc5c3ba0d0bae550f97937d156bd_w640_h480_c1_t0.jpg" src="https://m.tuniucdn.com/filebroker/cdn/vnd/9b/5b/9b5bbc5c3ba0d0bae550f97937d156bd_w640_h480_c1_t0.jpg" >
                        <p>
	                        <span class="item-type">跟团</span>
	                        <span class="item-departure">上海出发</span>
                        </p>
                    </a>
                </div>
                <div class="item-con">
                    <a class="product_link" href="//m.tuniu.com/temai/t_212091175">
                        <h3>芽庄5或6日游</h3>
                        <p class="item-followed">连住海边哈瓦那或其它海边酒店，市区游览，出海一日游</p>
                        <div class="price">
                            <span class="salePrice"><em>优惠价</em>￥<strong>3499</strong>起</span>
                            <span class="priceDetail">
								<del class="oldPirce" style="display:none;">￥5899</del>
							</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="rcm-item">
                <div class="item-image">
                    <a class="product_link" href="//m.tuniu.com/temai/t_212091175">
                        <img class="ui-lazyload"  data-src="https://m.tuniucdn.com/filebroker/cdn/vnd/9b/5b/9b5bbc5c3ba0d0bae550f97937d156bd_w640_h480_c1_t0.jpg" src="https://m.tuniucdn.com/filebroker/cdn/vnd/9b/5b/9b5bbc5c3ba0d0bae550f97937d156bd_w640_h480_c1_t0.jpg" >
                        <p>
	                        <span class="item-type">跟团</span>
	                        <span class="item-departure">上海出发</span>
                        </p>
                    </a>
                </div>
                <div class="item-con">
                    <a class="product_link" href="//m.tuniu.com/temai/t_212091175">
                        <h3>芽庄5或6日游</h3>
                        <p class="item-followed">连住海边哈瓦那或其它海边酒店，市区游览，出海一日游</p>
                        <div class="price">
                            <span class="salePrice"><em>优惠价</em>￥<strong>3499</strong>起</span>
                            <span class="priceDetail">
								<del class="oldPirce" style="display:none;">￥5899</del>
							</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="rcm-item">
                <div class="item-image">
                    <a class="product_link" href="//m.tuniu.com/temai/t_212091175">
                        <img class="ui-lazyload"  data-src="https://m.tuniucdn.com/filebroker/cdn/vnd/9b/5b/9b5bbc5c3ba0d0bae550f97937d156bd_w640_h480_c1_t0.jpg" src="https://m.tuniucdn.com/filebroker/cdn/vnd/9b/5b/9b5bbc5c3ba0d0bae550f97937d156bd_w640_h480_c1_t0.jpg" >
                        <p>
	                        <span class="item-type">跟团</span>
	                        <span class="item-departure">上海出发</span>
                        </p>
                    </a>
                </div>
                <div class="item-con">
                    <a class="product_link" href="//m.tuniu.com/temai/t_212091175">
                        <h3>芽庄5或6日游</h3>
                        <p class="item-followed">连住海边哈瓦那或其它海边酒店，市区游览，出海一日游</p>
                        <div class="price">
                            <span class="salePrice"><em>优惠价</em>￥<strong>3499</strong>起</span>
                            <span class="priceDetail">
								<del class="oldPirce" style="display:none;">￥5899</del>
							</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="rcm-item">
                <div class="item-image">
                    <a class="product_link" href="//m.tuniu.com/temai/t_212091175">
                        <img class="ui-lazyload"  data-src="https://m.tuniucdn.com/filebroker/cdn/vnd/9b/5b/9b5bbc5c3ba0d0bae550f97937d156bd_w640_h480_c1_t0.jpg" src="https://m.tuniucdn.com/filebroker/cdn/vnd/9b/5b/9b5bbc5c3ba0d0bae550f97937d156bd_w640_h480_c1_t0.jpg" >
                        <p>
	                        <span class="item-type">跟团</span>
	                        <span class="item-departure">上海出发</span>
                        </p>
                    </a>
                </div>
                <div class="item-con">
                    <a class="product_link" href="//m.tuniu.com/temai/t_212091175">
                        <h3>芽庄5或6日游</h3>
                        <p class="item-followed">连住海边哈瓦那或其它海边酒店，市区游览，出海一日游</p>
                        <div class="price">
                            <span class="salePrice"><em>优惠价</em>￥<strong>3499</strong>起</span>
                            <span class="priceDetail">
								<del class="oldPirce" style="display:none;">￥5899</del>
							</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="rcm-item">
                <div class="item-image">
                    <a class="product_link" href="//m.tuniu.com/temai/t_212091175">
                        <img class="ui-lazyload"  data-src="https://m.tuniucdn.com/filebroker/cdn/vnd/9b/5b/9b5bbc5c3ba0d0bae550f97937d156bd_w640_h480_c1_t0.jpg" src="https://m.tuniucdn.com/filebroker/cdn/vnd/9b/5b/9b5bbc5c3ba0d0bae550f97937d156bd_w640_h480_c1_t0.jpg" >
                        <p>
	                        <span class="item-type">跟团</span>
	                        <span class="item-departure">上海出发</span>
                        </p>
                    </a>
                </div>
                <div class="item-con">
                    <a class="product_link" href="//m.tuniu.com/temai/t_212091175">
                        <h3>芽庄5或6日游</h3>
                        <p class="item-followed">连住海边哈瓦那或其它海边酒店，市区游览，出海一日游</p>
                        <div class="price">
                            <span class="salePrice"><em>优惠价</em>￥<strong>3499</strong>起</span>
                            <span class="priceDetail">
								<del class="oldPirce" style="display:none;">￥5899</del>
							</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="rcm-item">
                <div class="item-image">
                    <a class="product_link" href="//m.tuniu.com/temai/t_212091175">
                        <img class="ui-lazyload"  data-src="https://m.tuniucdn.com/filebroker/cdn/vnd/9b/5b/9b5bbc5c3ba0d0bae550f97937d156bd_w640_h480_c1_t0.jpg" src="https://m.tuniucdn.com/filebroker/cdn/vnd/9b/5b/9b5bbc5c3ba0d0bae550f97937d156bd_w640_h480_c1_t0.jpg" >
                        <p>
	                        <span class="item-type">跟团</span>
	                        <span class="item-departure">上海出发</span>
                        </p>
                    </a>
                </div>
                <div class="item-con">
                    <a class="product_link" href="//m.tuniu.com/temai/t_212091175">
                        <h3>芽庄5或6日游</h3>
                        <p class="item-followed">连住海边哈瓦那或其它海边酒店，市区游览，出海一日游</p>
                        <div class="price">
                            <span class="salePrice"><em>优惠价</em>￥<strong>3499</strong>起</span>
                            <span class="priceDetail">
								<del class="oldPirce" style="display:none;">￥5899</del>
							</span>
                        </div>
                    </a>
                </div>
            </div>
        </div> -->
    </div>
 <script type="text/javascript" src="<?php echo $baseJsUrl?>lib/jquery.min.js"></script>
 <script type="text/javascript" src="<?php echo $baseJsUrl?>lib/ui/newlazyload.js"></script>
 <script type="text/javascript" src="<?php echo $baseJsUrl?>lib/ui/swiper.js"></script>
 <script type="text/javascript" src="<?php echo $baseJsUrl?>action/index2.js"></script>
</body>
</html>
