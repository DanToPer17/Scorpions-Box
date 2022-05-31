var cabecera = document.querySelector(".contenedor-principal");
var scrollVertical = window.pageYOffset;
/*=========================================================*/

document.addEventListener("scroll", function()  {

    var scrollVertical = window.pageYOffset/1000;

    if(scrollVertical < 0.5){
        cabecera.style.opacity = 0;
    }else if(scrollVertical > 0.5 && scrollVertical < 0.6){
        scrollVertical = scrollVertical - 0.4;
        cabecera.style.opacity = scrollVertical;
    }else if(scrollVertical > 0.6 && scrollVertical < 0.65){
        scrollVertical = scrollVertical - 0.1;
        cabecera.style.opacity = scrollVertical;
    }else if(scrollVertical > 0.65){
        scrollVertical = scrollVertical;
        cabecera.style.opacity = scrollVertical;
    }

});
