$(function(){
  /*
   * Funções para o nice-modal
   */
  var niceModal = {
      open: function() {
          $('.overlay').fadeIn();
          setTimeout(function(){
              $('.nice-modal').fadeIn();
          }, 200);
      },
      close: function() {
          $('.nice-modal').fadeOut();
          setTimeout(function(){
              $('.overlay').fadeOut();
          }, 200);
      },
      setup: function() {
          $('#close-nice-modal').on('click', function(){
              niceModal.close();
          });
      },
      setStatus: function(status, message, type) {
          if(status){
              $('.nice-modal').fadeOut();
              $('.nice-result').addClass(type).fadeIn();
              $('.nice-result-message').html(message);
              setTimeout(function() {
                  $('.overlay, .nice-result, .nice-result-message').fadeOut().removeClass(type);
                  $('.overlay').fadeOut();
              }, 2000);
          }
          else{
              $('.nice-result').fadeOut();
          }
      }
  }

  niceModal.setup();
  $('.thumb').on('click', function(){
    niceModal.open();
  });

});
