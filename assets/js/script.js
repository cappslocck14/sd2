// $(document).ready(function(){
//     $('#pageWrapper').fullpage();
//     var allItems = $('#pageWrapper section');
//     console.log(allItems.length)
//     for (var j=0; j < allItems.length; j++) {
// 		if (j==0) {
// 			$(".main__dots").append("<a href='#' class='main__dot main__dot--active'></a>");
// 		}
// 		else {
// 			$(".main__dots").append("<a href='#' class='main__dot'></a>");
// 		}
//     }
    

//     var dots = $(".main__dots").children(".main__dot");	
// 	$('.main__dots .main__dot').click(function(){
// 		$(".main__dots .main__dot--active").removeClass("active");								  
// 		$(this).addClass("active");
// 		i = $(this).index();
// 		offset = i * width;
// 		$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
//     });
    
//       console.log();

// });

$(document).ready(function() { 
    var slides = $("#pageWrapper section"); 
    var height = $("#pageWrapper section").height();
    var i = slides.length; 
    var offset = i * height; 
    var cheсk = i-1;

	
	$("#pageWrapper").css('height',offset);

	for (j=0; j < slides.length; j++) {
		if (j==0) {
			$(".main__dots").append("<a href='#' class='main__dot main__dot--active'></a>");
		}
		else {
			$(".main__dots").append("<a href='#' class='main__dot'></a>");
		}
	}
	
	var dots = $(".main__dots").children(".main__dot");
	offset = 0; 
	i = 0; 
	
	dots.click(function(){
		$(".main__dot").removeClass("main__dot--active");								  
		$(this).addClass("main__dot--active");
		i = $(this).index();
		offset = i * height;
		slides.css("transform","translateY(-"+offset+"px)"); 
    });

     


    slides.bind('mousewheel', function(e) {
        if(e.originalEvent.wheelDelta / 120 > 0) {
            if (offset > 0) { 
                offset -= height; 
                slides.css("transform","translateY(-"+offset+"px)");
                $(".main__dot").removeClass("main__dot--active");	
                $(dots[--i]).addClass("main__dot--active");
            }
        } else {
            
            if (offset < height * cheсk) {	
                offset += height; 
                slides.css("transform","translateY(-"+offset+"px)");
                $(".main__dot").removeClass("main__dot--active");	
                $(dots[++i]).addClass("main__dot--active");
            }
        }
    });

});

$(document).ready(function() {
    var owl = $(".owl-carousel"),
        inputType =$("input[type=range]");
    owl.owlCarousel({
      'responsive': {
        0: {
          items: 1,
          slideBy: 1
         
        },
        600: {
          items: 1,
          slideBy: 1
          
        },
        1280: {
          items: 1,
          slideBy: 1
        }
      }
    });
 owl.on('changed.owl.carousel', function(event) {
        console.log(event.item.index);
        inputType.val(event.item.index);
      });
    
  
    $("input").on("change", function(e) {
      e.preventDefault();
      console.log(inputType.val());     
      $('.owl-carousel').trigger('to.owl.carousel', [inputType.val(),1,true]);
  
    });
  });