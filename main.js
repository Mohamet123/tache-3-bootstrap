// Header scrool
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(documentElement.scrollTop > 20){
        nav.classList.add("header-srolled");
    }else{
        nav.classList.remove("header-srolled");
    }

}
