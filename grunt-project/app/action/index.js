require([
    'zepto',
    'lib/ui/swiper',
    'util/base'
], function($, Swiper) {
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