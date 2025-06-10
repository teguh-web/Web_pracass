document.querySelectorAll('.product-card').forEach(function(card) {
    const target = card.getAttribute('data-link');
    if (target) {
      card.addEventListener('click', function () {
        window.location.href = target;
      });
      card.style.cursor = 'pointer';
    }
  });

  document.querySelectorAll('.logo').forEach(function(card) {
    const target = card.getAttribute('data-link');
    if (target) {
      card.addEventListener('click', function () {
        window.location.href = target;
      });
      card.style.cursor = 'pointer';
    }
  });

  document.querySelectorAll('.right').forEach(function(card) {
    const target = card.getAttribute('data-link');
    if (target) {
      card.addEventListener('click', function () {
        window.location.href = target;
      });
      card.style.cursor = 'pointer';
    }
  });