/***************************************************
==================== JS INDEX ======================
****************************************************
01. preloader Js
02. Sticky Header Js
03. back-to-top
04. cartmini Js
05. Search Js
06. Ecommerce js
07. Show Login Toggle Js
08. Show Coupon Toggle Js
09. Create An Account Toggle Js
10. Shipping Box Toggle Js
11. progress-data-woidth
12. magnific-Popup-image-active
13. hero-home1-slider
14. hero-home1-slider
15. hero-home1-slider
16. service-slider
17. service-two
18. service-three
19. team-experts-slider
20. testimonial-slider
21. brands-logo
22. countdown-jquery
23. background-img-start
24. play-video
25. canvas menu activation
26. mobile-menu-start
27. Counter Js
28. wow Js
29. Nice Select Js
30. tp-brand-bus-slide
31. Date and time js
32. slider-range-min5
33. cm-marker
34. input eye open
35. cm-hero-4-slider-active
36. td-testimonial-3-slider-active
37. td-testimonial-3-slider-active
38. Parallax Js
39. jarallax Js
****************************************************/

(function ($) {
  "use strict";

  var windowOn = $(window);

  ////////////////////////////////////////////////////
	// 01. preloader Js

	var $window = $(window); 
	$window.on('load', function(){
		$(".preloader").fadeOut(800);
	});

  ////////////////////////////////////////////////////
	// 02. Sticky Header Js

	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 300) {
			$("#header-stcky").removeClass("sticky");
		} else {
			$("#header-stcky").addClass("sticky");
		}
	});

  if ($('.cm-header-height').length > 0) {
		var headerHeight = document.querySelector(".cm-header-height");      
		var setHeaderHeight = headerHeight.offsetHeight;	
		$(".cm-header-height").each(function () {
			$(this).css({
				'height' : $(this).height()
			});
		});
	}

////////////////////////////////////////////////////
// 03. back-to-top

var btn = $('#back_to_top');
var btn_wrapper = $('.back-to-top-wrapper');

windowOn.scroll(function() {
if (windowOn.scrollTop() > 300) {
  btn_wrapper.addClass('back-to-top-btn-show');
} else {
  btn_wrapper.removeClass('back-to-top-btn-show');
}
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

if ($('.tp-header-height').length > 0) {
  var headerHeight = document.querySelector(".tp-header-height");      
  var setHeaderHeight = headerHeight.offsetHeight;	
  $(".tp-header-height").each(function () {
    $(this).css({
      'height' : $(this).height()
    });
  });
}


  ////////////////////////////////////////////////////
	// 04. cartmini Js
	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".body-overlay").addClass("openeds");
	});

	$(".cartmini-close-btn, .body-overlay").on("click", function () {
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("openeds");
	});

	////////////////////////////////////////////////////
	// 05. Search Js
	$(".search-click").on("click", function () {
		$(".cm-search-form-toggle,.body-overlay").addClass("active");
	});

	$(".cm-search-close,.body-overlay").on("click", function () {
		$(".cm-search-form-toggle,.body-overlay").removeClass("active");
	});

  ////////////////////////////////////////////
  // 06. Ecommerce js
	function cm_ecommerce() {
		$('.cm-cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});

		$('.cm-cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});

    ////////////////////////////////////////////////////
    // 07. Show Login Toggle Js
    $('#showlogin').on('click', function () {
      $('#checkout-login').slideToggle(900);
    });
  
    ////////////////////////////////////////////////////
    // 08. Show Coupon Toggle Js
    $('#showcoupon').on('click', function () {
      $('#checkout_coupon').slideToggle(900);
    });
  
    ////////////////////////////////////////////////////
    // 09. Create An Account Toggle Js
    $('#cbox').on('click', function () {
      $('#cbox_info').slideToggle(900);
    });
  
    ////////////////////////////////////////////////////
    // 10. Shipping Box Toggle Js
    $('#ship-box').on('click', function () {
      $('#ship-box-info').slideToggle(1000);
    });

	}
	cm_ecommerce();


  ////////////////////////////////////////////////////
	// 11. progress-data-woidth
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});


	////////////////////////////////////////////////////
	// 12. magnific-Popup-image-active
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		mainClass: 'mfp-with-zoom',
		removalDelay: 500,
	});


	////////////////////////////////////////////////////
	// 13. hero-home1-slider
  var gallery = new Swiper('.hero-one', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		arrow: false,
		spaceBetween: 0,
		speed: 1000,
		effect: 'fade',
		a11y: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
		autoplay: {
			delay: 2500,
			disableOnInteraction: false
		},

	});

	////////////////////////////////////////////////////
	// 15. hero-home1-slider
  var slider = new Swiper(".cta", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".service-button-next",
      prevEl: ".service-button-prev",
    },
  });
  
	////////////////////////////////////////////////////
	// 16. service-slider
  var slider = new Swiper(".service", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed:1500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".service-pagenation",
      clickable: true,
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

	////////////////////////////////////////////////////
	// 17. service-two
  var slider = new Swiper('.service-two', {
		spaceBetween: 20,
		speed:1500,
		loop: true,
		freeMode: true,
		autoplay: {
			delay: 4000,
		  },
    navigation: {
      nextEl: ".service-button-next",
      prevEl: ".service-button-prev",
    },
    pagination: {
      el: ".service-pagenation",
      clickable: true,
    },
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'400': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 18. service-three
  var slider = new Swiper('.service-three', {
		spaceBetween: 20,
		speed:1500,
		loop: true,
		freeMode: true,
		autoplay: {
			delay: 4000,
		  },
    navigation: {
      nextEl: ".service-button-next",
      prevEl: ".service-button-prev",
    },
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'400': {
				slidesPerView: 1,
			},
		},
	});


	////////////////////////////////////////////////////
	// 19. team-experts-slider
  var slider = new Swiper(".experts-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".experts-slider-next",
      prevEl: ".experts-slider-prev",
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });


	////////////////////////////////////////////////////
	// 20. testimonial-slider
  var slider = new Swiper(".testimonial", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".service-pagenation",
      clickable: true,
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  });


	////////////////////////////////////////////////////
	// 21. brands-logo
  var slider = new Swiper(".brands", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });


	////////////////////////////////////////////////////
	// 22. countdown-jquery

  try {
    if (document.getElementById("days")) {
      var eventCountDown = new Date("February 25, 2025 16:37:52").getTime();

      var myfunc = setInterval(function () {
        var now = new Date().getTime();
        var timeleft = eventCountDown - now;

        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML =
          days + "<p class='count-head'>Days</p> ";
        document.getElementById("hours").innerHTML =
          hours + "<p class='count-head'>Hours</p> ";
        document.getElementById("mins").innerHTML =
          minutes + "<p class='count-head'>Mins</p> ";
        document.getElementById("secs").innerHTML =
          seconds + "<p class='count-head'>Secs</p> ";

        if (timeleft < 0) {
          clearInterval(myfunc);
          document.getElementById("days").innerHTML = "";
          document.getElementById("hours").innerHTML = "";
          document.getElementById("mins").innerHTML = "";
          document.getElementById("secs").innerHTML = "";
          document.getElementById("end").innerHTML = "00:00:00:00";
        }
      }, 1000);
    }
  } catch (err) {}

	////////////////////////////////////////////////////
	// 23. background-img-start

  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });


	////////////////////////////////////////////////////
	// 24. play-video
  $(".play").magnificPopup({
    type: "iframe",
  });


	////////////////////////////////////////////////////
	// 25. canvas menu activation
  $(".canvas_open").on("click", function () {
    $(".offcanvas_menu_wrapper,.off_canvars_overlay").addClass("active");
  });

  $(".canvas_close,.off_canvars_overlay").on("click", function () {
    $(".offcanvas_menu_wrapper,.off_canvars_overlay").removeClass("active");
  });


  ////////////////////////////////////////////////////
	// 26. mobile-menu-start
  var $offcanvasNav = $(".offcanvas_main_menu"),
    $offcanvasNavSubMenu = $offcanvasNav.find(".sub-menu");
  $offcanvasNavSubMenu
    .parent()
    .prepend(
      '<span class="menu-expand"><i class="fa fa-angle-down"></i></span>'
    );
  $offcanvasNavSubMenu.slideUp();
  $offcanvasNav.on("click", "li a, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.siblings("ul").slideUp("slow");
      } else {
        $this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
        $this.siblings("ul").slideDown("slow");
      }
    }
    if (
      $this.is("a") ||
      $this.is("span") ||
      $this.attr("clas").match(/\b(menu-expand)\b/)
    ) {
      $this.parent().toggleClass("menu-open");
    } else if (
      $this.is("li") &&
      $this.attr("class").match(/\b('menu-item-has-children')\b/)
    ) {
      $this.toggleClass("menu-open");
    }
  });

  ////////////////////////////////////////////////////
	// 27. Counter Js

  var $CounterUp = $(".counter");
  if ($CounterUp.length > 0) {
    $(".counter").counterUp({
      delay: 10,
      time: 2000,
    });
  }
  var $CounterUp = $(".skill-counter");
  if ($CounterUp.length > 0) {
    $(".skill-counter").counterUp({
      delay: 10,
      time: 1300,
    });
  }


  ////////////////////////////////////////////////////
	// 28. wow Js
  new WOW().init();

  ////////////////////////////////////////////////////
	// 29. Nice Select Js

	$('select').niceSelect();
	$('.tp-header-search-category select').niceSelect();

  ////////////////////////////////////////////////////
	// 30. tp-brand-bus-slide
	var slider = new Swiper('.brand-bus-slide', {
		spaceBetween: 30,
		loop: true,
		freeMode: true,
		slidesPerView: 'auto',
		autoplay: {
		delay: 4000,
		},
	});

  ////////////////////////////////////////////////////
	// 31. Date and time js
	flatpickr("input[name='datetime-local']", {
		dateFormat: "Y-m-d"
	});

	////////////////////////////////////////////////////
	// 32. slider-range-min5
	$("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [40, 400],
      slide: function (event, ui) {
        $("#amount5").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    
  $("#amount5").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));

		///////////////////////////////////////////////////
		// 33. cm-marker
		if ($('#marker').length > 0) {
      function tp_tab_line(){
        var marker = document.querySelector('#marker');
        var item = document.querySelectorAll('.cm-tab-menu button');
        var itemActive = document.querySelector('.cm-tab-menu .nav-link.active');

        function indicator(e){
          marker.style.left = e.offsetLeft+"px";
          marker.style.width = e.offsetWidth+"px";
        }
          
      
        item.forEach(link => {
          link.addEventListener('click', (e)=>{
            indicator(e.target);
          });
        });
        
        var activeNav = $('.nav-link.active');
        var activewidth = $(activeNav).width();
        var activePadLeft = parseFloat($(activeNav).css('padding-left'));
        var activePadRight = parseFloat($(activeNav).css('padding-right'));
        var totalWidth = activewidth + activePadLeft + activePadRight;
        
        var precedingAnchorWidth = anchorWidthCounter();
      
      
        $(marker).css('display','block');
        
        $(marker).css('width', totalWidth);
      
        function anchorWidthCounter() {
          var anchorWidths = 0;
          var a;
          var aWidth;
          var aPadLeft;
          var aPadRight;
          var aTotalWidth;
          $('.cm-tab-menu button').each(function(index, elem) {
            var activeTest = $(elem).hasClass('active');
            marker.style.left = elem.offsetLeft+"px";
            if(activeTest) {
            // Break out of the each function.
            return false;
            }
        
            a = $(elem).find('button');
            aWidth = a.width();
            aPadLeft = parseFloat(a.css('padding-left'));
            aPadRight = parseFloat(a.css('padding-right'));
            aTotalWidth = aWidth + aPadLeft + aPadRight;
        
            anchorWidths = anchorWidths + aTotalWidth;
    
          });
      
          return anchorWidths;
        }
      }
      tp_tab_line();
      }
  
	$('#click').on('click', function (){
		$(this).toggleClass('open');
		var x = document.getElementById("myInput");
			if (x.type === "password") {
			   x.type = "text";
			} else {
			   x.type = "password";
			}
	});

	///////////////////////////////////////////////////
	// 34. input eye open
	$('#click2').on('click', function (){
		$(this).toggleClass('open');
		var x = document.getElementById("myInput2");
			if (x.type === "password") {
			   x.type = "text";
			} else {
			   x.type = "password";
			}
	});


	if ($('#myInput2').length > 0) {
		function myFunction() {
			var x = document.getElementById("myInput2");
			if (x.type === "password") {
			   x.type = "text";
			} else {
			   x.type = "password";
			}
		}
	}


  ////////////////////////////////////////////////////
  // 35. cm-hero-4-slider-active
  if ($(".cm-hero-4-nav-active").length > 0) {
    var slidernav = new Swiper(".cm-hero-4-nav-active", {
        slidesPerView: 1,
        speed:1300,
        spaceBetween: 0,
        loop: true,
        freeMode: false,
        watchSlidesProgress: true,
        allowTouchMove: false,
        autoplay: {
          delay: 3500,
        },
        navigation: {
            nextEl: ".slider-8-button-next",
            prevEl: ".slider-8-button-prev",
        },
        breakpoints: {
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });
  }

  if ($(".cm-hero-4-slider-active").length > 0) {
    let sliderActive1 = ".cm-hero-4-slider-active";
    let sliderInit1 = new Swiper(sliderActive1, {
        slidesPerView: 1,
        slidesPerColumn: 1,
        speed:1300,
        paginationClickable: true,
        loop: true,
        autoplay: {
          delay: 3500,
        },

        // If we need pagination
        pagination: {
            el: ".main-slider-dot, .cm-hero-4-dot",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '<button>'+ '0' +(  index + 1)+'</button>' + "</span>";
            },
        },

        // Navigation arrows
        navigation: {
            prevEl: ".cm-hero-4-navigation-next, .slider-button-8-next",
            nextEl: ".cm-hero-4-navigation-prev, .slider-button-8-prev",
        },

        a11y: false,
        thumbs: {
            swiper: slidernav,
        },
    });

    function animated_swiper(selector, init) {
        let animated = function animated() {
            $(selector + " [data-animation]").each(function () {
                let anim = $(this).data("animation");
                let delay = $(this).data("delay");
                let duration = $(this).data("duration");

                $(this)
                    .removeClass("anim" + anim)
                    .addClass(anim + " animated")
                    .css({
                        webkitAnimationDelay: delay,
                        animationDelay: delay,
                        webkitAnimationDuration: duration,
                        animationDuration: duration,
                    })
                    .one(
                        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                        function () {
                            $(this).removeClass(anim + " animated");
                        }
                    );
            });
        };
        animated();
        // Make animated when slide change
        init.on("slideChange", function () {
            $(sliderActive1 + " [data-animation]").removeClass("animated");
        });
        init.on("slideChange", animated);
    }

    animated_swiper(sliderActive1, sliderInit1);
  }

	////////////////////////////////////////////////////
	// 36. td-testimonial-3-slider-active
	var swiper = new Swiper(".cm-3-testimonial-3-slider-active", {
		slidesPerView: 1,
		speed:1000,
		spaceBetween: 20,
		loop: true,
		effect: 'fade',
		a11y: false,
		navigation: {
			prevEl: '.cm-3-testimonial-prev',
			nextEl: '.cm-3-testimonial-next',
		},
	});

  ////////////////////////////////////////////////////
	// 37. td-testimonial-3-slider-active
  var postboxSlider = new Swiper('.cm-postbox-slider', {
		slidesPerView: 1,
    spaceBetween: 0,
		loop: true,
		autoplay: {
		  delay: 3000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".cm-postbox-slider-button-next",
			prevEl: ".cm-postbox-slider-button-prev",
		},
		breakpoints: {  
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 38. Parallax Js
	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 10.0,
			scalarY: 15.0,
		});
	};
	
	if ($('.scene-2').length > 0) {
		$('.scene-2').parallax({
			scalarX: 15.0,
			scalarY: 15.0,
		});
	};

	////////////////////////////////////////////////////
	// 39. jarallax Js
	if ($('.jarallax').length > 0) {
		$('.jarallax').jarallax({
			speed: 0.2,
			imgWidth: 1366,
			imgHeight: 768
		});
	};


})(jQuery);