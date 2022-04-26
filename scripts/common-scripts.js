

;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input[type="email"],input[type="phone"],input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('input:text,input[type="email"],input[type="phone"],input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
		
        
        
        
        
         $("#scrollbottom").click(function(){
            //console.log("I am clicked")
            $("html, body").stop(true, true).animate({
                scrollTop: $("#after-hero").offset().top - 0
            }, 500);
        })
        
        
        
        $("#phone-nav").click(function(){
            if($(window).width() < 768){
                $('div.nav-wrap').slideToggle();
            }
            else{
                $('div.nav-wrap').fadeIn();
            }
        })
        
        $("div.close-icon").click(function(){
            $('div.nav-wrap').fadeOut();
        })
        
        
        
        
        
    $.fn.firstWord = function() {
      var text = this.text().trim().split(" ");
      var first = text.shift();
      this.html((text.length > 0 ? "<span class='firstWord'>"+ first + "</span> " : first) + text.join(" "));
    };
    $("#find-word").firstWord(); 


    $("#find-word").html(function(index, curHTML){
       var text = curHTML.split(/[\s-]/),
           newtext = '<span class="last-word">' + text.pop() + '</span>';
       return text.join(' ').concat(' ' + newtext);
    });      

    
    $('.slider-wrap').each(function(){
        var total = $('.slider-wrap ul.slides > li.slide').length;
        $('.slider-total-count').html('0' + total);
    });
    
        //this is addClass to body
        if($('.home-content').length){
            $('body').addClass('home-content-body')
        }
		
	})// End ready function.

	$(window).load(function(){
        // Begin common slider
        if ( $('div.slider-wrap').length == 0 ) return false

        $('div.slider-wrap').flexslider({
            animation:"slide",
            slideshow: false,
            directionNav: true,
            controlNav:false,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');
                
                

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {
                var activeSlide = $('.flex-active-slide').find('.slide-no').html();
                $('.slider-active-count').html('0' + activeSlide)
            }
        })	

    })
	

})(jQuery)

