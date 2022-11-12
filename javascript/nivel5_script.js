puntos = 0;
tiempo =  50 ;

var vidaTopo1 = 5;
var dañoXgolpe1= 1;

var vidaTopo2 = 5;
var dañoXgolpe2= 1;

var vidaTopo3 = 5;
var dañoXgolpe3 = 1;

var vidaTopo4 = 5;
var dañoXgolpe4 = 1;

var vidaTopo5 = 5;
var dañoXgolpe5 = 1;

var vidaTopo6 = 5;
var dañoXgolpe6 = 1;

var vidaTopo7 = 5;
var dañoXgolpe7 = 1;

var vidaTopo8 = 5;
var dañoXgolpe8 = 1;

var vidaTopo9 = 5;
var dañoXgolpe9 = 1;

var vidaTopo10 = 5;
var dañoXgolpe10 = 1;

var vidaTopo11 = 5;
var dañoXgolpe11 = 1;

var vidaTopo12 = 5;
var dañoXgolpe12 = 1;

puntosPasarNivel = 60; /* puntos */
puntosXmatarTopo = 5; /* puntos */


// //////////////////////////////////////////////////////////////////////
//FUNCION PARA APARECER Y DESAPARECER A LA IMAGEN

function desaparecerTopo1(){
    
    
    if (document.getElementById("topo1").onclick){ /* funcion "onclick" al hacer click sobre la imagen*/
        fx1();
        document.getElementById("topo1").style.display = "none";/* el topo desaparece al hacer click sobre el */
        document.getElementById("hp-topo1").style.display = "none";/* hp de el topo solo es visible cuando el topo aparece*/
        
        setTimeout(aparecerTopo1,Math.round(Math.random()* 5000));/* el topo aparecera dentro de X tiempo (0 - 5 segundos) */ 
        
        hpTopo1 = vidaTopo1 - dañoXgolpe1;
        document.getElementById("hp1").textContent = hpTopo1 + " hp";
        vidaTopo1--;
        score += 1;
        document.getElementById("puntuacion").innerHTML = "SCORE" + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + score;

        /* if (hpTopo1 == 3){
            document.getElementById("topo1").onclick
            fx1(); 
        } */
        
        if (hpTopo1 == 5){
            document.getElementById("hp-topo1").style.backgroundColor = "lightseagree";
            document.getElementById("topo1").style.display = "none";
        }

        if (hpTopo1 == 4){
            document.getElementById("hp-topo1").style.backgroundColor = "blue";
            document.getElementById("topo1").style.display = "none";
        }

        if (hpTopo1 == 3){  /* los cambios que se aplicaran cuando el topo1 tenga 3 de vida */
            document.getElementById("hp-topo1").style.backgroundColor = "green";  /* color de la barra de vida */
            document.getElementById("topo1").style.display = "none"; /* display none es para que desaparesca */
        }
        
        if (hpTopo1 == 2){
            document.getElementById("hp-topo1").style.backgroundColor = "orange";
            document.getElementById("topo1").style.display = "none";  
        } 
        
        if (hpTopo1 == 1){
            document.getElementById("hp-topo1").style.backgroundColor = "red";
            document.getElementById("topo1").style.display = "none"; 
        } 
        
        if (hpTopo1 == 0){
            puntos += puntosXmatarTopo;           
            document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
            /* document.getElementById("topo").style.display = "none"; */
            document.getElementById("topo1").src  = "../imagenes/rip.png ";
            document.getElementById("topo1").style = "width: 5.5vw; height: 4.75vw; margin-top: 5.5vw; margin-left: -6.5vw";
            document.getElementById("hp-topo1").style.backgroundColor = "transparent";
            document.getElementById("hp-topo1").style.border = "transparent";
            document.getElementById("hp1").textContent = " "; 
            document.getElementById("puntos").style =  "padding-left: 1.6vw";
        } if (hpTopo1 <= 0){
            document.getElementById("hp1").textContent = " ";
        }
    }   
}
function aparecerTopo1(){
    if (document.getElementById("topo1").onclick){
        
        document.getElementById("topo1").style.display = "block";  
        document.getElementById("hp-topo1").style.display = "block";     
    }
}
function restarTiempo(){
    if (document.getElementById("iniciarJuego").onclick){
        tiempo--;//disminuye de 1 en 1
        document.getElementById("tiempo").innerHTML = "TIEMPO " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + tiempo; //

        if(tiempo == 0){
            document.getElementById("contenedorInicioNivel1").style.display = "none";
            document.getElementById("fondo_perdistes").style.display = "block";
        
        }
        
    }
    
}
/* function tiempo(){
    setInterval(restarTiempo, 1000);
}  */
 


function desapareceGolpe1(){
    if (document.getElementById("topo1").onclick){
        document.getElementById("golpe1").style.display = "block";////////////////////////////////////aparece
        /* cambiar("golpe1").style = "transition: all 2s"; */
        setTimeout(aparecerGolpe1,Math.round(Math.random()* 1000));
        
    }
}
function aparecerGolpe1(){
    if (document.getElementById("topo1").onclick){
        document.getElementById("golpe1").style.display = "none";  
             
    }
}

function general1(){
    desaparecerTopo1();
    desapareceGolpe1();
     
    if (puntos == puntosPasarNivel){
        /* alert("Ganastes, eres lo maximo, como tu no hay otro!!!") */
        tiempo = 50;
        puntos = 0;
        document.getElementById("puntos").innerHTML =  "PUNTOS " + "&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
        document.getElementById("pasar_de_nivel").innerHTML = /* confirm("Nivel 4!!"),  */window.location.replace("../niveles_topoSmash/finalBoss.html");
    }
    

}
function reiniciarNivel(){
    if (document.getElementById("reiniciarNivel").onclick){
        window.location.replace("../niveles_topoSmash/nivel1.html");
        /* document.getElementById("contenedorInicioJuego").style.display = "none";
        document.getElementById("contenedorInicioNivel1").style.display = "block";
        document.getElementById("contenedorPerdistesJuego").style.display = "none"; */
        
        
    }
}
function salir(){
    if (document.getElementById("salir").onclick){
        window.location.replace("../HISTORIA.html");/* falta definir */
    }
}
///////////////////////////////////////////////////////////////////////////
/////////                 TOPO2                   ////
///////////////////////////////////////////////////////////////////////////
function desaparecerTopo2(){
    fx2();

    if (document.getElementById("topo2").onclick){ 
        document.getElementById("topo2").style.display = "none";
        document.getElementById("hp-topo2").style.display = "none";
        setTimeout(aparecerTopo2,Math.round(Math.random()* 5000));
        hpTopo2 = vidaTopo2 - dañoXgolpe2;
        document.getElementById("hp2").textContent = hpTopo2 + " hp";
        vidaTopo2--;
        score += 1;
        document.getElementById("puntuacion").innerHTML = "SCORE" + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + score;
        
        if (hpTopo2 == 5){
            document.getElementById("hp-topo2").style.backgroundColor = "lightseagreen";
            document.getElementById("topo2").style.display = "none"; 
        } 

        if (hpTopo2 == 4){
            document.getElementById("hp-topo2").style.backgroundColor = "blue";
            document.getElementById("topo2").style.display = "none"; 
        } 

        if (hpTopo2 == 3){
            document.getElementById("hp-topo2").style.backgroundColor = "green";
            document.getElementById("topo2").style.display = "none";
        }
        
        if (hpTopo2 == 2){
            document.getElementById("hp-topo2").style.backgroundColor = "orange";
            document.getElementById("topo2").style.display = "none";
        }
        
        if (hpTopo2 == 1){
            document.getElementById("hp-topo2").style.backgroundColor = "red";
            document.getElementById("topo2").style.display = "none";
        }

        if (hpTopo2 == 0){
            puntos += puntosXmatarTopo;           
            document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
            /* document.getElementById("topo").style.display = "none"; */
            document.getElementById("topo2").src  = "../imagenes/rip.png ";
            document.getElementById("topo2").style = "width: 5.5vw; height: 4.75vw; margin-top: 5.5vw; margin-left: -6.5vw";
            document.getElementById("hp-topo2").style.backgroundColor = "transparent";
            document.getElementById("hp-topo2").style.border = "transparent";
            document.getElementById("hp2").textContent = " "; 
            document.getElementById("puntos").style =  "padding-left: 1.6vw";
        } if (hpTopo2 <= 0){
            document.getElementById("hp2").textContent = " ";
        }   
    }   
}
function aparecerTopo2(){
    if (document.getElementById("topo2").onclick){
        
        document.getElementById("topo2").style.display = "block";  
        document.getElementById("hp-topo2").style.display = "block";     
    }
}
function desapareceGolpe2(){
    if (document.getElementById("topo2").onclick){
        document.getElementById("golpe2").style.display = "block";////////////////////////////////////aparece
        /* cambiar("golpe1").style = "transition: all 2s"; */
        setTimeout(aparecerGolpe2,Math.round(Math.random()* 1000));
        
    }
}
function aparecerGolpe2(){
    if (document.getElementById("topo2").onclick){
        document.getElementById("golpe2").style.display = "none";  
             
    }
}
function general2(){
    desaparecerTopo2();
    desapareceGolpe2();
    if (puntos == puntosPasarNivel){
        /* alert("Ganastes, eres lo maximo, como tu no hay otro!!!") */
        tiempo = 50;
        puntos = 0;
        document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
        document.getElementById("pasar_de_nivel").innerHTML = /* confirm("Nivel 4!!"),  */window.location.replace("../niveles_topoSmash/finalBoss.html");
    }
}
////////////////////////////////////////////////////////////////////////////////
/////////                 TOPO3                   ////
///////////////////////////////////////////////////////////////////////////
function desaparecerTopo3(){
    fx3();

    if (document.getElementById("topo3").onclick){ 
        document.getElementById("topo3").style.display = "none";
        document.getElementById("hp-topo3").style.display = "none";
        setTimeout(aparecerTopo3,Math.round(Math.random()* 5000));
        fx3();
        hpTopo3 = vidaTopo3 - dañoXgolpe3;
        document.getElementById("hp3").textContent = hpTopo3 + " hp";
        vidaTopo3--;
        score += 1;
        document.getElementById("puntuacion").innerHTML = "SCORE" + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + score;
        
        if (hpTopo3 == 5){
            document.getElementById("hp-topo3").style.backgroundColor = "lightseagre";
            document.getElementById("topo3").style.display = "none"; 
        } 

        if (hpTopo3 == 4){
            document.getElementById("hp-topo3").style.backgroundColor = "blue";
            document.getElementById("topo3").style.display = "none"; 
        } 

        if (hpTopo3 == 3){
            document.getElementById("hp-topo3").style.backgroundColor = "green";
            document.getElementById("topo3").style.display = "none";
        }
        
        if (hpTopo3 == 2){
            document.getElementById("hp-topo3").style.backgroundColor = "orange";
            document.getElementById("topo3").style.display = "none";
        }
        
        if (hpTopo3 == 1){
            document.getElementById("hp-topo3").style.backgroundColor = "red";
            document.getElementById("topo3").style.display = "none";
        }
        
        if (hpTopo3 == 0){
            puntos += puntosXmatarTopo;           
            document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
            /* document.getElementById("topo").style.display = "none"; */
            document.getElementById("topo3").src  = "../imagenes/rip.png ";
            document.getElementById("topo3").style = "width: 5.5vw; height: 4.75vw; margin-top: 5.5vw; margin-left: -6.5vw";
            document.getElementById("hp-topo3").style.backgroundColor = "transparent";
            document.getElementById("hp-topo3").style.border = "transparent";
            document.getElementById("hp3").textContent = " "; 
            document.getElementById("puntos").style =  "padding-left: 1.6vw";
        } if (hpTopo3 <= 0){
            document.getElementById("hp3").textContent = " ";
        }      
    }   
}
function aparecerTopo3(){
    if (document.getElementById("topo3").onclick){
        
        document.getElementById("topo3").style.display = "block";  
        document.getElementById("hp-topo3").style.display = "block";     
    }
}
function desapareceGolpe3(){
    if (document.getElementById("topo3").onclick){
        document.getElementById("golpe3").style.display = "block";////////////////////////////////////aparece
        /* cambiar("golpe1").style = "transition: all 2s"; */
        setTimeout(aparecerGolpe3,Math.round(Math.random()* 1000));
        
    }
}
function aparecerGolpe3(){
    if (document.getElementById("topo3").onclick){
        document.getElementById("golpe3").style.display = "none";  
             
    }
}
function general3(){
    desaparecerTopo3();
    desapareceGolpe3();
    if (puntos == puntosPasarNivel){
        /* alert("Ganastes, eres lo maximo, como tu no hay otro!!!") */
        tiempo = 50;
        puntos = 0;
        document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
        document.getElementById("pasar_de_nivel").innerHTML = /* confirm("Nivel 4!!"),  */window.location.replace("../niveles_topoSmash/finalBoss.html");
    }
}
////////////////////////////////////////////////////////////////////////////////
/////////                 TOPO4                   ////
///////////////////////////////////////////////////////////////////////////
function desaparecerTopo4(){
    fx4();

    if (document.getElementById("topo4").onclick){ 
        document.getElementById("topo4").style.display = "none";
        document.getElementById("hp-topo4").style.display = "none";
        setTimeout(aparecerTopo4,Math.round(Math.random()* 5000));
        hpTopo4 = vidaTopo4 - dañoXgolpe4;
        document.getElementById("hp4").textContent = hpTopo4 + " hp";
        vidaTopo4--;
        score += 1;
        document.getElementById("puntuacion").innerHTML = "SCORE" + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + score;
        
        
        
        if (hpTopo4 == 5){
            document.getElementById("hp-topo4").style.backgroundColor = "lightseagreen";
            document.getElementById("topo4").style.display = "none"; 
        } 

        if (hpTopo4 == 4){
            document.getElementById("hp-topo4").style.backgroundColor = "blue";
            document.getElementById("topo4").style.display = "none"; 
        } 

        if (hpTopo4 == 3){
            document.getElementById("hp-topo4").style.backgroundColor = "green";
            document.getElementById("topo4").style.display = "none";
        }
        
        if (hpTopo4 == 2){
            document.getElementById("hp-topo4").style.backgroundColor = "orange";
            document.getElementById("topo4").style.display = "none";
        }
        
        if (hpTopo4 == 1){
            document.getElementById("hp-topo4").style.backgroundColor = "red";
            document.getElementById("topo4").style.display = "none";
        }

        if (hpTopo4 == 0){
            puntos += puntosXmatarTopo;           
            document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
            /* document.getElementById("topo").style.display = "none"; */
            document.getElementById("topo4").src  = "../imagenes/rip.png ";
            document.getElementById("topo4").style = "width: 5.5vw; height: 4.75vw; margin-top: 5.5vw; margin-left: -6.5vw";
            document.getElementById("hp-topo4").style.backgroundColor = "transparent";
            document.getElementById("hp-topo4").style.border = "transparent";
            document.getElementById("hp4").textContent = " "; 
            document.getElementById("puntos").style =  "padding-left: 1.6vw";
        } if (hpTopo4 <= 0){
            document.getElementById("hp4").textContent = " ";
        }      
    }   
}
function aparecerTopo4(){
    if (document.getElementById("topo4").onclick){
        
        document.getElementById("topo4").style.display = "block";  
        document.getElementById("hp-topo4").style.display = "block";     
    }
}
function desapareceGolpe4(){
    if (document.getElementById("topo4").onclick){
        document.getElementById("golpe4").style.display = "block";////////////////////////////////////aparece
        /* cambiar("golpe1").style = "transition: all 2s"; */
        setTimeout(aparecerGolpe4,Math.round(Math.random()* 1000));
        
    }
}
function aparecerGolpe4(){
    if (document.getElementById("topo4").onclick){
        document.getElementById("golpe4").style.display = "none";  
             
    }
}
function general4(){
    desaparecerTopo4();
    desapareceGolpe4();
    if (puntos == puntosPasarNivel){
        /* alert("Ganastes, eres lo maximo, como tu no hay otro!!!") */
        tiempo = 50;
        puntos = 0;
        document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
        document.getElementById("pasar_de_nivel").innerHTML = /* confirm("Nivel 4!!"),  */window.location.replace("../niveles_topoSmash/finalBoss.html");
    }
}
////////////////////////////////////////////////////////////////////////////////
/////////                 TOPO5                   ////
///////////////////////////////////////////////////////////////////////////
function desaparecerTopo5(){
    fx5();

    if (document.getElementById("topo5").onclick){ 
        document.getElementById("topo5").style.display = "none";
        document.getElementById("hp-topo5").style.display = "none";
        setTimeout(aparecerTopo5,Math.round(Math.random()* 5000));
        hpTopo5 = vidaTopo5 - dañoXgolpe5;
        document.getElementById("hp5").textContent = hpTopo5 + " hp";
        vidaTopo5--;
        score += 1;
        document.getElementById("puntuacion").innerHTML = "SCORE" + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + score;
        
        
        if (hpTopo5 == 5){
            document.getElementById("hp-topo5").style.backgroundColor = "lightseagreen";
            document.getElementById("topo5").style.display = "none"; 
        } 

        if (hpTopo5 == 4){
            document.getElementById("hp-topo5").style.backgroundColor = "blue";
            document.getElementById("topo5").style.display = "none"; 
        } 

        if (hpTopo5 == 3){
            document.getElementById("hp-topo5").style.backgroundColor = "green";
            document.getElementById("topo5").style.display = "none";
        }
        
        if (hpTopo5 == 2){
            document.getElementById("hp-topo5").style.backgroundColor = "orange";
            document.getElementById("topo5").style.display = "none";
        }
        
        if (hpTopo5 == 1){
            document.getElementById("hp-topo5").style.backgroundColor = "red";
            document.getElementById("topo5").style.display = "none";
        }
        
        if (hpTopo5 == 0){
            puntos += puntosXmatarTopo;           
            document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
            /* document.getElementById("topo").style.display = "none"; */
            document.getElementById("topo5").src  = "../imagenes/rip.png ";
            document.getElementById("topo5").style = "width: 5.5vw; height: 4.75vw; margin-top: 5.5vw; margin-left: -6.5vw";
            document.getElementById("hp-topo5").style.backgroundColor = "transparent";
            document.getElementById("hp-topo5").style.border = "transparent";
            document.getElementById("hp5").textContent = " "; 
            document.getElementById("puntos").style =  "padding-left: 1.6vw";
        } if (hpTopo5 <= 0){
            document.getElementById("hp5").textContent = " ";
        }     
    }   
}
function aparecerTopo5(){
    if (document.getElementById("topo5").onclick){
        
        document.getElementById("topo5").style.display = "block";  
        document.getElementById("hp-topo5").style.display = "block";     
    }
}
function desapareceGolpe5(){
    if (document.getElementById("topo5").onclick){
        document.getElementById("golpe5").style.display = "block";////////////////////////////////////aparece
        /* cambiar("golpe1").style = "transition: all 2s"; */
        setTimeout(aparecerGolpe5,Math.round(Math.random()* 1000));
        
    }
}
function aparecerGolpe5(){
    if (document.getElementById("topo5").onclick){
        document.getElementById("golpe5").style.display = "none";  
             
    }
}
function general5(){
    desaparecerTopo5();
    desapareceGolpe5();
    if (puntos == puntosPasarNivel){
        /* alert("Ganastes, eres lo maximo, como tu no hay otro!!!") */
        tiempo = 50;
        puntos = 0;
        document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
        document.getElementById("pasar_de_nivel").innerHTML = /* confirm("Nivel 4!!"),  */window.location.replace("../niveles_topoSmash/finalBoss.html");
    }
}
////////////////////////////////////////////////////////////////////////////////
/////////                 TOPO6                   ////
///////////////////////////////////////////////////////////////////////////
function desaparecerTopo6(){
    fx6();

    if (document.getElementById("topo6").onclick){ 
        document.getElementById("topo6").style.display = "none";
        document.getElementById("hp-topo6").style.display = "none";
        setTimeout(aparecerTopo6,Math.round(Math.random()* 5000));
        hpTopo6 = vidaTopo6 - dañoXgolpe6;
        document.getElementById("hp6").textContent = hpTopo6 + " hp";
        vidaTopo6--;
        score += 1;
        document.getElementById("puntuacion").innerHTML = "SCORE" + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + score;
        
        if (hpTopo6 == 5){
            document.getElementById("hp-topo6").style.backgroundColor = "lightseagree";
            document.getElementById("topo6").style.display = "none"; 
        } 
        if (hpTopo6 == 4){
            document.getElementById("hp-topo6").style.backgroundColor = "blue";
            document.getElementById("topo6").style.display = "none"; 
        } 

        if (hpTopo6 == 3){
            document.getElementById("hp-topo6").style.backgroundColor = "green";
            document.getElementById("topo6").style.display = "none";
        }
        
        if (hpTopo6 == 2){
            document.getElementById("hp-topo6").style.backgroundColor = "orange";
            document.getElementById("topo6").style.display = "none";
        }
        
        if (hpTopo6 == 1){
            document.getElementById("hp-topo6").style.backgroundColor = "red";
            document.getElementById("topo6").style.display = "none";
        }
        
        if (hpTopo6 == 0){
            puntos += puntosXmatarTopo;           
            document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
            /* document.getElementById("topo").style.display = "none"; */
            document.getElementById("topo6").src  = "../imagenes/rip.png ";
            document.getElementById("topo6").style = "width: 5.5vw; height: 4.75vw; margin-top: 5.5vw; margin-left: -6.5vw";
            document.getElementById("hp-topo6").style.backgroundColor = "transparent";
            document.getElementById("hp-topo6").style.border = "transparent";
            document.getElementById("hp6").textContent = " "; 
            document.getElementById("puntos").style =  "padding-left: 1.6vw";
        } if (hpTopo6 <= 0){
            document.getElementById("hp6").textContent = " ";
        }      
    }   
}
function aparecerTopo6(){
    if (document.getElementById("topo6").onclick){
        
        document.getElementById("topo6").style.display = "block";  
        document.getElementById("hp-topo6").style.display = "block";     
    }
}
function desapareceGolpe6(){
    if (document.getElementById("topo6").onclick){
        document.getElementById("golpe6").style.display = "block";////////////////////////////////////aparece
        /* cambiar("golpe1").style = "transition: all 2s"; */
        setTimeout(aparecerGolpe6,Math.round(Math.random()* 1000));
        
    }
}
function aparecerGolpe6(){
    if (document.getElementById("topo6").onclick){
        document.getElementById("golpe6").style.display = "none";  
             
    }
}
function general6(){
    desaparecerTopo6();
    desapareceGolpe6();
    if (puntos == puntosPasarNivel){
        /* alert("Ganastes, eres lo maximo, como tu no hay otro!!!") */
        tiempo = 50;
        puntos = 0;
        document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
        document.getElementById("pasar_de_nivel").innerHTML = /* confirm("Nivel 4!!"),  */window.location.replace("../niveles_topoSmash/finalBoss.html");
    }
}
////////////////////////////////////////////////////////////////////////////////
/////////                 TOPO7                   ////
///////////////////////////////////////////////////////////////////////////
function desaparecerTopo7(){
    fx7();

    if (document.getElementById("topo7").onclick){ 
        document.getElementById("topo7").style.display = "none";
        document.getElementById("hp-topo7").style.display = "none";
        setTimeout(aparecerTopo7,Math.round(Math.random()* 5000));
        hpTopo7 = vidaTopo7 - dañoXgolpe7;
        document.getElementById("hp7").textContent = hpTopo7 + " hp";
        vidaTopo7--;
        score += 1;
        document.getElementById("puntuacion").innerHTML = "SCORE" + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + score;
        
        if (hpTopo7 == 5){
            document.getElementById("hp-topo7").style.backgroundColor = "lightseagree";
            document.getElementById("topo7").style.display = "none"; 
        } 

        if (hpTopo7 == 4){
            document.getElementById("hp-topo7").style.backgroundColor = "blue";
            document.getElementById("topo7").style.display = "none"; 
        } 

        if (hpTopo7 == 3){
            document.getElementById("hp-topo7").style.backgroundColor = "green";
            document.getElementById("topo7").style.display = "none";
        }
        
        if (hpTopo7 == 2){
            document.getElementById("hp-topo7").style.backgroundColor = "orange";
            document.getElementById("topo7").style.display = "none";
        }
        
        if (hpTopo7 == 1){
            document.getElementById("hp-topo7").style.backgroundColor = "red";
            document.getElementById("topo7").style.display = "none";
        }
        
        if (hpTopo7 == 0){
            puntos += puntosXmatarTopo;           
            document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
            /* document.getElementById("topo").style.display = "none"; */
            document.getElementById("topo7").src  = "../imagenes/rip.png ";
            document.getElementById("topo7").style = "width: 5.5vw; height: 4.75vw; margin-top: 5.5vw; margin-left: -6.5vw";
            document.getElementById("hp-topo7").style.backgroundColor = "transparent";
            document.getElementById("hp-topo7").style.border = "transparent";
            document.getElementById("hp7").textContent = " "; 
            document.getElementById("puntos").style =  "padding-left: 1.6vw";
        }  if (hpTopo7 <= 0){
            document.getElementById("hp7").textContent = " ";
        }   
    }   
}
function aparecerTopo7(){
    if (document.getElementById("topo7").onclick){
        
        document.getElementById("topo7").style.display = "block";  
        document.getElementById("hp-topo7").style.display = "block";     
    }
}
function desapareceGolpe7(){
    if (document.getElementById("topo7").onclick){
        document.getElementById("golpe7").style.display = "block";////////////////////////////////////aparece
        /* cambiar("golpe1").style = "transition: all 2s"; */
        setTimeout(aparecerGolpe7,Math.round(Math.random()* 1000));
        
    }
}
function aparecerGolpe7(){
    if (document.getElementById("topo7").onclick){
        document.getElementById("golpe7").style.display = "none";  
             
    }
}
function general7(){
    desaparecerTopo7();
    desapareceGolpe7();
    if (puntos == puntosPasarNivel){
        /* alert("Ganastes, eres lo maximo, como tu no hay otro!!!") */
        tiempo = 50;
        puntos = 0;
        document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
        document.getElementById("pasar_de_nivel").innerHTML = /* confirm("Nivel 4!!"),  */window.location.replace("../niveles_topoSmash/finalBoss.html");
    }
}
////////////////////////////////////////////////////////////////////////////////
/////////                 TOPO8                   ////
///////////////////////////////////////////////////////////////////////////
function desaparecerTopo8(){
    fx8();

    if (document.getElementById("topo8").onclick){ 
        document.getElementById("topo8").style.display = "none";
        document.getElementById("hp-topo8").style.display = "none";
        setTimeout(aparecerTopo8,Math.round(Math.random()* 5000));
        hpTopo8 = vidaTopo8 - dañoXgolpe8;
        document.getElementById("hp8").textContent = hpTopo8 + " hp";
        vidaTopo8--;
        score += 1;
        document.getElementById("puntuacion").innerHTML = "SCORE" + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + score;
        
        if (hpTopo8 == 5){
            document.getElementById("hp-topo8").style.backgroundColor = "lightseagreen";
            document.getElementById("topo8").style.display = "none"; 
        } 

        if (hpTopo8 == 4){
            document.getElementById("hp-topo8").style.backgroundColor = "blue";
            document.getElementById("topo8").style.display = "none"; 
        } 

        if (hpTopo8 == 3){
            document.getElementById("hp-topo8").style.backgroundColor = "green";
            document.getElementById("topo8").style.display = "none";
        }
        
        if (hpTopo8 == 2){
            document.getElementById("hp-topo8").style.backgroundColor = "orange";
            document.getElementById("topo8").style.display = "none";
        }
        
        if (hpTopo8 == 1){
            document.getElementById("hp-topo8").style.backgroundColor = "red";
            document.getElementById("topo8").style.display = "none";
        }

        if (hpTopo8 == 0){
            puntos += puntosXmatarTopo;           
            document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
            /* document.getElementById("topo").style.display = "none"; */
            document.getElementById("topo8").src  = "../imagenes/rip.png ";
            document.getElementById("topo8").style = "width: 5.5vw; height: 4.75vw; margin-top: 5.5vw; margin-left: -6.5vw";
            document.getElementById("hp-topo8").style.backgroundColor = "transparent";
            document.getElementById("hp-topo8").style.border = "transparent";
            document.getElementById("hp8").textContent = " "; 
            document.getElementById("puntos").style =  "padding-left: 1.6vw";
        }  if (hpTopo8 <= 0){
            document.getElementById("hp8").textContent = " ";
        }  
    }   
}
function aparecerTopo8(){
    if (document.getElementById("topo8").onclick){
        
        document.getElementById("topo8").style.display = "block";  
        document.getElementById("hp-topo8").style.display = "block";     
    }
}
function desapareceGolpe8(){
    if (document.getElementById("topo8").onclick){
        document.getElementById("golpe8").style.display = "block";////////////////////////////////////aparece
        /* cambiar("golpe1").style = "transition: all 2s"; */
        setTimeout(aparecerGolpe8,Math.round(Math.random()* 1000));
        
    }
}
function aparecerGolpe8(){
    if (document.getElementById("topo8").onclick){
        document.getElementById("golpe8").style.display = "none";  
             
    }
}
function general8(){
    desaparecerTopo8();
    desapareceGolpe8();
    if (puntos == puntosPasarNivel){
        /* alert("Ganastes, eres lo maximo, como tu no hay otro!!!") */
        tiempo = 50;
        puntos = 0;
        document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
        document.getElementById("pasar_de_nivel").innerHTML = /* confirm("Nivel 4!!"),  */window.location.replace("../niveles_topoSmash/finalBoss.html");
    }
}
////////////////////////////////////////////////////////////////////////////////
/////////                 TOPO9                   ////
///////////////////////////////////////////////////////////////////////////
function desaparecerTopo9(){
    fx9();

    if (document.getElementById("topo9").onclick){ 
        document.getElementById("topo9").style.display = "none";
        document.getElementById("hp-topo9").style.display = "none";
        setTimeout(aparecerTopo9,Math.round(Math.random()* 5000));
        hpTopo9 = vidaTopo9 - dañoXgolpe9;
        document.getElementById("hp9").textContent = hpTopo9 + " hp";
        vidaTopo9--;
        score += 1;
        document.getElementById("puntuacion").innerHTML = "SCORE" + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + score;
        
        
        if (hpTopo9 == 5){
            document.getElementById("hp-topo9").style.backgroundColor = "lightseagreen";
            document.getElementById("topo9").style.display = "none"; 
        } 

        if (hpTopo9 == 4){
            document.getElementById("hp-topo9").style.backgroundColor = "blue";
            document.getElementById("topo9").style.display = "none"; 
        } 

        if (hpTopo9 == 3){
            document.getElementById("hp-topo9").style.backgroundColor = "green";
            document.getElementById("topo9").style.display = "none";
        }
        
        if (hpTopo9 == 2){
            document.getElementById("hp-topo9").style.backgroundColor = "orange";
            document.getElementById("topo9").style.display = "none";
        }
        
        if (hpTopo9 == 1){
            document.getElementById("hp-topo9").style.backgroundColor = "red";
            document.getElementById("topo9").style.display = "none";
        }
        
        if (hpTopo9 == 0){
            puntos += puntosXmatarTopo;           
            document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
            /* document.getElementById("topo").style.display = "none"; */
            document.getElementById("topo9").src  = "../imagenes/rip.png ";
            document.getElementById("topo9").style = "width: 5.5vw; height: 4.75vw; margin-top: 5.5vw; margin-left: -6.5vw";
            document.getElementById("hp-topo9").style.backgroundColor = "transparent";
            document.getElementById("hp-topo9").style.border = "transparent";
            document.getElementById("hp9").textContent = " "; 
            document.getElementById("puntos").style =  "padding-left: 1.6vw";
        } if (hpTopo9 <= 0){
            document.getElementById("hp9").textContent = " ";
        }      
    }   
}
function aparecerTopo9(){
    if (document.getElementById("topo9").onclick){
        
        document.getElementById("topo9").style.display = "block";  
        document.getElementById("hp-topo9").style.display = "block";     
    }
}
function desapareceGolpe9(){
    if (document.getElementById("topo9").onclick){
        document.getElementById("golpe9").style.display = "block";////////////////////////////////////aparece
        /* cambiar("golpe1").style = "transition: all 2s"; */
        setTimeout(aparecerGolpe9,Math.round(Math.random()* 1000));
        
    }
}
function aparecerGolpe9(){
    if (document.getElementById("topo9").onclick){
        document.getElementById("golpe9").style.display = "none";  
             
    }
}
function general9(){
    desaparecerTopo9();
    desapareceGolpe9();
    if (puntos == puntosPasarNivel){
        /* alert("Ganastes, eres lo maximo, como tu no hay otro!!!") */
        tiempo = 50;
        puntos = 0;
        document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
        document.getElementById("pasar_de_nivel").innerHTML = /* confirm("Nivel 4!!"),  */window.location.replace("../niveles_topoSmash/finalBoss.html");
    }
}
////////////////////////////////////////////////////////////////////////////////
/////////                 TOPO10                   ////
///////////////////////////////////////////////////////////////////////////
function desaparecerTopo10(){
    fx10();

    if (document.getElementById("topo10").onclick){ 
        document.getElementById("topo10").style.display = "none";
        document.getElementById("hp-topo10").style.display = "none";
        setTimeout(aparecerTopo10,Math.round(Math.random()* 5000));
        hpTopo10 = vidaTopo10 - dañoXgolpe10;
        document.getElementById("hp10").textContent = hpTopo10 + " hp";
        vidaTopo10--;
        score += 1;
        document.getElementById("puntuacion").innerHTML = "SCORE" + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + score;
        
        if (hpTopo10 == 5){
            document.getElementById("hp-topo10").style.backgroundColor = "lightseagree";
            document.getElementById("topo10").style.display = "none"; 
        } 
        if (hpTopo10 == 4){
            document.getElementById("hp-topo10").style.backgroundColor = "blue";
            document.getElementById("topo10").style.display = "none"; 
        } 

        if (hpTopo10 == 3){
            document.getElementById("hp-topo10").style.backgroundColor = "green";
            document.getElementById("topo10").style.display = "none";
        }
        
        if (hpTopo10 == 2){
            document.getElementById("hp-topo10").style.backgroundColor = "orange";
            document.getElementById("topo10").style.display = "none";
        }
        
        if (hpTopo10 == 1){
            document.getElementById("hp-topo10").style.backgroundColor = "red";
            document.getElementById("topo10").style.display = "none";
        }

        if (hpTopo10 == 0){
            puntos += puntosXmatarTopo;           
            document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
            /* document.getElementById("topo").style.display = "none"; */
            document.getElementById("topo10").src  = "../imagenes/rip.png ";
            document.getElementById("topo10").style = "width: 5.5vw; height: 4.75vw; margin-top: 5.5vw; margin-left: -6.5vw";
            document.getElementById("hp-topo10").style.backgroundColor = "transparent";
            document.getElementById("hp-topo10").style.border = "transparent";
            document.getElementById("hp10").textContent = " "; 
            document.getElementById("puntos").style =  "padding-left: 1.6vw";
        } if (hpTopo10 <= 0){
            document.getElementById("hp10").textContent = " ";
        }     
    }   
}
function aparecerTopo10(){
    if (document.getElementById("topo10").onclick){
        
        document.getElementById("topo10").style.display = "block";  
        document.getElementById("hp-topo10").style.display = "block";     
    }
}
function desapareceGolpe10(){
    if (document.getElementById("topo10").onclick){
        document.getElementById("golpe10").style.display = "block";////////////////////////////////////aparece
        /* cambiar("golpe1").style = "transition: all 2s"; */
        setTimeout(aparecerGolpe10,Math.round(Math.random()* 1000));
        
    }
}
function aparecerGolpe10(){
    if (document.getElementById("topo10").onclick){
        document.getElementById("golpe10").style.display = "none";  
             
    }
}
function general10(){
    desaparecerTopo10();
    desapareceGolpe10();
    if (puntos == puntosPasarNivel){
        
        tiempo = 50;
        puntos = 0;
        document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
        document.getElementById("pasar_de_nivel").innerHTML =  window.location.replace("../niveles_topoSmash/finalBoss.html");
    }
}
////////////////////////////////////////////////////////////////////////////////
/////////                 TOPO11                   ////
///////////////////////////////////////////////////////////////////////////
function desaparecerTopo11(){
    fx11();

    if (document.getElementById("topo11").onclick){ 
        document.getElementById("topo11").style.display = "none";
        document.getElementById("hp-topo11").style.display = "none";
        setTimeout(aparecerTopo11,Math.round(Math.random()* 5000));
        hpTopo11 = vidaTopo11 - dañoXgolpe11;
        document.getElementById("hp11").textContent = hpTopo11 + " hp";
        vidaTopo11--;
        score += 1;
        document.getElementById("puntuacion").innerHTML = "SCORE" + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + score;
        
        
        if (hpTopo11 == 5){
            document.getElementById("hp-topo11").style.backgroundColor = "lightseagreen";
            document.getElementById("topo11").style.display = "none"; 
        } 

        if (hpTopo11 == 4){
            document.getElementById("hp-topo11").style.backgroundColor = "blue";
            document.getElementById("topo11").style.display = "none"; 
        } 

        if (hpTopo11 == 3){
            document.getElementById("hp-topo11").style.backgroundColor = "green";
            document.getElementById("topo11").style.display = "none";
        }
        
        if (hpTopo11 == 2){
            document.getElementById("hp-topo11").style.backgroundColor = "orange";
            document.getElementById("topo11").style.display = "none";
        }
        
        if (hpTopo11 == 1){
            document.getElementById("hp-topo11").style.backgroundColor = "red";
            document.getElementById("topo11").style.display = "none";
        }

        if (hpTopo11 == 0){
            puntos += puntosXmatarTopo;           
            document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
            /* document.getElementById("topo").style.display = "none"; */
            document.getElementById("topo11").src  = "../imagenes/rip.png ";
            document.getElementById("topo11").style = "width: 5.5vw; height: 4.75vw; margin-top: 5.5vw; margin-left: -6.5vw";
            document.getElementById("hp-topo11").style.backgroundColor = "transparent";
            document.getElementById("hp-topo11").style.border = "transparent";
            document.getElementById("hp11").textContent = " "; 
            document.getElementById("puntos").style =  "padding-left: 1.6vw";
        } if (hpTopo11 <= 0){
            document.getElementById("hp11").textContent = " ";
        }     
    }   
}
function aparecerTopo11(){
    if (document.getElementById("topo11").onclick){
        
        document.getElementById("topo11").style.display = "block";  
        document.getElementById("hp-topo11").style.display = "block";     
    }
}
function desapareceGolpe11(){
    if (document.getElementById("topo11").onclick){
        document.getElementById("golpe11").style.display = "block";////////////////////////////////////aparece
        /* cambiar("golpe1").style = "transition: all 2s"; */
        setTimeout(aparecerGolpe11,Math.round(Math.random()* 1000));
        
    }
}
function aparecerGolpe11(){
    if (document.getElementById("topo11").onclick){
        document.getElementById("golpe11").style.display = "none";  
             
    }
}
function general11(){
    desaparecerTopo11();
    desapareceGolpe11();
    if (puntos == puntosPasarNivel){
        /* alert("Ganastes, eres lo maximo, como tu no hay otro!!!") */
        tiempo = 50;
        puntos = 0;
        document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
        document.getElementById("pasar_de_nivel").innerHTML = /* confirm("Nivel 4!!"),  */window.location.replace("../niveles_topoSmash/finalBoss.html");
    }
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/////////                 TOPO12                   ////
///////////////////////////////////////////////////////////////////////////
function desaparecerTopo12(){
    fx12();

    if (document.getElementById("topo12").onclick){ 
        document.getElementById("topo12").style.display = "none";
        document.getElementById("hp-topo12").style.display = "none";
        setTimeout(aparecerTopo12,Math.round(Math.random()* 5000));
        hpTopo12 = vidaTopo12 - dañoXgolpe12;
        document.getElementById("hp12").textContent = hpTopo12 + " hp";
        vidaTopo12--;
        score += 1;
        document.getElementById("puntuacion").innerHTML = "SCORE" + "<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + score;
        
        
        /* if (hpTopo12 == 3){
            document.getElementById("topo12").onclick = bala3();
        } */
        if (hpTopo12 == 5){
            document.getElementById("hp-topo12").style.backgroundColor = "lightseagree";
            document.getElementById("topo12").style.display = "none"; 
        } 
        if (hpTopo12 == 4){
            document.getElementById("hp-topo12").style.backgroundColor = "blue";
            document.getElementById("topo12").style.display = "none"; 
        } 

        if (hpTopo12 == 3){
            document.getElementById("hp-topo12").style.backgroundColor = "green";
            document.getElementById("topo12").style.display = "none";
        }
        
        if (hpTopo12 == 2){
            document.getElementById("hp-topo12").style.backgroundColor = "orange";
            document.getElementById("topo12").style.display = "none";
        }
        
        if (hpTopo12 == 1){
            document.getElementById("hp-topo12").style.backgroundColor = "red";
            document.getElementById("topo12").style.display = "none";
        }
        
        if (hpTopo12 == 0){
            puntos += puntosXmatarTopo;           
            document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
            /* document.getElementById("topo").style.display = "none"; */
            document.getElementById("topo12").src  = "../imagenes/rip.png ";
            document.getElementById("topo12").style = "width: 5.5vw; height: 4.75vw; margin-top: 5.5vw; margin-left: -6.5vw";
            document.getElementById("hp-topo12").style.backgroundColor = "transparent";
            document.getElementById("hp-topo12").style.border = "transparent";
            document.getElementById("hp12").textContent = " "; 
            document.getElementById("puntos").style =  "padding-left: 1.6vw";
        } if (hpTopo12 <= 0){
            document.getElementById("hp12").textContent = " ";
        }    
    }   
}
function aparecerTopo12(){
    if (document.getElementById("topo12").onclick){
        
        document.getElementById("topo12").style.display = "block";  
        document.getElementById("hp-topo12").style.display = "block";     
    }
}
function desapareceGolpe12(){
    if (document.getElementById("topo12").onclick){
        document.getElementById("golpe12").style.display = "block";////////////////////////////////////aparece
        /* cambiar("golpe1").style = "transition: all 2s"; */
        setTimeout(aparecerGolpe12,Math.round(Math.random()* 1000));
        
    }
}
function aparecerGolpe12(){
    if (document.getElementById("topo12").onclick){
        document.getElementById("golpe12").style.display = "none";  
             
    }
}
function general12(){
    desaparecerTopo12();
    desapareceGolpe12();
    
    if (puntos == puntosPasarNivel){
       /*  alert("Ganastes, eres lo maximo, como tu no hay otro!!!") */
        tiempo = 50;
        puntos = 0;
        document.getElementById("puntos").innerHTML = "PUNTOS " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
        document.getElementById("pasar_de_nivel").innerHTML = /* confirm("Nivel 4!!"),  */window.location.replace("../niveles_topoSmash/finalBoss.html");
        
        
  

    }
}
////////////////////////////////////////////////////////////////////////////////
//
//                  SCRIPT PARA REPRODUCIR/PAUSAR MUSICA Y STOP
//
/* var music1 = new Audio("../sonidos/9mm.mp3");
var count1 = 0;
function bala1(){
    if (document.getElementById("topo12").onclick){
        if(count1 == 0){
            count1 = 1;
            music1.play();
            
        }
    }
} */
/* function stop(){
    playPause();
    music.pause();
    music.currentTime = 0;
    
} */
///////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
/* function bala(){
    if(count == 0){
        count = 1;
        music.play();
    } *//* else{
        count = 0;
        music.pause();
    } */
/* } */


/********************************************************************************************************************** */

///////////////////////                  REPRODUCCION DE MUSICA                                  
///////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var music1 = new Audio("../sonidos/lp.mp3"); /* sonido de fondo */
var count1 = 0;

function iniciarJuego(){
    if (document.getElementById("iniciarJuego").onclick){
        document.getElementById("contenedorInicioJuego").style.display = "none";
        document.getElementById("contenedorInicioNivel1").style.display = "block";
        restarTiempo();
        setInterval(restarTiempo, 1000);
        if(count1 == 0){
            count1 = 1;
            music1.play();
            music1.volume = 0.5;
            music1. loop = true;
            /* music1.playbackRate = 1.5; */ /* para aumentar la velocidad de reproduccion 1 por defecto*/
        }else{
            count1 = 0;
            music1.pause();
        }

    }
}
function stop(){
    musicaFondo();
    music1.pause();
    music1.currentTime = 0;
    
}

function optionMusica(){
    if (document.getElementById("musica").onclick){
        document.getElementById("musica").style.display = "none";
        document.getElementById("pausa-play").style.display = "block";
        document.getElementById("stop").style.display = "block";
    }
}


function musicaFondo(){

if (document.getElementById("pausa-play").onclick){
        if(count1 == 0){
            count1 = 1;
            music1.play();
            music1.loop = true;
            music1.volume = 0.5;
            document.getElementById("pausa-play").innerHTML = "PAUSE";
        }else{
            count1 = 0;
            music1.pause();
            document.getElementById("pausa-play").innerHTML = "PLAY";
        }
    } 
} 
function stop(){
    musicaFondo();
    music1.pause();
    music1.currentTime = 0;
    
} 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                           EFECTOS DE SONIDO

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var efecto1 = new Audio("../sonidos/golpe.mp3"); /* sonido bala */
var efect1 = 0;
function fx1(){
    if (document.getElementById("topo1").onclick){
            if(efect1 == 0){
                efect1 = 1;
                efecto1.play();
                efecto1.playbackRate = 1;
                efecto1.volume = 0.3; /* volumen efecto 0= mute 1=maximo volumen */
                
                /* setTimeout(stop, Math.random()*50); */

            /* }if(efect1 == 1){
                efect1 = 0;
                efecto1.play();
                efecto1.playbackRate = 1; */
            }else{
                efect1 = 0;
                efecto1.play();
                efecto1.playbackRate = 1;
            }
        } 
    } 
    function stop(){
        fx1();
        efecto1.pause();
        efecto1.currentTime = 0;
        
    }
   /*  function resetfx(){
        if (document.getElementById("topo1").onclick){
            efect1 = 0;
        }
    } */
    /* setTimeout(aparecerTopo12,Math.round(Math.random()* 5000));
    function aparecerTopo12(){
        if (document.getElementById("topo12").onclick){
            
            document.getElementById("topo12").style.display = "block";  
            document.getElementById("hp-topo12").style.display = "block";     
        }
    }   */
var efecto2 = new Audio("../sonidos/golpe.mp3"); /* sonido bala */
var efect2 = 0;
function fx2(){
if (document.getElementById("topo2").onclick){
    if(efect2 == 0){
        efect2 = 1;
        efecto2.play();
        efecto2.playbackRate = 1;
        efect2 = 0;
        efecto2.volume = 0.3;
    }else{
        efect2 = 0;
        efecto2.play();
        efecto2.playbackRate = 1;
        }
    } 
}
var efecto3 = new Audio("../sonidos/golpe.mp3"); /* sonido bala */
var efect3 = 0;
function fx3(){
if (document.getElementById("topo3").onclick){
    if(efect3 == 0){
        efect3 = 1;
        efecto3.play();
        efecto3.playbackRate = 1;
        efect3 = 0;
        efecto3.volume = 0.3;
    }else{
        efect3 = 0;
        efecto3.play();
        efecto3.playbackRate = 1;
        }
    } 
} 
var efecto4 = new Audio("../sonidos/golpe.mp3"); /* sonido bala */
var efect4 = 0;
function fx4(){
if (document.getElementById("topo4").onclick){
    if(efect4 == 0){
        efect4 = 1;
        efecto4.play();
        efecto4.playbackRate = 1;
        efect4 = 0;
        efecto4.volume = 0.3;
    }else{
        efect4 = 0;
        efecto4.play();
        efecto4.playbackRate = 1;
        }
    } 
} 
var efecto5 = new Audio("../sonidos/golpe.mp3"); /* sonido bala */
var efect5 = 0;
function fx5(){
if (document.getElementById("topo5").onclick){
    if(efect5 == 0){
        efect5 = 1;
        efecto5.play();
        efecto5.playbackRate = 1;
        efect5 = 0;
        efecto5.volume = 0.3;
    }else{
        efect5 = 0;
        efecto5.play();
        efecto5.playbackRate = 1;
        }
    } 
} 
var efecto6 = new Audio("../sonidos/golpe.mp3"); /* sonido bala */
var efect6 = 0;
function fx6(){
if (document.getElementById("topo6").onclick){
    if(efect6 == 0){
        efect6 = 1;
        efecto6.play();
        efecto6.playbackRate = 1;
        efect6 = 0;
        efecto6.volume = 0.3;
    }else{
        efect6 = 0;
        efecto6.play();
        efecto6.playbackRate = 1;
        }
    } 
} 
var efecto7 = new Audio("../sonidos/golpe.mp3"); /* sonido bala */
var efect7 = 0;
function fx7(){
if (document.getElementById("topo7").onclick){
    if(efect7 == 0){
        efect7 = 1;
        efecto7.play();
        efecto7.playbackRate = 1;
        efect7 = 0;
        efecto7.volume = 0.3;
    }else{
        efect7 = 0;
        efecto7.play();
        efecto7.playbackRate = 1;
        }
    } 
} 
var efecto8 = new Audio("../sonidos/golpe.mp3"); /* sonido bala */
var efect8 = 0;
function fx8(){
if (document.getElementById("topo8").onclick){
    if(efect8 == 0){
        efect8 = 1;
        efecto8.play();
        efecto8.playbackRate = 1;
        efect8 = 0;
        efecto8.volume = 0.3;
    }else{
        efect8 = 0;
        efecto8.play();
        efecto8.playbackRate = 1;
        }
    } 
} 
var efecto9 = new Audio("../sonidos/golpe.mp3"); /* sonido bala */
var efect9 = 0;
function fx9(){
if (document.getElementById("topo9").onclick){
    if(efect9 == 0){
        efect9 = 1;
        efecto9.play();
        efecto9.playbackRate = 1;
        efect9 = 0;
        efecto9.volume = 0.3;
    }else{
        efect9 = 0;
        efecto9.play();
        efecto9.playbackRate = 1;
        }
    } 
} 
var efecto10 = new Audio("../sonidos/golpe.mp3"); /* sonido bala */
var efect10 = 0;
function fx10(){
if (document.getElementById("topo10").onclick){
    if(efect10 == 0){
        efect10 = 1;
        efecto10.play();
        efecto10.playbackRate = 1;
        efect10 = 0;
        efecto10.volume = 0.3;
    }else{
        efect10 = 0;
        efecto10.play();
        efecto10.playbackRate = 1;
        }
    } 
} 
var efecto11 = new Audio("../sonidos/golpe.mp3"); /* sonido bala */
var efect11 = 0;
function fx11(){
if (document.getElementById("topo11").onclick){
    if(efect11 == 0){
        efect11 = 1;
        efecto11.play();
        efecto11.playbackRate = 1;
        efect11 = 0;
        efecto11.volume = 0.3;
    }else{
        efect11 = 0;
        efecto11.play();
        efecto11.playbackRate = 1;
        }
    } 
} 
var efecto12 = new Audio("../sonidos/golpe.mp3"); /* sonido bala */
var efect12 = 0;
function fx12(){
if (document.getElementById("topo12").onclick){
    if(efect12 == 0){
        efect12 = 1;
        efecto12.play();
        efecto12.playbackRate = 1;
        efect12 = 0;
        efecto12.volume = 0.3;    /* subir y bajar volumen 0 = mute  1 =volume maximo */
    }else{
        efect12 = 0;
        efecto12.play();
        efecto12.playbackRate = 1;
        }
    } 
} 
/**************************************************************************** */
function mueveReloj(){
    document.getElementById("puntos").innerHTML =  "PUNTOS " + "&nbsp;&nbsp;&nbsp;" + puntos + "/" + puntosPasarNivel;
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

//.. agregando estos parametros 
    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible
    setTimeout("mueveReloj()",1000)
}