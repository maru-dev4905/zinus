const sideBtn = document.querySelector(".side--btn");
const headerHeight = document.querySelector(".header").offsetTop;

let windowHeight = window.innerHeight;

window.addEventListener("scroll", ()=>{
    let scrollY = window.scrollY;
    if(scrollY > 200){
        sideBtn.style.transform="translateY(-100px)";
    }else{
        sideBtn.style.transform="translateY(20px)";
    }
});

sideBtn.addEventListener("click", ()=>{
    window.scrollTo({top:0,behavior:"smooth"});
})