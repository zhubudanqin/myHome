(function() {
    var config = {
        paths: {
            'jQuery': 'lib/jquery.min',
            'zepto': 'lib/zepto.min',
            'swiper': 'lib/ui/swiper'

        },
        shim: {
            jQuery: {
                deps: [],
                exports: '$'
            },
            zepto: {
                deps: [],
                exports: '$'
            },
            swiper: {
                deps: ['zepto'],
                exports: 'swiper'
            }

        }
    };
    window.GDATA = {
        'businessListAjax': '/myHome/wap_tn/page/php/businessList/business.php',
        'businessListFilter': '/myHome/wap_tn/page/php/businessList/desti.php',
        'businessDetailAjax': '/myHome/wap_tn/page/php/businessDetail/renderBusinessPage.php',
        'businessCouponAjax': '/myHome/wap_tn/page/php/businessDetail/businessCoupon.php',
        'couponCenterAjax': '/myHome/wap_tn/page/php/couponCenter/couponCenter.php',
        'getDFSCouponAjax': '/myHome/wap_tn/page/php/getCouponDFS/getCouponDFS.php',
        'renderGetDFSPageAjax': '/myHome/wap_tn/page/php/getCouponDFS/renderDFSPage.php',
        'renderCouponAjax':'/myHome/wap_tn/page/php/couponDetail/couponDetail.php',
        'renderCouponDianzi':'/myHome/wap_tn/page/php/couponDetail/couponDianzi.php',
        'renderCouponDFS':'/myHome/wap_tn/page/php/couponDetail/couponDFS.php'
    };
    require.config(config);
    var obj = document.getElementById('requirejs');
    if (obj) {
        var page = obj.getAttribute('data-page');
        require(['action/' + page]);
    }

})();
