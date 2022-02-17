
// Source code for slide show
// https://codepen.io/danielguillan/pen/kNjzLM

var current = 0,
    slides = document.getElementsByClassName("mySlides");

setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 4000);



// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
