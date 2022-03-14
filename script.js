const slides = document.getElementsByClassName("carousel-item")
const totalSlides = slides.length
let currentSlide = 0
const nextBtn = document.getElementById("next-btn")
const previousBtn = document.getElementById("previous-btn")


function hideAllSlides() {
    for (slide of slides) {
        slide.classList.remove("visible")
        slide.classList.add("hidden")
    }
}

nextBtn.addEventListener("click", function() {
    hideAllSlides()
    if (currentSlide === totalSlides - 1){
        currentSlide = 0
    } else {
        currentSlide++
    }
    slides[currentSlide].classList.add("visible")
})

previousBtn.addEventListener("click", function(){
    hideAllSlides()
    if (currentSlide === 0){
        currentSlide = slides.length - 1
    } else {
        currentSlide--
    }

    slides[currentSlide].classList.add("visible")
})


