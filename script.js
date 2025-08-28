document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // atraso maior entre os boxes
        entry.target.style.transitionDelay = `${index * 0.40}s`;
        entry.target.classList.add("visivel");
      } else {
        entry.target.classList.remove("visivel");
        entry.target.style.transitionDelay = `${index * 0.40}s`;
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".scroll-animar").forEach((el) => {
    observer.observe(el);
  });
});
