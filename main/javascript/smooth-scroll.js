// scroll behavior start

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".link-nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        scrollToTarget(targetElement);
      }
    });
  });

  function scrollToTarget(targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // milliseconds

    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // Easing function
  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }
});

// scroll behavior end
