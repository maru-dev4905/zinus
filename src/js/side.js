const sideBtn = document.querySelector(".side--btn");

let windowHeight = window.innerHeight;

window.addEventListener("scroll", ()=>{
    let scrollY = window.scrollY;
    if(scrollY > 200){
        sideBtn.style.visibility="visible";
    }else{
        sideBtn.style.visibility="hidden";
    }
    console.log(scrollY);
});