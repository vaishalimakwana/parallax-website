$(document).ready(function(){

var clicks_hex7 = 0;
var clicks_hex12 = 0;
var clicks_hex15 = 0;
var clicks_hex9 = 0;
var clicks_hex16 = 0;
var clicks_hex17 = 0;
$('#hex7').click(function(){
	
		if(clicks_hex7 == 0){
			// first click
			global_hex12=false;
			global_hex15=false;
			global_hex9 =false;
			clicked_hex12=false;
			clicked_hex15=false;
			clicked_hex9 =false;
			effect_hex7();
				
				clicks_hex7=1;
				clicks_hex12 = 0;
				clicks_hex15 = 0;
				clicks_hex9 = 0;
		}else if(clicks_hex7==1){
			// second click
			global_hex7=false;
			not_active_hex7();
			clicked_hex7=false;
			//$("#hex7_content").transition({opacity:0});
			$("#hex7_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
			$("#hex7_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
			clicks_hex7=0;
		}

	});
$('#hex12').click(function(){
	
		if(clicks_hex12 == 0){
			// first click
			global_hex7=false;
			global_hex15=false;
			global_hex9 =false;
			clicked_hex7=false;
			clicked_hex15=false;
			clicked_hex9 =false;
			effect_hex12();
				clicks_hex7 = 0;
				clicks_hex15 = 0;
				clicks_hex9 = 0;
				clicks_hex12=1;
		}else if(clicks_hex12==1){
			// second click
			global_hex12=false;
			not_active_hex12();
			clicked_hex12=false;
			//$("#hex12_content").transition({opacity:0});
			$("#hex12_content h3").transition({x:-10,opacity:0,easing:"easeInOutSine",duration:"500"});
			$("#hex12_content p").transition({x:-10,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
			clicks_hex12=0;
		}

	});
$('#hex15').click(function(){
	
		if(clicks_hex15 == 0){
			// first click
			global_hex7=false;
			global_hex12=false;
			global_hex9 =false;
			clicked_hex7=false;
			clicked_hex12=false;
			clicked_hex9 =false;
			effect_hex15();
				clicks_hex7 = 0;
				clicks_hex12 = 0;
				clicks_hex9 = 0;
				clicks_hex15=1;
		}else if(clicks_hex15==1){
			// second click
			global_hex15=false;
			not_active_hex15();
			clicked_hex15=false;
			//$("#hex15_content").transition({opacity:0});
			$("#hex15_content h3").transition({x:-10,opacity:0,easing:"easeInOutSine",duration:"500"});
			$("#hex15_content p").transition({x:-10,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
			clicks_hex15=0;
		}

	});
$('#hex9').click(function(){
	
		if(clicks_hex9 == 0){
			// first click
			global_hex7=false;
			global_hex12=false;
			global_hex15 =false;
			clicked_hex7=false;
			clicked_hex12=false;
			clicked_hex15 =false;
			effect_hex9();
				clicks_hex7 = 0;
				clicks_hex15 = 0;
				clicks_hex12 = 0;
				clicks_hex9=1;
		}else if(clicks_hex9==1){
			// second click
			global_hex9=false;
			not_active_hex9();
			clicked_hex9=false;
			//$("#hex9_content").transition({opacity:0});
			$("#hex9_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
			$("#hex9_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
			clicks_hex9=0;
		}

	});
$('#hex16').click(function(){
	
		if(clicks_hex16 == 0){
			// first click
			global_hex7=false;
			global_hex12=false;
			global_hex15 =false;
			global_hex9 =false;
			global_hex17 =false;
			clicked_hex7=false;
			clicked_hex12=false;
			clicked_hex15 =false;
			clicked_hex17 =false;
			clicked_hex9 =false;
			effect_hex16();
				clicks_hex7 = 0;
				clicks_hex15 = 0;
				clicks_hex12 = 0;
				clicks_hex17 = 0;
				clicks_hex9 = 0;
				clicks_hex16=1;
		}else if(clicks_hex16==1){
			// second click
			global_hex16=false;
			not_active_hex16();
			clicked_hex16=false;
		//	$("#hex16_content").transition({opacity:0});
			$("#hex16_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
			$("#hex16_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
			clicks_hex16=0;
		}

	});
$('#hex17').click(function(){
	
		if(clicks_hex17 == 0){
			// first click
			global_hex7=false;
			global_hex12=false;
			global_hex15 =false;
			global_hex9 =false;
			global_hex16 =false;
			clicked_hex7=false;
			clicked_hex12=false;
			clicked_hex15 =false;
			clicked_hex16 =false;
			clicked_hex9 =false;
			effect_hex17();
				clicks_hex7 = 0;
				clicks_hex15 = 0;
				clicks_hex12 = 0;
				clicks_hex16 = 0;
				clicks_hex9 = 0;
				clicks_hex17=1;
		}else if(clicks_hex17==1){
			// second click
			global_hex17=false;
			not_active_hex17();
			clicked_hex17=false;
			//$("#hex17_content").transition({opacity:0});
			$("#hex17_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
			$("#hex17_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
			clicks_hex17=0;
		}

	});
});
var global_hex7=false;
var global_hex12=false;
var global_hex15=false;
var global_hex9 =false;
var global_hex16 =false;
var global_hex17 =false;
function not_active_hex7(){
	
$("#hex7").stop().find("#pillar1").css('opacity','0.50').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
//$("#hex7").stop().find(".rec1,.rec2,.rec3").css('transition','none').css('borderLeft', '1px solid #676767').css('borderRight', '1px solid #676767');
//$("#hex7").stop().find(".overlay").css('transform','scale(1.0,1.0)').css('transition','all 0.5s linear').css('transform-style','preserve-3d');
	
		}	
function not_active_hex12(){

$("#hex12").stop().find("#pillar3").css('opacity','0.50').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
//$("#hex12").stop().find(".rec1,.rec2,.rec3").css('transition','none').css('borderLeft', '1px solid #676767').css('borderRight', '1px solid #676767');
//$("#hex12").stop().find(".overlay").css('transform','scale(1.0)').css('transition','all 0.5s linear').css('transform-style','preserve-3d');
	
	}
function not_active_hex15(){
	
		$("#hex15").stop().find("#pillar4").css('opacity','0.50').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
		//$("#hex15").stop().find(".rec1,.rec2,.rec3").css('transition','none').css('borderLeft', '1px solid #676767').css('borderRight', '1px solid #676767');
		//$("#hex15").stop().find(".overlay").css('transform','scale(1.0)').css('transition','all 0.5s linear').css('transform-style','preserve-3d');
	
	}
function not_active_hex9(){
	
		$("#hex9").stop().find("#pillar2").css('opacity','0.50').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
		//$("#hex9").stop().find(".rec1,.rec2,.rec3").css('transition','none').css('borderLeft', '1px solid #676767').css('borderRight', '1px solid #676767');
		//$("#hex9").stop().find(".overlay").css('transform','scale(1.0)').css('transition','all 0.5s linear').css('transform-style','preserve-3d');
	
	}
function not_active_hex16(){
	
		$("#hex16").stop().find("#pillar5").css('opacity','0.50').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
		//$("#hex16").stop().find(".rec1,.rec2,.rec3").css('transition','none').css('borderLeft', '1px solid #676767').css('borderRight', '1px solid #676767');
		//$("#hex16").stop().find(".overlay").css('transform','scale(1.0)').css('transition','all 0.5s linear').css('transform-style','preserve-3d');
	
	}
function not_active_hex17(){
	
		$("#hex17").stop().find("#pillar6").css('opacity','0.50').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
		//$("#hex17").stop().find(".rec1,.rec2,.rec3").css('transition','none').css('borderLeft', '1px solid #676767').css('borderRight', '1px solid #676767');
		//$("#hex17").stop().find(".overlay").css('transform','scale(1.0)').css('transition','all 0.5s linear').css('transform-style','preserve-3d');
	
	}
function hover_hex7(){
	global_hex7 = true;
	if (global_hex7 == true ){
	$("#hex7").stop().find("#pillar1").css('opacity','1').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
	//$("#hex7").stop().find(".rec1,.rec2,.rec3").css('transition','none').css('borderLeft', '1px solid #353b43').css('borderRight', '1px solid #353b43');
	//$("#hex7").stop().find(".overlay").css('transform','scale(1.3,1.3)').css('transition','all 0.5s linear').css('transform-style','preserve-3d');

	}

	}
function hover_hex12(){
	global_hex12 = true;
	if (global_hex12 == true ){
	$("#hex12").stop().find("#pillar3").css('opacity','1').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
	//$("#hex12").stop().find(".rec1,.rec2,.rec3").css('transition','none').css('borderLeft', '1px solid #353b43').css('borderRight', '1px solid #353b43');
	//$("#hex12").stop().find(".overlay").css('transform','scale(1.3,1.3)').css('transition','all 0.5s linear').css('transform-style','preserve-3d');
	}			
	}
function hover_hex15(){
	global_hex15 = true;
	if (global_hex15 == true ){
	$("#hex15").stop().find("#pillar4").css('opacity','1').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
	//$("#hex15").stop().find(".rec1,.rec2,.rec3").css('transition','none').css('borderLeft', '1px solid #ffffff').css('borderRight', '1px solid #ffffff');
	//$("#hex15").stop().find(".overlay").css('transform','scale(1.3)').css('transition','all 0.5s linear').css('transform-style','preserve-3d');
	}
	}
function hover_hex9(){
	global_hex9 = true;
	if (global_hex9 == true ){
	$("#hex9").stop().find("#pillar2").css('opacity','1').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
	//$("#hex9").stop().find(".rec1,.rec2,.rec3").css('transition','none').css('borderLeft', '1px solid #00b6ed').css('borderRight', '1px solid #00b6ed');
	//$("#hex9").stop().find(".overlay").css('transform','scale(1.3,1.3)').css('transition','all 0.5s linear').css('transform-style','preserve-3d');
	}
	}
function hover_hex16(){
	global_hex16 = true;
	if (global_hex16 == true ){
	$("#hex16").stop().find("#pillar5").css('opacity','1').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
	//$("#hex16").stop().find(".rec1,.rec2,.rec3").css('transition','none').css('borderLeft', '1px solid #ffffff').css('borderRight', '1px solid #ffffff');
	//$("#hex16").stop().find(".overlay").css('transform','scale(1.3,1.3)').css('transition','all 0.5s linear').css('transform-style','preserve-3d');
	}
	}
function hover_hex17(){
	global_hex17 = true;
	if (global_hex17 == true ){
	$("#hex17").stop().find("#pillar6").css('opacity','1').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
	//$("#hex17").stop().find(".rec1,.rec2,.rec3").css('transition','none').css('borderLeft', '1px solid #ffffff').css('borderRight', '1px solid #ffffff');
	//$("#hex17").stop().find(".overlay").css('transform','scale(1.3,1.3)').css('transition','all 0.5s linear').css('transform-style','preserve-3d');
	}
	}			
function no_hover_hex_7(){
	if (global_hex7 == false || clicked_hex7 == false ){
$("#hex7").stop().find("#pillar1").css('opacity','0.50').css('transition','all 0.8s linear').css('transform-style','preserve-3d');

	}
		}	
function no_hover_hex_12(){
	if (global_hex12 == false || clicked_hex12 == false ){
$("#hex12").stop().find("#pillar3").css('opacity','0.50').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
	}
	}
function no_hover_hex_15(){
	if (global_hex15 == false || clicked_hex15 == false){
		$("#hex15").stop().find("#pillar4").css('opacity','0.50').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
	
	}
	}
function no_hover_hex_9(){
	if (global_hex9 == false || clicked_hex9 == false){
		$("#hex9").stop().find("#pillar2").css('opacity','0.50').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
	
	}
	}
function no_hover_hex_16(){
	if (global_hex16 == false || clicked_hex16 == false){
		$("#hex16").stop().find("#pillar5").css('opacity','0.50').css('transition','all 0.8s linear').css('transform-style','preserve-3d');

	}
	}
function no_hover_hex_17(){
	if (global_hex17 == false || clicked_hex17 == false){
		$("#hex17").stop().find("#pillar6").css('opacity','0.50').css('transition','all 0.8s linear').css('transform-style','preserve-3d');
		
	}
	}
function effect_hex7(){
					global_hex7 = true;	
					clicked_hex7 = true;
					
					if (global_hex7 == true && clicked_hex7 == true ){
						
						global_hex12=false;
						global_hex15=false;
						global_hex9 =false;
						global_hex16 =false;
						global_hex17 =false;
						clicked_hex12=false;
						clicked_hex15=false;
						clicked_hex9 =false;
						clicked_hex16 =false;
						clicked_hex17 =false;
						not_active_hex12();
				 		not_active_hex15();
						not_active_hex9();
						not_active_hex16();
						not_active_hex17();
						hover_hex7();

						$("#hex12_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
						$("#hex12_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
						
						$("#hex15_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
						$("#hex15_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
						
						$("#hex16_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
						$("#hex16_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
						
						$("#hex17_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
						$("#hex17_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
						
						$("#hex9_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
						$("#hex9_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
						
						//$("#hex7_content").transition({opacity:1});
						$("#hex7_content h3").transition({x:20,opacity:1,easing:"easeInOutSine",duration:"500"});
						$("#hex7_content p").transition({x:20,opacity:1,easing:"easeInOutSine",duration:"500", delay:"400"});
						
					}
					
					else {
						global_hex12=false;
						global_hex15=false;
						global_hex9 =false;
						global_hex16 =false;
						global_hex17 =false;
						clicked_hex12=false;
						clicked_hex15=false;
						clicked_hex9 =false;
						clicked_hex16 =false;
						clicked_hex17 =false;
						

			
					
			}
						global_hex12=false;
						global_hex15=false;
						global_hex9 =false;
						global_hex16 =false;
						global_hex17 =false;
						clicked_hex12=false;
						clicked_hex15=false;
						clicked_hex9 =false;
						clicked_hex16 =false;
						clicked_hex17 =false;	
			
		
}	

function effect_hex12(){

			global_hex12 = true;
			clicked_hex12 = true;
			if (global_hex12 == true && clicked_hex12 == true){
				
					global_hex7=false;
					global_hex15=false;
					global_hex9 =false;
					global_hex16 =false;
					global_hex17 =false;
					clicked_hex7=false;
					clicked_hex15=false;
					clicked_hex9 =false;
					clicked_hex16 =false;
					clicked_hex17 =false;	
					not_active_hex7();
				 	not_active_hex15();
					not_active_hex9();
					not_active_hex16();
					not_active_hex17();
					
					hover_hex12();
					$("#hex7_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
					$("#hex7_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
					
					$("#hex15_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"200"});
					$("#hex15_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"200", delay:"400"});
					
					$("#hex16_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
					$("#hex16_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
						
					$("#hex17_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
					$("#hex17_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
					
					$("#hex9_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
					$("#hex9_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});	
					
					
					//$("#hex12_content").transition({opacity:1});	
					$("#hex12_content h3").transition({x:20,opacity:1,easing:"easeInOutSine",duration:"500"});
					$("#hex12_content p").transition({x:20,opacity:1,easing:"easeInOutSine",duration:"500", delay:"400"});
					
					}	
			
			else{
					global_hex7=false;
					global_hex15=false;
					global_hex9 =false;
					global_hex16 =false;
					global_hex17 =false;
					clicked_hex7=false;
					clicked_hex15=false;
					clicked_hex9 =false;
					clicked_hex16 =false;
					clicked_hex17 =false;

		
			}
			
			
		
}

function effect_hex15(){
			
			
				global_hex15 = true;
				clicked_hex15 = true;
				if (global_hex15 == true && clicked_hex15 == true){
								
				global_hex7=false;
				global_hex12=false;
				global_hex9 =false;
				global_hex16 =false;
				global_hex17 =false;
				clicked_hex7=false;
				clicked_hex12=false;
				clicked_hex9 =false;
				clicked_hex16 =false;	
				clicked_hex17 =false;
				not_active_hex12();
				not_active_hex7();
			    not_active_hex9();
				not_active_hex16();
				not_active_hex17();
				/*no_hover_hex_12();
				no_hover_hex_7();
				no_hover_hex_9();
				no_hover_hex_16();
				no_hover_hex_17();	*/
				hover_hex15();
				
				$("#hex12_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex12_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
				
				$("#hex16_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex16_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
						
				$("#hex17_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex17_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
						
				$("#hex7_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex7_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
				
				$("#hex9_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex9_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
				
				//$("#hex15_content").transition({opacity:1});	
				$("#hex15_content h3").transition({x:20,opacity:1,easing:"easeInOutSine",duration:"500"});
				$("#hex15_content p").transition({x:20,opacity:1,easing:"easeInOutSine",duration:"500", delay:"400"});
							
			}
			
			
			
			else{

				global_hex7=false;
				global_hex12=false;
				global_hex9 =false;
				global_hex16 =false;
				global_hex17 =false;
				clicked_hex7=false;
				clicked_hex12=false;
				clicked_hex9 =false;
				clicked_hex16 =false;	
				clicked_hex17 =false;
				
			}
			
			
}

function effect_hex9(){
			
			
			global_hex9 = true;
			clicked_hex9 = true;
				if (global_hex9 == true && clicked_hex9 == true){
				
				global_hex7=false;
				global_hex15=false;
				global_hex7 =false;
				global_hex16 =false;
				global_hex17 =false;
				clicked_hex7=false;
				clicked_hex15=false;
				clicked_hex7 =false;
				clicked_hex16 =false;
				clicked_hex17 =false;
				/*no_hover_hex_15();	
				no_hover_hex_7();				
				no_hover_hex_9();
				no_hover_hex_16();
				no_hover_hex_17();*/
				not_active_hex12();
				not_active_hex15();
				not_active_hex7();
				not_active_hex16();
				not_active_hex17();
				hover_hex9();
				
				$("#hex12_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex12_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
				
				$("#hex15_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex15_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
				
				$("#hex16_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex16_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
						
				$("#hex17_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex17_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
					
				$("#hex7_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex7_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});	
					
				
				//$("#hex9_content").transition({opacity:1});	
				$("#hex9_content h3").transition({x:20,opacity:1,easing:"easeInOutSine",duration:"500"});
				$("#hex9_content p").transition({x:20,opacity:1,easing:"easeInOutSine",duration:"500", delay:"400"});
				}
		

			else{
					/*no_hover_hex_15();	
					no_hover_hex_7();			
					no_hover_hex_9();*/	
				global_hex7=false;
				global_hex15=false;
				global_hex7 =false;
				global_hex16 =false;
				global_hex17 =false;
				clicked_hex7=false;
				clicked_hex15=false;
				clicked_hex7 =false;
				clicked_hex16 =false;
				clicked_hex17 =false;

					
				
			}
				
			
		
}
function effect_hex16(){
			
			
			global_hex16 = true;
			clicked_hex16 = true;
				if (global_hex16 == true && clicked_hex16 == true){
				/*no_hover_hex_15();
				no_hover_hex_17();	
				no_hover_hex_7();				
				no_hover_hex_9();
				no_hover_hex_12();*/
				global_hex7=false;
				global_hex15=false;
				global_hex17=false;
				global_hex12 =false;
				global_hex9 =false;
				clicked_hex7=false;
				clicked_hex15=false;
				clicked_hex17=false;
				clicked_hex9 =false;
				clicked_hex12 =false;
				not_active_hex12();
				not_active_hex15();
				not_active_hex17();
				not_active_hex7();
				not_active_hex9();
				hover_hex16();
				
				//$("#hex16_content").transition({opacity:1});	
				$("#hex16_content h3").transition({x:20,opacity:1,easing:"easeInOutSine",duration:"500"});
				$("#hex16_content p").transition({x:20,opacity:1,easing:"easeInOutSine",duration:"500", delay:"400"});
				
				$("#hex15_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex15_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
				
				$("#hex7_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex7_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});	
					
				$("#hex9_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex9_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});	
				
				$("#hex12_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex12_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
				
				$("#hex17_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex17_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});		
				}
		

			else{
					/*no_hover_hex_15();	
					no_hover_hex_7();				
					no_hover_hex_9();
					no_hover_hex_17();
					no_hover_hex_12();*/
					global_hex7=false;
					global_hex15=false;
					global_hex7 =false;
					clicked_hex7=false;
					clicked_hex15=false;
					clicked_hex12 =false;
					clicked_hex9 =false;
					clicked_hex17 =false;

					
				
			}
				
			
		
}

function effect_hex17(){
			
			
			global_hex17 = true;
			clicked_hex17 = true;
				if (global_hex17 == true && clicked_hex17 == true){
				/*no_hover_hex_15();
				no_hover_hex_16();	
				no_hover_hex_7();				
				no_hover_hex_9();
				no_hover_hex_12();*/
				global_hex7=false;
				global_hex15=false;
				global_hex16=false;
				global_hex12 =false;
				global_hex9 =false;
				clicked_hex7=false;
				clicked_hex15=false;
				clicked_hex16=false;
				clicked_hex9 =false;
				clicked_hex12 =false;
				not_active_hex12();
				not_active_hex15();
				not_active_hex16();
				not_active_hex7();
				not_active_hex9();
				hover_hex17();
				
				//$("#hex17_content").transition({opacity:1});	
				$("#hex17_content h3").transition({x:20,opacity:1,easing:"easeInOutSine",duration:"500"});
				$("#hex17_content p").transition({x:20,opacity:1,easing:"easeInOutSine",duration:"500", delay:"400"});
				
				$("#hex15_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex15_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
				
				$("#hex7_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex7_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});	
					
				$("#hex9_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex9_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});	
				
				$("#hex12_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex12_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});
				
				$("#hex16_content h3").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500"});
				$("#hex16_content p").transition({x:-20,opacity:0,easing:"easeInOutSine",duration:"500", delay:"400"});		
				}
		

			else{
					/*no_hover_hex_15();	
					no_hover_hex_7();				
					no_hover_hex_9();
					no_hover_hex_16();
					no_hover_hex_12();*/
					global_hex7=false;
					global_hex15=false;
					global_hex7 =false;
					clicked_hex7=false;
					clicked_hex15=false;
					clicked_hex12 =false;
					clicked_hex9 =false;
					clicked_hex16 =false;

					
				
			}
				
			
		
}
clicked_hex7= false;
clicked_hex12= false;
clicked_hex15= false;
clicked_hex9= false;
clicked_hex16= false;
clicked_hex17= false;
global_hex7 = false;
global_hex12 = false;
global_hex15 = false;
global_hex9 = false;
global_hex16 = false;
global_hex17 = false;

