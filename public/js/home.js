$( document ).ready(function() {
  var setStatus = function(data){
    $('.toggle-button').each(function(){
      $(this).prop('checked', data.status[$(this).attr('data-pin')]).change();
    });
  };
  $.get('/relay/status',function(data){
    setStatus(data);
    $('.toggle-button').on("change",function() {
      $.get('/toggle/'+$(this).attr('data-pin'));
    });
  });


});