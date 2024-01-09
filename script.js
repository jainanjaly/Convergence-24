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
document.getElementById('galleryContainer').addEventListener('scroll', function() {
  let container = document.getElementById('galleryContainer');
  let progress = container.scrollLeft / (container.scrollWidth - container.clientWidth);
  document.documentElement.style.setProperty('--scroll-progress', progress);
});