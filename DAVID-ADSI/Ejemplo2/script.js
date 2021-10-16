// var contador=0;
// var timeInterval = window.setInterval(function(){
//     console.log(contador);
//     contador++;
//     if(contador > 5){
//         window.clearInterval(timeInterval);
//     }
// }, 2000)

function formato(numero){
    if (numero < 10){
        return "0" + numero.toString();
    }else{
        return numero.toString();
    }
}
window.setInterval(function(){
    var tiempoActual=new Date();
    var horas=tiempoActual.getHours();
    var minutos=tiempoActual.getMinutes();
    var segundos=tiempoActual.getSeconds();

    document.getElementById("hours").innerHTML= formato(horas);
    document.getElementById("minutes").innerHTML = formato(minutos);
    document.getElementById("seconds").innerHTML = formato(segundos);
},1000)




/*document.getElementById("seconds").innerHTML;
var segundos=0;
var timeInterval = window.setInterval(function(){
    segundos++;
    document.getElementById("seconds").innerHTML=segundos;
    if(segundos > 60){
        window.clearInterval(timeInterval);
    }
}, 1000)

document.getElementById("minutes").innerHTML;
var minutos=0;
var timeInterval = window.setInterval(function(){
    minutos++;
    document.getElementById("minutes").innerHTML=minutos;
    if(minutos > 60){
        window.clearInterval(timeInterval);
    }
}, 60000)

document.getElementById("hours").innerHTML;
var horas=0;
var timeInterval = window.setInterval(function(){
    horas++;
    document.getElementById("hours").innerHTML=horas;
    if(horas > 60){
        window.clearInterval(timeInterval);
    }
}, 3600000)*/

