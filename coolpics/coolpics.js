document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuBtn");
    const nav = document.getElementById("mainNav");
  
    menuButton.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  });
  