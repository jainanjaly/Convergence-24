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
// scroll animation
function revealFunction(){
  window.sr = ScrollReveal({duration:1350,easing:'ease-out',Delay:700});
  sr.reveal('.sec-1 h1', {origin:'top',reset:true,distance:'90px',Delay:700})
  sr.reveal('.sec-1 h2', {reset:true,distance:'60px',Delay:700})
  sr.reveal('.sec-1 p', {reset:true,distance:'90px',Delay:700})
  sr.reveal('.dept-details', {reset:false,distance:'130px',duration:2000,Delay:700})
  sr.reveal('.dept-details h3 a', {reset:false,distance:'130px',duration:2000,Delay:700})
  sr.reveal('.fest-details', {reset:false,distance:'130px',Delay:700})
  sr.reveal('.glimpse h2', {reset:true,distance:'130px',origin:'left',duration:1300,Delay:700})
  sr.reveal('.glimpse h1', {reset:true,distance:'130px',origin:'left',duration:2000,Delay:700})
  sr.reveal('.event-t', {reset:true,distance:'130px',origin:'left',duration:1300,Delay:100})
  sr.reveal('.event-details', {reset:false,distance:'130px',origin:'bottom',duration:1000,Delay:500})
  sr.reveal('.core-team', {reset:false,distance:'330px',origin:'bottom',duration:1000,Delay:500})
  
  sr.reveal('.core', {reset:true,distance:'130px',origin:'left',duration:1000,Delay:700})
  

}
window.addEventListener('load',() => {
  revealFunction();
})

window.transitionToPage = function(href) {
  document.querySelector('body').style.opacity = 0
  setTimeout(function() { 
      window.location.href = href
  }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('body').style.opacity = 1
})