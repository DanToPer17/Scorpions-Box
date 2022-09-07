
var barraNavegacion = document.querySelector(".contenedor__principal__navegacion");
var contenedorNosotros = document.querySelector(".contenedor-nosotros");

document.addEventListener("scroll", function(){
    var distanciaContenedorNosotros = contenedorNosotros.getBoundingClientRect().top
    visualizarBarraNavegacion(distanciaContenedorNosotros);
});
//===================- RUTINA VISUALIZACIÓN BARRA DE NAVEGACIÓN -===================
function visualizarBarraNavegacion(visualBarNavegacion){
    if(visualBarNavegacion > 350){
        barraNavegacion.style.opacity = 0;
        barraNavegacion.style.visibility = "hidden";
        }else if(visualBarNavegacion < 350 && visualBarNavegacion > 250){
            barraNavegacion.style.opacity = 0.2;
            barraNavegacion.style.visibility = "";
            }else if(visualBarNavegacion < 250 && visualBarNavegacion > 200){
                barraNavegacion.style.opacity = 0.4;
                }else if(visualBarNavegacion < 200 && visualBarNavegacion > 150){
                    barraNavegacion.style.opacity = 0.6;
                    }else if(visualBarNavegacion < 150 && visualBarNavegacion > 100){
                        barraNavegacion.style.opacity = 0.8;
                        }else if(visualBarNavegacion < 100 && visualBarNavegacion > 50){
                            barraNavegacion.style.opacity = 0.9;
                            }else if(visualBarNavegacion <= 0){
                                barraNavegacion.style.opacity = 1.0;
                                barraNavegacion.style.visibility = "";
                                }
}

//===================- RUTINA VISUALIZACIÓN MENU RESPONSIVE -======================
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

