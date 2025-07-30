const banner = document.querySelector("div.slick-track");
const firstBanner = document.createElement("div");
const lastBanner = document.createElement("div");
const bannerButtons = document.querySelectorAll("div.slide-button");
const totalBanners = 5;
let count = 1;

firstBanner.innerHTML = `<div class="slick-slide slick-cloned" tabindex="-1" data-index="0" area-hidden="true" style="width: 970px;">
                            <div>
                                <div class="banner-item" style="width: 100%; display: inline-block;">
                                    <div>
                                        <!-- 970px X 105px -->
                                        <img src="../../static/images/main/banner1.png" alt="" class="banner-image">
                                    </div>
                                </div>
                            </div>
                        </div>`;
lastBanner.innerHTML = `<div class="slick-slide slick-cloned" tabindex="-1" data-index="4" area-hidden="true" style="width: 970px;">
                            <div>
                                <div class="banner-item" style="width: 100%; display: inline-block;">
                                    <div class="slide-button prev-button">
                                        <img src="../../static/images/main/banner5.png" alt="" class="banner-image">
                                    </div>
                                </div>
                            </div>
                        </div>`;

firstBanner.classList.add("slick-cloned");
lastBanner.classList.add("slick-cloned");

banner.style.transform = `translate(-970px)`;

const autoSlide = () => {
    count++;
    banner.style.transform = `translate(-${970 * count}px)`;
    banner.style.transition = `transform 0.5s`;

    if (count === 6) {
        setTimeout(() => {
            banner.style.transform = `translate(-970px)`;
            banner.style.transition = `transform 0s`;
        }, 500);
        count = 1;
    }
};

let autoSlideInterval = setInterval(autoSlide, 2000);
let bannerButtonCheck = true;

bannerButtons.forEach((bannerButton) => {
    const img = bannerButton.firstElementChild;
    img.addEventListener("click", (e) => {
        if (!bannerButtonCheck) {
            return;
        }
        bannerButtonCheck = false;
        clearInterval(autoSlideInterval);

        const bannerButtonType = e.target.parentElement.classList[1];
        if (bannerButtonType === "prev-button") {
            count--;
            banner.style.transform = `translate(-${970 * count}px)`;
            banner.style.transition = `transform 0.5s`;
            if (count === 0) {
                setTimeout(() => {
                    banner.style.transform = `translate(-4850px)`;
                    banner.style.transition = `transform 0s`;
                }, 500);
                count = 5;
            }
        } else {
            count++;
            banner.style.transform = `translate(-${970 * count}px)`;
            banner.style.transition = `transform 0.5s`;
            if (count === 6) {
                setTimeout(() => {
                    banner.style.transform = `translate(-970px)`;
                    banner.style.transition = `transform 0s`;
                }, 500);
                count = 1;
            }
        }

        console.log(bannerButtonType);

        autoSlideInterval = setInterval(autoSlide, 2000);
        setTimeout(() => {
            bannerButtonCheck = true;
        }, 500);
    });
});

// let buttonsCheck = true;

// buttons.forEach((button, i) => {
//     button.addEventListener("click", () => {
//         if (!buttonsCheck) {
//             return;
//         }
//         buttonsCheck = false;

//         clearInterval(autoSlideInterval);

//         count = i + 1;
//         banner.style.transform = `translate(-${1500 * count}px)`;
//         banner.style.transition = `transform 0.5s`;

//         tempButton.style.background = "white";
//         tempButton = button;
//         button.style.background = "black";

//         autoSlideInterval = setInterval(autoSlide, 2000);
//         setTimeout(() => {
//             buttonsCheck = true;
//         }, 500);
//     });
// });
