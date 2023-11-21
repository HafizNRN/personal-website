const navToggle = document.querySelector(".nav_toggle");
const navMenu = document.querySelector(".nav_menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("-right-full");
  navMenu.classList.toggle("right-0");
  navMenu.classList.toggle("opacity-0");
  navToggle.classList.toggle("active");

  const spanToggle = navToggle.querySelectorAll("span");
  spanToggle.forEach(spn => {
    spn.classList.toggle("bg-light");
    spn.classList.toggle("bg-dark");
  });
});
