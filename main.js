var glideHero = new Glide('.hero', {
    type: 'carousel',
    animationDuration: 2000,
    autoplay: 4500,
    focusAt: 'center',
    startAt: 3,
    perView: 2,
    peek: {
      before: 20,
      after: 20,
    },
  });
  
  glideHero.mount();
  