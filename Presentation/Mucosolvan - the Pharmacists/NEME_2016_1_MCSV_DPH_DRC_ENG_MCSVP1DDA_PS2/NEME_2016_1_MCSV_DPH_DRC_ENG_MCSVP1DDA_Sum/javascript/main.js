//drcom.ready([],function(){
drcom.ready([],function(){
	
	$('.main_list li span,.main_list2 li span').bind('tapone',function(){
		//alert($(this).attr('rel'));
		drcom.gotoSlide($(this).attr('rel'));
	});
	
	
});



