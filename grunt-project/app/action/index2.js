$(function() {
    var oIndex = {
        setOptions: function(opts) {
            var defaults = {
                destiUl: '.desti-con ul',
                destiSpan:'.desti-con #line span'
            };
            $.extend(true, this.options = {}, defaults, opts);
        },
        init: function(options) {
            var _this = this;
            this.setOptions(options);
            this.bindEvent();
            var aSpan =
                '<span></span>' +
                '<span></span>' +
                '<span></span>';
            var newDiv = $('<div></div>');
            newDiv.attr('id', 'line').appendTo($(this.options.destiUl));
            $('#line').html(aSpan);
            var oHeight = $(this.options.destiUl).height() - 40;
            $(this.options.destiSpan).css('height', oHeight + 'px');
            if($('.desti-con li').length > 12){
                $('.desti-all').css('display','block');
            }
        },
        bindEvent: function() {
            var _this = this;
            // 图片懒加载
            $('img').lazyload({
                effect: 'fadeIn',
                threshold: 100,
                data_attribute: 'src'
            });

            $('.desti-all').click(function() {
                $(this).hide();
                $(_this.options.destiUl).addClass('active');
                var oHeight = $(_this.options.destiUl).height() - 40;
                $(_this.options.destiSpan).css('height', oHeight + 'px');
                $('.desti-close').css('display', 'block');
            });
            $('.desti-close').click(function(event) {
                $(this).hide();
                $(_this.options.destiUl).removeClass('active');
                var oHeight = $(_this.options.destiUl).height() - 40;
                $(_this.options.destiSpan).css('height', oHeight + 'px');
                $('.desti-all').css('display', 'block');
            });

        }
    };
    oIndex.init();
    new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 2500
    });
});
