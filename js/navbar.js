
$(document).ready(function(){

  $(window).scroll(function(){

    var scroll = $(window).scrollTop();

    if (scroll > 100) {
      $(".side-bar").css("box-shadow" , "0px 0px 10px 0px");
      $(".menu span").css("font-size" , "0px");
      $(".menu li a").css("padding" , "0px 15px");
      $(".menu li").css("padding" , "15px 8px 15px 30px");
      $(".menu li i").css("margin-right" , "0px");
      $(".social-media span").css("font-size" , "0px");
      $(".social-media span").css("padding" , "0px");
      $(".social-media li").css("margin-bottom" , "0px");
      $(".social-media span").css("display" , "none");

    }



    else{
      $(".side-bar").css("box-shadow" , "none");
      $(".menu span").css("font-size" , "16px");
      $(".menu li a").css("padding" , "0px 45px"); 
      $(".menu li").css("padding" , "15px 30px");  
      $(".menu li i").css("margin-right" , "15px");
      $(".social-media span").css("font-size" , "14px");
      $(".social-media span").css("padding" , "0px 10px");
      $(".social-media li").css("margin-bottom" , "8px");
      $(".social-media span").css("display" , "unset");

    }

  })

})
