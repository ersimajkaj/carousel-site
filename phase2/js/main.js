document.addEventListener('DOMContentLoaded', function () {
 new Glide('#product-carousel', {
  type: 'carousel',
  perView: 3,
  focusAt: 'center',
  bound: true,
  gap: 15,
  breakpoints: {
    1024: { perView: 2 },
    600: { perView: 1 }
  }
}).mount();
});