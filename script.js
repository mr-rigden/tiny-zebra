function hideMenus() {
  var element = document.getElementById("bottom-menu");
  element.classList.add("hidden");

  var element = document.getElementById("top-menu");
  element.classList.add("hidden");
}

function toggleBottomMenu() {
  var element = document.getElementById("top-menu");
  element.classList.add("hidden");

  var element = document.getElementById("bottom-menu");
  element.classList.toggle("hidden");
}

function toggleTopMenu() {
  var element = document.getElementById("bottom-menu");
  element.classList.add("hidden");

  var element = document.getElementById("top-menu");
  element.classList.toggle("hidden");
}
