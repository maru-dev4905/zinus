const openBtn = document.querySelector(".video--btn--open");
const closeBtn = document.querySelector(".video--btn--close");
const video = document.querySelector(".video--box");

openBtn.addEventListener("click", ()=>{
    video.style.visibility = "visible";
});

closeBtn.addEventListener("click", ()=>{
    video.style.visibility = "hidden";
});