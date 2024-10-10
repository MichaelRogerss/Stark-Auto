/***************************************************
==================== JS INDEX ======================
****************************************************

	Preloader
	Header Sticky
	Mobile Menu Js
	Offcanvas Js
	Sidebar Js
	Body overlay Js
	Data CSS Js
	Nice Select Js
	Search Popup Js
	VenoBox Js
	Odometer Counter
	All Carousels
	Form Validate Js
	WOW JS

****************************************************/

(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// Preloader
	$(window).on("load", function () {
		$("#preloader").fadeOut(500);
	});
	if ($("#preloader").length > 0) {
		$(".closeLoader").each(function () {
			$(this).on("click", function (e) {
				e.preventDefault();
				$("#preloader").fadeOut(500);
			});
		});
	}

	////////////////////////////////////////////////////
	// Header Sticky
	if ($(".header-sticky").length > 0) {
		$(window).scroll(function () {
			if ($("body").scrollTop() > 250 || $("html").scrollTop() > 250) {
				$(".header-sticky").addClass("sticky");
			} else {
				$(".header-sticky").removeClass("sticky");
			}
		});
	}

	////////////////////////////////////////////////////
	// Mobile Menu Js
	$("#main-menu").meanmenu({
		meanMenuContainer: ".mobile_menu",
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fa-light fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
	// Offcanvas Js
	$(".menu_bar .menu_bar_icon").on("click", function () {
		$(".offcanvas-area").addClass("opened");
		$(".body-overlay").addClass("opened");
		$("body, html").addClass("overflow-hidden");
	});
	$(".offcanvas_close_btn").on("click", function () {
		$(".offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
		$("body, html").removeClass("overflow-hidden");
	});

	////////////////////////////////////////////////////
	// Sidebar Js
	$(".header_sidebar").on("click", function () {
		$(".sidebar_wrapper").addClass("show");
		$("body, html").addClass("overflow-hidden");
	});
	$(".sidebar_close").on("click", function () {
		$(".sidebar_wrapper").removeClass("show");
		$("body, html").removeClass("overflow-hidden");
	});
	$(".sidebar_wrapper")
		.on("click", function () {
			$(this).removeClass("show");
			$("body, html").removeClass("overflow-hidden");
		})
		.children()
		.on("click", function (event) {
			event.stopPropagation();
		});

	////////////////////////////////////////////////////
	// Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
		$("body, html").removeClass("overflow-hidden");
	});

	////////////////////////////////////////////////////
	// Data CSS Js
	$("[data-bg-image]").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-bg-image") + "  )"
		);
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	////////////////////////////////////////////////////
	// Nice Select Js
	$("select").niceSelect();

	////////////////////////////////////////////////////
	// Search Popup Js
	$(".search_btn").on("click", function () {
		$(".search_popup").addClass("search-opened");
		$(".search-popup-overlay").addClass("search-popup-overlay-open");
		$("body").addClass("overflow-hidden");
	});

	$(".search_close_btn").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(".search-popup-overlay").removeClass("search-popup-overlay-open");
		$("body").removeClass("overflow-hidden");
	});
	$(".search-popup-overlay").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(this).removeClass("search-popup-overlay-open");
		$("body").removeClass("overflow-hidden");
	});

	////////////////////////////////////////////////////
	// VenoBox Js
	/* gallery */
	if ($(".ig-gallery").length > 0) {
		new VenoBox({
			selector: ".ig-gallery",
			numeration: true,
			// infinigall: true,
			spinner: "pulse",
		});
	}

	/* video */
	if ($(".video-popup").length > 0) {
		new VenoBox({
			selector: ".video-popup",
			numeration: true,
			// infinigall: true,
			spinner: "pulse",
		});
	}

	////////////////////////////////////////////////////
	// Odometer Counter
	if ($(".odometer").length > 0) {
		$(".odometer").appear(function () {
			var odo = $(".odometer");
			odo.each(function () {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});
	}

	////////////////////////////////////////////////////
	// All Carousels

	// blog slider
	if ($(".blog_thumb_slider").length > 0) {
		let swiper = new Swiper(".blog_thumb_slider", {
			slidesPerView: 1,
			spaceBetween: 0,
			slidesPerColumn: 1,
			observer: true,
			observeParents: true,
			loop: true,
			// effect: "fade",
			speed: 1000,
			autoplay: {
				delay: 3000,
			},

			// navigation
			navigation: {
				nextEl: ".blog_slider_next",
				prevEl: ".blog_slider_prev",
			},
		});
	}

	// Hero Slider
	if ($(".hero_slider").length > 0) {
		let sliderInit1 = new Swiper(".hero_slider", {
			slidesPerView: 1,
			spaceBetween: 0,
			slidesPerColumn: 1,
			paginationClickable: true,
			observer: true,
			observeParents: true,
			loop: true,
			effect: "fade",
			speed: 1000,
			autoplay: {
				delay: 5000,
			},
			grabCursor: false,

			// navigation
			navigation: {
				nextEl: ".slider_next",
				prevEl: ".slider_prev",
			},

			// pagination
			pagination: {
				el: ".slider_pagination",
				clickable: true,
			},

			a11y: false,
		});
	}

	// Brand Slider Js
	if ($(".brands_wrapper").length > 0) {
		let brands_wrapper = new Swiper(".brands_wrapper", {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			speed: 1000,
			autoplay: {
				delay: 3000,
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 5,
				},
			},
		});
	}

	// Services Carousel
	if ($(".services_carousel_wrap").length > 0) {
		let sliderInit1 = new Swiper(".services_carousel_wrap", {
			slidesPerView: "auto",
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			speed: 1000,
			autoplay: {
				delay: 5000,
			},

			// navigation
			navigation: {
				nextEl: ".service_next",
				prevEl: ".service_prev",
			},
		});
	}

	// Projects Carousel
	if ($(".projects_carousel_wrap").length > 0) {
		let sliderInit1 = new Swiper(".projects_carousel_wrap", {
			slidesPerView: "auto",
			spaceBetween: 30,
			loop: true,
			speed: 1000,
			autoplay: {
				delay: 5000,
			},

			// navigation
			navigation: {
				nextEl: ".project_next",
				prevEl: ".project_prev",
			},
			breakpoints: {
				320: {
					slidesPerView: "auto",
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
				},
			},
		});
	}

	// Testimonial Carousel
	if ($(".testimonial_content_carousel").length > 0) {
		let testimonialContent = new Swiper(".testimonial_content_carousel", {
			slidesPerView: 1,
			spaceBetween: 0,
			centeredSlides: true,
			loop: true,
			speed: 1000,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: ".testi_next",
				prevEl: ".testi_prev",
			},
		});
		let testimonialThumbs = new Swiper(".testimonial_thumbs_carousel", {
			slidesPerView: "1",
			spaceBetween: 0,
			centeredSlides: true,
			loop: true,
			slideToClickedSlide: true,
		});
		testimonialContent.controller.control = testimonialThumbs;
		testimonialThumbs.controller.control = testimonialContent;
	}

	// Testimonial Carousel 2
	if ($(".content_carousel").length > 0) {
		let testimonial2Content = new Swiper(".content_carousel", {
			slidesPerView: "auto",
			spaceBetween: 0,
			centeredSlides: true,
			loop: true,
			speed: 1000,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: ".testi_next",
				prevEl: ".testi_prev",
			},
		});
		let testimonial2Thumbs = new Swiper(".thumbs_carousel", {
			slidesPerView: "auto",
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			slideToClickedSlide: true,
			breakpoints: {
				768: {
					spaceBetween: 50,
				},
			},
		});
		testimonial2Content.controller.control = testimonial2Thumbs;
		testimonial2Thumbs.controller.control = testimonial2Content;
	}

	////////////////////////////////////////////////////
	// Form Validate Js
	$('form[id="contact_form"]').validate({
		rules: {
			firstName: "required",
			conPhone: "required",
			conEmail: {
				required: true,
				email: true,
			},
			conSubject: "required",
		},

		messages: {
			firstName: "Enter your first name.",
			conPhone: "Enter your phone number.",
			conEmail: "Enter a valid email.",
			conSubject: "Enter your Subject.",
		},
		submitHandler: function (form) {
			// start ajax request
			$.ajax({
				type: "POST",
				url: "assets/mail/contact-form.php",
				data: $("#contact_form").serialize(),
				cache: false,
				success: function (data) {
					if (data == "Y") {
						$("#message_sent").modal("show");
						$("#contact_form").trigger("reset");
					} else {
						$("#message_fail").modal("show");
					}
				},
			});
		},
	});

	////////////////////////////////////////////////////
	//  WOW
	$(window).on("load", function () {
		var wow = new WOW({
			boxClass: "wow", // default
			animateClass: "animated", // default
			offset: 0, // default
			mobile: true, // default
			live: true, // default
		});
		wow.init();
	});
})(jQuery);
