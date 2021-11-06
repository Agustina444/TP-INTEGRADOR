"use strict"

document.getElementById("cuestionario").onsubmit = function () {
var acumulador=0;
	
		var true1=document.getElementById("true1");
		var false1=document.getElementById("false1");
		if (document.getElementById("preg1opc1").checked){
			true1.innerHTML="CORRECTA";
			++acumulador;
		}
		else { false1.innerHTML="INCORRECTA"; }
		
		var true2 = document.getElementById("true2");
		var false2 = document.getElementById("false2");
		if (document.getElementById("preg2opc1").checked){
			true2.innerHTML="CORRECTA";
			++acumulador;
		}
		else { false2.innerHTML="INCORRECTA"; }

		var true3 = document.getElementById("true3");
		var false3 = document.getElementById("false3");
		if (document.getElementById("anio").value =="2001"){
			true3.innerHTML="CORRECTA";
			++acumulador;	
		}
		else { false3.innerHTML="INCORRECTA"; }

		var true4 = document.getElementById("true4");
		var false4 = document.getElementById("false4");
		if (document.getElementById("preg4").value == "La Orden del Fenix" || document.getElementById("preg4").value == "la orden del fenix"){
			true4.innerHTML="CORRECTA";
			++acumulador;	
		}
		else { false4.innerHTML="INCORRECTA";}

		var true5 = document.getElementById("true5");
		var false5 = document.getElementById("false5");
		if (document.getElementById("preg5opc1").checked && document.getElementById("preg5opc3").checked && document.getElementById("preg5opc4").checked) {
			true5.innerHTML="CORRECTA";
			++acumulador;
		}
		else { false5.innerHTML="INCORRECTA";}

		var true6 = document.getElementById("true6");
		var false6 = document.getElementById("false6");
		if (document.getElementById("preg6opc3").checked){
			true6.innerHTML="CORRECTA";
			++acumulador;
		}
		else { false6.innerHTML="INCORRECTA";}

		var true7 = document.getElementById("true7");
		var false7 = document.getElementById("false7");
		if (document.getElementById("preg7opc1").checked){
			true7.innerHTML="CORRECTA";
			++acumulador;	
		}
		else { false7.innerHTML="INCORRECTA"; }

		var true8 = document.getElementById("true8");
		var false8 = document.getElementById("false8");
		if (document.getElementById("cantidad").value == "7"){
			true8.innerHTML="CORRECTA";
			++acumulador;
		}
		else { false8.innerHTML="INCORRECTA"; }

		var true9 = document.getElementById("true9");
		var false9 = document.getElementById("false9");
		if (document.getElementById("preg9opc4").checked){
			true9.innerHTML="CORRECTA";
			++acumulador;
		}
		else { false9.innerHTML="INCORRECTA"; }

		var true10 = document.getElementById("true10");
		var false10 = document.getElementById("false10");
		if (document.getElementById("preg10opc2").checked){
			true10.innerHTML="CORRECTA";
			++acumulador;
		}
		else { false10.innerHTML="INCORRECTA"; }
		
		var frase;
		if (acumulador <= 5){
			frase = " ¿Realmente eres fan de Harry Potter?";
		}	
		if ( acumulador >= 6 && acumulador <= 8 ){
			frase = " ¡Muy bien!";
		}
		if (acumulador >= 9 ){
			frase = " ¡Eres un auténtico fan de Harry Potter!";
		}
		document.getElementById("btnEnviar").style.display="none";
		document.getElementById("ventanaPuntaje").style.display="block";
		document.getElementById("ventanaPuntaje").innerHTML += `Su puntaje es: ${acumulador}${frase}`;
		
return false;
}