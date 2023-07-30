// animation
gsap.fromTo(
  "#logo",
  { rotate: "-180deg", opacity: 0 },
  { rotate: 0, opacity: 1, duration: 0.7 }
);
gsap.fromTo(
  ".navbar-nav li",
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, stagger: 0.2 }
);
// header
gsap.fromTo(
  "header h1",
  { textAlign: "left", opacity: 0 },
  { textAlign: "center", opacity: 1, duration: 1, delay: 1.5 }
);
// image
gsap.fromTo(
  ".image-section img",
  { clipPath: "polygon(20% 0%, 80% 0%, 80% 100%, 20% 100%)" },
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 1.3,
    ease: "power2.out",
  }
);
// text
let timelineText = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".text",
      start: "top 90%",
      end: "bottom bottom",
      scrub: 2,
    },
  })
  .fromTo(
    ".text p, .text h2",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.5, stagger: 1 }
  );
//   cards
let timelineCards = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".cards",
      start: "top 90%",
      end: "bottom bottom",
      scrub: 2,
    },
  })
  .fromTo(
    ".card",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.5, stagger: 1 }
  );
// box
let timelineBox = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".box",
      start: "top 90%",
      end: "bottom bottom",
      scrub: 2,
    },
  })
  .fromTo(
    ".box h2, .box p",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.5, stagger: 1 }
  );
// footer
let timeLineFooter = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "top 90%",
      end: "bottom bottom",
      scrub: 2,
    },
  })
  .fromTo(
    ".footer h6, .footer i, .footer p, .footer li",
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.5, stagger: 0.5 }
  );
