
$(document).ready(function(){
	 	
		
	$('#team1').click(function(){
		$('#team_img2,#team_img3,#team_img4,#team_img5').transition({ scale: 0 });
		$('#team_head2,#team_head3,#team_head4,#team_head5').transition({ opacity:0 ,x: 35});
		$('#team_name2,#team_name3,#team_name4,#team_name5').transition({ opacity:0 ,x: 35});
		$('#team_details2,#team_details3,#team_details4,#team_details5').transition({ opacity:0 ,x: 35});
		
		$('#team_img1').transition({ scale: 1 });
		$('#team_head1').transition({ x: 0, opacity:1,delay:200 });
		$('#team_name1').transition({ x: 0, opacity:1,delay:400 });
		$('#team_details1').transition({ x: 0, opacity:1,delay:600 });
		
		
	})
	$('#team2').click(function(){
		
		
		$('#team_img1,#team_img3,#team_img4,#team_img5').transition({ scale: 0 });
		$('#team_head1,#team_head3,#team_head4,#team_head5').transition({ opacity:0 ,x: 35});
		$('#team_name1,#team_name3,#team_name4,#team_name5').transition({ opacity:0 ,x: 35});
		$('#team_details1,#team_details3,#team_details4,#team_details5').transition({ opacity:0 ,x: 35});
		
		$('#team_img2').transition({ scale: 1 });
		$('#team_head2').transition({ x: -35, opacity:1,delay:200 });
		$('#team_name2').transition({ x: -35, opacity:1,delay:400 });
		$('#team_details2').transition({ x: -35, opacity:1,delay:600 });
	})
	$('#team3').click(function(){
		
		$('#team_img2,#team_img1,#team_img4,#team_img5').transition({ scale: 0 });
		$('#team_head2,#team_head1,#team_head4,#team_head5').transition({ opacity:0 ,x: 35});
		$('#team_name2,#team_name1,#team_name4,#team_name5').transition({ opacity:0 ,x: 35});
		$('#team_details2,#team_details1,#team_details4,#team_details5').transition({ opacity:0 ,x: 35});
		
		$('#team_img3').transition({ scale: 1 });
		$('#team_head3').transition({ x: -35, opacity:1,delay:200 });
		$('#team_name3').transition({ x: -35, opacity:1,delay:400 });
		$('#team_details3').transition({ x: -35, opacity:1,delay:600 });
		
		
	
	})
	$('#team4').click(function(){
		
		$('#team_img2,#team_img3,#team_img1,#team_img5').transition({ scale: 0 });
		$('#team_head2,#team_head3,#team_head1,#team_head5').transition({ opacity:0 ,x: 35});
		$('#team_name2,#team_name3,#team_name1,#team_name5').transition({ opacity:0 ,x: 35});
		$('#team_details2,#team_details3,#team_details1,#team_details5').transition({ opacity:0 ,x: 35});
		
		$('#team_img4').transition({ scale: 1 });
		$('#team_head4').transition({ x: -35, opacity:1,delay:200 });
		$('#team_name4').transition({ x: -35, opacity:1,delay:400 });
		$('#team_details4').transition({ x: -35, opacity:1,delay:600 });
		
		
	
	})
	$('#team5').click(function(){
		
		$('#team_img2,#team_img3,#team_img4,#team_img1').transition({ scale: 0 });
		$('#team_head2,#team_head3,#team_head4,#team_head1').transition({ opacity:0 ,x: 35});
		$('#team_name2,#team_name3,#team_name4,#team_name1').transition({ opacity:0 ,x: 35});
		$('#team_details2,#team_details3,#team_details4,#team_details1').transition({ opacity:0 ,x: 35});
		
		$('#team_img5').transition({ scale: 1 });
		$('#team_head5').transition({ x: -35, opacity:1,delay:200 });
		$('#team_name5').transition({ x: -35, opacity:1,delay:400 });
		$('#team_details5').transition({ x: -35, opacity:1,delay:600 });
		
		
	
	})
	/*$('#team3').click(function(){
		$("#team_member3").css('top','60px').css('transition','all 0.6s linear').css('opacity','1');
		$("#team_member1,#team_member2").css('top','20px').css('transition','all 0.3s linear').css('opacity','0');
		$("#team_member4,#team_member5").css('top','100px').css('transition','all 0.3s linear').css('opacity','0');
	
	})
	$('#team4').click(function(){
		$("#team_member4").css('top','60px').css('transition','all 0.6s linear').css('opacity','1');
		$("#team_member1,#team_member2,#team_member3").css('top','20px').css('transition','all 0.3s linear').css('opacity','0');
		$("#team_member5").css('top','100px').css('transition','all 0.3s linear').css('opacity','0');
	
	})
	$('#team5').click(function(){
		$("#team_member5").css('top','60px').css('transition','all 0.6s linear').css('opacity','1');
		$("#team_member1,#team_member2,#team_member3,#team_member4").css('top','20px').css('transition','all 0.3s linear').css('opacity','0');
		//$("#team_member5").css('top','80px').css('transition','all 0.4s linear').css('opacity','0');
	
	})*/
});

