require([
    'zepto',
    'lib/ui/template',
    'util/base'
], function($, template) {
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
            renderCouponAjax: function(promotion_id, fn) {
                var reqData = {
                    promotion_id: promotion_id
                };

                ajax({
                    url: GDATA.renderCouponDFS+'?r=' + new Date().getTime(),
                    jsonp: 'callback',
                    data: reqData
                }, fn);
            }
        };
    })();

    var couponDetailDFS = {
        setOptions: function(opts) {
            var defaults = {
                mainView: '#mainView'
            };
            $.extend(true, this.options = {}, defaults, opts);
        },
        init: function(options) {
            this.setOptions(options);
            this.mainView = $(this.options['mainView']);
            this.couponCodeTpl = $('#couponCodeTpl').html();
            this.couponTpl = $('#couponTpl').html();
            this.bindEvents();
            this.renderPage();
        },
        bindEvents: function() {
            var _this = this;
        },
        codelist_clickHandle: function(el) {
            var js_p_code , _this;
            'disable' != el.data('able') && (js_p_code = $.trim(el.data('code')), $('.coupon-codes-list').find('div.js_div_code').each(function() {
                _this = $(this),
                    js_p_code == $.trim(_this.data('code')) ? _this.hasClass('coupon-code-down') ? _this.removeClass('coupon-code-down').addClass('coupon-code-up') : _this.removeClass('coupon-code-up').addClass('coupon-code-down') : _this.removeClass('coupon-code-down').addClass('coupon-code-up');
            }), $('.coupon-codes-list').find('.js_p_code').each(function() {
                _this = $(this), js_p_code == $.trim(_this.data('code')) ? _this.hasClass('select') ? _this.removeClass('select') : _this.addClass('select') : _this.removeClass('select');
            }));
        },
        getFilter: function() {
            var promotion_id = $('#promotion_id').val();
            this.filter = {
                'promotion_id': promotion_id
            };
            return this.filter;
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
                    _this.renderCode();
                }
            });
        },
        renderCode:function(){
            var _this = this;
            var filter = _this.getFilter();
            API.renderCouponAjax(filter.promotion_id, {
                success: function(res) {
                    $('#load').css('display', 'none');
                    res = res.data || {};
                    var oHtml = template(_this.couponCodeTpl, {
                        list: res
                    });
                    var couponCodeList = $('#couponCodeList');
                    couponCodeList.append(oHtml);
                    var oJs_p_code = $('#couponCodeList .js_p_code');
                    oJs_p_code.each(function() {
                        $(this).tap(function() {
                            _this.codelist_clickHandle($(this));

                        });
                    });
                }
            });
        }
    };
    couponDetailDFS.init();
});
