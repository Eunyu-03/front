const mtbutton = document.querySelector("button.log-11");
const mydiv = document.querySelector("div.mydiv");

mtbutton.addEventListener("click", (e) => {
    mydiv.classList.toggle("active");
});
