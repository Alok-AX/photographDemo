
//Sticky header script
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("header").addClass("stickyHeader");
    } else {
        $("header").removeClass("stickyHeader");
    }
});

//changing logo url in sticky
var initialSrc = "images/logo.png";
var scrollSrc = "images/logo.png";

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 50)
        $(".logo").attr("src", scrollSrc);
    else
        $(".logo").attr("src", initialSrc);
});

var scroolSign = "images/login.svg";
var scrooloff = "images/login-white.svg";

$(window).scroll(function() {
    var value_one = $(this).scrollTop();
    if(value_one > 50)
        $(".signin").attr("src", scroolSign);
    else 
        $(".signin").attr("src", scrooloff);

});


// //log-slier-wrap-slider
$(document).ready(function() {
    $('.blog-slier-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        dots:false,
        autoplay: true,
        autoplaySpeed: 2000,        
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,

                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,

                },
            },
        ]
    });
});


// //footer-slider-wrap-slider
$(document).ready(function() {
    $('.footer-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:'50px',
        variableWidth: true,
        arrows: false,
        dots:false,
        autoplay: false,
        autoplaySpeed: 2000,        
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,

                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,

                },
            },
        ]
    });
});

// //project_time_line_wrapper
$(document).ready(function() {
    $('.project_time_line_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:'100px',
        arrows: false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,  
        appendDots: $('.slick-slider-dots'),      
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,

                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,

                },
            },
        ]
    });
});


$(document).ready(function() {

    $('.banner-slider-start').slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '80px',
        speed: 3000,
        arrows:false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: false,
                    slidesToScroll: 1,
                    centerMode: false,


                }
            }
        ],
    });
});

// Testmonial sliders
$(document).ready(function () {

    $('.testmonial-main-wrapper').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    });
  });
  
  // Portfolio sliders
  $(document).ready(function () {  
    $('.port-folio-section-wrapper').slick({
      slidesToShow: 1,
      dots: false,
      centerMode: false,
      arrows: true,
      speed: 500,
      cssEase: 'linear',
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                 
              },
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              },
          },
      ],
      prevArrow: $('.banarw-left'),
      nextArrow: $('.banarw-right')
  });
  });

//scrolling nav
$(document).ready(function() {
    // Add scrollspy to <body>
    $('body').scrollspy({ target: ".navbar", offset: 50 });

    // Add smooth scrolling on all links inside the navbar
    $("#navbarText a, .quick-links-layout a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.replace = hash;
            });
        } // End if
    });
});

// counter js start here
function inVisible(element) {
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
        animate(element);
}
function animate(element) {
    if (!element.hasClass('ms-animated')) {
        var maxval = element.data('max');
        var html = element.html();
        element.addClass("ms-animated");
        $({
            countNum: element.html()
        }).animate({
            countNum: maxval
        }, {
            duration: 5000,
            easing: 'linear',
            step: function() {
                element.html(Math.floor(this.countNum) + html);
            },
            complete: function() {
                element.html(this.countNum + html);
            }
        });
    }

}
//When the document is ready
$(function() {
    $(window).scroll(function() {
        $("h2[data-max]").each(function() {
            inVisible($(this));
        });
    })
});

// counter js end here


// Initiate animation the wowjs
new WOW().init();


//fancypopup

$(document).ready(function() {
    // add all to same gallery
    $(".gallery a").attr("data-fancybox","mygallery");
    // assign captions and title from alt-attributes of images:
    $(".gallery a").each(function(){
        $(this).attr("data-caption", $(this).find("img").attr("alt"));
        $(this).attr("title", $(this).find("img").attr("alt"));
    });
    // start fancybox:
        $(".gallery a").fancybox();
    });