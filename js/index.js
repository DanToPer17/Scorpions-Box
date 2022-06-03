var estatus = false;
var cabecera = document.querySelector(".contenedor-principal");
var menutoggler = document.querySelector(".fas");
var listaNavegacion = document.querySelector(".lista-navegacion");

document.addEventListener("scroll", function(){

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
    listaNavegacion.style.display = "none";
    estatus = false;
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