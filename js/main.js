$(function () {
  
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  //  HEADER

  //  --------------------------

  //  TAGLINE

  //  --------------------------

  //  ABOUT

  //  --------------------------

  //  BEHIND-SCENE

  //  --------------------------

  //  PORTFOLIO

  //  portfolio__mouse-hover
  $(".portfolio__tabs-block-item").mouseenter(function () {
    $(".portfolio__tabs-block-item")
      .not(this)
      .addClass("portfolio__tabs-block-item--shadowed");

    $(".portfolio__tabs-body").addClass("portfolio__tabs-body--shadowed");
  });
  $(".portfolio__tabs-block-item").mouseleave(function () {
    $(".portfolio__tabs-block-item").removeClass(
      "portfolio__tabs-block-item--shadowed"
    );

    $(".portfolio__tabs-body").removeClass("portfolio__tabs-body--shadowed");
  });

  //  portfolio__tab-switcher
  $(".portfolio__tabs-item").click(function () {
    tabName = $(this).attr("data-portfolio-tabName");

    $(".portfolio__tabs-block").removeClass(
      "portfolio__tabs-block--defaultOpen"
    );

    $(".portfolio__tabs-item").removeClass("portfolio__tabs-item--active");
    $(this).addClass("portfolio__tabs-item--active");

    $(".portfolio__tabs-block")
      .not("#" + tabName)
      .css("display", "none");
    $("#" + tabName).css("display", "block");

    $(".portfolio__tabs-block").removeClass("portfolio__tabs-block--active");
    $("#" + tabName).addClass("portfolio__tabs-block--active");
  });

  //  --------------------------

  //  CLIENTS

  $(".clients__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".clients-slider-prev"),
    nextArrow: $(".clients-slider-next"),
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
    ],
  });

  //  --------------------------

  //  TEAM

  $(".team__member-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".team__skills-slider",
    adaptiveHeight: true,
    // fade: true,
    arrows: false,
    dots: true,
    appendDots: $(".team__member-slider-dots"),
    customPaging: function (slider, i) {
      return '<div><img src="img/slide-dot.png" /><img src="img/slide-dot-active.png" /></div>';
    },
  });

  $(".team__skills-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".team__member-slider",
    adaptiveHeight: true,
  });

  $(".team__skills-percent").each(function () {
    thisVal = $(this).attr("data-skills-percent");
    $(this).animate({ width: thisVal }, 2000);
  });

  //  --------------------------

  //  FEATURES

  //  --------------------------

  //  BLOG

  $(".blog__cards-img-container")
    .hover(function () {
      $(this).find(".blog__cards-img").toggleClass("blog__cards-img--blur");
 
      if ($(this).find(".blog__cards-img").hasClass("blog__cards-img--blur")) {
        $(this).find(".blog__hover-buttons-item").css("display", "flex");
      } else $(this).find(".blog__hover-buttons-item").css("display", "none");
    })
    .click(function () {
      if (window.matchMedia("(max-width: 768px)").matches) {
        event.preventDefault();
      }
    });

  //  --------------------------

  //  PRICING

  $(".pricing__card").hover(function () {
    $(this)
      .find(".pricing__card-list-item span")
      .toggleClass("pricing__card-list-number--active");
  });

  //  --------------------------

  //  CONTACT

  //  --------------------------

  //  FOOTER

  //  --------------------------
});
