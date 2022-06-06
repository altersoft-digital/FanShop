const MobileNavBtnEl = document.querySelector(".btn-mobile-nav");
const mainEl = document.querySelector(".main");
MobileNavBtnEl.addEventListener("click", () => {
  mainEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////////////////////
//Sticky navigation

const headerEl = document.querySelector(".header");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    !ent.isIntersecting
      ? document.querySelector(".left-header-container").classList.add("sticky")
      : document
          .querySelector(".left-header-container")
          .classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    // rootMargin: "-80px",
  }
);
obs.observe(headerEl);

const footerEl = document.querySelector(".footer");

const obs2 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    !ent.isIntersecting
      ? document.querySelector(".left-header-container").classList.add("sticky")
      : document
          .querySelector(".left-header-container")
          .classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    // rootMargin: "-80px",
  }
);
obs2.observe(footerEl);

//slider

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 10,
// });
