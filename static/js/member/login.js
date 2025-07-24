const id = document.getElementById("email");
const pw = document.getElementById("password");
const pwText = document.getElementById("pwText");
const show = document.querySelector(".main-13-3");
const cancel = document.getElementById("cancel");

pw.addEventListener("focus", (e) => {
    pw.classList.add("active");
    show.classList.add("active");
});

pw.addEventListener("blur", (e) => {
    pw.classList.remove("active");
    show.classList.remove("active");
});

pw.addEventListener("keyup", (e) => {
    cancel.classList.toggle("active", e.target.value);
});

cancel.addEventListener("click", (e) => {
    pw.value = "";
    show.classList.add("active");
    cancel.classList.remove("active");
});

// id.addEventListener("focus", (e) => {
//     id.class = "main-11 active";
// });

show.addEventListener("click", (e) => {
    if ((pw.type = "password")) {
        pw.type = "text";
        e.target.value = `숨김`;
    } else {
        pw.type = "password";
        e.target.value = `표시`;
    }
});
