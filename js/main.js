$(document).ready(function(){

   //PC nav_wrap 숨기기/보이기
   $(".nav_wrap").hover(function(){
    $(".menu_wrap2:not(animated)").animate({height:"295px"},"fast","linear");
   },function(){
    $(".menu_wrap2:not(animated)").stop().animate({height:"60px"},"slow","linear");
   });
	
   //모바일 메뉴 숨기기/보이기
   $(".quick1_m").click(function(){
    $(".menu_wrap_m:not(animated)").animate({right:"0"});
   }); 
   $(".close_btn").click(function(){
    $(".menu_wrap_m:not(animated)").animate({right:"-60%"});
   });
    
   //review sliphover
   $("#review > .photo").sliphover({ 
   });


});







