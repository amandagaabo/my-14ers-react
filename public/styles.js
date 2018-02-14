function startAppStyles() {
  // format navbar on scroll
  function handleNavScroll() {
    $(document).on('scroll', () => {
      if ($(document).scrollTop() > 100) {
        $('.navbar').addClass('scrolled-nav');
      } else {
        $('.navbar').removeClass('scrolled-nav');
      }
    });
  }

  handleNavScroll();
}

$(startAppStyles);
