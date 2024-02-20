let slides = 1;
slideReveal(slides);

function slideReveal(x)
{
    var i;
    let photos = document.getElementsByClassName("imageSlides");
   
    if (x > photos.length) {slides = 1}    
    if (x < 1) {slides = photos.length}
    for (i = 0; i < photos.length; i++) {
      photos[i].style.display = "none";  
    }

    photos[slides-1].style.display = "block";
}

function changeSlides(x) {
    slideReveal(slides += x);
}
let prevButtons = document.getElementsByClassName("prevBtn");
if (prevButtons.length > 0) {
    prevButtons[0].addEventListener("click", () => changeSlides(-1));
}

let nextButtons = document.getElementsByClassName("nextBtn");
if (nextButtons.length > 0) {
    nextButtons[0].addEventListener("click", () => changeSlides(1));
}


