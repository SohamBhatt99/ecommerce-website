const close = document.getElementById("close");
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");

if (bar && nav) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function redirectToShop() {
  // Replace 'shop.html' with the actual URL of your shop page
  window.location.href = "shop.html";
}
