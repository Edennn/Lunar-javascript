//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
//NAVE
var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;
//DIFICULTAD
var d = 1;





//al cargar por completo la página...
window.onload = function(){
	
	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("fuel");
	
facil.onclick = function (){ d=1 };
dificil.onclick = function () { d=2 };



	

	
	
	//definición de eventos	
	//mostrar menú móvil
    	document.getElementById("indicadores").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("menu").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	//encender/apagar el motor al hacer click en la pantalla
	motor.onclick = function () {
		if (((a==g)&&(c>0)&&(y<70))){
  		motorOn();
 	  } else if(y<70) {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = function () {
		if ((c>0)&&(y<70)) {
		motorOn();
		}
		if (y<70) document.onkeyup = motorOff;
	}
	
	
	//Empezar a mover la nave justo después de cargar la página
	start() ;
}

//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
	 if ((((v<2)&&(d==2)||(v<5)&&(d==1)))){
  window.alert("WIN!!!!");
   } else  {
  document.getElementById("naveapagada").src = "img/explosion.gif";
   }
}
	
	

function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	//actualizar marcadores
	velocidad.innerHTML=v;
	altura.innerHTML=y;
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop();
	}
}
function motorOn(){
	//el motor da aceleración a la nave
	a=-g;
	document.getElementById("naveapagada").src = "img/naveencendida.png";
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);
	
}
function motorOff(){
	a=g;
	document.getElementById("naveapagada").src = "img/nave.png";
	clearInterval(timerFuel);
	timerFuel=null;
}
function actualizarFuel(){
	//Restamos combustible hasta que se agota
	c-=0.1;
	if (c < 0 ) motorOff();
	if (c<0) c=0;
	combustible.innerHTML=c;
}




	


			
		
