// 상단 게시글 정보 라인 나타나기/숨기기
const topLine = document.querySelector("div.vue-portal-target");

topLine.style.transition = "opacity 0.3s ease, transform 0.3s ease";
topLine.style.opacity = 0;
topLine.style.transform = "trnaslateY(20px)";

window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        topLine.style.transform = "translateY(30px)";
        setTimeout(() => {
            topLine.style.visibility = "hidden";
        }, 300);
    } else {
        topLine.style.visibility = "visible";
        topLine.style.transform = "translateY(-20px)";
    }
});
