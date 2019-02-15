let piedra=document.getElementById("piedra");
let valorElejido;
let valorComputadora;
let valorAlAzar;
let contador=0;
let contadorPantalla=document.getElementById("contadorPantalla")

function elejistePiedra(){
    alert("Elegiste piedra");
    valorElejido="piedra";
    console.log("piedra");
    compjutadora();
    juego();
};
function elejistePapel(){
    alert("Elegiste papel");
    valorElejido="papel";
    console.log("papel");
    compjutadora();
    juego();
}
function elejisteTijera(){
    alert("Elegiste tijera");
    valorElejido="tijera";
    console.log("tijera");
    compjutadora();
    juego();
};
function compjutadora(){
    valorAlAzar=Math.random();
    if(valorAlAzar<=0.33){
        valorComputadora="piedra";
        console.log("piedra");
        alert("La computadora eligio piedra");
    }
    else if(valorAlAzar<=0.66){
        valorComputadora="papel"
        console.log("papel");
        alert("La computadora eligio papel");
    }
    else if(valorAlAzar<=0.99){
        valorComputadora="tijera";
        console.log("tijera");
        alert("La computadora eligio tijera");
    }
};

function juego(){
    if(valorElejido===valorComputadora){
        alert("Empate");
    }
    else if(valorElejido==="piedra" && valorComputadora==="papel"){
        alert("Perdiste");
        contador--;
        contadorPantalla.innerHTML=contador;
    }
    else if(valorElejido==="piedra" && valorComputadora==="tijera"){
        alert("Ganaste");
        contador++;
        contadorPantalla.innerHTML=contador;
    }
    else if(valorElejido==="papel" && valorComputadora==="tijera"){
        alert("Perdiste");
        contador--;
        contadorPantalla.innerHTML=contador;
    }
    else if(valorElejido==="papel" && valorComputadora==="piedra"){
        alert("Ganaste");
        contador++;
        contadorPantalla.innerHTML=contador;
    }
    else if(valorElejido==="tijera" && valorComputadora==="papel"){
        alert("Ganaste");
        contador++;
        contadorPantalla.innerHTML=contador;
    }
    else if(valorElejido==="tijera" && valorComputadora==="piedra"){
        alert("Perdiste");
        contador--;
        contadorPantalla.innerHTML=contador;
    }

};
