$(document).ready(function() {
  $('.open-popup').magnificPopup({
    showCloseBtn: false,
    type: 'inline',

    fixedContentPos: true,
    fixedBgPos: false,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });
  $('._mfp-close').click(function(){
    $.magnificPopup.close();
  });
});
