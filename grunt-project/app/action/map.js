require([
    'jQuery',
    'lib/ui/class',
    'service/map',
    'util/base'
], function($, Class, Map) {
    var map = new Map({
        head:eval($('#lon').val()),
        body:eval($('#lat').val())
    });
});
