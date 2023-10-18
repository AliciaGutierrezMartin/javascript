
const CLICK_EVENT = "Click Event";
const MOUSE_ENTER_EVENT = "Mouse Enter Event";
const MOUSE_UP_EVENT = "Mouse Up Event";
const MOUSE_LEAVE_EVENT = "Mouse Leave Event";


let primary = document.querySelector(".btn-primary");
primary.addEventListener("click", function() {
    alert(CLICK_EVENT);
})

let secondary = document.querySelector(".btn-secondary");
secondary.addEventListener("mouseenter", function() {
    alert(MOUSE_ENTER_EVENT);
})


let success = document.querySelector(".btn-success");
success.addEventListener("mouseup", function() {
    alert(MOUSE_UP_EVENT);
})

let danger = document.querySelector(".btn-danger");
danger.addEventListener("mouseleave", function() {
    alert(MOUSE_LEAVE_EVENT);
})


let warning = document.querySelector(".btn-warning");
warning.addEventListener("mouseenter", function() {
    warning.classList.remove("btn-warning");
    warning.classList.add("btn-danger");

})


warning.addEventListener("mouseleave", function() {
    warning.classList.remove("btn-danger");
    warning.classList.add("btn-warning");

})


let info = document.querySelector(".btn-info");
info.addEventListener("click", function() {
   info.style.backgroundColor = "red";
})

let light = document.querySelector(".btn-light");
light.addEventListener("click", function() {
   light.style.backgroundColor = "white";
})


let dark = document.querySelector(".btn-dark");
dark.addEventListener("click", function() {
    let botones = document.querySelectorAll(".btn");
    for ( i = 0; i < botones.length; i++) {
        botones[i].style.backgroundColor = "black";
        botones[i].style.color = "white";
    }
  
})
