var estatus = false;
var cabecera = document.querySelector(".contenedor-principal");
var menutoggler = document.querySelector(".fas");
var listaNavegacion = document.querySelector(".lista-navegacion");

document.addEventListener("scroll", function(event){
    event.preventDefault();

    var scrollVertical = window.pageYOffset/1000;

    if(scrollVertical < 0.5){
        cabecera.style.opacity = 0;
    }
    else if(scrollVertical > 0.5 && scrollVertical < 0.6){
        scrollVertical = scrollVertical - 0.25;
        cabecera.style.opacity = scrollVertical;
    }else if(scrollVertical > 0.6 && scrollVertical < 0.7){
        scrollVertical = scrollVertical - 0.2;
        cabecera.style.opacity = scrollVertical;
    }else if(scrollVertical > 0.7 && scrollVertical < 0.8){
        scrollVertical = scrollVertical + 0.1;
        cabecera.style.opacity = scrollVertical;
    }else if (scrollVertical > 0.8 && scrollVertical < 1){
        scrollVertical = scrollVertical + 0.2;
        cabecera.style.opacity = scrollVertical;
    }
});

menutoggler.addEventListener("click", function(event){
    event.preventDefault();
    
    if(estatus == false){
        estatus = true;
        listaNavegacion.style.display = "flex";
    }else{
        estatus = false;
        listaNavegacion.style.display = "none";
    }
});


var nosotrosHead1 = document.querySelector(".nosotros-head-1");

document.addEventListener("scroll", function(event){
    var scrollVertical = window.pageYOffset/1000;

    if(scrollVertical >= 0.6){
        nosotrosHead1.style.visibility = "";;
        nosotrosHead1.style.animation = "mymove 4s";
    }else{
        nosotrosHead1.style.visibility = "hidden";
    }
});