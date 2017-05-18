define([
    'lib/ui/class'
], function(Class) {
    var Map = Class.create({
        setOptions: function(options) {
            var defaults = {
                pointId: null, //地图ID容器
                map: null,
                point: null,
                name: "allmap"
            };
            $.extend(true, this, defaults, options);
        }
    }, {
        init: function(options) {
            this.setOptions(options);
            var name = this.name;
            var map = this.map = new BMap.Map(name); // 创建Map实例
            this.loadInit(map, options, map);
            this.bindEvent(map);
            this.add_control(map);
            this.openSF(map);
        },
        //默认查找周边学校，医院，交通，购物等信息
        defaultLoad: function(map) {
            var btns = ["地铁", "医疗", "教育", "商业"],
                _this = this,
                $this = [".xx", ".gd", ".gw", ".yy"];
            for (var i = 0; i < btns.length; i++) {
                _this.loadLength(btns[i], $this[i], map);

            }
        },
        //计算有多少学校，医院，交通，购物
        loadLength: function(name, $this, map) {
            $($this).empty();
            var options = {
                onSearchComplete: function(results) {
                    // 判断状态是否正确
                    if (local.getStatus() == BMAP_STATUS_SUCCESS) {
                        var s = [];
                        for (var i = 0; i < results.getCurrentNumPois(); i++) {
                            s.push(results.getPoi(i).title);
                        }
                        $($this).append(s.length);
                    }
                }
            };
            var local = new BMap.LocalSearch(map, options);
            local.search(name);
        },
        //根据经纬度或地址信息创建地图
        loadInit: function(map, options) {
            var _this = this;
            if (options) {
                if (typeof options.head == "number") {
                    _this.latitude(options.head, options.body, map);
                } else if (typeof options.head == "string") {
                    _this.loadAddress(options.head, options.body, map);
                } else {
                    //                    Dog.alert("你输入的信息格式有误，请确认");
                }
            } else {
                //                Dog.alert("请输入地图的经纬度或地址信息");
            }
        },

        //根据经纬度创建地图
        latitude: function(x, y, map) {
            var point = new BMap.Point(x, y);//创建点坐标  
            this.pointId = point;
            this.point = point;
            map.centerAndZoom(point, 16); //
            this.defaultLoad(map); //初始化地图，设置中心点坐标和地图级别  
            this.goto(map, point);
            this.loadSearch("地铁", "images/map/train.png");
        },
        //根据地址信息创建地图
        loadAddress: function(city, address, map) {
            var myGeo = new BMap.Geocoder(),
                _this = this;
            if (city == "" || address == "") {
                //                 Dog.alert("地址信息为空");
            } else {
                // 将地址解析结果显示在地图上,并调整地图视野
                myGeo.getPoint(address, function(point) {
                    if (point) {
                        _this.point = point;
                        _this.pointId = new BMap.Point(point.lng, point.lat);
                        map.centerAndZoom(point, 16);
                        _this.defaultLoad(map);
                        _this.goto(map, point);
                        _this.loadSearch("地铁", "web_fe/img/source/newhouse/school.png");
                    } else {
                        //                        Dog.alert("您选择地址没有解析到结果!");
                    }
                }, city);
            }
        },
        //添加定位图片
        goto: function(map, point, map) {
            var text = $("#estateName").val();
            var h = document.createElement('div');
            $(h).html('\
                <div class="labpos">\
                <div class="maplabel">\
                    <div class="text">' + text + '</div>\
                    <div class="mapIcon"></div>\
                </div>\
                </div>\
            ');
            var myLabel = new BMap.Label($(h).html(), {
                position: point
            });
            myLabel.setStyle({
                'background': 'none',
                'border': '0'
            });

            map.addOverlay(myLabel);

            //var myIconu = new BMap.Icon("web_fe/img/source/newhouse/position.png"), new BMap.Size(31, 44));
            //var markery = new BMap.Marker(point, {icon: myIconu});  // 创建标注
            //map.addOverlay(markery);
        },

        //绑定事件集合
        bindEvent: function(map) {
            var _this = this;
            $("button[name='zb']").on("click", function() {
                var x = $("input[name='X']").val(),
                    y = $("input[name='Y']").val();
                _this.latitude(x, y, map);
            });

            $("button[name='dz']").on("click", function() {
                var city = $("input[name='city']").val(),
                    address = $("input[name='address']").val();
                _this.loadAddress(city, address, map);
            });

            var panorama = new BMap.Panorama('allmap');
            $(".jiejing").on("click", function() {
                $(".zixun").addClass("current");
                $(this).removeClass("current");
                var cen = map.getCenter();
                panorama.setPov({ heading: -40, pitch: 6 });
                panorama.setPosition(new BMap.Point(cen.lng, cen.lat)); //根据经纬度坐标展示全景图
                panorama.show();
                //                    panorama.setPosition(new BMap.Point(120.320032, 31.589666));
            });

            $(".zixun").on("click", function() {
                $(".jiejing").addClass("current");
                $(this).removeClass("current");
                //                    var cen = map.getCenter();
                //                    var point = new BMap.Point(cen.lng, cen.lat);
                //                    map.centerAndZoom(point, 12);
                panorama.hide();
            });


            var cx = {
                "地铁": "images/map/train.png",
                "医疗": "images/map/hosp.png",
                "教育": "images/map/school.png",
                "商业": "images/map/buy.png"
            }
            $(".industryinfo a").click(function() {
                var text = $(this).text();
                if (text == '交通') {
                    text = '地铁';
                }
                var arr = [24, 94, 164, 234];
                var $index = $(this).index();
                $(this).addClass("on").siblings().removeClass("on");
                $(".surroundinfobox span").css("left", arr[$index]);
                _this.loadSearch(text, cx[text]);
            })
        },
        //添加缩放尺寸
        add_control: function(map) {
            var top_left_control = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT }); // 左上角，添加比例尺
            var top_left_navigation = new BMap.NavigationControl(); //左上角，添加默认缩放平移控件
            //                    var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
            map.addControl(top_left_control);
            map.addControl(top_left_navigation);
            //                    map.addControl(top_right_navigation);
            $(".anchorBL").hide();
        },
        //删除缩放尺寸 not call
        delete_control: function() {
            var map = this.map;
            var top_left_control = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT }); // 左上角，添加比例尺
            var top_left_navigation = new BMap.NavigationControl(); //左上角，添加默认缩放平移控件
            var top_right_navigation = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL }); //右上角，仅包含平移和缩放按钮
            map.removeControl(top_left_control);
            map.removeControl(top_left_navigation);
            //                    map.removeControl(top_right_navigation);
        },
        //开启鼠标缩放
        openSF: function(map) {
            map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
            map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
        },
        //查找周边学校，地铁，医院，购物
        loadSearch: function(name, img) {
            var map = this.map,
                _this = this
            var options = {
                onSearchComplete: function(results) {
                    // 判断状态是否正确
                    if (local.getStatus() == BMAP_STATUS_SUCCESS) {
                        var contant = [],
                            times = [],
                            phoneNumber = [],
                            address = [];
                        for (var i = 0; i < results.getCurrentNumPois(); i++) {
                            var mark = _this.iconSize(results.getPoi(i).point, map, img);
                            _this.addWindInfo(mark, results.getPoi(i), i);

                            //计算步行到周围学校，地铁等距离的时间
                            var time = parseInt(map.getDistance(map.getCenter(), results.getPoi(i).point));
                            times.push(time);
                            if (!results.getPoi(i).address) {
                                results.getPoi(i).address = "";
                            }
                            if (!results.getPoi(i).phoneNumber) {
                                results.getPoi(i).phoneNumber = ""
                            }
                            contant.push(results.getPoi(i).title);
                            phoneNumber.push(results.getPoi(i).phoneNumber);
                            address.push(results.getPoi(i).address);
                        }
                        //重新设置中心点图片
                        _this.goto(map, _this.point);
                        _this.mbHtml(contant, phoneNumber, address, name, times);
                    } else {
                        _this.goto(map, _this.point);
                        _this.mbHtml();
                    }
                }
            };

            //筛选周边信息
            var local = new BMap.LocalSearch(map, options, {
                renderOptions: { map: map, panel: "r-result", autoViewport: true }
            });

            //清除上次筛选的覆盖点
            map.clearOverlays();

            /**第一个关键字，二个中心点,三个是半径*/
            local.searchNearby(name, _this.pointId);
        },
        //覆盖点的窗口信息
        addWindInfo: function(marker, poi, index) {
            var maxLen = 10;
            var name = null;
            if (poi.type == BMAP_POI_TYPE_NORMAL) {
                name = "地址：  "
            } else if (poi.type == BMAP_POI_TYPE_BUSSTOP) {
                name = "公交：  "
            } else if (poi.type == BMAP_POI_TYPE_SUBSTOP) {
                name = "地铁：  "
            }
            // infowindow的标题
            var infoWindowTitle = '<div style="font-weight:bold;color:#CE5521;font-size:14px">' + poi.title + '</div>';
            // infowindow的显示信息
            var infoWindowHtml = [];
            infoWindowHtml.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px arial,simsun,sans-serif"><tbody>');
            infoWindowHtml.push('<tr>');
            infoWindowHtml.push('<td style="vertical-align:top;line-height:16px;width:38px;white-space:nowrap;word-break:keep-all">' + name + '</td>');
            infoWindowHtml.push('<td style="vertical-align:top;line-height:16px">' + poi.address + ' </td>');
            infoWindowHtml.push('</tr>');
            infoWindowHtml.push('</tbody></table>');
            var infoWindow = new BMap.InfoWindow(infoWindowHtml.join(""), { title: infoWindowTitle, width: 200 });
            var openInfoWinFun = function() {
                //Marker(point:Point)
                marker.openInfoWindow(infoWindow);
            }
            marker.addEventListener("click", openInfoWinFun);
            if (index == 0) {
                //openInfoWinFun();
            }
        },
        //筛选周边信息，替换响应的图片
        iconSize: function(point, map, img) {
            var myIconu = new BMap.Icon(img, new BMap.Size(31, 44));
            var markery = new BMap.Marker(point, { icon: myIconu }); // 创建标注
            map.addOverlay(markery);
            return markery;
        },
        //创建周边信息表格模板
        mbHtml: function(contant, phoneNumber, address, name, times) {
            $("#surroundinfo").empty();
            var liobj = "";
            var phone = "";
            if (contant) {
                for (var i = 0; i < contant.length; i++) {
                    if (phoneNumber[i]) {
                        phone = '<p>电话：' + phoneNumber[i] + '</p>'
                    } else {
                        phone = ''
                    }
                    liobj += '<li><p class="add">' + contant[i] + '</p><p>地址：' + address[i] + '</p>' + phone + '</li>'
                }
            } else {
                liobj = '<li><p>周边无相应设施</p></li>'
            }
            $("#surroundinfo").append(liobj);
            $(".anchorBL").hide();
        },
        //添加全景控件 not call
        addQJ: function(map) {
            var stCtrl = new BMap.PanoramaControl(); //构造全景控件
            stCtrl.setOffset(new BMap.Size(20, 20));
            map.addControl(stCtrl); //添加全景控件
        }
    })
    return Map;
});
