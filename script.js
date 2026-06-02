document.addEventListener("DOMContentLoaded", () => {

  // Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");

  if(toggle){
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

      e.preventDefault();

      const target = document.querySelector(
        link.getAttribute("href")
      );

      if(target){
        target.scrollIntoView({
          behavior:"smooth",
          block:"start"
        });
      }

      nav?.classList.remove("active");
    });
  });

  // Scroll reveal animation
  const cards = document.querySelectorAll(
    ".card, .event, .ach-card"
  );

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if(entry.isIntersecting){

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }

      });

    },
    { threshold: 0.15 }
  );

  cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition =
      "all 0.6s ease";

    observer.observe(card);

  });

});
