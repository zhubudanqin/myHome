require([
    'zepto',
    'lib/ui/template',
    'util/drag',
    'util/base'
], function($, template, drag) {
    var trace = false;
   new drag({
        elem: "#destination .boxul "
    });
    new drag({
        elem: "#business .boxul "
    });
    new drag({
        elem: "#type .boxul "
    });
    var couponCenter = {
        setOptions: function(opts) {
            var defaults = {
                destinationItem: '#destinationItem',
                businessItem: '#businessItem',
                typeItem:'#typeItem'
            };
            $.extend(true, this.options = {}, defaults, opts);

        },

        init: function(options) {
            this.setOptions(options);
            console.log(this.options);
            this.COUPONTYPE = {
                1: {
                    name: '返券码',
                    color: 'btn-bg-red'
                },
                2: {
                    name: '满减券',
                    color: 'btn-bg-blue'
                },
                3: {
                    name: '优惠券',
                    color: 'btn-bg-yellow'
                },
                4: {
                    name: '打折券',
                    color: 'btn-bg-green'
                },
                5: {
                    name: '现金券',
                    color: 'btn-bg-purple'
                }
            };
            this.destinationItem = $(this.options.destinationItem);
            this.businessItem = $(this.options.businessItem);
            this.typeItem = $(this.options.typeItem);
            this.container = $('#j-filterC');
            this.curTabId = null;
            this.bindEvents();
            this.refreshView();
            this.renderFilter();
            var oCityId = $('#cityId');
            var oMerchant_class_id = $('#merchant_class_id');
            var oCoupon_type = $('#coupon_type');
            if($.trim(oCityId.val()) !== ''){
                $('.destination').html(oCityId.val());
            }
            if($.trim(oMerchant_class_id.val()) !== ''){
                $('.business').html(oMerchant_class_id.val());
            }
            if($.trim(oCoupon_type.val()) !== ''){
                $('.type').html(oCoupon_type.val());
            }
        },
        bindEvents: function() {
            var _this = this;
            var owhead = $('.filter').offset().top;
            $(window).scroll(function() {
                var oWidth = $(this).scrollTop();
                if (oWidth > owhead) {
                    $('.backTop').show();
                    $('.filter').addClass('posFixed');

                } else{
                    $('.backTop').hide();
                    $('.filter').removeClass('posFixed');
                }
               
                if (trace) {
                    console.info('scrollTop:' + $(window).scrollTop() + ';windowHeight()' + $(window).height() + ';documentHeight()' + $(document).height());
                }
                var condition = $(window).scrollTop() + $(window).height() + 80 >= $(document).height();
                if (condition) {
                    var filter = _this.getFilter();
                    _this.getCouponView ? _this.getCouponView.fetchList(_this.getCouponView.pageIndex + 1, filter.city_id, filter.merchant_class_id,filter.coupon_type,false) : _this.getCouponView = new CouponPageView();
                }
            });
            $('.backTop').click(function() {
                $(window).scrollTop(0);
            });
            $('#j-filterC').on('click', '.destinationul li', function(event) {
                $(this).addClass('active').siblings().removeClass('active').parents('ul').siblings('ul').children('li').removeClass('active');
                var signId = $(this).attr('data-destid');
                $('.destination').html($(this).html());
                _this.destinationItem.attr('data-value', signId);
                _this.operateTab(_this.curTabId, 0);
                _this.refreshView();
            });

            $('#j-filterC').on('click', '.businessul li', function(event) {
                $(this).addClass('active').siblings().removeClass('active');
                var signId = $(this).attr('data-business');
                $('.business').html($(this).html());
                _this.businessItem.attr('data-value', signId);
                _this.operateTab(_this.curTabId, 0);
                _this.refreshView();
            });
            $('#j-filterC').on('click', '.typeul li', function(event) {
                $(this).addClass('active').siblings().removeClass('active');
                var signId = $(this).attr('type');
                $('.type').html($(this).html());
                _this.typeItem.attr('data-value', signId);
                _this.operateTab(_this.curTabId, 0);
                _this.refreshView();
            });
            this.container.click(function() {
                if (_this.curTabId) {
                    _this.operateTab(_this.curTabId, 0);
                }
            });
            $('.j-filter-button').click(function() {
                var tabId = $(this).attr('data-id');
                console.log(_this.curTabId);
                if (!_this.curTabId) {
                    _this.operateTab(tabId, 1);
                    return;
                }
                if (_this.curTabId === tabId) {
                    _this.operateTab(tabId, 0);
                    return;
                }
                _this.operateTab(_this.curTabId, 0);
                _this.operateTab(tabId, 1);
            });
        },
        operateTab: function(tabId, operateType) {
            if (operateType == 1) {
                $('.wrapper').addClass('ui-onscroll');
                this.container.css('display', 'block');
                $(tabId).css('display', 'block');
                $(".j-filter-button[data-id ='" + tabId + "']").addClass('select');
                this.curTabId = tabId;
            } else if (operateType == 0) {
                this.container.css('display', 'none');
                $('.wrapper').removeClass('ui-onscroll');
                $(tabId).css('display', 'none');
                $(".j-filter-button[data-id ='" + tabId + "']").removeClass('select');
                this.curTabId = null;
            }
        },
        refreshView: function() {
            var filter = this.getFilter();
            this.getCouponView = new CouponPageView();
            this.getCouponView.fetchList(1, filter.city_id, filter.merchant_class_id, filter.coupon_type,true);
        },
        getFilter: function() {
            var city_id = this.destinationItem.attr('data-value');
            var merchant_class_id = this.businessItem.attr('data-value');
            var coupon_type = this.typeItem.attr('data-value');
            this.filter = {
                'city_id': city_id,
                'merchant_class_id': merchant_class_id,
                'coupon_type': coupon_type
            };
            return this.filter;
        },
        renderFilter:function(){
            $.ajax({
                url: GDATA.businessListFilter+'?r=' + new Date().getTime(),
                dataType: 'jsonp',
                jsonp: "callback",
                success: function(res) {
                    if (res.success) {
                        var hotDestiTpl = '';
                        var destiTpl = '<li data-destid = "0">全球</li>';
                        var shopTpl = '<li data-business = "0">全部</li>';
                        

                        // 热门目的地
                        var hotDestiData = res.data.hot_city;
                        for (var key in hotDestiData) {
                            hotDestiTpl += "<li data-destid='" + key + "'>" + hotDestiData[key]+ "</li>";
                        }
                        $('#hotDestiTpl').html(hotDestiTpl);

                        // 目的地
                        var destiData = res.data.city_list;
                        for(var i = 0; i < destiData.length; i++){
                           destiTpl += "<li data-destid='" + destiData[i].id + "'>" + destiData[i].city_name+ "</li>";
                        }
                        $('#destiTpl').html(destiTpl);

                        // 商户
                        var shopData = res.data.merchant_class;
                        for (var key in shopData) {
                            shopTpl += "<li data-business='" + key + "'>" +shopData[key]+ "</li>";
                        }
                        $('#shopTpl').html(shopTpl);

                        
                    }
                },
                error: function(msg) {
                    console.log('出错了！');
                }
            });
        }
    };
    var API = (function() {

        var ajax = function(opts, fn) {
            opts.dataType = 'jsonp';
            fn && (opts = $.extend({}, fn, opts));
            $.ajax(opts);
        };

        return {
            fetchGetList: function(pageIndex, count, city_id, merchant_class_id,coupon_type, fn) {
             
                var params = 'a'+city_id+'-d'+merchant_class_id+'-q'+ coupon_type+'-p'+pageIndex;
                if (trace) {
                    console.info('Ajax Request Data:');
                    console.info(reqDate);
                }
                ajax({
                    url: GDATA.businessListAjax+'/'+params+'?r=' + new Date().getTime(),
                    jsonp: 'callback'
                }, fn);
            }
        };
    })();

    var View = function() {
        this.$el = $(this.el);
        this.initialize.apply(this, arguments);
    };

    View.extend = function(props) {
        var parent = this;

        var child = function() {
            return parent.apply(this, arguments);
        };

        $.extend(child, parent);

        var CC = function() {
            this.constructor = child;
        };

        CC.prototype = parent.prototype;

        child.prototype = new CC;
        props && $.extend(child.prototype, props);
        return child;
    };

    var PageView = View.extend({
        loading: false,
        pageIndex: 1,
        pageCount: 10,
        totalCount: 0,
        nomore: false,
        initialize: function() {},
        renderBusiness: function(pageIndex, totalCount, dataList) {
            var _this = this;
            _this.pageIndex = pageIndex;
            _this.totalCount = totalCount;
            _this.nomore = false;

            // no data
            if (totalCount == 0) {
                _this.nomore = true;
                _this.$el.html(_this.noneTpl);
                return;
            }
            dataList.forEach(function(item) {
                item.couponType = (couponCenter.COUPONTYPE[item.pmt_type_code] && couponCenter.COUPONTYPE[item.pmt_type_code].name) || '';
                item.couponBtnColor = (couponCenter.COUPONTYPE[item.pmt_type_code] && couponCenter.COUPONTYPE[item.pmt_type_code].color) || '';
            });

            // renderBusiness
            var oHtml = template(this.businessTpl, {
                list: dataList
            });

            _this.$el.append(oHtml);

            // end 
            if (trace) {
                console.info('pageIndex:' + pageIndex + ';pageCount:' + _this.pageCount + ';totalCount:' + totalCount);
            }
            if (pageIndex * _this.pageCount >= totalCount) {
                _this.nomore = true;
                _this.$el.append('<p class=\'moreAll\'>已全部加载</p>');
            }
        },
        startLoading: function() {
            $('.p-listloading-bg').css('display', 'block');
            this.loading = true;
        },
        endLoading: function() {
            $('.p-listloading-bg').css('display', 'none');
            this.loading = false;
        }
    });

    var CouponPageView = PageView.extend({
        el: '#businessList',
        initialize: function() {
            this.businessTpl = $('#businessTpl').html();
            this.noneTpl = $('#noneTpl').html();
           
        },
        fetchList: function(pageIndex, city_id, merchant_class_id, coupon_type, refresh) {
            var oCityId = $('#cityId').attr('data-id');
            var oMerchant_class_id = $('#merchant_class_id').attr('data-id');
            var oCoupon_type = $('#coupon_type').attr('data-id');
            var _this = this;
            pageIndex = pageIndex || 1;
            city_id = city_id || oCityId || 0;
            merchant_class_id = merchant_class_id || oMerchant_class_id || 0;
            coupon_type = coupon_type || oCoupon_type || 0;
            refresh = refresh || false;

            if ((_this.loading || _this.nomore)) {
                return;
            }

            if (refresh) {
                $('#businessList').html(' ');
            }

            PageView.prototype.startLoading.call(_this);
            API.fetchGetList(pageIndex, _this.pageCount, city_id, merchant_class_id,coupon_type, {
                success: function(res) {
                    if (trace) {
                        console.info('Ajax Response Data:');
                        console.info(res);
                    }
                    res = res.data || {};
                    PageView.prototype.renderBusiness.call(_this, pageIndex, res.count, res.list);
                },
                complete: PageView.prototype.endLoading.bind(_this)
            });
        }
    });
    couponCenter.init();
});
