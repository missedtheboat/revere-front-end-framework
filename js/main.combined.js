// Font Caching - We'll have to wait on this until we have proper license to use it and can confirm that the file is small enough
!function() {
  "use strict";
  function e(e, t, n) {
    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
  }
  function t(e) {
    return window.localStorage && localStorage.font_css_cache && localStorage.font_css_cache_file === e
  }
  function n() {
    if (window.localStorage && window.XMLHttpRequest)
      if (t(o)) c(localStorage.font_css_cache);
      else {
        var n = new XMLHttpRequest;
        n.open("GET", o, !0), e(n, "load", function() {
          4 === n.readyState && (c(n.responseText), localStorage.font_css_cache = n.responseText, localStorage.font_css_cache_file = o)
        }), n.send()
      } else {
        var a = document.createElement("link");
        a.href = o, a.rel = "stylesheet", a.type = "text/css", document.getElementsByTagName("head")[0].appendChild(a), document.cookie = "font_css_cache"
      }
  }
  function c(e) {
    var t = document.createElement("style");
    t.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(t)
  }
  var o = "/wp-content/themes/revere-pattern/front-end-framework/css/fonts.css";
  window.localStorage && localStorage.font_css_cache || document.cookie.indexOf("font_css_cache") > -1 ? n() : e(window, "load", n)
}
// Toggles for Navigation
$('#navigation-toggle').click( function () {
  $('body').toggleClass('visible-nav');
});
$('li.has-children').click( function (){
  if ($(this).hasClass('contract')) {
    $(this).toggleClass('expand contract')
  } else if ($(this).hasClass('expand')) {
    $(this).toggleClass('expand contract')
  } else {
    $(this).addClass('expand');
  }
});
// Class Toggles for Animation
$('.modal .activate, .user li h6, .user li h6 svg').click( function(){
  var modalBox = $(this).parent()
  // $(this).parent().toggleClass('activated', 'deactivated');
  if (modalBox.hasClass('activated')) {
    modalBox.removeClass('activated');
    modalBox.addClass('deactivated');
  } else {
    modalBox.removeClass('deactivated');
    modalBox.addClass('activated');
  }
});
var $disabled = '.setting :disabled';
if ($($disabled) ) {
  $($disabled).closest('div.setting').addClass('disabled');
}
// Margins field-group
$('input').focusin(function() {
  $(this).parent('.field-group').addClass('active');
});
$('.modal-h .activate').hover( function(){
  var modalBox = $(this).parent()
  // $(this).parent().toggleClass('activated', 'deactivated');
  if (modalBox.hasClass('activated')) {
    modalBox.removeClass('activated');
    modalBox.addClass('deactivated');
  } else {
    modalBox.removeClass('deactivated');
    modalBox.addClass('activated');
  }
});
var $disabled = '.setting :disabled';
if ($($disabled) ) {
  $($disabled).closest('div.setting').addClass('disabled');
}