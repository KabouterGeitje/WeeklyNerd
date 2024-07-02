const hamburgerButton = document.querySelector(".hamburgerButton");
const header = document.querySelector("header");
const main = document.querySelector("main");

hamburgerButton.addEventListener("click", function(){
    header.classList.toggle("open");
    if (header.classList.contains('open')){
        main.classList.add("open");
        hamburgerButton.ariaLabel = "Close Main Navigation Menu";
    }
    else{
        main.classList.remove("open");
        hamburgerButton.ariaLabel = "Open Main Navigation Menu";
    }
});




