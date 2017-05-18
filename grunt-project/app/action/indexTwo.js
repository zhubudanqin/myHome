$(function(){
    var oIndex = {
        setOptions: function(opts) {
            var defaults = {
                
            };
            $.extend(true, this.options = {}, defaults, opts);
        },

        init: function(options) {
            this.setOptions(options);
            this.bindEvent();

        },

        bindEvent: function() {
            // 图片懒加载
            $('img').lazyload({
                effect: 'fadeIn',
                threshold: 100,
                data_attribute: 'src'
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
