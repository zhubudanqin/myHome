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
    <title>wap端分页</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
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
    <!-- 此js必加上start-->
    <link rel="stylesheet" type="text/css" href="<?php echo $baseCssUrl?>mypublic.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo $baseCssUrl?>couponCenter.css" />
</head>

<body>
    <div class="wrapper">
        <div class="w-main">
            <!--头部start-->
            <div class="w-defaulthead">
                <div class="top">
                    <a class="back" href="javascript:history.go(-1);"><span></span></a>
                    <div class="title"><span>券中心</span></div>
                </div>
                <!--筛选导航start-->
                <div class="filter clearfix" id="j-filter">
                    <a href="javascript:void(0);" class="j-filter-button" data-value="" data-id="#status" id="statusVouc"><span><span class="status">可用券</span><i></i></span></a>
                    <a href="javascript:void(0);" class="j-filter-button" data-value="" data-id="#type" id="typeVouc"><span><span class="type">券类型</span><i></i></span>
					</a>
                </div>
                <!--筛选导航end-->
                  <!--筛选下的盒子内容start-->
            <div class="w-filter" id="j-filterC">
                <div class="box" id="status">
                    <ul class="boxul statusul">
                        <li status="1">可用券</li>
                        <li status="2">过期券</li>
                    </ul>
                </div>
                <div class="box" id="type">
                    <ul class="boxul typeul">
                        <li type="0">全部</li>
                        <li type="1">返现码</li>
                        <li type="2">满减券</li>
                        <li type="3">优惠券</li>
                        <li type="4">打折券</li>
                        <li type="5">现金券</li>
                    </ul>
                </div>
            </div>
            <!--筛选下的盒子内容end-->
            </div>
            <!--头部end -->
          
            <!--券的列表展示start-->
            <div class="w-coupon-box" id="couponlist">
            </div>
            <!--券的列表展示end-->
            <!--正在加载提示start-->
            <div class="p-listLoading">
                <div class="p-listloading-btn" style="display:none"><span>加载失败，点击重新加载</span></div>
                <div class="p-listloading-bg">
                    <img id="base64-img" src="data:image/.gif;base64,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">
                </div>
            </div>
            <!--正在加载提示end-->
        </div>
        <a href="javascript:;" class="backTop"></a>
    </div>
    <!-- 券模板start -->
    <script type="text/html" id="useTpl">
        <%for(var i=0,len=list.length;i<len;i++){%>
            <div class="w-item <%if(list[i].status == '2'){%>coupon-done<%}%>" data-couponid="<%=list[i].pmt_code%>">
                <div class="title">
                    <span class="btn <%=list[i].couponBtnColor%>"><%=list[i].pmt_type_name%></span>
                    <h2 class="business-name ellipsis"><%=list[i].pmt_main_title%></h2>
                    <%if(list[i].total >= 2){%>
                        <p class="coupon-num <%=list[i].couponBtnColor%>">
                            X<span><%=list[i].total%></span>
                        </p>
                        <%}%>
                </div>
                <div class="coupon-con">
                    <h3 class="coupon-name ellipsis"><%=list[i].pmt_sub_title%></h3>
                    <p class="coupon-desc ellipsis">
                        <%=list[i].pmt_content%>
                    </p>
                    <p class="coupon-look">
                        <%if(list[i].status == '1'){%>
                          	查看
                        <%}else{%>
                           已过期
                        <%}%>
                    </p>
                </div>
                <%if(list[i].status == '1'){%>
                    <a class="coupon-link" href="<%=list[i].jump_url%>"></a>
                <%}else{%>
                    <a class="coupon-link" href="javascript:;"></a>
                <%}%>
            </div>
            <%}%>
    </script>
    <!-- 券模板start -->
    <!-- 无券模板start -->
    <script type="text/html" id="noneTpl">
        <div class="w-hide">
            <img class="hide" src="//img2.tuniucdn.com/site/market/topic/global_tn/images/couponCenter/tishipic.png">
        </div>
    </script>
    <!-- 无券模板start -->

    <script id="requirejs" src="<?php echo $baseJsUrl?>lib/require.min.js" data-main="<?php echo $baseJsUrl?>main.js" data-page="couponCenter"></script>
</body>

</html>
