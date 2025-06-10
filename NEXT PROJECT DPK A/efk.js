document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const list = slider.querySelector('.list');
    const items = slider.querySelectorAll('.item');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const dots = slider.querySelectorAll('.dots li');

    let index = 1;
    let itemWidth = items[0].clientWidth;

    // Clone first and last items
    const firstClone = items[0].cloneNode(true);
    const lastClone = items[items.length - 1].cloneNode(true);
    list.appendChild(firstClone);
    list.insertBefore(lastClone, items[0]);

    let allItems = slider.querySelectorAll('.item');
    list.style.transform = `translateX(-${itemWidth * index}px)`;

    function updateDots(realIndex) {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[realIndex % dots.length].classList.add('active');
    }

    function goToSlide(i) {
      list.style.transition = 'transform 0.5s ease-in-out';
      list.style.transform = `translateX(-${itemWidth * i}px)`;
      index = i;
    }

    list.addEventListener('transitionend', () => {
      if (allItems[index].isEqualNode(firstClone)) {
        list.style.transition = 'none';
        index = 1;
        list.style.transform = `translateX(-${itemWidth * index}px)`;
      } else if (allItems[index].isEqualNode(lastClone)) {
        list.style.transition = 'none';
        index = allItems.length - 2;
        list.style.transform = `translateX(-${itemWidth * index}px)`;
      }
      updateDots(index - 1);
    });

    next.addEventListener('click', () => {
      if (index >= allItems.length - 1) return;
      goToSlide(index + 1);
    });

    prev.addEventListener('click', () => {
      if (index <= 0) return;
      goToSlide(index - 1);
    });

    // Auto-slide
    setInterval(() => {
      goToSlide(index + 1);
    }, 4000);

    // Handle resize
    window.addEventListener('resize', () => {
      itemWidth = allItems[0].clientWidth;
      list.style.transition = 'none';
      list.style.transform = `translateX(-${itemWidth * index}px)`;
    });
});