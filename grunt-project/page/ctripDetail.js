define("text!storedetailTmpl", [], function() {
	return function(obj) {
		function strReplacenew(t) {
			return t = t.replace(/[\n\r]/g, "<br />")
		}
		var __t, __p = "";
		Array.prototype.join;
		with(obj || {}) {
			__p += "";
			var hasUnionLogo = !1;
			if (data && data.CtrRuleList && data.CtrRuleList.length) {
				var activityidlist = _.pluck(data.CtrRuleList, "ActivityID");
				_.contains(activityidlist, 2) && (hasUnionLogo = !0)
			}
			__p += '<div class=wrap-page><section class=brand_main><div class=shop_title><dl><dt id=area_store_main_img><img class=shop_title_p data-src="' + (null == (__t = _.getImgBySize(data.StoreUrlList[0] || "", "156_156")) ? "" : __t) + '" src="//pic.c-ctrip.com/h5/shopping/default4.png">', data.StoreUrl && (__p += '<span class=shop_logo><img data-src="' + (null == (__t = _.getImgBySize(data.StoreUrl, "144_40")) ? "" : __t) + '" src></span>'), __p += "<i class=shop-pic-number>" + (null == (__t = data.StoreUrlList.length) ? "" : __t) + "</i>", data.iconData && data.iconData.ret && data.iconData.cls && (__p += '<i class="' + (null == (__t = data.iconData.cls) ? "" : __t) + '"></i>'), __p += "</dt><dd><p class=shop_ad>" + (null == (__t = data.StoreName) ? "" : __t) + "</p><p class=shop_ad2>" + (null == (__t = data.StoreEnglishName) ? "" : __t) + '</p><div class="shop_oter_info clearfix">', hasUnionLogo && (__p += '<span class="btn btn-bd-blue btn-coupon btn-fixed-wh btn-fz10">閾惰仈鐗规儬</span>'), __p += "\r\n                        ", _.each(data.SoucreList, function(t) {
				__p += "\r\n                        ", 3 == t && (__p += '<span class="btn btn-bd-pink btn-coupon btn-fixed-wh">涓囧崈璧�</span>'), __p += "\r\n                        "
			}), __p += "\r\n                        ", data.TaxRefundType && (__p += "\r\n                        ", 3 == data.TaxRefundType && (__p += '<span class="btn btn-bd-blue btn-coupon btn-fixed-wh">閫€ 绋�</span>'), __p += "\r\n                        ", 2 == data.TaxRefundType ? __p += '<span class="btn btn-bd-blue btn-coupon btn-fixed-wh">鍏� 绋�</span>' : 4 == data.TaxRefundType && (__p += '<span class="btn btn-bd-blue btn-coupon btn-fixed-wh btn-fz10">鎼虹▼閫€绋�</span>'), __p += "\r\n                        "), __p += "</div><div class=shop-oter-union-pay>", data._hasUnionPay && (__p += "<i class=union_pay_logo></i>"), __p += "\r\n                        ", hasUnionLogo && (__p += "<i class=icon-union-pay-sty2></i>"), __p += '</div></dd></dl></div><div class="discount_introduce discount_choose_style2" id=area_couponlist><ul class=discount_choose_style2_box>', _.each(data.couponList, function(t) {
				__p += "\r\n                ";
				var a = t.ShowName && t.ShowName.split("-");
				2 == a.length && (a = a[1]), __p += "", t.BID == data.unionPayBID ? (__p += '<li class=dis_reduce data-id="' + (null == (__t = t.CouponClassID) ? "" : __t) + '"><span class="btn btn-bd-blue btn-coupon btn-fixed-wh btn-fz10">閾惰仈鐗规儬</span><div class=my-coupon-list-user>', __p += void 0 != t.Price && null != t.Price && -1 != t.Price ? '<a href=javascript:void(0); class="link-my-coupon-action link-my-coupon-action-style2"><sub>锟�</sub>' + (null == (__t = t.Price) ? "" : __t) + "</a>" : "<a href=javascript:void(0); class=link-my-coupon-action>鍏嶈垂</a>", __p += "<i class=up-round></i><i class=down-round></i></div><p>" + (null == (__t = t.CouponClassTitle || a) ? "" : __t) + "</p></li>") : (__p += "\r\n                ", 1 == t.DiscountType && (__p += '<li class=dis_reduce data-id="' + (null == (__t = t.CouponClassID) ? "" : __t) + '"><span class="btn btn-bg-purple btn-coupon">绔嬪噺鍒�</span><p>' + (null == (__t = t.CouponClassTitle || a) ? "" : __t) + "</p><div class=my-coupon-list-user>", __p += void 0 != t.Price && null != t.Price && -1 != t.Price ? '<a href=javascript:void(0); class="link-my-coupon-action link-my-coupon-action-style2"><sub>锟�</sub>' + (null == (__t = t.Price) ? "" : __t) + "</a>" : "<a href=javascript:void(0); class=link-my-coupon-action>鍏嶈垂</a>", __p += "<i class=up-round></i><i class=down-round></i></div></li>"), __p += "\r\n                ", 2 == t.DiscountType && (__p += '<li class=dis_back data-id="' + (null == (__t = t.CouponClassID) ? "" : __t) + '"><span class="btn btn-bg-blue btn-coupon">杩旂幇鍒�</span><p>' + (null == (__t = t.CouponClassTitle || a) ? "" : __t) + "</p><div class=my-coupon-list-user>", __p += void 0 != t.Price && null != t.Price && -1 != t.Price ? '<a href=javascript:void(0); class="link-my-coupon-action link-my-coupon-action-style2"><sub>锟�</sub>' + (null == (__t = t.Price) ? "" : __t) + "</a>" : "<a href=javascript:void(0); class=link-my-coupon-action>鍏嶈垂</a>", __p += "<i class=up-round></i><i class=down-round></i></div></li>"), __p += "\r\n                ", 3 == t.DiscountType && (__p += '<li class=dis_gift data-id="' + (null == (__t = t.CouponClassID) ? "" : __t) + '"><span class="btn btn-bg-pink btn-coupon">璧犵ぜ鍒�</span><p>' + (null == (__t = t.CouponClassTitle || a) ? "" : __t) + "</p><div class=my-coupon-list-user>", __p += void 0 != t.Price && null != t.Price && -1 != t.Price ? '<a href=javascript:void(0); class="link-my-coupon-action link-my-coupon-action-style2"><sub>锟�</sub>' + (null == (__t = t.Price) ? "" : __t) + "</a>" : "<a href=javascript:void(0); class=link-my-coupon-action>鍏嶈垂</a>", __p += "<i class=up-round></i><i class=down-round></i></div></li>"), __p += "\r\n                ", 4 == t.DiscountType && (__p += '<li class=dis_gift data-id="' + (null == (__t = t.CouponClassID) ? "" : __t) + '"><span class="btn btn-bg-orange btn-coupon">浠ｉ噾鍒�</span><p>' + (null == (__t = t.CouponClassTitle || a) ? "" : __t) + "</p><div class=my-coupon-list-user>", __p += void 0 != t.Price && null != t.Price && -1 != t.Price ? '<a href=javascript:void(0); class="link-my-coupon-action link-my-coupon-action-style2"><sub>锟�</sub>' + (null == (__t = t.Price) ? "" : __t) + "</a>" : "<a href=javascript:void(0); class=link-my-coupon-action>鍏嶈垂</a>", __p += "<i class=up-round></i><i class=down-round></i></div></li>"), __p += "\r\n                ", 6 == t.DiscountType && (__p += '<li class=dis_gift data-id="' + (null == (__t = t.CouponClassID) ? "" : __t) + '"><span class="btn btn-bg-gold btn-coupon">鍏戞崲鍒�</span><p>' + (null == (__t = t.CouponClassTitle || a) ? "" : __t) + "</p><div class=my-coupon-list-user>", __p += void 0 != t.Price && null != t.Price && -1 != t.Price ? '<a href=javascript:void(0); class="link-my-coupon-action link-my-coupon-action-style2"><sub>锟�</sub>' + (null == (__t = t.Price) ? "" : __t) + "</a>" : "<a href=javascript:void(0); class=link-my-coupon-action>鍏嶈垂</a>", __p += "<i class=up-round></i><i class=down-round></i></div></li>"), __p += "\r\n                "), __p += "\r\n\r\n                "
			}), __p += "</ul>", data.couponMore && data.couponMore.length && (__p += "<ul class=discount_choose_style2_box id=list_more_coupon style=display:none>", _.each(data.couponMore, function(t) {
				__p += "\r\n                ";
				var a = t.ShowName && t.ShowName.split("-");
				2 == a.length && (a = a[1]), __p += "", t.BID == data.unionPayBID ? (__p += '<li class=dis_reduce data-id="' + (null == (__t = t.CouponClassID) ? "" : __t) + '"><span class="btn btn-bd-blue btn-coupon btn-fixed-wh btn-fz10">閾惰仈鐗规儬</span><div class=my-coupon-list-user>', __p += void 0 != t.Price && null != t.Price && -1 != t.Price ? '<a href=javascript:void(0); class="link-my-coupon-action link-my-coupon-action-style2"><sub>锟�</sub>' + (null == (__t = t.Price) ? "" : __t) + "</a>" : "<a href=javascript:void(0); class=link-my-coupon-action>鍏嶈垂</a>", __p += "<i class=up-round></i><i class=down-round></i></div><p>" + (null == (__t = t.CouponClassTitle || a) ? "" : __t) + "</p></li>") : (__p += "\r\n                ", 1 == t.DiscountType && (__p += '<li class=dis_reduce data-id="' + (null == (__t = t.CouponClassID) ? "" : __t) + '"><span class="btn btn-bg-purple btn-coupon">绔嬪噺鍒�</span><p>' + (null == (__t = t.CouponClassTitle || a) ? "" : __t) + "</p><div class=my-coupon-list-user>", __p += void 0 != t.Price && null != t.Price && -1 != t.Price ? '<a href=javascript:void(0); class="link-my-coupon-action link-my-coupon-action-style2"><sub>锟�</sub>' + (null == (__t = t.Price) ? "" : __t) + "</a>" : "<a href=javascript:void(0); class=link-my-coupon-action>鍏嶈垂</a>", __p += "<i class=up-round></i><i class=down-round></i></div></li>"), __p += "\r\n                ", 2 == t.DiscountType && (__p += '<li class=dis_back data-id="' + (null == (__t = t.CouponClassID) ? "" : __t) + '"><span class="btn btn-bg-blue btn-coupon">杩旂幇鍒�</span><p>' + (null == (__t = t.CouponClassTitle || a) ? "" : __t) + "</p><div class=my-coupon-list-user>", __p += void 0 != t.Price && null != t.Price && -1 != t.Price ? '<a href=javascript:void(0); class="link-my-coupon-action link-my-coupon-action-style2"><sub>锟�</sub>' + (null == (__t = t.Price) ? "" : __t) + "</a>" : "<a href=javascript:void(0); class=link-my-coupon-action>鍏嶈垂</a>", __p += "<i class=up-round></i><i class=down-round></i></div></li>"), __p += "\r\n                ", 3 == t.DiscountType && (__p += '<li class=dis_gift data-id="' + (null == (__t = t.CouponClassID) ? "" : __t) + '"><span class="btn btn-bg-pink btn-coupon">璧犵ぜ鍒�</span><p>' + (null == (__t = t.CouponClassTitle || a) ? "" : __t) + "</p><div class=my-coupon-list-user>", __p += void 0 != t.Price && null != t.Price && -1 != t.Price ? '<a href=javascript:void(0); class="link-my-coupon-action link-my-coupon-action-style2"><sub>锟�</sub>' + (null == (__t = t.Price) ? "" : __t) + "</a>" : "<a href=javascript:void(0); class=link-my-coupon-action>鍏嶈垂</a>", __p += "<i class=up-round></i><i class=down-round></i></div></li>"), __p += "\r\n                ", 4 == t.DiscountType && (__p += '<li class=dis_gift data-id="' + (null == (__t = t.CouponClassID) ? "" : __t) + '"><span class="btn btn-bg-orange btn-coupon">浠ｉ噾鍒�</span><p>' + (null == (__t = t.CouponClassTitle || a) ? "" : __t) + "</p><div class=my-coupon-list-user>", __p += void 0 != t.Price && null != t.Price && -1 != t.Price ? '<a href=javascript:void(0); class="link-my-coupon-action link-my-coupon-action-style2"><sub>锟�</sub>' + (null == (__t = t.Price) ? "" : __t) + "</a>" : "<a href=javascript:void(0); class=link-my-coupon-action>鍏嶈垂</a>", __p += "<i class=up-round></i><i class=down-round></i></div></li>"), __p += "\r\n                ", 6 == t.DiscountType && (__p += '<li class=dis_gift data-id="' + (null == (__t = t.CouponClassID) ? "" : __t) + '"><span class="btn btn-bg-gold btn-coupon">鍏戞崲鍒�</span><p>' + (null == (__t = t.CouponClassTitle || a) ? "" : __t) + "</p><div class=my-coupon-list-user>", __p += void 0 != t.Price && null != t.Price && -1 != t.Price ? '<a href=javascript:void(0); class="link-my-coupon-action link-my-coupon-action-style2"><sub>锟�</sub>' + (null == (__t = t.Price) ? "" : __t) + "</a>" : "<a href=javascript:void(0); class=link-my-coupon-action>鍏嶈垂</a>", __p += "<i class=up-round></i><i class=down-round></i></div></li>"), __p += "\r\n                "), __p += "\r\n                "
			}), __p += "</ul>"), __p += "\r\n            ", data.couponMore && data.couponMore.length && (__p += "<span class=discount_more id=btn_more_coupon>鏇村锛�" + (null == (__t = data.CouponBaseInfoList.length) ? "" : __t) + "锛�</span>"), __p += '</div><div class="shop_info bus-coupon" id=area_cars_product style=display:none></div>', (data.CtrRuleList && data.CtrRuleList.length || data.TaxRefundType && 1 != data.TaxRefundType) && (__p += "<div class=discount_introduce id=area_urles_container><ul>", data.CtrRuleList && data.CtrRuleList.length && (__p += "\r\n                    ", _.each(data.CtrRuleList, function(t) {
				__p += "\r\n                    ", 1 == t.ActivityID ? __p += '<li class=dis_info1 data-id="' + (null == (__t = t.id) ? "" : __t) + '" data-type=ctr><span class="btn btn-bd-pink btn-coupon btn-fixed-wh">' + (null == (__t = t.TitleIcon) ? "" : __t) + "</span><p class=dis_info_font>" + (null == (__t = t.Title) ? "" : __t) + "</p><a class=dis_buy href=javascript:void(0);></a></li>" : 2 == t.ActivityID && (__p += '<li class=dis_info3 data-id="' + (null == (__t = t.id) ? "" : __t) + '" data-type=ctr><span class="btn btn-bd-blue btn-coupon btn-fixed-wh btn-fz10">' + (null == (__t = t.TitleIcon) ? "" : __t) + "</span><p class=dis_info_font>" + (null == (__t = t.Title) ? "" : __t) + "</p><a class=dis_buy href=#></a></li>"), __p += "\r\n                    "
			}), __p += "\r\n                "), __p += "\r\n\r\n                ", data.TaxRefundType && 1 != data.TaxRefundType && (__p += '<li class=dis_info2 data-type=tax data-id="' + (null == (__t = data.TaxRefundType) ? "" : __t) + '" data-hasdata="' + (null == (__t = !!data.TaxDescription.length > 0 ? "yes" : "no") ? "" : __t) + '">', 3 == data.TaxRefundType ? __p += '<span class="btn btn-bd-blue btn-coupon btn-fixed-wh">閫€绋�</span><p class=dis_info_font>' + (null == (__t = data.TaxTitle) ? "" : __t) + "</p>" : 2 == data.TaxRefundType ? __p += '<span class="btn btn-bd-blue btn-coupon btn-fixed-wh">鍏嶇◣</span><p class=dis_info_font>' + (null == (__t = data.TaxTitle) ? "" : __t) + "</p>" : 4 == data.TaxRefundType && (__p += '<span class="btn btn-bd-blue btn-coupon btn-fixed-wh btn-fz10">鎼虹▼閫€绋�</span><p class=dis_info_font>' + (null == (__t = data.TaxTitle) ? "" : __t) + "</p>"), __p += "\r\n                    ", data.TaxDescription && data.TaxDescription.length && (__p += "<a class=dis_buy href=javascript:void(0);></a>"), __p += "</li>"), __p += "</ul></div>"), __p += "";
			var per = .21875;
			$(window).width() * per;
			__p += "\r\n        ", data.StoreUrlList && data.StoreUrlList.length && (__p += '<div class=advertising_pic style=display:none><a href=javascript:void(0);><img src="' + (null == (__t = _.replaceProtocol(data.StoreUrlList[0])) ? "" : __t) + '" alt></a><span>' + (null == (__t = data.StoreUrlList.length) ? "" : __t) + "</span></div>"), __p += "", data.BrandList && data.BrandList.length && (__p += "<div class=brand_info>", _.each(data.BrandList, function(t, a) {
				__p += "\r\n                ", 3 > a && (__p += '<span class="brand_info' + (null == (__t = a + 1) ? "" : __t) + ' brand_list" data-id="' + (null == (__t = t.BrandID) ? "" : __t) + '" data-type="' + (null == (__t = t.SubStoreIDList.length ? "list" : "detail") ? "" : __t) + '"><a href=javascript:void(0);><img src="' + (null == (__t = _.replaceProtocol(t.BrandBigLogoUrl || t.LogoURL)) ? "" : __t) + '" alt></a></span>'), __p += "\r\n            "
			}), __p += "\r\n            ", data.BrandList.length > 3 && (__p += '<span class="brand_more brand_list" id=settled_brand><a href=javascript:void(0);>鏇村鍏ラ┗&gt;</a></span>'), __p += "</div>"), __p += "\r\n\r\n        ", _.contains([9636, 9637], data.StoreID) && (__p += '<div class="advertisement-slide mt10" id=area_shilla><img src="https://images4.c-ctrip.com/target/24070a0000004dobc05C4.jpg"></div>'), __p += "<div class=shop_info><ul>", data.DetailAddress && (__p += "<li class=shop_ad1 id=area_map_li><i></i><p>" + (null == (__t = data.DetailAddress) ? "" : __t) + "</p>", data.StoreZoneList.length && (__p += "\r\n                            ", __p += data.StoreZoneList.length > 1 ? "<p class=txt_grey>" + (null == (__t = data.StoreZoneList[0].ZoneName) ? "" : __t) + " " + (null == (__t = data.StoreZoneList[1].ZoneName) ? "" : __t) + "</p>" : "<p class=txt_grey>" + (null == (__t = data.StoreZoneList[0].ZoneName) ? "" : __t) + "</p>", __p += "\r\n                        "), __p += "\r\n                        ", data.Coordinates && data.Coordinates.Latitude && data.Coordinates.Longitude && (__p += "<a class=dis_buy href=javascript:void(0);></a>"), __p += "</li>"), __p += "\r\n\r\n                ", data.Telphone && (__p += "<li class=shop_ph id=area_phone><i></i><p>" + (null == (__t = data.Telphone) ? "" : __t) + "</p><a class=dis_buy href=javascript:void(0);></a></li>"), __p += "\r\n                ", data.StoreBusinesstime && (__p += "<li class=shop_time id=area_open_time><i></i><p>" + (null == (__t = data.StoreBusinesstime) ? "" : __t) + "</p><a class=dis_buy href=javascript:void(0);></a></li>"), __p += "\r\n                ", data.InformationDeskInfoList && data.InformationDeskInfoList.length && (__p += "<li class=shop_ad2 id=area_service_plan><i></i><p>" + (null == (__t = data.InformationDeskInfoList[0].DeskName) ? "" : __t) + "</p><a class=dis_buy href=javascript:void(0);></a></li>"), __p += "\r\n                ", data.StoreIDList && data.StoreIDList.length && (__p += '<li class=shop_oter id=btn_more_substore data-cityid="' + (null == (__t = data.RegionInfo.CityID) ? "" : __t) + '" data-cityname="' + (null == (__t = data.RegionInfo.CityName) ? "" : __t) + '" data-brandid="' + (null == (__t = data.BrandID || "") ? "" : __t) + '"><i></i><p>' + (null == (__t = data.RegionInfo.CityName) ? "" : __t) + "鍏朵粬" + (null == (__t = data.StoreIDList.length) ? "" : __t) + "瀹跺垎搴�</p><a class=dis_buy href=javascript:void(0);></a></li>"), __p += "</ul></div><div class=user_comments id=list_user_comment style=display:none></div><div class=nearby_shop id=list_nearly_store style=display:none></div><div class=nearby_hotel id=list_nearly_hotel style=display:none></div><div class=slide_go>", data.StoreContent && (__p += "<div class=nearby_hotel_title><span class>鍟嗘埛璇︽儏</span></div><div class=shop-font-explain style=overflow:hidden id=area_store_detail>" + (null == (__t = data.StoreContent) ? "" : __t) + "</div>"), __p += "<div class=collection style=display: id=area_store_colleage>鈥� 鐪嬪埌鏈€鍚庨兘鏄埍鎴戠殑<span>鐐规垜鏀惰棌鍚�</span>鈥�</div></div>";
			var tabcount = 0,
				poi = !1,
				ask = !1,
				map = !1;
			data.PoiID && (poi = !1), data.Coordinates && data.Coordinates.Latitude && data.Coordinates.Longitude && (tabcount++, map = !0), data.DetailLocalAddress && (tabcount++, ask = !0);
			var tabwidth = Math.floor(100 / tabcount);
			__p += "\r\n        ", tabwidth && (__p += '<div class=but_nav id=area_nav_bar><ul class=clearfix><li class=but_nav_home style=display:none><a href=javascript:void(0);><i></i><h2>璇勮</h2></a></li><li class=but_nav_map style="display:' + (null == (__t = map ? "" : "none") ? "" : __t) + ";width:" + (null == (__t = tabwidth) ? "" : __t) + '%;"><a href=javascript:void(0);><i></i><h2>鍦板浘</h2></a></li><li class=but_nav_ask style="display:' + (null == (__t = ask ? "" : "none") ? "" : __t) + ";width:" + (null == (__t = tabwidth) ? "" : __t) + '%;"><a href=javascript:void(0);><i></i><h2>闂矾鍗�</h2></a></li></ul></div>'), __p += "</section><div class=my-voucher-pop id=_btn_go_to_coupon_list_sd style=display:none><p class=my-voucher-pop-cn>鎴戠殑鍒稿寘</p></div></div><section class=shop-detail-phone-layer id=overlay_phone style=display:none;position:relative><div class=shop-detail-phone-layer-inner><span class=icon-shop-detail-call></span><div class=layer-content><p class=p-content>鎷ㄦ墦鐢佃瘽</p><a href=javascript:void(0); class=mobile-num data-area=tel>" + (null == (__t = data.Telphone) ? "" : __t) + "</a></div><a class=btn-layer-close href=javascript:void(0);><i class=icon-close></i></a></div></section><section class=shop-detail-worktime-layer id=overlay_opentime style=display:none;position:relative><div class=shop-detail-worktime-layer-inner><p class=work-time-title>钀ヤ笟鏃堕棿</p><div class=worktime-scroller><div class=worktime-scroller-content>", data.StoreBusinesstime && data.StoreBusinesstime && (__p += "<p class=work-time-span>" + (null == (__t = data.StoreBusinesstime.replace(/\n/g, "<br /><br />")) ? "" : __t) + "</p>"), __p += "</div></div><a class=btn-layer-close href=javascript:void(0);><i class=icon-close></i></a></div></section>", 2 == data.TaxRefundType ? __p += "<section class=shop-detail-tax-layer style=display:none;position:relative id=overlay_duty-free-now><div class=shop-detail-tax-layer-inner><h5 class=detail-tax-title>" + (null == (__t = data.TaxTitle) ? "" : __t) + '</h5><div class="detail-tax-content store-tax-scroller"><div class=store-tax-scroller-content>' + (null == (__t = data.TaxDescription) ? "" : __t) + "\r\n                " + (null == (__t = data.TaxDescription) ? "" : __t) + "<br><br><br><br><br><br>" + (null == (__t = data.TaxDescription) ? "" : __t) + "<br><br><br><br>" + (null == (__t = data.TaxDescription) ? "" : __t) + "<br><br><br></div></div><div style=height:1px></div><a class=btn-layer-close href=javascript:void(0);><i class=icon-close></i></a></div></section>" : (__p += "<section class=shop-detail-tax-layer style=position:relative;display:none id=overlay_duty-free-now><div class=shop-detail-tax-layer-inner><h5 class=detail-tax-title>" + (null == (__t = data.TaxTitle) ? "" : __t) + '</h5><div class="detail-tax-content store-tax-scroller"><div class=store-tax-scroller-content>', data.TaxDescription && (__p += "\r\n                " + (null == (__t = strReplacenew(data.TaxDescription)) ? "" : __t) + "\r\n                "), __p += "</div></div><div style=height:1px></div><div class=link-tax-wrap>", data.TaxRefundAgencyRuleList && data.TaxRefundAgencyRuleList.length && (__p += "\r\n                ", _.each(data.TaxRefundAgencyRuleList, function(t) {
				__p += '<a class=link-tax-line href=javascript:void(0); data-hybrid="' + (null == (__t = t.HybridUrl) ? "" : __t) + '" data-h5="' + (null == (__t = t.H5Url) ? "" : __t) + '"><span class=detail-tax-yh>' + (null == (__t = t.LabelName) ? "" : __t) + "</span><span class=link-content>" + (null == (__t = t.Title) ? "" : __t) + "</span></a>"
			}), __p += "\r\n            "), __p += "</div><a class=btn-layer-close href=javascript:void(0);><i class=icon-close></i></a></div></section>"), __p += "\r\n\r\n", data.CtrRuleList && data.CtrRuleList.length && (__p += "\r\n    ", _.each(data.CtrRuleList, function(t) {
				__p += '<section class="shop-detail-tax-layer selector-class-ctr-mask" style=display:none;position:relative data-id="' + (null == (__t = t.id) ? "" : __t) + '"><div class=shop-detail-tax-layer-inner><h5 class=detail-tax-title>' + (null == (__t = t.Title) ? "" : __t) + '</h5><div class="detail-tax-content store-ctr-scroller"><div class=store-ctr-scroller-content>', t.Summary && (__p += "\r\n                    " + (null == (__t = strReplacenew(t.Summary)) ? "" : __t) + "\r\n                    "), __p += "</div></div><div style=height:1px></div><div class=link-tax-wrap>", t.RuleLinkList && t.RuleLinkList.length && (__p += "\r\n                ", _.each(t.RuleLinkList, function(t) {
					__p += '<a class=link-tax-line href=javascript:void(0); data-hybrid="' + (null == (__t = t.HybridUrl) ? "" : __t) + '" data-h5="' + (null == (__t = t.H5Url) ? "" : __t) + '"><span class=detail-tax-yh>' + (null == (__t = t.LinkIcon) ? "" : __t) + "</span><span class=link-content>" + (null == (__t = t.LinkTitle) ? "" : __t) + "</span></a>"
				}), __p += "\r\n                "), __p += "</div><a class=btn-layer-close href=javascript:void(0);><i class=icon-close></i></a></div></section>"
			}), __p += "\r\n"), __p += "<div id=galery style=position:fixed;width:100%;top:0;display:none;z-index:999></div>"
		}
		return __p
	}
}), define(["cBaseView", "text!storedetailTmpl", "modelFactory", "ui_easymask", "ui_storeaddress", "cHybridShell", Lizard.isHybrid ? "" : "ui_flipview", "cUtilValidate", "cUtilCommon", "cguid", "UIScroll", "cUtil", "findStore"], function(t, a, i, e, o, n, s, l, r, c, d, p, u) {
	var h = i.StoreDetail.getInstance(),
		m = i.GetPoiCommentList.getInstance(),
		v = i.SearchCollectInfo.getInstance(),
		f = i.AddCollectInfo.getInstance(),
		g = i.cancelCollectInfo.getInstance(),
		b = i.searchEngine.getInstance(),
		y = i.SearchNearHotelsInfoList.getInstance(),
		C = i.GetCarsProductInfoByStoreID.getInstance(),
		L = {
			pageid: 10320605965,
			hpageid: 10320642102,
			onCreate: function() {},
			onShow: function() {
				var t = this;
				this.ctrMasks = {}, this.openLoading(), this.restoreScrollPos(), this.setHeader(), this.getStoreData(function(a) {
					t.whenDataReady(a)
				})
			},
			onViewFocus: function() {
				this.closeLoading(), Lizard.hideLoading()
			},
			onHide: function() {
				h && h.abort(), m && m.abort(), v && v.abort(), f && f.abort(), g && g.abort(), b && b.abort(), y && y.abort(), this.phoneMask && (this.phoneMask.hide(), this.phoneMask.destroy(), delete this.phoneMask), this._uiFlipview && (this._uiFlipview.destroy(), delete this._uiFlipview), this.openTimeMask && (this.openTimeMask.hide(), this.openTimeMask.destroy(), delete this.openTimeMask), this.fexFreeMask && (this.fexFreeMask.hide(), this.fexFreeMask.destroy(), delete this.fexFreeMask);
				for (var t in this.ctrMasks) this.ctrMasks[t] && (this.ctrMasks[t].hide(), this.ctrMasks[t].destroy && this.ctrMasks[t].destroy(), delete this.ctrMasks[t]);
				this.openTimeScroll && this.openTimeScroll.destroy(), delete this.openTimeScroll, this.ui_address && (this.ui_address.hide(), this.ui_address.destroy(), delete this.ui_address), h.abort()
			},
			events: {
				"click .but_nav_home": "goTo_writeComment",
				"click #area_phone": "showPhoneMask",
				"click #area_open_time": "showOpenTimeMask",
				"click li[data-type=area_fex_free]": "showFexFreeMask",
				"click .but_nav_ask": "showStoreAddress",
				"click #area_couponlist li": "couponList_clickHandle",
				"click #btn_more_coupon": "moreCoupon_clickHandle",
				"click #list_user_comment .discount_more": "goToComment_handle",
				"click #btn_more_hotel_list": "goToMoreHotelList",
				"click #area_service_plan": "showServicePlan_handle",
				"click #area_store_main_img": "showADPhoto_handle",
				"click #area_store_colleage": "addCollection_clickHandle",
				"click .but_nav_map,#area_map_li": "goToH5Map",
				"click #settled_brand": "goToSettledBrand",
				"click #area_nearly_store_item_list_small li,                #area_nearly_store_item_list_big li": "goToNearlyStore",
				"click #btn_more_store": "btnMoreStore_clickHandle",
				"click #btn_more_substore": "btnMoreSubStore_clickHandle",
				"click #area_urles_container li": "rules_clickHandle",
				"click .nearby_hotel_sty1 li[data-hotelid]": "goToHotelDetail",
				"click .nearby_hotel_sty2 li[data-hotelid]": "goToHotelDetail",
				"click .brand_info span[data-id]": "branditem_clickHandle",
				"click #_btn_go_to_coupon_list_sd": "goTo_couponList",
				"click #area_cars_product li": "carsProduct_ClickHandle",
				"click .js-cars-more-btn": "cars_more_ClickHandle",
				"click #area_shilla": "goToShilla",
				"click #area_japanup": "goToJanpanUp"
			},
			onLoginBack: function(t, a) {
				var i = this;
				"addCollection" == t.type ? a && i.searchCollecStatus(function(t) {
					t ? (Lizard.showToast("鏀惰棌鎴愬姛,甯告潵鏀惰棌澶圭湅鎴戝摝~"), i.setHeader(2), i.$("#area_store_colleage")[t ? "hide" : "show"](), i.$("#area_store_detail").css("padding-bottom", t ? "50px" : "0px")) : i.addCollection()
				}) : "gotoWriteComment" == t.type && a && (Lizard.isHybrid || Lizard.isInCtripApp ? Lizard.goTo("ctrip://wireless/destination/toPoiCommet?poiType=1&poiId=0&sourceid=18&globlePoiId=" + t.poiId, {
					targetModel: 1
				}) : Lizard.jump(location.protocol + "//m.ctrip.com/webapp/you/comment/shops/" + t.bizId + ".html?from=" + encodeURIComponent(i.removeCtm(window.location.href))))
			}
		},
		w = {
			getStoreData: function(t) {
				var i = this;
				this.openLoading(), h.setParam({
					StoreIDList: [this.P("storeid")],
					NeedDetail: !0
				}), h.execute(function(e) {
					if (i.closeLoading(), e && e.ResultCode && e.StoreDetailInfoList && e.StoreDetailInfoList.length) {
						var o = i.filterResponseData(e);
						i.render(a, {
							data: o
						}), t && "function" == typeof t && t.call(this, o)
					} else i.show404()
				}, function(t) {
					i.show404(), i.closeLoading()
				})
			},
			addCollection: function() {
				var t = this,
					a = "鏀惰棌澶辫触, 璇风◢鍚庡啀璇�";
				this.openLoading(), f.setParam({
					CollectType: 1,
					CollectID: this.P("storeid")
				}), f.execute(function(i) {
					i.ResultCode ? i.ResultMsg && "鎮ㄥ凡鏀惰棌璇ュ晢鎴�" == i.ResultMsg ? Lizard.showToast("鎮ㄥ凡鏀惰棌璇ュ晢鎴�") : ("鎮ㄧ殑鍟嗘埛鏀惰棌宸叉弧99涓紝璇锋偍鍏堝幓娓呯悊鍐嶆坊鍔犳敹钘�" == i.ResultMsg && (a = i.ResultMsg), Lizard.showToast(a)) : (Lizard.showToast("鏀惰棌鎴愬姛,甯告潵鏀惰棌澶圭湅鎴戝摝~"), t.setHeader(2), t.$("#area_store_colleage").hide(), t.$(".slide_go").css("margin-bottom", "50px")), t.closeLoading()
				}, function(a) {
					t.closeLoading()
				})
			},
			cancelCollection: function() {
				var t = this;
				this.openLoading(), g.setParam({
					CollectType: 1,
					CollectID: this.P("storeid")
				}), g.execute(function(a) {
					a.ResultCode || (Lizard.showToast("宸茬粡鍙栨秷鏀惰棌"), t.$("#area_store_colleage").show(), t.$(".slide_go").css("margin-bottom", "0px"), t.setHeader(1)), t.closeLoading()
				}, function(a) {
					t.closeLoading()
				})
			},
			searchCollecStatus: function(t) {
				var a = this;
				v.param = null, v.setParam({
					CollectID: this.P("storeid"),
					CollectType: 1
				}), v.execute(function(i) {
					if (i.ResultCode) t && "function" == typeof t && t.call(a, !1);
					else {
						var e = !!i.StoreCount;
						t && "function" == typeof t && t.call(a, e)
					}
				}, function() {
					t && "function" == typeof t && t.call(a, !1)
				})
			},
			searchCommentList: function() {
				var t = this,
					a = this.$("#list_user_comment");
				m.setParam({
					PoiID: t.dataResult.PoiID,
					PagingParameter: {
						PageIndex: 1,
						PageSize: 2
					}
				}), m.execute(function(i) {
					if (0 != i.ResultCode && i.CommentInfoList.length) {
						var e = _.template(Lizard.T("commentlistTmpl"))({
							data: i
						});
						a.html(e).show()
					}
					if (0 != i.ResultCode && 0 != i.BizId) {
						var o = t.$(".but_nav_home"),
							n = t.$(".but_nav_map"),
							s = t.$(".but_nav_ask");
						"none" != n.css("display") && "none" != s.css("display") ? (o.css("width", "33%").show().data("bizid", i.BizId).data("poiid", i.PoiID), n.css("width", "33%"), s.css("width", "33%")) : "none" != n.css("display") ? (o.css("width", "50%").show().data("bizid", i.BizId).data("poiid", i.PoiID), n.css("width", "50%")) : "none" != s.css("display") ? (o.css("width", "50%").show().data("bizid", i.BizId).data("poiid", i.PoiID), s.css("width", "50%")) : o.css("width", "100%").show().data("bizid", i.BizId).data("poiid", i.PoiID)
					}
				})
			},
			searchNearStoreByEngine: function() {
				var t = this.$("#list_nearly_store"),
					a = this;
				b.param = null, b.setParam({
					CityID: this.dataResult.RegionInfo.CityID,
					PagingParameter: {
						PageIndex: 1,
						PageSize: 6
					},
					PositionInfo: {
						Longitude: this.dataResult.Coordinates.Longitude,
						Latitude: this.dataResult.Coordinates.Latitude,
						Type: 1 == this.dataResult.RegionInfo.CountryID ? 1 : 2
					},
					SortParameter: {
						SortField: "distance",
						SortDirection: "A"
					}
				}), b.execute(function(i) {
					if (!i.ResultCode && i.SearchResultData) {
						var e;
						try {
							e = JSON.parse(i.SearchResultData)
						} catch (o) {
							i.SearchResultData = i.SearchResultData.replace(/[\n\t\r]/gi, ""), e = new Function("return (" + i.SearchResultData + ");")()
						}
						if (e && e.SearchResultData && (e = e.SearchResultData), e.total && e.total > 0 && (e.result = e.result.filter(function(t) {
								return t.StoreID != a.P("storeid")
							}), e.total = e.result.length, +e.total > 0)) {
							var n = _.template(Lizard.T("nealryStoreTmpl"))({
								data: e.result,
								configuration: {
									unionPayBID: $("#_config_union_pay_bid").val()
								}
							});
							t.html(n).show(), a.cUtil.imgLazyLoad(a, "#list_nearly_store img", null, location.protocol + "//pic.c-ctrip.com/h5/shopping/default4.png")
						}
					}
				})
			},
			searchNearlyHotel: function() {
				var t = this.$("#list_nearly_hotel"),
					a = this;
				y.setParam({
					StoreId: a.P("storeid"),
					Count: 5
				}), y.execute(function(i) {
					if (!i.ResultCode && i.HotelInfoList && i.HotelInfoList.length) {
						var e = _.template(Lizard.T("nearlyHotelTmpl"))({
							data: i.HotelInfoList,
							env: a.cUtil.getEnvCode()
						});
						t.html(e).show(), a.cUtil.imgLazyLoad(a, "#list_nearly_hotel img", null, location.protocol + "//pic.c-ctrip.com/h5/shopping/default4.png")
					}
				}, function(t) {})
			},
			getCarsProduct: function() {
				var t = this;
				C.param = null, C.setParam({
					StoreID: this.P("storeid")
				}), C.execute(function(a) {
					a && a.CarsProductInfoList && a.CarsProductInfoList.length && t.$("#area_cars_product").html(_.template(Lizard.T("carsProductTmpl"))({
						list: a.CarsProductInfoList
					})).show()
				})
			}
		},
		T = {
			goTo_writeComment: function(t) {
				var a = this,
					i = $(t.currentTarget),
					e = "",
					o = i.data("bizid"),
					n = i.data("poiid");
				this.isLogin(function(t) {
					if (t)
						if (Lizard.isHybrid || Lizard.isInCtripApp) Lizard.goTo("ctrip://wireless/destination/toAddPoiCommet?poiType=1&poiId=" + o + "&sourceid=18&globlePoiId=" + n, {
							targetModel: 1
						});
						else {
							var i = a.cUtil.getEnvCode();
							e = "pro" == i ? "//m.ctrip.com" : "//m.uat.qa.nt.ctripcorp.com", Lizard.jump(location.protocol + e + "/webapp/you/comment/shops/" + o + ".html?from=" + encodeURIComponent(a.removeCtm(window.location.href)))
						}
					else a.cLoginTo({
						data: {
							type: "gotoWriteComment",
							bizId: o,
							poiId: n
						}
					})
				})
			},
			goToComment_handle: function(t) {
				var a = this,
					i = $(t.currentTarget),
					e = i.data("poiid"),
					o = i.data("bizid");
				if (Lizard.isHybrid || Lizard.isInCtripApp) Lizard.goTo("ctrip://wireless/destination/toPoiCommet?poiType=1&poiId=" + o + "&sourceid=18&globlePoiId=" + e, {
					targetModel: 1
				});
				else {
					var n = a.cUtil.getEnvCode();
					"pro" == n ? domain = "//m.ctrip.com" : domain = "//m.uat.qa.nt.ctripcorp.com", Lizard.jump("http:" + domain + "/webapp/you/comment/11/" + o + "-shops.html?from=" + encodeURIComponent(a.removeCtm(window.location.href)))
				}
			},
			btnMoreStore_clickHandle: function(t) {
				var a = {
						cityname: this.dataResult.RegionInfo.CityName,
						destid: this.dataResult.RegionInfo.DestinationID,
						isnear: 1
					},
					i = this.createPoiInfoForSearch(a, "needsort");
				this.navTo("search", "search", i)
			},
			btnMoreSubStore_clickHandle: function() {
				var t = {
						storeids: this.dataResult.StoreIDList.join(","),
						destid: this.dataResult.RegionInfo.DestinationID,
						cityname: this.dataResult.RegionInfo.CityName
					},
					a = this.createPoiInfoForSearch(t);
				this.navTo("search", "search", a)
			},
			couponList_clickHandle: function(t) {
				var a = $(t.currentTarget),
					i = a.data("id");
				i && this.navTo("coupon", "coupondetailinfo", {
					CouponClassID: i
				})
			},
			moreCoupon_clickHandle: function(t) {
				var a = this.$("#list_more_coupon"),
					i = $(t.currentTarget);
				"鏀惰捣" == i.html() ? (a.hide(), i.html(i.data("count"))) : (a.show(), i.data("count", i.html()).html("鏀惰捣"))
			},
			showServicePlan_handle: function() {
				var t = [];
				_.each(this.dataResult.InformationDeskInfoList, function(a) {
					t.push({
						imageUrl: _.replaceProtocol(a.DeskUrlList[0]),
						imageThumbnailUrl: _.replaceProtocol(a.DeskUrlList[0]),
						category: "",
						imageTitle: a.DeskName,
						imageDescription: a.DeskDirections
					})
				}), this.showFlipView(t)
			},
			showADPhoto_handle: function() {
				var t = [];
				_.each(this.dataResult.StoreUrlList, function(a) {
					t.push({
						imageUrl: _.replaceProtocol(a),
						imageThumbnailUrl: _.replaceProtocol(a),
						category: "",
						imageTitle: "",
						imageDescription: ""
					})
				}), t.length && this.showFlipView(t)
			},
			addCollection_clickHandle: function() {
				var t = this;
				this.isLogin(function(a) {
					a ? t.addCollection() : t.cLoginTo({
						data: {
							type: "addCollection"
						}
					})
				})
			},
			moreMenuAddLove: function() {
				this.addCollection_clickHandle()
			},
			cancelCollection_clickHandle: function() {
				var t = this;
				this.isLogin(function(a) {
					a && t.cancelCollection()
				})
			},
			moreMenuRemoveLoved: function() {
				this.cancelCollection_clickHandle()
			},
			goToMap: function() {
				if (Lizard.isHybrid || Lizard.isInCtripApp) {
					var t = this.dataResult.RegionInfo && this.dataResult.RegionInfo.CityID,
						a = {
							lat: this.dataResult.Coordinates.Latitude,
							lng: this.dataResult.Coordinates.Longitude
						};
					if (this.dataResult.RegionInfo && "1" == this.dataResult.RegionInfo.CountryID)
						if (!t || "617" != t && "720" != t && "3845" != t && "3847" != t && "3848" != t && "3849" != t && "5152" != t && "5589" != t && "6954" != t && "7203" != t && "7523" != t && "7524" != t && "7570" != t && "7613" != t && "7614" != t && "7662" != t && "7805" != t && "7809" != t && "7810" != t && "7811" != t && "90003" != t) {
							var i = r.bMapToAMap(a.lng, a.lat);
							n.Fn("show_map").run(i.lat, i.lng, this.dataResult.StoreEnglishName, this.dataResult.StoreName)
						} else this.goToH5Map();
					else this.goToH5Map()
				} else this.goToH5Map()
			},
			goToH5Map: function() {
				if (this.dataResult.Coordinates.Longitude && this.dataResult.Coordinates.Latitude) {
					var t = {
						isHideNavBar: !0,
						lng: this.dataResult.Coordinates.Longitude,
						lat: this.dataResult.Coordinates.Latitude,
						cname: encodeURIComponent(this.dataResult.StoreName),
						ename: encodeURIComponent(this.dataResult.StoreEnglishName),
						LocalName: this.dataResult.LocalName,
						DetailLocalAddress: this.dataResult.DetailLocalAddress,
						CountryName: encodeURIComponent(this.dataResult.RegionInfo.CountryName)
					};
					Lizard.isHybrid ? delete t.needLocalStorage : t.needLocalStorage = !0, this.navTo("store", "detailmap", t, Lizard.isHybrid)
				}
			},
			goToSettledBrand: function() {
				this.navTo("store", "settledbrand", {
					needLocalStorage: !0,
					BrandList: this.dataResult.BrandList,
					StoreName: encodeURIComponent(this.dataResult.StoreName)
				})
			},
			goToNearlyStore: function(t) {
				var a = $(t.currentTarget),
					i = a.data("id");
				this.navTo("store", "detail", {
					storeid: i
				})
			},
			rules_clickHandle: function(t) {
				var a = $(t.currentTarget),
					i = a.data("id"),
					e = a.data("type"),
					o = a.data("hasdata");
				"ctr" == e ? this.showCTRMask(i) : "tax" == e && "yes" == o && this.showFexFreeMask(i)
			},
			goToMoreHotelList: function() {
				function t(t) {
					var a = t.getFullYear(),
						i = t.getMonth() + 1;
					10 > i && (i = "0" + i);
					var e = t.getDate();
					10 > e && (e = "0" + e);
					var o = "" + a + i + e;
					return o
				}
				var a = new Date,
					i = t(a);
				a.setDate(a.getDate() + 1);
				var e = t(a),
					o = "",
					n = this.cUtil.getEnvCode();
				switch (n) {
					case "pro":
						o = location.protocol + "//m.ctrip.com/webapp/hotel/";
						break;
					case "uat_nt":
						o = location.protocol + "//m.uat.qa.nt.ctripcorp.com/webapp/hotel/";
						break;
					default:
						o = location.protocol + "//m.ctrip.com/webapp/hotel/"
				}
				if (Lizard.isInCtripApp || Lizard.isHybrid) {
					var s = "ctrip://wireless/hotel_oversea_list";
					1 == this.dataResult.RegionInfo.CountryID && (s = "ctrip://wireless/hotel_inland_list"), s += "?c1=" + i + "&c2=" + e + "&c9=2&c10=" + this.dataResult.Coordinates.Latitude + "&c11=" + this.dataResult.Coordinates.Longitude + "&c14=" + this.dataResult.StoreName, window.location.href = s
				} else {
					var s = o + "oversea/searchlist/" + this.dataResult.Coordinates.Latitude + "/" + this.dataResult.Coordinates.Longitude;
					1 == this.dataResult.RegionInfo.CountryID && (s = o + "searchlist/" + this.dataResult.Coordinates.Latitude + "/" + this.dataResult.Coordinates.Longitude), s = s + "?from=" + encodeURIComponent(this.removeCtm(window.location.href)), Lizard.jump(s)
				}
			},
			goToHotelDetail: function(t) {
				var a = $(t.currentTarget),
					i = this,
					e = "?from=" + encodeURIComponent(i.removeCtm(location.href)) + "&days=1";
				if (1 == this.dataResult.RegionInfo.CountryID) var o = this.getProtocol() + "://m.ctrip.com/webapp/hotel/hoteldetail/" + a.data("hotelid") + ".html";
				else var o = this.getProtocol() + "://m.ctrip.com/webapp/hotel/oversea/hoteldetail/" + a.data("hotelid") + ".html";
				Lizard.isHybrid ? Lizard.jump(o, {
					targetModel: 2,
					meta: {
						isHideNavBar: !0
					}
				}) : Lizard.isInCtripApp ? Lizard.jump(o + e) : Lizard.jump(o + e)
			},
			branditem_clickHandle: function(t) {
				var a = $(t.currentTarget),
					i = a.data("id"),
					e = a.data("type");
				"list" == e ? this.navTo("search", "search", {
					brandid: i
				}) : "detail" == e && this.navTo("brand", "branddetail", {
					brandid: i
				})
			},
			goToShilla: function() {
				var t = this.getProtocol() + "://pages.ctrip.com/shoppingchic/20160120h5/shilla.html";
				Lizard.isInCtripApp || Lizard.isHybrid ? Lizard.jump(t, {
					targetModel: 2
				}) : Lizard.jump(t + "?from=" + encodeURIComponent(location.href))
			},
			goToJanpanUp: function() {
				var t = location.protocol + "//m.ctrip.com/webapp/cms/H5-336";
				Lizard.isInCtripApp || Lizard.isHybrid ? Lizard.jump(t, {
					targetModel: 2
				}) : Lizard.jump(t + "?from=" + encodeURIComponent(location.href))
			},
			goTo_couponList: function() {
				var t = this,
					a = setInterval(function() {
						if (window.Mkt && window.Mkt.Weixin && window.Mkt.Weixin.wxLanuch3rd) {
							clearInterval(a);
							var i = "c2hvcHBpbmcvaW5kZXguaHRtbCNpbmRleD90YWJ2YWx1ZT1jb3Vwb25saXN0JnJlZmVyPXNob3BwaW5n";
							window.Mkt.Weixin.wxLanuch3rd({
								schema: "ctrip://wireless/h5?url=" + i + "&type=1",
								isdown: !1,
								mktwxpageid: "10320605965",
								callback: function() {
									var a = t.cUtil.domainByObjName("gshop", !0);
									Lizard.jump(a + "/webapp/gshop?tabvalue=couponlist&_needback=1")
								}
							})
						}
					}, 100)
			},
			carsProduct_ClickHandle: function(t) {
				var a = $(t.currentTarget);
				a.data("src") && (Lizard.isHybrid ? Lizard.jump(a.data("src"), {
					targetModel: 4
				}) : Lizard.jump(this.cUtil.appendParam(a.data("src"), {
					from: encodeURIComponent(this.cUtil.cleanUrl(location.href))
				})))
			},
			cars_more_ClickHandle: function() {
				this.$("#area_cars_product li.js-more-cars").show(), this.$(".js-cars-more-btn").hide()
			}
		},
		k = {
			showPhoneMask: function() {
				var t = this;
				this.phoneMask || (this.phoneMask = new e({
					el: t.$("#overlay_phone").show(),
					events: {
						"click .btn-layer-close": function() {
							this.hide()
						},
						"click .icon-shop-detail-call, .layer-content": function() {
							var t = this.$el.find('a[data-area="tel"]').html();
							location.href = "tel:" + t
						}
					}
				})), this.phoneMask.show()
			},
			showOpenTimeMask: function() {
				var t = this;
				this.openTimeMask || (this.openTimeMask = new e({
					el: t.$("#overlay_opentime").show(),
					events: {
						"click .btn-layer-close": function() {
							this.hide()
						}
					}
				})), this.openTimeMask.show(), t.openTimeScroll && t.openTimeScroll.destroy(), delete t.openTimeScroll;
				var a = $(".worktime-scroller"),
					i = $(".worktime-scroller-content");
				a.css({
					height: "135px",
					"padding-right": "5px",
					position: "relative",
					overflow: "hidden"
				}), i.height() > 135 && (t.openTimeScroll = new d({
					wrapper: a,
					scroller: i,
					scrollType: "y"
				}), t.openTimeScroll.enable(), t.openTimeScroll.refresh())
			},
			showFexFreeMask: function() {
				var t, a = this;
				this.fexFreeMask || (this.fexFreeMask = new e({
					el: a.$("#overlay_duty-free-now").show(),
					events: {
						"click .btn-layer-close": function() {
							this.hide()
						},
						"click .link-tax-wrap a": function(i) {
							var e = $(i.currentTarget);
							Lizard.isHybrid || Lizard.isInCtripApp ? Lizard.goTo(e.data("hybrid"), {
								targetModel: 2
							}) : (t = e.data("h5"), t = t + (-1 != t.indexOf("?") ? "&" : "?") + "from=" + encodeURIComponent(a.removeCtm(location.href)), Lizard.jump(t))
						}
					}
				})), this.fexFreeMask.show(), a.openTimeScroll && a.openTimeScroll.destroy(), delete a.openTimeScroll;
				var i = $(".store-tax-scroller"),
					o = $(".store-tax-scroller-content"),
					n = $("#overlay_duty-free-now").find(".link-tax-wrap .link-tax-line").length;
				n = n ? n : 1, i.css({
					"max-height": "240px",
					"padding-right": "5px",
					position: "relative",
					overflow: "hidden",
					"margin-bottom": 44 * n + "px"
				}), o.height() > 240 && (a.openTimeScroll = new d({
					wrapper: i,
					scroller: o,
					scrollType: "y"
				}), a.openTimeScroll.enable(), a.openTimeScroll.refresh())
			},
			showCTRMask: function(t) {
				var a = this;
				this[t] || (this[t] = new e({
					el: a.$('.selector-class-ctr-mask[data-id="' + t + '"]').show(),
					events: {
						"click .btn-layer-close": function() {
							this.hide()
						},
						"click .link-tax-wrap a": function(t) {
							var i = $(t.currentTarget);
							Lizard.isHybrid || Lizard.isInCtripApp ? Lizard.goTo(i.data("hybrid"), {
								targetModel: 2
							}) : (uri = i.data("h5"), uri = uri + (-1 != uri.indexOf("?") ? "&" : "?") + "from=" + encodeURIComponent(a.removeCtm(location.href)), Lizard.jump(uri))
						}
					}
				})), this[t].show();
				var i = $(".store-ctr-scroller"),
					o = $(".store-ctr-scroller-content"),
					n = $('.selector-class-ctr-mask[data-id="' + t + '"]').find(".link-tax-wrap .link-tax-line").length;
				n = n ? n : 1, i.css({
					"max-height": "240px",
					"padding-right": "5px",
					position: "relative",
					overflow: "hidden",
					"margin-bottom": 44 * n + "px"
				}), o.height() > 240 && (a.openTimeScroll = new d({
					wrapper: i,
					scroller: o,
					scrollType: "y"
				}), a.openTimeScroll.enable(), a.openTimeScroll.refresh())
			},
			showStoreAddress: function(t) {
				var a = this,
					i = $(t.currentTarget),
					e = i.hasClass("current");
				this.ui_address || (this.ui_address = new o({
					datamodel: {
						name: a.dataResult.LocalName,
						address: a.dataResult.DetailLocalAddress
					},
					onHide: function() {
						i.removeClass("current")
					}
				})), this.ui_address[e ? "hide" : "show"](), i[e ? "removeClass" : "addClass"]("current")
			},
			setBottom: function(t) {
				this.$("#area_nav_bar")[t ? "show" : "hide"]()
			},
			showFlipView: function(t) {
				var a = this,
					i = {
						data: t,
						showPhotoIndex: 1,
						isThumbnail: !1,
						meta: {
							isThumbnailModel: !1,
							businessCode: ""
						}
					};
				Lizard.isHybrid || Lizard.isInCtripApp ? (Lizard.isHybrid || _.each(t, function(t) {
					t.imageUrl = a.getProtocol() + ":" + t.imageUrl, t.imageThumbnailUrl = a.getProtocol() + ":" + t.imageThumbnailUrl
				}), n.Fn("show_photo_broswer").run(t, r.isAndroid ? null : [], 0, {
					isThumbnailModel: !1,
					businessCode: " "
				})) : (this._uiFlipview || (this._uiFlipview = new s({
					datamodel: i,
					onShow: function() {
						a.header.hide(), a.setBottom()
					},
					onHide: function() {
						a.header.show(), a.setBottom(1)
					},
					wrapper: a.$("#galery")
				})), this._uiFlipview.show())
			},
			logoImgsLazyLoad: function() {
				this.cUtil.imgLazyLoad(this, "#area_store_main_img img", null, location.protocol + "//pic.c-ctrip.com/h5/shopping/default4.png")
			},
			whenDataReady: function(t) {
				var a = this;
				this.setShareInfo(t), this.logoImgsLazyLoad(), this.searchCommentList(), this.searchNearStoreByEngine(), this.searchNearlyHotel(), this.getFavoriteStatus(), this.getCarsProduct(), Lizard.app.code.is("WEIXIN") && (this.inWeixinShare(), a.$("#_btn_go_to_coupon_list_sd").show())
			},
			filterResponseData: function(t) {
				var a = t.StoreDetailInfoList[0],
					i = $("#_config_union_pay_bid").val();
				if (a.iconData = u.find(a.StoreID), a.CtrRuleList && a.CtrRuleList.length && _.each(a.CtrRuleList, function(t) {
						t.id = c.getGUID().toString()
					}), a.CouponBaseInfoList && a.CouponBaseInfoList.length) {
					_.each(a.CouponBaseInfoList, function(t) {
						2 == t.DiscountType && (t._index = 1), 1 == t.DiscountType && (t._index = 2), 3 == t.DiscountType && (t._index = 3), 4 == t.DiscountType && (t._index = 4), 6 == t.DiscountType && (t._index = 6), -1 == [1, 2, 3, 4].indexOf(t.DiscountType) && (t._index = 99), t.BID == i && 1 != t.CouponType && 2 != t.CouponType && (a._hasUnionPay = !0)
					}), a.CouponBaseInfoList = a.CouponBaseInfoList.sort(function(t, a) {
						return t._index - a._index
					});
					var e = [],
						o = [],
						n = [];
					_.each(a.CouponBaseInfoList, function(t, a) {
						4 == t._index ? (void 0 == t.Price && (t.Price = -1), o.push(t)) : 99 == t._index ? (void 0 == t.Price && (t.Price = -1), n.push(t)) : e.push(t)
					}), o = _.sortBy(o, "Price"), n = _.sortBy(n, "Price"), a.CouponBaseInfoList = e.concat(o, n), a.couponList = [], a.couponMore = [], _.each(a.CouponBaseInfoList, function(t, i) {
						a[3 > i ? "couponList" : "couponMore"].push(t)
					})
				}
				return a.unionPayBID = i, this.dataResult = a, a
			},
			setShareInfo: function(t) {
				var a, i, e;
				this.canShowShare = !0, t.CouponBaseInfoList && t.CouponBaseInfoList.length && (i = t.CouponBaseInfoList[0], i.CouponClassTitle && (a = i.CouponClassTitle + "锛岀珛鍗虫煡鐪嬩紭鎯狅紒")), a || (a = "銆愭惡绋嬪叏鐞冭喘銆戞渶楂樹韩15%杩旂幇锛屾洿鏈夊閲嶇ぜ閬�");
				var o = this.cUtil.getEnvCode();
				Lizard.isHybrid ? (e = "uat_nt" == o ? "https://g.ctrip.uat.qa.nt.ctripcorp.com/webapp/gshop" : "https://m.ctrip.com/webapp/gshop", e += "/store/detail?storeid=" + this.P("storeid")) : e = p.cleanUrl(window.location.href);
				var n = p.hasParam(e) ? "&" : "?";
				e += n + "_clearHis=true", this.shareInfo = {
					shareType: "Default",
					imageUrl: this.getProtocol() + "//pic.c-ctrip.com/h5/shopping/ctrip-shopping-logo.png",
					title: "鎼虹▼鍏ㄧ悆璐� 鈥� " + t.StoreName,
					text: a,
					linkUrl: e
				}
			},
			moreMenuShare: function() {
				var t = [this.shareInfo];
				n.Fn("call_custom_share", function() {}).run(t)
			},
			setHeader: function(t) {
				var a, i, e = Lizard.isHybrid || Lizard.isInCtripApp,
					o = this,
					n = {
						center: {
							tagname: "title",
							value: ["鍟嗘埛璇︽儏"]
						},
						right: []
					};
				a = e ? "favorite" : "love", i = e ? "favorited" : "loved";
				var s = Lizard.isHybrid ? "http:" : location.protocol,
					l = s + "//images4.c-ctrip.com/target/240a0900000044qdwD248.jpg";
				n.right.push({
					tagname: "voucher",
					value: "",
					httpImageUrl: l,
					callback: function() {
						Lizard.isInCtripApp ? Lizard.jump("shopping/index.html#index?tabvalue=couponlist&refer=shopping", {
							targetModel: 4
						}) : o.navTo("home", "index", {
							tabvalue: "couponlist",
							_needback: "1"
						})
					}
				}), 1 == t ? this._generateHeaderModel() : 2 == t && this._generateHeaderModel(!0), this.header.set(_.extend({}, this.headerModel, n)), this.header.show()
			},
			getFavoriteStatus: function() {
				var t = this;
				this.isLogin(function(a) {
					a ? t.searchCollecStatus(function(a) {
						t.setHeader(a ? 2 : 1), t.dataResult.Favorited = a, t.$("#area_store_colleage")[a ? "hide" : "show"](), t.$(".slide_go").css("margin-bottom", a ? "50px" : "0px")
					}) : t.setHeader(1)
				})
			},
			createPoiInfoForSearch: function(t, a) {
				var i = t || {},
					e = {};
				return this.dataResult && this.dataResult.RegionInfo && (e = 1 == this.dataResult.RegionInfo.CountryID ? {
					"pos[blat]": this.dataResult.Coordinates.Latitude,
					"pos[blon]": this.dataResult.Coordinates.Longitude,
					countryid: "1"
				} : {
					"pos[glat]": this.dataResult.Coordinates.Latitude,
					"pos[glon]": this.dataResult.Coordinates.Longitude,
					countryid: "0"
				}, a && (i.sorttype = 2), i = _.extend({}, i, e)), i
			},
			removeCtm: function(t) {
				var a = /\#ctm\_ref\=[^\&\?\#]+/i,
					i = t;
				return t && t.replace && (i = t.replace(a, "")), i
			},
			inWeixinShare: function() {
				function t() {
					WeixinJSBridge.invoke("sendAppMessage", {
						appid: o,
						img_url: e.shareInfo.imageUrl,
						img_width: "200",
						img_height: "200",
						link: e.shareInfo.linkUrl,
						desc: e.shareInfo.text,
						title: e.shareInfo.title
					}, function(t) {})
				}

				function a() {
					WeixinJSBridge.invoke("shareTimeline", {
						img_url: e.shareInfo.imageUrl,
						img_width: "200",
						img_height: "200",
						link: e.shareInfo.linkUrl,
						desc: e.shareInfo.text,
						title: e.shareInfo.title
					}, function(t) {})
				}

				function i() {
					WeixinJSBridge.invoke("shareWeibo", {
						content: e.shareInfo.text,
						url: e.shareInfo.linkUrl
					}, function(t) {})
				}
				var e = this,
					o = "";
				WeixinJSBridge.on("menu:share:appmessage", function(a) {
					t()
				}), WeixinJSBridge.on("menu:share:timeline", function(t) {
					a()
				}), WeixinJSBridge.on("menu:share:weibo", function(t) {
					i()
				})
			}
		};
	return t.extend(_.extend(L, w, T, k))
});