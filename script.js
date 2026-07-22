const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("active");

  const isOpen = nav.classList.contains("active");

  menuButton.setAttribute("aria-expanded", isOpen);
});