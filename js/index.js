var cabecera = document.querySelector(".contenedor-principal");
var scrollVertical = window.pageYOffset;
/*=========================================================*/

document.addEventListener("scroll", function()  {

    var scrollVerticalOriginal = window.pageYOffset;
    console.log("Dimensión Original: " + scrollVerticalOriginal);

    var scrollVertical = window.pageYOffset/600;
    console.log("Dimensión Modificada: " + scrollVertical);

    var b = String(scrollVertical);
    console.log("Numero a colocar: " + b);

    if( scrollVerticalOriginal < 600){
        cabecera.style.opacity = b;    
    }
});
