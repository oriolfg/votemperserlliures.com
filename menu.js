$(window).ready(function() {
    $(".fonts-oficials").css( "margin-top", $(".logo").height() );
});

$(document).on("scroll",function(){

    if ($(document).scrollTop()<56) {
		$(".img-logo").css("height", 156 - $(document).scrollTop());
		$(".logo").css( "height", 156 - $(document).scrollTop());
    } else {
    	$(".logo").css( "position", "fixed" );
    	$(".logo").css( "top", 0 );
    	$(".logo").css( "width", '100%' );
    }
});
