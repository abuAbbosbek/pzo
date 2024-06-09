const wrapper = document.querySelector(".wrapper")
const aboutImg = document.querySelector(".about-img-2")

aboutImg.addEventListener("click", () => {
    aboutImg.style.position = "fixed"
    aboutImg.style.marginTop = "-50xp"
    aboutImg.style.marginLeft = "-500xp"

    wrapper.appendChild(aboutImg)
})


const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

document.getElementById("prevButton").addEventListener("click", () => {
    changeSlide(-1);
});

document.getElementById("nextButton").addEventListener("click", () => {
    changeSlide(1);
});

function changeSlide(direction) {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    slides[currentIndex].classList.add("active");
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
