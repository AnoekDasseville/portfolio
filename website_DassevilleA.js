var main = function () {
  "use strict";

  $("a").on('click', function(){ 
  $("a").removeClass('selected');
  $(this).closest("a").addClass('selected');
  $(".extra").addClass('hidden');
  $($(this).data("par")).removeClass('hidden');
  
 }); 

setInterval(function () {

		if($('.inspiratie1').hasClass("show")) {
				$('.inspiratie1').fadeOut(3000, function() {
					$('.inspiratie1').removeClass("show");
					$('.inspiratie2').fadeIn(2000, function () {
						$('.inspiratie2').addClass('show');
					});
				});
			}

			if($('.inspiratie2').hasClass("show")) {
				$('.inspiratie2').fadeOut(2000, function() {
					$('.inspiratie2').removeClass("show");
					$('.inspiratie3').fadeIn(2000, function () {
						$('.inspiratie3').addClass('show');
					});
				});
			}

			if($('.inspiratie3').hasClass("show")) {
				$('.inspiratie3').fadeOut(2000, function() {
					$('.inspiratie3').removeClass("show");
					$('.inspiratie1').fadeIn(2000, function () {
						$('.inspiratie1').addClass('show');
					});
				});
			}
  

}, 5000);

$(".box").on("mouseover", function () {
        $($(this).data("info")).removeClass('hidden');
    });

    $(".box").on("mouseout", function () {
        $($(this).data("info")).addClass('hidden');
    });

}

$("document").ready(main);
