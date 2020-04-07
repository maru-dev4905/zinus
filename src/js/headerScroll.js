const container = document.querySelector(".header--container");

window.addEventListener("scroll", ()=>{
    let windowWidth = window.innerWidth;
    let scrollY = window.scrollY;
    if(windowWidth <= 768 || scrollY >= 1){
        container.style.display = "none";
    }else if(windowWidth >= 768 || scrollY == 0){
        container.style.display = "flex";
    }
    
});