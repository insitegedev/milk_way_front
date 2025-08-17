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
    

      
});