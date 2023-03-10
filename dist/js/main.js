var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "2",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      mousewheel: true,
      keyboard: true,
      dynamicBullets:false,
    },
  });