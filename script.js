const hamburgerMenus = document.querySelectorAll(".menu");
const navBar = document.querySelector(".nav");
const list = document.querySelector(".nav-ul");
console.log(navBar);
navBar.addEventListener("click", function (e) {
  console.log(this);
  const menu = e.target.closest(".menu");
  if (!menu) return;
  hamburgerMenus.forEach((el) => {
    el.classList.toggle("hide");
  });
  list.classList.toggle("open_list");
});
