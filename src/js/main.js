





// jquery events and codes
$(window).on("load resize", function() {
  const getOffsetLeft = document.querySelector('.container').getBoundingClientRect().left;
  $(".container-gap").css( { paddingLeft :  getOffsetLeft} );
});

  // date-picker
  $( "#datepicker" ).datepicker();


$(document).ready(function() {


  // offcanvas-menu
  $('.bar').on('click', function(){
    $('.bar, .offcanvas-area').toggleClass('active');
  });

  $('.card-fav, .add-wishlist').on('click' ,function(){
    $(this).toggleClass('active');
  });

  // Collapse 
  $(".offMenu-btn").on('click', function() {
      $(".collapse").removeClass("show");
  });
  
  // cuntry-select
    $("#country").countrySelect({
      defaultCountry: "jp",
      onlyCountries: ['us', 'gb', 'ch', 'ca', 'do', 'jp'],
      responsiveDropdown: true
    });

  // create-my-project
  $('#createNewProject').on('click', function(e){
    e.preventDefault();
    $('#createProjectPoupu').addClass('show');
  });
  $('#closeCpp').on('click', function(e){
    e.preventDefault();
    $('#createProjectPoupu').removeClass('show');
  });




  // product-slider-js
  /* product left start */
	if($(".product-left").length){
		var productSlider = new Swiper('.product-slider', {
			spaceBetween: 0,
			centeredSlides: false,
			loop:false,
			direction: 'horizontal',
			loopedSlides: 3,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			resizeObserver:true,
		});
		var productThumbs = new Swiper('.product-thumbs', {
			spaceBetween: 15,
			centeredSlides: true,
			loop: false,
			slideToClickedSlide: true,
			direction: 'horizontal',
			slidesPerView:  'auto',
			loopedSlides: 3,
		});
		productSlider.controller.control = productThumbs;
		productThumbs.controller.control = productSlider;
	}
	/* 	product left end */


  // search-box
  $('.search-btn').click(function(){
    $('.search-box').toggleClass('show')
  })




});



// Hero slider
const swiper = new Swiper('.hero-slide-active', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.hero-next',
    prevEl: '.hero-prev',
  },
  breakpoints: {
  320: {
    navigation: false
  },
  768: {

  },
    
  },
})

// bestseller slider
const swiperTwo = new Swiper('.bestseller-slider-active', {
  // Default parameters
  slidesPerView: 5,
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: false
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.bestSeller-next',
        prevEl: '.bestSeller-prev',
      }
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
      navigation: {
        nextEl: '.bestSeller-next',
        prevEl: '.bestSeller-prev',
      }
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
      navigation: {
        nextEl: '.bestSeller-next',
        prevEl: '.bestSeller-prev',
      }
    }
  },
})


// testimonial slider
const swiperThree = new Swiper('.testimonial-active', {
  // Default parameters
  slidesPerView:"auto",
  spaceBetween: 24,
})



// sticky-header-js
const header = document.querySelector(".header");
const headerTop = header.getBoundingClientRect().top;

document.body.style.setProperty("--_header-h", `${header.offsetHeight}px`);

window.addEventListener("scroll", function () {
	header.classList.toggle(
		"is-sticky",
		window.scrollY > headerTop + header.offsetHeight
	);
});


