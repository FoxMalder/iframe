$(document).ready(function() {
  $('#new-keyword').keyup(function(){
    console.log('fgdfg');
    if($(this).val().length !=0)
      $('.add-word .i-plus-in-circle').addClass('blue');
    else
      $('.add-word .i-plus-in-circle').removeClass('blue');
  });
});
