function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}


function nl2br(str){
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}



var swiper1 = new Swiper(".main-slider", {
  speed: 800,
  effect: "fade",
  parallax: true,
  fadeEffect: { crossFade: true },
  pagination: {
    el: ".main-slider-pagination",

  },
  navigation: {
    nextEl: ".main-slider-button-next",
    prevEl: ".main-slider-button-prev",
  },
  //rewind: true,
  
});







var swiper2 = new Swiper(".product-gallery-slider", {
      
      grabCursor: true,
      navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
      },
      pagination: {
        el: ".slider-pagination",
      },
       keyboard: {
        enabled: true,
      },
      loop: true,
    });


   



//SimpleScrollbar.initAll();

//var el = document.querySelector('.scroll-list');
//SimpleScrollbar.initEl(el);

$(document).ready(function(){


  function setOnResize(){
    if ($(window).width() >= 1484){
     const element = document.querySelector('.main-slider-section .container');
        const rect = element.getBoundingClientRect();
         const element2 = document.querySelector('.main-slider-section .bg-container');
        const rect2 = element2.getBoundingClientRect();
        let r = rect.right;
        let r2 = rect2.right;
        
      
            $('.main-slide .img img').css('transform',`translateX(calc(50% + ${(r2 - r)/2}px))`);
      } else{
        $('.main-slide .img img').css('transform',`translateX(50%)`);
      }
  }
    
$(window).on('resize', debounce(function(e){
        setOnResize()

    }));

    setOnResize()
      
});