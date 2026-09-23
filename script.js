/* =========================================================
   SAKTHI DENTAL CLINIC — SITE SCRIPT
   MOBILE MENU TOGGLE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.getElementById("menuToggle");
  const mainNav = document.querySelector(".main-nav");

  if (!toggleBtn || !mainNav) {
    console.warn(
      "Menu script: #menuToggle button or .main-nav element not found. Check your HTML class/id names."
    );
    return;
  }

  function openMenu() {
    mainNav.classList.add("active");
    toggleBtn.classList.add("active");
    toggleBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    mainNav.classList.remove("active");
    toggleBtn.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
  }

  // Click hamburger button -> open/close menu
  toggleBtn.addEventListener("click", function () {
    const isOpen = mainNav.classList.contains("active");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Click any nav link -> auto close menu (mobile)
  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Click outside menu -> close it
  document.addEventListener("click", function (e) {
    const clickedInsideNav = mainNav.contains(e.target);
    const clickedToggle = toggleBtn.contains(e.target);

    if (!clickedInsideNav && !clickedToggle && mainNav.classList.contains("active")) {
      closeMenu();
    }
  });

  // Press Escape -> close menu
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mainNav.classList.contains("active")) {
      closeMenu();
    }
  });

  // Resize to desktop width -> reset menu state
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1050) {
      closeMenu();
    }
  });

});