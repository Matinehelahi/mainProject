

const carousel = document.querySelector(".carousel"),
fistImg = carousel.querySelectorAll(".image-card")[0];
arrowIcons = document.querySelectorAll(".symbol svg");


let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = fistImg.clientWidth + 14;//getting first img width & adding 14 margin value


arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        //if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

const dragStart = (e) => {
    //updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    let isDragStart = false;
    carousel.classList.remove("dragging");

}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
