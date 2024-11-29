// Testimonials Section 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('#nav-menu');

  // Toggle the visibility of the menu when the hamburger icon is clicked
  hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
  });
});


$(document).ready(function(){
  $('.carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // Transition every 3 seconds
      arrows: true,
      dots: true, // Optional: add navigation dots
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
  });
});