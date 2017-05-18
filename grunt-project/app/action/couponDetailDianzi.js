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
            couponDetailAjax: function(promotion_id, fn) {
                var reqData = {
                    promotion_id: promotion_id
                };
                ajax({
                    url: GDATA.renderCouponAjax+'?r=' + new Date().getTime(),
                    jsonp: 'callback',
                    data: reqData
                }, fn);
            },
            getCouponAjax: function(promotion_id, fn) {
                var reqData = {
                    promotion_id: promotion_id
                };
                ajax({
                    url: GDATA.renderCouponDianzi+'?r=' + new Date().getTime(),
                    jsonp: 'callback',
                    data: reqData
                }, fn);
            }
        };
    })();

    var couponDetailDFS = {
        setOptions: function(opts) {
            var defaults = {
                mainView: '#mainView',
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
            this.couponTpl = $('#couponTpl').html();
            this.couponPicTpl = $('#couponPicTpl').html();
            this.couponPic = null;
            this.couponDiv = null;
            this.bindEvents();
            this.renderPage();
        },
        bindEvents: function() {
            var _this = this;
            $('#mainView').on('tap', '#enlargePic', function(event) {
                _this.enlargeDialog();
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
                isDrag: false
            });
            $('#enlargeImage img').attr('src', _this.couponPic);
            $('#enlargeImage .xiazai').click(function() {
                $('#enlargeImage .tip').fadeIn();
                setTimeout(function() {
                    $('#enlargeImage .tip').fadeOut();
                }, 2000);
            });
        },
        getFilter: function() {
            var promotion_id = $('#promotion_id').val();
            this.filter = {
                'promotion_id': promotion_id
            };
            return this.filter;
        },
        renderCoupon: function() {
            var _this = this;
            var filter = this.getFilter();
            API.getCouponAjax(filter.promotion_id, {
                success: function(res) {
                    res = res.data || {};
                    var oHtml = template(_this.couponPicTpl, {
                        list: res
                    });
                    console.log(res.data);
                    _this.couponDiv.append(oHtml);
                    var _couponPic = $('#enlargePic img').attr('src');
                    _this.couponPic = _couponPic;
                }
            });
        },
        renderPage: function() {
            var _this = this;
            var filter = _this.getFilter();
            API.couponDetailAjax(filter.promotion_id, {
                success: function(res) {
                    $('#load').css('display', 'none');
                    res = res.data || {};
                    var oHtml = template(_this.couponTpl, {
                        list: res
                    });
                    _this.mainView.append(oHtml);
                    var _couponDiv = $('#couponContainer');
                    _this.couponDiv = _couponDiv;
                    _this.renderCoupon();

                }
            });
        }
    };
    couponDetailDFS.init();
});
