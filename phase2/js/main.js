document.addEventListener('DOMContentLoaded', function () {
  new Glide('#product-carousel', {
    type: 'carousel',
    perView: 3,
    gap: 15,
    focusAt: 'center',
    bound: true,
    breakpoints: {
      1024: { perView: 2, focusAt: 'center', gap: 15 },
      768: { perView: 1, focusAt: 0, gap: 0 } 
    }
  }).mount();
});
