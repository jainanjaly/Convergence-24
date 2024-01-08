function festhead(name) {
  var item1 = document.querySelector(".item");
  var role = document.querySelector(".role");
  role.innerHTML = name;
}

function drop() {
  const drop = document.querySelector(".content");
  drop.style.display = "flex";
}
function undrop() {
  const drop = document.querySelector(".content");
  drop.style.display = "none";
}
