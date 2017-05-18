! function(e, n) {
    var t = e.documentElement,
        i = "orientationchange" in n ? "orientationchange" : "resize",
        o = function() {
            var e = t.clientWidth;
            e && (t.style.fontSize = (20 * (e / 375)) + "px") };
    n.globalCheckIsInWebview = function() {
        var e = document.cookie.match(new RegExp("(^| )deviceType=([^;]*)(;|$)"));
        return e && e[2] && ("0" == e[2] || "1" == e[2]) ? !0 : !1 }, o(), e.addEventListener && (n.addEventListener(i, o, !1), e.addEventListener("DOMContentLoaded", o, !1)) }(document, window);
