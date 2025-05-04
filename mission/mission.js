const themeSelector = document.querySelector("#theme");
const logo = document.querySelector("#logo");
const body = document.body;

function changeTheme() {
  if (themeSelector.value === "dark") {
    body.classList.add("dark");
    logo.src = "logo-blue.png";
  } else {
    body.classList.remove("dark");
    logo.src = "byui-logo.png";
  }
}

themeSelector.addEventListener("change", changeTheme);

window.addEventListener("DOMContentLoaded", changeTheme);
