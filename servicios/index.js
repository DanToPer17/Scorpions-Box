var estatus = false;
var menutoggler = document.querySelector(".fas");
var listaNavegacion = document.querySelector(".barraNavegacion__menu__lista");

menutoggler.addEventListener("click", function(){
    if(estatus == false){
        estatus = true;
        listaNavegacion.style.display = "flex";
    }
    document.addEventListener("scroll", function(){
        estatus = false;
        listaNavegacion.style.display = "none";
    });
});
var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;