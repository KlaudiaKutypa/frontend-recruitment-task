const button = document.querySelector("button");
const span = document.querySelector("span");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close_button");
const overlay = document.querySelector(".overlay");
const restart = document.querySelector(".restart");
const restartbtn = document.querySelector(".restart_button");

let clickCount = 0
button.addEventListener("click", function (event) {
    
    clickCount ++;
    span.innerText = clickCount;
    popup.style.transform = "scale(1)";
    overlay.style.display = "block";

    if (clickCount >= 6) {
        restart.style.display="flex";
    }
});

restartbtn.addEventListener("click", function (event) {

    clickCount=0;
    popup.style.transform = "scale(0)";
    overlay.style.display = "none";
});


close.addEventListener("click", function (event) {
   
    span.innerText = clickCount;
    popup.style.transform = "scale(0)";
    overlay.style.display = "none";
});;
