define([
    'zepto',
    'lib/ui/class'
], function ($, Class){
    return Class.create({
        setOptions: function (opts) {
            var options = {
                elem: '',
                callback: function () {}
            };
            $.extend(this, options, opts);
        },
        init: function (opts) {
            this.setOptions(opts),
            this.startY = 0,
            this.dragY = 0,
            this.endY = 0,
            this.locked = !1,
            this.$elem = $(this.elem),
            this.bindEvent();
        },
        bindEvent: function () {
            var $this = this,
                HeightDifference = 0;
            $this.$elem.height() < $this.$elem.parent().height() || this.$elem.on('touchstart', function (event) {
                    HeightDifference = $this.$elem.parent().height() - $this.$elem.height(),
                    $this.locked || ($this.startY = event.touches[0].pageY);
                }).on('touchmove', function (event) {
                    $this.locked || ($this.dragY = $this.endY + event.touches[0].pageY - $this.startY, $this.dragY > 0 ? $this.dragY = $this.dragY / 3 : $this.dragY < HeightDifference && ($this.dragY = HeightDifference + ($this.dragY - HeightDifference) / 3), $this.$elem.css('-webkit-transform', 'translate(0,' + $this.dragY + 'px)')),
                    event.preventDefault();
                }).on('touchend', function () {
                    var a = ($this.$elem.height(), $this.$elem.height() - $this.$elem.parent().height());
                    $this.endY = $this.dragY;
                    var s;
                    0 != $this.endY && ($this.endY > 0 || -$this.endY > a) && ($this.endY > 0 ? s = $this.endY = 0 : -$this.endY > a && (s = $this.endY = -a), $this.$elem.on('webkitTransitionEnd transitionend', function () {
                        $this.locked = !1,
                        $(this).removeClass('springback-animation'),
                        $(this).off('webkitTransitionEnd transitionend');
                    }).addClass('springback-animation').css('-webkit-transform', 'translate(0,' + s + 'px)'), setTimeout(function () {
                        $this.locked = !1,
                        $this.$elem.removeClass('springback-animation').off('webkitTransitionEnd transitionend');
                    }, 200), $this.locked = !0);
                });
        }
    });
});