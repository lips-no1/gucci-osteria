$(document).ready(function(){
  
  
    $('.section04 .slider').on('init', function(event, slick){    
        $(".section04 .dots-box").eq(1).find(".dots").addClass("active")
  });
    
     $('.section02 .slider').on('afterChange', function(event, slick, currentSlide){
    console.log(currentSlide);
      $(".section02 .progress-bar>.bar > .inside").css({
        "width":11.11111*(currentSlide+1)+"%",
      })    
  });
      
      $('.section02 .slider').slick({
      autoplay : true ,
      autoplaySpeed : 3000 ,
      arrows : false ,
      slidesToShow:3,
    })
    
      $(".arrow>.left").click(function(){
      $('.section02 .slider').slick('slickPrev');
    })
    $(".arrow>.right").click(function(){
      $('.section02 .slider').slick('slickNext');
    })
    
    $('.section04 .slider').slick({
      
      slidesToShow:2,
      autoplay : true ,
      autoplaySpeed : 3000 ,
    })
    
      $(".section04 .dots-box>.dots").click(function(){
      let Num = $(this).index()
      $('.section04 .slider').slick("slickGoTo", Num)
    })
    
     $('.section04 .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(nextSlide);
      $(".section04 .dots-box>.dots").eq(nextSlide).addClass("active")
      $(".section04 .dots-box>.dots").eq(nextSlide).siblings().removeClass("active")
      
  });
    
    $(".menu-icon").click(function(){
      $(".menu-wrap").addClass('active')
    })
    $(".menu-wrap .x-box").click(function(){
      $(".menu-wrap").removeClass('active')
    })
    
    $('.main .slider').slick({
      
      autoplay : true ,
      fade:true,
      autoplaySpeed : 3000 ,
    })
    
    
    $(".reserve").click(function(){
      // $("html,body").scrollTop(0)
      $("html,body").animate({
        "scrollTop":4600,
      },1000)
    })
    
      $(".footer .top-btn").click(function(){
      // $("html,body").scrollTop(0)
      $("html,body").animate({
        "scrollTop":0,
      },1500)
    })
    
  })
  
  
  $(window).scroll(function(){
    
    let scrollTop = $(this).scrollTop()
    console.log(scrollTop)
  
  })