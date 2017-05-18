require([
    'zepto',
    'lib/ui/template',
    'util/base'
], function($, template) {
    var API = (function() {
        var ajax = function(opts, fn) {
            opts.dataType = 'jsonp';
            fn && (opts = $.extend({}, fn, opts));
            $.ajax(opts);
        };
        return {
            businessCouponAjax: function(businessId, fn) {
                var reqDate = {
                    businessId: businessId
                };

                ajax({
                    url: GDATA.businessCouponAjax + '?r=' + new Date().getTime(),
                    jsonp: 'callback',
                    data: reqDate
                }, fn);
            }
        };
    })();

    ({
        setOptions: function(opts) {
            var defaults = {
                mainView: '#mainView',
                businessCoupon: '#businessCoupon'
            };
            $.extend(true, this.options = {}, defaults, opts);
        },

        init: function(options) {
            this.setOptions(options);
            this.businessId = $('#businessId').val();
            this.couponTpl = $('#couponTpl').html();
            this.totalCount = 0;
            this.el = $(this.options['mainView']);
            this.businessId = $('#businessId').val();
            this.detailTpl = $('#detailTpl').html();
            this.bindEvents();
            //this.renderDetail();
            //this.renderCoupon();
        },
        bindEvents: function() {
            var _this = this;
            var flag = true;
            $('#mainView').on('click', '#showBtn', null, function() {
                var e = $('.w-item-show');
                if (flag) {
                    e.removeClass('active');
                    $('#showBtn .look').html('收起');
                    $('#showBtn .num').hide();
                    flag = false;
                } else {
                    e.addClass('active');
                    $('#showBtn .look').html('查看更多');
                    $('#showBtn .num').show();
                    flag = true;
                }
            });
        },
        renderDetail: function() {
            var _this = this;
            API.businessDetailAjax(_this.businessId, {
                success: function(res) {
                    $('#load').css('display', 'none');
                    res = res.data || {};
                    // renderDetail
                    var oHtml = template(_this.detailTpl, {
                        list: res
                    });
                     console.log(oHtml);
                    _this.el.append(oHtml);
                    _this.renderCoupon();
                }
            });
        },
        renderCoupon: function() {
            var _this = this;
            API.businessCouponAjax(_this.businessId, {
                success: function(res) {
                    var e = $('#businessCoupon');
                    res = res.data || {};
                    _this.totalCount = res.count;
                    if (!_this.totalCount) {
                        e.html('此商家暂无活动券！');
                        return;
                    }
                    var couponBtnColor = '';
                    var couponType = '';
                    res.list.forEach(function(item) {
                        switch (item.type) {
                            case '1':
                            couponBtnColor = 'btn-bg-red';
                            couponType = '返';
                            break;
                            case '2':
                            couponBtnColor = 'btn-bg-blue';
                            couponType = '满';
                            break;
                            case '3':
                            couponBtnColor = 'btn-bg-yellow';
                            couponType = '惠';
                            break;
                            case '4':
                            couponBtnColor = 'btn-bg-green';
                            couponType = '折';
                            break;
                            case '5':
                            couponBtnColor = 'btn-bg-purple';
                            couponType = '金';
                            break;
                            default:
                            couponBtnColor = '';
                            couponType = '';
                            break;
                        }
                        item.couponBtnColor = couponBtnColor;
                        item.couponType = couponType;
                    });
                    // renderCoupon
                    var oHtml = template(_this.couponTpl, {
                        list: res.list,
                        totalCount: _this.totalCount
                    });
                    e.append(oHtml);
                }
            });
        }
    }).init();
});
