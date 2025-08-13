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
    el: ".swiper-pagination-project",

  },
  navigation: {
    nextEl: ".swiper-button-next-project",
    prevEl: ".swiper-button-prev-project",
  },
  //rewind: true,
  loop:true
});




var swiper4 = new Swiper(".product-thumb-slider", {
  direction: "vertical",
  scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      watchSlidesProgress: true,
      mousewheel: true,
      slidesPerView: 3,
      grabCursor: true,
      spaceBetween: 30,
});


var swiper2 = new Swiper(".product-galery-slider", {
      
      grabCursor: true,
      thumbs: {
        swiper: swiper4,
      },
    });


   



//SimpleScrollbar.initAll();

//var el = document.querySelector('.scroll-list');
//SimpleScrollbar.initEl(el);

$(document).ready(function(){
    

      
});