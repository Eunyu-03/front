const view = document.getElementById("view");
const none = document.getElementById("none");
console.log(view.innerText);
view.innerText !== null
    ? (view.style.display = "block")
    : (none.style.display = "block");
