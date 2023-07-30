// global scope
const button = document.getElementById("toTop");
const stats = document.querySelector("#stats");
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
// data counter
function useIncrementStats() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.textContent = 0;

    const upadeteCounter = () => {
      // zato sto dolazi kako string mozemo ga pretovoriti u number tako sto dodamo + znak na pocentku
      const target = +counter.getAttribute("data-target");
      const c = +counter.textContent;

      const increment = target / 200;

      if (c < target) {
        counter.textContent = Math.ceil(c + increment);
        setTimeout(upadeteCounter, 1);
      } else {
        counter.textContent = target;
      }
    };
    upadeteCounter();
  });
}

// interseption observer
const startIncrement = new IntersectionObserver((itemToWatch) => {
  itemToWatch.forEach((item) => {
    if (item.isIntersecting) {
      useIncrementStats();
      Observer.unobserve(item.target);
    }
  });
});
startIncrement.observe(stats);
// show toTop arrow on scroll
function useScrollToTop() {
  button.addEventListener("click", () => {
    // first way
    window.scrollTo({ top: 0, behavior: "smooth" });
    // secound way
    // document.body.scrollTop = 0; - for safari
    // document.documentElement.scrollTop = 0; - for chrome and mozilla
  });
}

// featch quote

async function useFeatch() {
  const res = await fetch("https://type.fit/api/quotes");
  if (!res.ok) {
    throw Error("Server errog, i can't fetch data");
  } else {
    const data = await res.json();
    // random item from array
    const quote = data[Math.floor(Math.random() * data.length)];
    // display quote
    const quoteText = document.querySelector(".quoteText");
    quoteText.textContent = quote.text;
  }
}
useFeatch();
// events

document.querySelector("#get-quote").addEventListener("click", useFeatch);
document.addEventListener("DOMContentLoaded", useScroll);
// document.addEventListener("DOMContentLoaded", useIncrementStats);
document.addEventListener("DOMContentLoaded", useScrollToTop);
