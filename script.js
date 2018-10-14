var menu = document.getElementById('menu').className;

function toggleMenu() {
  if (menu.className === "menu") {
    menu.className += "open";
  } else {
    menu.className = "menu";
  }
}
