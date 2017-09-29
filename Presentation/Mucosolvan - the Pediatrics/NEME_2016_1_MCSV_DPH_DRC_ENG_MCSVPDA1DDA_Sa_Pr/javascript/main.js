//drcom.ready([],function(){
drcom.ready([],function(){
	$(".cir").bind('tapone', function() {
        drcom.gotoSlide(5);
    });	

    $('.exp_txt_box').addClass('ani');

    setTimeout(function(){
    	$('.exp_txt').fadeIn();
    },600)
});