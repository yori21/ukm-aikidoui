// navbar section start

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });
};

// navbar section end

// navbar menu start

const navbar = document.querySelector(".link-nav");
const menu = document.querySelector("#menu-icon");

document.querySelector("#menu-icon").onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// keluar saat klik diluar tombol

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
});

// end section

// navbar menu end
