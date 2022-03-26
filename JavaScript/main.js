let hed =document.querySelector(".header");
let btn =document.querySelector(".bty");



window.onscroll=function(){
    if(window.scrollY >800){
        btn.style.cssText="display:block;"
    }
    else{
        btn.style.cssText="display:none;"
    }
}

btn.onclick=function(){
    window.scrollTo(0,0);
}



