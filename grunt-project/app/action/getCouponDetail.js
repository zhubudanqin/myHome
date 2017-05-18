require([
    'zepto',
    'lib/ui/template',
    'util/dialogm',
    'util/base'
], function($, template, Dog) {
    // 请求的所有接口
    var API = (function() {
        var ajax = function(opts, fn) {
            opts.dataType = 'jsonp';
            fn && (opts = $.extend({}, fn, opts));
            $.ajax(opts);
        };
        return {
            activityDetailAjax: function(promotion_id, fn) {
                var reqData = {
                    promotion_id: promotion_id
                };

                ajax({
                    url: GDATA.renderGetDFSPageAjax+'?r=' + new Date().getTime(),
                    jsonp: 'callback',
                    data: reqData
                }, fn);
            },
            getCouponAjax: function(promotion_id, fn) {
                var reqData = {
                    promotion_id: promotion_id
                };

                ajax({
                    url: GDATA.getDFSCouponAjax+'?r=' + new Date().getTime(),
                    jsonp: 'callback',
                    data: reqData
                }, fn);
            }
        };
    })();

    var getCouponDetail = {
        setOptions: function(opts) {
            var defaults = {
                getBtnDFS: '#getBtnDFS',
                mainView: '#mainView',
                dialogTemplate: '\
                    <div class=\'dialog-con\'>\
                        <div class=\'dialog-pic\'>\
                            <img src=\'//img1.tuniucdn.com/site/market/topic/global_tn/images/public/gou.png\'>\
                        </div>\
                        <div class=\'dialog-txt\'>\
                            <p class=\'p01\'>领取成功</p>\
                            <p class=\'p02\'>可在券中心查看该券</p>\
                        </div>\
                        <div class=\'dialog-cancel\'>关闭</div>\
                    </div>\
                ',
                'enlargeDialog': '\
                    <div class="w-content">\
                        <img src="">\
                        <div class="icons">\
                            <p class="w dialog-cancel close"></p>\
                            <p class="w xiazai">下载</p>\
                            <div class="tip">请长按屏幕保存图片</div>\
                        </div>\
                    </div>\
                '
            };
            $.extend(true, this.options = {}, defaults, opts);
        },
        init: function(options) {
            this.setOptions(options);
            this.mainView = $(this.options['mainView']);
            this.getBtnDFS = $(this.options['getBtnDFS']);
            this.couponPic = null;
            this.pageTpl = $('#getCouponTpl').html();
            this.bindEvents();
            this.renderPage();
        },
        bindEvents: function() {
            var _this = this;
            var loginStatus = $('#loginStatus').val();
            var loginJumpUrl = $('#loginJumpUrl').val();
            $('#mainView').on('tap', '#getCouponBtn', function(event) {
                if(loginStatus == 0){
                    window.location.href = loginJumpUrl;
                }else{
                     _this.getCoupon();
                }
            });

            $('#mainView').on('tap', '#enlargePic', function(event) {
                _this.enlargeDialog();
            });
        },
        getFilter: function() {
            var promotion_id = $('#promotion_id').val();
            this.filter = {
                'promotion_id': promotion_id
            };
            return this.filter;
        },
        getCoupon: function() {
            var _this = this;
            $('#load').css('display', 'block');
            var filter = _this.getFilter();
            API.getCouponAjax(filter.promotion_id, {
                success: function(res) {
                    $('#load').css('display', 'none');
                    if(res.canGetCoupon == '0'){
                        _this.tmplDialog();
                        $('#getCouponBtn').css('display', 'none');
                        $('#getCouponAleardy').css('display', 'block');
                    }else{
                        Dog.alert(res.msg);
                        
                    }
                }
            });
        },
        tmplDialog: function() {
            var _this = this;
            var dialogbox;
            var updataDialog = $('#updataDialog');
            var diaCon = template(this.options['dialogTemplate']);
            updataDialog.html(diaCon);
            dialogbox = Dog.mask('.w-dialog', {
                isClose: true,
                isDrag: false
            });
        },
        enlargeDialog: function() {
            var _this = this;
            var dialogbox;
            var updataDialog = $('#enlargeImage');
            var diaCon = template(this.options['enlargeDialog']);
            updataDialog.html(diaCon);
            dialogbox = Dog.mask('.enlargeImage', {
                isClose: true,
                isDrag: false,
                closeCallback: function() { //点击确认按钮后的回调函数

                },
                successCallback: function() {

                }
            });
            $('#enlargeImage img').attr('src', _this.couponPic);
            $('#enlargeImage .xiazai').click(function() {
                $('#enlargeImage .tip').fadeIn();
                setTimeout(function() {
                    $('#enlargeImage .tip').fadeOut();
                }, 2000);
            });
        },
        renderPage: function() {
            var _this = this;
            var filter = _this.getFilter();
            API.activityDetailAjax(filter.promotion_id, {
                success: function(res) {
                    $('#load').css('display', 'none');
                    res = res.data || {};
                    var oHtml = template(_this.pageTpl, {
                        list: res
                    });
                    _this.mainView.append(oHtml);
                    var _couponPic = $('#enlargePic img').attr('src');
                    _this.couponPic = _couponPic;
                }
            });
        }
    };
    getCouponDetail.init();
});
