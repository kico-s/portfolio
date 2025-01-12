$(document).ready(function() {
    var counterInit = function() {
      if ( $('.section-counter').length > 0 ) {
        $('.section-counter').waypoint( function( direction ) {

          if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.number').each(function(){
              var $this = $(this),
                num = $this.data('number');
              $this.animateNumber(
                {
                  number: num,
                  numberStep: comma_separator_number_step
                }, 5000
              );
            });

          }

        } , { offset: '95%' } );
      }

    }
    counterInit();
  });

$(window).on('load', function () {

  // Primeiro, some com a animação de carregamento
  $("#loader").fadeOut("slow", function () {

    // Em seguida, esconda a div de pré-carregamento depois de um pequeno delay
    $("#preloader").delay(300).fadeOut("slow");
    $(".page-header").addClass("zoomInDown")
  });

});