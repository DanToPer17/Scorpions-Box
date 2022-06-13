
var contenedorNosotros = document.querySelector(".contenedor-nosotros");
var barraNavegacion = document.querySelector(".contenedor-principal");

document.addEventListener("scroll", function(){
    var distanciaContenedorNosotros = contenedorNosotros.getBoundingClientRect().top
    visualizarBarraNavegacion(distanciaContenedorNosotros);
    activarAnimacion(distanciaContenedorNosotros);
});
//===================- RUTINA VISUALIZACIÓN MENU RESPONSIVE -======================
var estatus = false;
var menutoggler = document.querySelector(".fas");
var listaNavegacion = document.querySelector(".lista-navegacion");

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
//===================- RUTINA VISUALIZACIÓN DINAMICA SCROLL -=======================

var tituloPrimarioNosotros = document.querySelector(".titulo-principal-1-1");
var tituloPrimarioEntrenadores = document.querySelector(".titulo-principal-1-2");
var tituloPrimarioHorarios = document.querySelector(".titulo-principal-1-3");
var tituloPrimarioContacto = document.querySelector(".titulo-principal-1-4");

function activarAnimacion(distanciaContenedorNosotros){
    tituloPrimarioNosotros.classList.remove("animacion-izquierda");
    tituloPrimarioHorarios.classList.remove("animacion-izquierda");
    tituloPrimarioEntrenadores.classList.remove("animacion-derecha");
    tituloPrimarioContacto.classList.remove("animacion-derecha");

    if(distanciaContenedorNosotros <= 700){
        tituloPrimarioNosotros.classList.add("animacion-izquierda");
        }if(distanciaContenedorNosotros <= -900){
            tituloPrimarioHorarios.classList.add("animacion-izquierda");
            }if(distanciaContenedorNosotros <= -200){
                tituloPrimarioEntrenadores.classList.add("animacion-derecha");
                }if(distanciaContenedorNosotros <= -1680){
                    tituloPrimarioContacto.classList.add("animacion-derecha");
                    }
}