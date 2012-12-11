/**
* Author: Kerry
* Date: 12/3/12
* Description: Jquery plugin for fluid text
*/
(function( $ ){

    $.fn.fluidText = function( options ) {

        // Setup options
        var settings = $.extend({
                'maxWidth' : Number.NEGATIVE_INFINITY,
                'maxFontSize' : Number.NEGATIVE_INFINITY, 
                'minFontSize' : Number.POSITIVE_INFINITY, // optional 
                'minFontSizeCallBack' : function(){},  // optional
                'callback' : function(){} // optional
            }, options);


        return this.each(function(){

            // Store the object
            var $this = $(this);
            var fluidFontSize = parseInt(settings.maxFontSize);
            var maxWidth = parseInt(settings.maxWidth);
            var minFontSize = parseInt(settings.minFontSize);

            function setFluidFontSize(){
                if($this.width() > maxWidth){

                    if(fluidFontSize <= minFontSize){
                        $this.css('font-size',fluidFontSize);
                        settings.fluidFontSize = fluidFontSize;
                        settings.minFontSizeCallBack();
                        return;
                    }

                    fluidFontSize--;
                    $this.css('font-size',fluidFontSize);
                    setFluidFontSize();
                }else{
                    settings.fluidFontSize = fluidFontSize;  // you can get final font size 
                    settings.callback();
                }
            }

            setFluidFontSize();

        });

    };

})( jQuery );