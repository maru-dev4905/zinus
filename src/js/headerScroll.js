const container = document.querySelector(".header--container");

let windowHeight = window.innerHeight; 

window.addEventListener("scroll", ()=>{
    let scrollY = window.scrollY;
    if(scrollY === 0){
        container.style.display = "flex";
    }else{
        container.style.display = "none";
    }
});