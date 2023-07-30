// global scope
const button = document.getElementById("toTop");

//  change navbar and toTopButton class on scroll
function useScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-sticy");
      button.classList.add("show");
    } else {
      navbar.classList.remove("navbar-sticy");
      button.classList.remove("show");
    }
  });
}

// show toTop arrow on scroll
function useScrollToTop() {
  button.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}
// events
document.addEventListener("DOMContentLoaded", useScroll);
document.addEventListener("DOMContentLoaded", useScrollToTop);
