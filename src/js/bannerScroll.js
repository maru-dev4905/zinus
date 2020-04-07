const bannerBtn = document.querySelector(".banner__scroll--btn");
const headHeight = document.querySelector(".head").offsetHeight;
const videoLoc = document.querySelector(".video").offsetTop;

bannerBtn.addEventListener("click",()=>{
    window.scrollTo({top:videoLoc-headHeight, behavior:"smooth"});
});