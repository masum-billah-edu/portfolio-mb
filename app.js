$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
                }

          // Scrolling Button Btn
          if(this.scrollY >500){
            $('.scroll-up-btn').addClass("show");
            }else{
            $('.scroll-up-btn').removeClass("show");
            }   
    });

    var typed = new Typed(".typing-1",{
        strings: [
            "Masum Billah.", "Hafez-E-Quran.", "a Mufassir.", "a Muhaddith.",
            "a Lecturer.", "a Speeker."
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings: [
            "Hafez-E-Quran.", "Mufassir.", "Muhaddith.",
            "Lecturer.", "Speeker."
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

 var hamburger = document.querySelector(".hamb");
 var navlist = document.querySelector(".nav-list");
 var links = document.querySelector(".nav-list li");
 
 hamburger.addEventListener(".click", function(){
     this.classList.toggle(".click");
     navlist.classList.toggle("open");
 });

    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    // owl carousel animation
    $('.carousel').owlCarousel({
        margin: 20,
        loop:true,
        navigation:true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,

        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
 

});
