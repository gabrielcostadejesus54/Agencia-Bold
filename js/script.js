$('.container-slider').slick({
    dots: true,
    arrows:false,
    speed:1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }],
});

// menu
var btnMenu = document.querySelector('.menu-mobile');
btnMenu.addEventListener('click',function(){
    let menu = $('.menu-mobile ul');
    if($(menu).hasClass('ativo')){
      $(menu).removeClass('ativo')
      $(menu).fadeOut();
    }else{
      $(menu).addClass('ativo');
      $(menu).fadeIn();
    }
})