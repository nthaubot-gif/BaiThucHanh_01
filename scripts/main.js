  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".header__nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });