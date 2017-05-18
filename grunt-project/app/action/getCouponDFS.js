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
            getCouponAjax: function(tuniu_order, promotion_id, fn) {
                var reqData = {
                    order_id: tuniu_order,
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

    var getCouponDFS = {
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
                '
            };
            $.extend(true, this.options = {}, defaults, opts);
        },
        init: function(options) {
            this.setOptions(options);
            this.mainView = $(this.options['mainView']);
            this.getBtnDFS = $(this.options['getBtnDFS']);
            this.pageTpl = $('#getDFSTpl').html();
            this.tuniu_order = $('#tuniu_order').val();
            this.bindEvents();
            this.renderPage();
        },
        bindEvents: function() {
            var _this = this;
            var loginStatus = $('#loginStatus').val();
            var loginJumpUrl = $('#loginJumpUrl').val();
            $('#mainView').on('tap', '#getBtnDFS', function(event) {
                if (loginStatus == 0) {
                    window.location.href = loginJumpUrl;
                } else {
                    _this.getCoupon();
                }
            });
        },
        getFilter: function() {
            var tuniu_order = $('#tuniu_order').val();
            var promotion_id = $('#promotion_id').val();
            this.filter = {
                'order_id': tuniu_order,
                'promotion_id': promotion_id
            };
            return this.filter;
        },
        validInput: function() {
            var oInput = $('#tuniu_order').val();
            var patten = /^\d+$/;
            if (oInput == '') {
                Dog.alert('请输入途牛订单号', {
                    isClose: false
                });
                return false;
            } else if (!patten.test(oInput)) {
                Dog.alert('必须输入数字，且不能有空格。', {
                    isClose: false
                });
                return false;
            }
            return true;
        },
        getCoupon: function() {
            var _this = this;
            if (_this.validInput()) {
                $('#load').css('display', 'block');
                var filter = _this.getFilter();
                API.getCouponAjax(filter.order_id, filter.promotion_id, {
                    success: function(res) {
                        $('#load').css('display', 'none');
                        if (res.canGetCoupon == '0') {
                            _this.tmplDialog();
                            $('#getBtnDFS').css('display', 'none');
                            $('#getCouponAleardy').css('display', 'block');
                        }else if (res.success){
                            _this.tmplDialog();
                        }else {
                            Dog.alert(res.msg);
                        }
                    },
                    error: function() {
                        alert('网络超时');
                    }
                });
            }
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
                }
            });
        }
    };
    getCouponDFS.init();
});
