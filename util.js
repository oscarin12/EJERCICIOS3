function validarNumeroEntero(valor) {
   
    if (/^\d+$/.test(valor)) {
        var numero = parseInt(valor, 10); 
        return numero >= 0 && numero <= 100;
    } else {
        return false; 
    }
}


// Función para validar si un valor es un correo electrónico válido
function validarEmail(valor) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(valor);
}
// verificaciones de rut
function varificarEstructuraRut(rut) {
    const expresionRegular = /^[0-9]{7,8}-[0-9Kk]$/;
    return expresionRegular.test(rut);
  }

  function calcularDigitoVerifiador(rut) {
    let M = 0;
    let S = 1;
    for (; rut; rut = Math.floor(rut / 10))
      S = (S + (rut % 10) * (9 - (M++ % 6))) % 11;
    return S ? S - 1 : "k";
  }

  function validarRut(rutCompleto) {
    if (!varificarEstructuraRut(rutCompleto)) {
      return false;
    }
    const temp = rutCompleto.split("-");
    const rut = temp[0];
    let digitoVerificador = temp[1];

    // pasar el digito a minuscula si es K
    if (digitoVerificador == "K") digitoVerificador = "k";
    return calcularDigitoVerifiador(rut) == digitoVerificador;
  }


  let selectR = document.getElementById("regionSelect");

  selectR.addEventListener("change", habilitarComunas);

  function habilitarComunas() {
    const comuna = document.getElementById("comuna");
    if(selectR.value){
        console.log(comuna);
        comuna.disabled= false ;
        console.log(comuna);
    }else{
      comuna.disabled = true;

    }
      
      
  }