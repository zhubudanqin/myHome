define([
    'zepto',
    'lib/ui/lazyload',
    'util/fastclick',
    'lib/ui/cookie'
],function($,Lazyload,FastClick,cookie){
    $(function(){
        //延迟加载
        new Lazyload({
            placeholder:'//img.tuniucdn.com/js/white.gif',
            container:'.wrapper'
        });

        FastClick.attach(document.body);
    });

});