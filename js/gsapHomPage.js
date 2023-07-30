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
// header animation
gsap.fromTo(
  ".header .decoration-star",
  { scale: 0 },
  { scale: 1, opacity: 1, duration: 1 }
);
gsap.fromTo(
  ".header .decoration-star-two",
  { scale: 0 },
  { scale: 1, duration: 1 }
);
gsap.fromTo(
  ".header-text *",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.2, stagger: 0.1 }
);
gsap.fromTo(
  ".header-image",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 }
);
// stats
let timelinestats = gsap.timeline({
  scrollTrigger: {
    trigger: "#stats",
    start: "center 50%",
    end: "bottom bottom",
    scrub: 2,
  },
});
timelinestats.fromTo(
  ".stats-p",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.2, stagger: 1 }
);
// introducion
let timeLineIntroduction = gsap.timeline({
  scrollTrigger: {
    trigger: "#introduction",
    start: "center 80%",
    end: "bottom bottom",
    scrub: 2.4,
  },
});
timeLineIntroduction.fromTo(
  ".introduction-text h2",
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.2, stagger: 1 }
);
timeLineIntroduction.fromTo(
  ".introduction-text p",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.2, stagger: 1 }
);
// details
let timeLineDetails = gsap.timeline({
  scrollTrigger: {
    trigger: "#details",
    start: "center 80%",
    end: "bottom 50%",
    scrub: 2.4,
  },
});
timeLineDetails.fromTo(
  ".details .decoration-star",
  { scale: 0 },
  { scale: 1, opacity: 1, duration: 1.5 }
);
timeLineDetails.fromTo(
  ".details-image",
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.6 }
);

timeLineDetails.fromTo(
  ".details-text h2, .details-text li, .details-text .btn",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.2, stagger: 0.2 }
);
// services
let timeLineServices = gsap.timeline({
  scrollTrigger: {
    trigger: "#services",
    start: "center 80%",
    end: "bottom 100%",
    scrub: 2.4,
  },
});
timeLineServices.fromTo(
  ".services .text-container h2, .services .text-container p",
  { scale: 0 },
  { scale: 1, opacity: 1, duration: 1.5 }
);
timeLineServices.fromTo(
  ".services .row i, .services .row .flex-column p",
  { scale: 0 },
  { scale: 1, opacity: 1, duration: 1.5, stagger: 0.5 }
);

// detalis-2
let timeLineDetalis2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#detalis-2",
    start: "center 80%",
    end: "bottom bottom",
    scrub: 2.4,
  },
});
timeLineDetalis2.fromTo(
  ".details-2 .decoration-star",
  { scale: 0 },
  { scale: 1, opacity: 1, duration: 1.5 }
);
timeLineDetalis2.fromTo(
  ".details2-image",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.6 }
);

timeLineDetalis2.fromTo(
  ".details-2 .text-container h2, .details-2 .text-container p, .details-2 .text-container a",
  { y: -100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.2, stagger: 1 }
);
// quote
let timeLineQuote = gsap.timeline({
  scrollTrigger: {
    trigger: ".quoete",
    start: "center 70%",
    end: "bottom bottom",
    scrub: 2.4,
  },
});
timeLineQuote.fromTo(
  ".quoete .row h4, .get-quote",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.5, stagger: 0.5 }
);
// project
let timeLineProjects = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    start: "center 100%",
    end: "bottom bottom",
    scrub: 2.5,
  },
});
timeLineQuote.fromTo(
  ".projects h2",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.5 }
);
timeLineProjects.fromTo(
  ".projects img",
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1.5, stagger: 1 }
);
timeLineProjects.fromTo(
  ".projects .card-body .card-title, .card-text",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.5, stagger: 1 }
);
// testimonial
let timeLineCarousel = gsap.timeline({
  scrollTrigger: {
    trigger: ".carousel",
    start: "center 100%",
    end: "bottom bottom",
    scrub: 2.5,
  },
});
timeLineCarousel.fromTo(
  "#testimonialCarousel",
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1.5 }
);
// contact
let timeLineContact = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "center 100%",
    end: "bottom bottom",
    scrub: 2.5,
  },
});
timeLineContact.fromTo(
  "#contact .decoration-star",
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1.5 }
);
timeLineContact.fromTo(
  "#contact .contact-image",
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1.5 }
);
timeLineContact.fromTo(
  "#contact h2",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.5, stagger: 0.2 }
);
timeLineContact.fromTo(
  "#contact form *",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.5, stagger: 0.2 }
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
