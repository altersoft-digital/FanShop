const MobileNavBtnEl = document.querySelector(".btn-mobile-nav");
const mainEl = document.querySelector(".main");
MobileNavBtnEl.addEventListener("click", () => {
  mainEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////////////////////
//Sticky navigation
if (window.screen.availWidth > 1040) {
  const headerEl = document.querySelector(".header");
  let footerEl = "";
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      if (!ent.isIntersecting) {
        document.querySelector(".main").classList.add("sticky");

        document.querySelector(".left-header-container").style.margin = 0;
      } else {
        footerEl = document.querySelector(".footer");
        document.querySelector(".main").classList.remove("sticky");
      }
    },
    {
      // In the viewport
      root: null,
      threshold: 0,
      // rootMargin: "80px",
    }
  );
  obs.observe(headerEl);

  if ((footerEl = document.querySelector(".footer"))) {
    const obs2 = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        !ent.isIntersecting
          ? document.querySelector(".main").classList.add("sticky")
          : document.querySelector(".main").classList.remove("sticky");
      },
      {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "127px",
      }
    );
    obs2.observe(footerEl);
  }
}
//slider

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 10,
// });

//Single Product page IMG function
let bigImgEl = document.querySelector(".big-one");
let SmallImgEl = document.querySelectorAll(".small-one");

Array.prototype.forEach.call(SmallImgEl, (item) => {
  item.onclick = function () {
    bigImgEl.src = item.src;
  };
});
