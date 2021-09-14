$(function() {
    var envelope = $("#envelope, #shadow"),
        letter = $('.letter'),
        left = $('#left'),
        timeout,
        timeout2;
    $(".another").click(function(e) {
      e.preventDefault();
      $("#contact-form").each(function (){
        this.reset();
      });
      if($('html').hasClass('sketchbook')) {
        envelope.show().addClass("off");
        timeout = setTimeout(function() {
          envelope.removeClass("off").addClass("reset");
        }, 500);
        timeout2 = setTimeout(function() {
          envelope.removeClass("reset");
        }, 2000);
        return false;        
      } else {
        left.removeClass('sent');
      }
    });
    $('.send').click(function(e) {
      e.preventDefault();
      if($('html').hasClass('sketchbook')) {
        letter.addClass("drop");
        timeout = setTimeout(function() {
          envelope.addClass("sent");
        }, 1500);
        timeout2 = setTimeout(function() {
          letter.removeClass("drop");
          envelope.removeClass("sent").hide();
        }, 5000);
      } else {
        left.addClass('sent');
      }
    });
  });