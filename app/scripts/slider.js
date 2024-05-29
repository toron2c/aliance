document.addEventListener('DOMContentLoaded', function() {
  function initializeSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    const items = slider.querySelectorAll('.item');
    const pages = slider.querySelectorAll('.page');
    let currentPage = 0;

    function showSlide(index) {
      const totalItems = items.length;
      if (index >= totalItems) {
        currentPage = 0;
				
      } else if (index < 0) {
        currentPage = totalItems - 1;
      } else {
        currentPage = index;
      }

      const translateXValue = currentPage * -100;

      items.forEach((item) => {
        item.style.transform = `translateX(${translateXValue}%)`;
      });

      // items[currentIndex].classList.add('active');

      pages.forEach(page => page.classList.remove('active'));
      pages[currentPage].classList.add('active');
    }

    pages.forEach(page => {
      page.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-slide'));
        showSlide(index);
      });
    });

    showSlide(currentPage);
  }

  initializeSlider('services');
  initializeSlider('blogs')
});