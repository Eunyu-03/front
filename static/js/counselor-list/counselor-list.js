// 검색창에 글자 입력 시 검색어 삭제 버튼 나타남/사라짐
const serviceInput = document.querySelector(
    "div.search-pro-input-with-router-button input[type=text]"
);
const inputDeleteButton = document.querySelector(
    "div.search-pro-input-with-router-button div.input-group-append img"
);

inputDeleteButton.style.visibility = "hidden";

serviceInput.addEventListener("keyup", (e) => {
    inputDeleteButton.style.visibility = "visible";

    inputDeleteButton.addEventListener("click", (input) => {
        e.target.value = null;
        if (!e.target.value) {
            inputDeleteButton.style.visibility = "hidden";
        }
    });

    if (!e.target.value) {
        inputDeleteButton.style.visibility = "hidden";
    }
});

// 필터 드롭다운 메뉴
const dropdownItems = document.querySelectorAll("ul.dropdown-menu-right li");
const dropdownItemUl = document.querySelector(
    "ul.dropdown-menu.dropdown-menu-right"
);
const currentSort = document.querySelector(
    "div.sort-wrapper span.current-sort"
);
let dropdownCount = 1;

dropdownItemUl.style.visibility = "hidden";

currentSort.addEventListener("click", (e) => {
    dropdownCount++;
    if (dropdownCount % 2 === 0) {
        dropdownItemUl.style.visibility = "visible";
    } else {
        dropdownItemUl.style.visibility = "hidden";
    }
});

dropdownItems.forEach((dropdownItem) => {
    dropdownItem.addEventListener("mouseenter", (e) => {
        dropdownItem.style.background = "#f6f7f9";
    });

    dropdownItem.addEventListener("mouseleave", (e) => {
        dropdownItem.style.background = "#fff";
    });
});

// 바로 답변 가능한 고수 클릭 시 info 나타남
const tooltipButton = document.querySelector(
    "div.tooltip-container button.btn-tooltip"
);
const tooltip = document.querySelector(
    "div.tooltip-container div.tooltip-info"
);

tooltip.style.opacity = 0;
let tooltipCount = 1;

tooltipButton.addEventListener("click", (e) => {
    tooltipCount++;
    if (tooltipCount % 2 === 0) {
        tooltip.style.opacity = 0.9;
    } else {
        tooltip.style.opacity = 0;
    }
});

// 예약/쿠폰 클릭 이벤트
const chipActionLi01 = document.querySelector("ul.chip-filter-list li.li01");
const chipActionLi02 = document.querySelector("ul.chip-filter-list li.li02");

const chipActionButton01 = document.querySelector("li.li01 button");
const chipActionButton02 = document.querySelector("li.li02 button");
const chipActionSpan01 = document.querySelector("li.li01 span");
const chipActionSpan02 = document.querySelector("li.li02 span");
const chipActionPath01 = document.querySelector("li.li01 path");
const chipActionPath02 = document.querySelector("li.li02 path");
let chipCount = 1;

chipActionLi01.addEventListener("click", (e) => {
    chipCount++;
    if (chipCount % 2 === 0) {
        chipActionButton01.style.backgroundColor = "#000";
        chipActionPath01.style.fill = "#fff";
        chipActionSpan01.style.color = "#fff";
    } else {
        chipActionButton01.style.backgroundColor = "#fff";
        chipActionPath01.style.fill = "#000";
        chipActionSpan01.style.color = "#000";
    }
});

chipActionLi02.addEventListener("click", (e) => {
    chipCount++;
    if (chipCount % 2 === 0) {
        chipActionButton02.style.backgroundColor = "#000";
        chipActionPath02.style.fill = "#fff";
        chipActionSpan02.style.color = "#fff";
    } else {
        chipActionButton02.style.backgroundColor = "#fff";
        chipActionPath02.style.fill = "#000";
        chipActionSpan02.style.color = "#000";
    }
});

// 위로 가기 버튼 나타나기/숨기기
const topButton = document.querySelector("a#top-btn.top-btn");

topButton.style.transition = "opacity 0.5s ease, transform 0.5s ease";
topButton.style.opacity = 0;
topButton.style.transform = "trnaslateY(20px)";

window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        topButton.style.opacity = 0;
        topButton.style.transform = "translateY(30px)";
        setTimeout(() => {
            topButton.style.visibility = "hidden";
        }, 300);
    } else {
        topButton.style.visibility = "visible";
        topButton.style.opacity = 1;
        topButton.style.transform = "translateY(-20px)";
    }
});
