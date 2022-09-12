
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
var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

//===================- Javascript for image slider manual navigation -======================
    var manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 5000);
      }
      repeater();
    }
    repeat();

    