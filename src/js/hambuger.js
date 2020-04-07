const menu = document.querySelector(".menu");
const openBtn = document.querySelector(".head--bugger");
const closeBtn = document.querySelector(".menu__btn--close");
const dim = document.querySelector(".menu--dim");
const body = document.body;

openBtn.addEventListener("click",()=>{
    menu.style.display="block";
    body.style.position="fixed";
    body.style.overflowX="scroll";
});

closeBtn.addEventListener("click",()=>{
    menu.style.display="none";
    body.style.position="";
    body.style.overflowX="";
})

dim.addEventListener("click",()=>{
    menu.style.display="none";
    body.style.position="";
    body.style.overflowX="";
})