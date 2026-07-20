const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const topNavMenu = document.querySelector(".topnav__menu");
const menuOverlay = document.querySelector("#menuOverlay");
const body = document.querySelector("body");
const mainContent = document.querySelector("#mainContent");
const mobileTabMedia = window.matchMedia("(width < calc(1200 / 16 * 1rem))");

function setupTopNav(e) {
  if (!topNavMenu) return;
  if (e.matches) {
    topNavMenu.setAttribute("inert", "");
    topNavMenu.classList.remove("remove-transition");
    btnOpen?.setAttribute("aria-expanded", "false");
  } else {
    topNavMenu.removeAttribute("inert");
    topNavMenu.classList.add("remove-transition");
    btnOpen?.setAttribute("aria-expanded", "false");
    mainContent.removeAttribute("inert");
    bodyScrollLockUpgrade.enableBodyScroll(body);
  }
}

function openMobileMenu() {
  console.log("open");
  if (!btnOpen || !topNavMenu || !btnClose) return;
  btnOpen.setAttribute("aria-expanded", "true");
  topNavMenu.removeAttribute("inert");
  topNavMenu.classList.add("remove-transition");
  mainContent?.setAttribute("inert", "");
  btnClose.focus();
  bodyScrollLockUpgrade.disableBodyScroll(body);

  menuOverlay.classList.add("active");
}

function closeMobileMenu() {
  if (!btnOpen || !topNavMenu || !btnClose) return;
  btnOpen.setAttribute("aria-expanded", "false");
  topNavMenu.setAttribute("inert", "");
  topNavMenu.classList.remove("remove-transition");
  mainContent?.removeAttribute("inert");
  btnOpen.focus();
  bodyScrollLockUpgrade.enableBodyScroll(body);
  menuOverlay.classList.remove("active");
}

setupTopNav(mobileTabMedia);

btnOpen?.addEventListener("click", openMobileMenu);

btnClose?.addEventListener("click", closeMobileMenu);

mobileTabMedia.addEventListener("change", (e) => {
  setupTopNav(e);
});
