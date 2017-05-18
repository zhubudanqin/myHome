require([
    'zepto',
    'lib/ui/template',
    'util/drag',
    'util/base'
], function($, template, drag) {
    var trace = false;
     new drag({
        elem: "#status .boxul "
    });
    new drag({
        elem: "#type .boxul "
    });
   
    var couponCenter = {
        setOptions: function(opts) {
            var defaults = {
                statuSel: '#statusVouc',
                typeSel: '#typeVouc',
            };
            $.extend(true, this.options = {}, defaults, opts);
        },

        init: function(options) {
            this.setOptions(options);
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
            this.statuSel = $(this.options.statuSel);
            this.typeSel = $(this.options.typeSel);
            this.container = $('#j-filterC');
            this.curTabId = null;
            this.bindEvents();
            this.refreshView();

        },
        bindEvents: function() {
            var _this = this;
            $(window).scroll(function() {
                var oWidth = $(window).scrollTop();
                if (oWidth > 300) {
                    $('.backTop').show();
                } else {
                    $('.backTop').hide();
                }
                $('.backTop').tap(function() {
                    $(window).scrollTop(0);
                });
                if (trace) {
                    console.info('scrollTop:' + $(window).scrollTop() + ';windowHeight()' + $(window).height() + ';documentHeight()' + $(document).height());
                }
                var condition = $(window).scrollTop() + $(window).height() + 80 >= $(document).height();
                if (condition) {
                    var filter = _this.getFilter();
                    _this.getCouponView ? _this.getCouponView.fetchList(_this.getCouponView.pageIndex + 1, filter.type, filter.status, false) : _this.getCouponView = new CouponPageView();
                }
            });

            $('.statusul li').click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                var statusId = $(this).attr('status');
                $('.status').html($(this).html());
                _this.statuSel.attr('data-value', statusId);
                _this.operateTab(_this.curTabId,0);
                _this.refreshView();
            });

            $('.typeul li').click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                var typeId = $(this).attr('type');
                $('.type').html($(this).html());
                _this.typeSel.attr('data-value', typeId);
                _this.operateTab(_this.curTabId,0);
                _this.refreshView();
            });
            this.container.tap(function() {
                if(_this.curTabId){
                    _this.operateTab(_this.curTabId,0);
                }
            });
            $('.j-filter-button').tap(function() {
                var tabId = $(this).attr('data-id');
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
            if(operateType == 1) {
                $('.wrapper').addClass('ui-onscroll');
                this.container.css('display', 'block');
                $(tabId).css('display', 'block');
                $(".j-filter-button[data-id ='"+tabId +"']").addClass('select');
                this.curTabId = tabId;
            } else if(operateType == 0) {
                this.container.css('display', 'none');
                $('.wrapper').removeClass('ui-onscroll');
                $(tabId).css('display', 'none');
                $(".j-filter-button[data-id ='"+tabId +"']").removeClass('select');
                this.curTabId = null;
            }
        },
        refreshView: function() {
            var filter = this.getFilter();
            this.getCouponView = new CouponPageView();
            this.getCouponView.fetchList(1, filter.type, filter.status, true);
        },
        getFilter: function() {
            var status = this.statuSel.attr('data-value');
            var type = this.typeSel.attr('data-value');
            this.filter = {
                'status': status,
                'type': type,
            };
            return this.filter;
        }
    };
    var API = (function() {

        var ajax = function(opts, fn) {
            opts.dataType = 'jsonp';
            fn && (opts = $.extend({}, fn, opts));
            $.ajax(opts);
        };

        return {
            fetchGetList: function(pageIndex, count, type, status, fn) {

                var reqDate = {
                    page: pageIndex,
                    limit: count,
                    childType: type,
                    parentType: status
                };

                if (trace) {
                    console.info('Ajax Request Data:');
                    console.info(reqDate);
                }
                ajax({
                    url: GDATA.couponCenterAjax+'?r=' + new Date().getTime(),
                    jsonp: 'callback',
                    data: reqDate
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
        renderCoupon: function(pageIndex, totalCount, dataList) {
            var _this = this;
            _this.pageIndex = pageIndex;
            _this.totalCount = totalCount;
            _this.nomore = false;

            // no data
            if (!totalCount) {
                _this.nomore = true;
                _this.$el.html(_this.noneTpl);
                return;
            }
            dataList.forEach(function(item) {
                item.couponType = (couponCenter.COUPONTYPE[item.pmt_type_code] && couponCenter.COUPONTYPE[item.pmt_type_code].name) || '';
                item.couponBtnColor = (couponCenter.COUPONTYPE[item.pmt_type_code] && couponCenter.COUPONTYPE[item.pmt_type_code].color) || '';
            });

            // renderCoupon
            var oHtml = template(this.useTpl, {
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
        el: '#couponlist',
        initialize: function() {
            this.useTpl = $('#useTpl').html();
            this.noneTpl = $('#noneTpl').html();
        },
        fetchList: function(pageIndex, type, status, refresh) {
            var _this = this;
            pageIndex = pageIndex || 1;
            type = type || 0;
            status = status || 0;
            refresh = refresh || false;

            if ((_this.loading || _this.nomore)) {
                return;
            }

            if (refresh) {
                $('#couponlist').html(' ');
            }

            PageView.prototype.startLoading.call(_this);
            API.fetchGetList(pageIndex, _this.pageCount, type, status, {
                success: function(res) {
                    if (trace) {
                        console.info('Ajax Response Data:');
                        console.info(res);
                    }
                    res = res.data|| {};
                    PageView.prototype.renderCoupon.call(_this, pageIndex, res.count, res.list);
                },
                complete: PageView.prototype.endLoading.bind(_this)
            });
        }
    });
    couponCenter.init();
});
