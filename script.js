/* Function Burguer */

function clickMenu() {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'flex'
    }
}

/* Function Slide */
let slideIndex = 0
showSlides()

function showSlides() {
    let i
    let slides = document.getElementsByClassName("mySlide")
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "flex"
    setTimeout(showSlides, 3000)
}
