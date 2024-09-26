$(document).ready(function(){
	 /*$('#pop1').bind('click', function(e) {
                e.preventDefault();
		$('#bPopup1').bPopup({
				speed: 650,
				transition: 'slideIn'
			});
	 });
	 $('#bPopup1_close').bind('click',function(e){
		$('#bPopup1').bPopup().close(); 
	 	});
		
	$('#pop2').bind('click', function(e) {
                e.preventDefault();
		$('#bPopup2').bPopup({
				speed: 650,
				transition: 'slideIn'
			});
	 });
	 $('#bPopup2_close').bind('click',function(e){
		$('#bPopup2').bPopup().close(); 
	 	});*/
		
		
		$('.white').bind('click', function(e) {
                e.preventDefault();
		$('#' + $(this).attr('data-OverlayID')).bPopup({
				speed: 650,
				transition: 'slideIn'
			});
		
	 });
	 
	 $('.close_popup').bind('click', function(e) {
                e.preventDefault();
		$('#' + $(this).attr('data-close')).bPopup().close(); 
		
	 });
	 
	 $('#lab_hex1').click(function(){
		 $('#lab_show1').fadeIn(1000);
		$('#lab_show2,#lab_show3,#lab_show4').fadeOut(500);
		$(this).addClass('active_labhex');
		$('#lab_hex2,#lab_hex3,#lab_hex4').removeClass('active_labhex');
	  });
	$('#lab_hex2').click(function(){
		 $('#lab_show2').fadeIn(1000);
		$('#lab_show1,#lab_show3,#lab_show4').fadeOut(500);
		$(this).addClass('active_labhex');
		$('#lab_hex1,#lab_hex3,#lab_hex4').removeClass('active_labhex');
	  });
	$('#lab_hex3').click(function(){
		 $('#lab_show3').fadeIn(1000);
		$('#lab_show2,#lab_show1,#lab_show4').fadeOut(500);
		$(this).addClass('active_labhex');
		$('#lab_hex2,#lab_hex1,#lab_hex4').removeClass('active_labhex');
	  });
	$('#lab_hex4').click(function(){
		 $('#lab_show4').fadeIn(1000);
		$('#lab_show2,#lab_show3,#lab_show1').fadeOut(500);
		$(this).addClass('active_labhex');
		$('#lab_hex2,#lab_hex3,#lab_hex1').removeClass('active_labhex');
	  });
});