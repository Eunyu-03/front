// 상단 게시글 정보 라인 나타나기/숨기기
const topLine = document.querySelector("div#app div.vue-portal-target");

console.log(topLine);

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

// 인기 고수 추천 이동
const prevButton = document.querySelector(
    "section.popular-provider div.slick-slider button.slick-arrow.slick-prev"
);
const nextButton = document.querySelector(
    "section.popular-provider div.slick-slider button.slick-arrow.slick-next"
);
const suggestion = document.querySelector(
    "section.popular-provider div.slick-list div.slick-track"
);
let suggestionCount = 0;

console.log(prevButton);

prevButton.addEventListener("click", (e) => {
    if (suggestionCount > 0) {
        suggestionCount--;
        suggestion.style.transform = `translate(-${300 * suggestionCount}px)`;
        suggestion.style.transition = `transform 0.5s`;
    }

    if (suggestionCount > 0) {
        prevButton.style.visibility = "visible";
    } else {
        prevButton.style.visibility = "hidden";
    }
    if (suggestionCount < 2) {
        nextButton.style.visibility = "visible";
    } else {
        nextButton.style.visibility = "hidden";
    }
});

nextButton.addEventListener("click", (e) => {
    if (suggestionCount < 2) {
        suggestionCount++;
        suggestion.style.transform = `translate(-${300 * suggestionCount}px)`;
        suggestion.style.transition = `transform 0.5s`;
    }

    if (suggestionCount > 0) {
        prevButton.style.visibility = "visible";
    } else {
        prevButton.style.visibility = "hidden";
    }
    if (suggestionCount < 2) {
        nextButton.style.visibility = "visible";
    } else {
        nextButton.style.visibility = "hidden";
    }
});
