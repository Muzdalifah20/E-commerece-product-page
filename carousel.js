const carousel = document.querySelector(".carousel");
const Slides = carousel.querySelectorAll(".carousel__slide");
const slideNav = carousel.querySelector(".carousel__slide-nav");
const ctrls = document.querySelector(".carousel__controls");
const btnPrev = ctrls.querySelector(".btn-prev");
const btnNext = ctrls.querySelector(".btn-next");
const liveRegion = carousel.querySelector(".live-region");

let index = 0;

// function setSlides(newCurrent, setFocusHere = false, announceItem = false) {
//   newCurrent = Number(newCurrent);
//   const length = slides.length;

//   if (newCurrent >= length) newCurrent = 0;
//   if (newCurrent < 0) newCurrent = length - 1;

//   slides.forEach((slide, i) => {
//     const isCurrent = i === newCurrent;
//     slide.classList.toggle("current", isCurrent);
//     slide.hidden = !isCurrent;
//     slide.setAttribute("aria-hidden", String(!isCurrent));
//   });

//   if (announceItem) {
//     liveRegion.textContent = `Image ${newCurrent + 1} of ${length}`;
//   }

//   if (slideNav) {
//     const buttons = slideNav.querySelectorAll("button[data-slide]");
//     buttons.forEach((btn, i) => {
//       btn.classList.toggle("current", i === newCurrent);
//     });
//   }

//   index = newCurrent;
// }

// function nextSlide(announceItem = false) {
//   setSlides(index + 1, false, announceItem);
// }

// function prevSlide(announceItem = false) {
//   setSlides(index - 1, false, announceItem);
// }

// btnPrev?.addEventListener("click", () => prevSlide(true));
// btnNext?.addEventListener("click", () => nextSlide(true));

// slideNav?.addEventListener("click", (e) => {
//   const button = e.target.closest("button[data-slide]");
//   if (button) setSlides(button.dataset.slide, true, true);
// });

// setSlides(0);

function setSlides(newCurrent, setFocusHere = false, announceItem = false) {
  newCurrent = Number(newCurrent);
  const length = Slides.length;

  if (newCurrent >= length) newCurrent = 0;
  if (newCurrent < 0) newCurrent = length - 1;

  Slides.forEach((slide, i) => {
    const isCurrent = i === newCurrent;
    slide.classList.toggle("current", isCurrent);
    slide.hidden = !isCurrent;
    slide.setAttribute("aria-hidden", String(!isCurrent));
  });

  if (announceItem) {
    liveRegion.textContent = `Current Slide, Image ${newCurrent + 1} of ${length}`;
  }

  if (slideNav) {
    const buttons = slideNav.querySelectorAll("button[data-slide]");
    buttons.forEach((btn, i) => {
      btn.classList.toggle("current", i === newCurrent);
    });
  }
  index = newCurrent;
}

function nextSlide(announceItem = false) {
  setSlides(index + 1, false, announceItem);
}

function prevSlide(announceItem = false) {
  setSlides(index - 1, false, announceItem);
}

btnPrev?.addEventListener("click", () => {
  prevSlide(true);
});

btnNext?.addEventListener("click", () => {
  nextSlide(true);
});

slideNav?.addEventListener("click", (e) => {
  const button = e.target.closest("button[data-slide]");
  if (button) setSlides(button.dataset.slide, true, true);
});

setSlides(0);
