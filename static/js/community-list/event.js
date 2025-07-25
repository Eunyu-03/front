const slickSlide = document.querySelectorAll("div.slick-track");
const firstSlide = slickSlide.firstElementChild;

console.log(slickSlide);
console.log(firstSlide);

let count = 0;

// const autoSlide = () => {
//     count++;
//     banner.style.transform = `translate(-${1500 * count}px)`;
//     banner.style.transition = `transform 0.5s`;

//     if (count === 6) {
//         setTimeout(() => {
//             banner.style.transform = `translate(0px)`;
//             banner.style.transition = `transform 0s`;
//         }, 500);
//         count = 0;
//     }
// };

// setInterval(autoSlide, 1000);
