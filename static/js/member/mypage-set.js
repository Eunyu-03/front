const button = document.querySelector("button[class=main-8]");
const photo = document.querySelector("div[class=photo-1]");
const cancle = document.querySelector("button[class=photo-10]");
const set = document.querySelector("button[class=main-10]");
const infoName = document.querySelector("div[id=setName]");
const cancleName = document.querySelector("button[id=cancle1]");

button.addEventListener("click", (e) => {
    photo.classList.add("active");
});
cancle.addEventListener("click", (e) => {
    photo.classList.remove("active");
});

set.addEventListener("click", (e) => {
    infoName.classList.add("active");
});
cancleName.addEventListener("click", (e) => {
    infoName.classList.remove("active");
});
