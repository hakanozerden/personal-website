jQuery(document).ready(function ($) {
  $("#contactForm").submit(function (event) {
      var formData = new FormData($(this)[0]);
      $.ajax({
          url: 'contactform.php',
          type: 'POST',
          data: formData,
          async: true,
          cache: false,
          contentType: false,
          processData: false,
          success: function (returndata) 
          {
            $("#contactForm")[0].reset();
            $('#myModal').modal("show");
          },
          error: function(){
            alert("Error occured while sending message!");
          }
      });
      return false;
      });
});
$(document).ready(function() {
  AOS.init( {
  }); 
});

$('a.smooth-scroll')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { 
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus();
        };
      });
    }
  }
});

