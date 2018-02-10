document.addEventListener('DOMContentLoaded', function() {
    var e = document.querySelector('.drawer');

    var s = window.pageYOffset;
    var a = function() {
        var t = window.pageYOffset + window.innerHeight;
    	var n = Math.max(0, window.innerHeight - e.offsetHeight);
        t > document.body.clientHeight - (96 - n) ? "absolute" != e.style.position && (e.style.position = "absolute", e.style.top = null, e.style.bottom = 0) : e.offsetHeight < window.innerHeight ? "fixed" != e.style.position && (e.style.position = "fixed", e.style.top = 0, e.style.bottom = null) : "fixed" != e.style.position ? t > e.offsetTop + e.offsetHeight ? (e.style.position = "fixed", e.style.top = null, e.style.bottom = "-96px") : window.pageYOffset < e.offsetTop && (e.style.position = "fixed", e.style.top = 0, e.style.bottom = null) : window.pageYOffset > s ? e.style.top && (e.style.position = "absolute", e.style.top = Math.max(0, s) + "px", e.style.bottom = null) : e.style.bottom && (e.style.position = "absolute", e.style.top = t - e.offsetHeight + "px", e.style.bottom = null), s = Math.max(0, window.pageYOffset)
    };
    var c = function() {
        var t = document.querySelector(".main");
		e.style.position = 'static';
        window.removeEventListener("scroll", a);
		if (matchMedia("only screen and (max-width: 959px)").matches) {
			e.style.position = null;
			e.style.top = null;
			e.style.bottom = null;
		} else if (e.offsetHeight + 96 < t.offsetHeight) {
			  window.addEventListener("scroll", a);
			  a();
		}
    };
    window.addEventListener("resize", c), c();
});
