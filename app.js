function slidesPlugin(activeSlide = 0){
    let slides =document.querySelectorAll('.slide')
    slides[length].classList.add('active')
    for (const i of slides) {
        i.addEventListener('click',() =>{
            clearActiveClasses()
            i.classList.add('active')
        })
    }

function clearActiveClasses(){
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
}
}
slidesPlugin()