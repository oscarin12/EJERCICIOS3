function validarCampo() {
    const form = document.getElementById("from-conter");
    const campos = form.querySelectorAll(
      "input[data-validacion], select[data-validacion]"
    );
  
    for (let i = 0; i < campos.length; i++) {
      const campo = campos[i];
      const tipoValidacion = campo.dataset.validacion;
      const valorCampo = campo.value.trim();
  
      switch (tipoValidacion) {
        case "texto":
          if (valorCampo.trim() === "") {
            agregarMensajeError("Este campo es requerido.");
            return;
        } else if (valorCampo.trim().length < 3) {
            agregarMensajeError("Este campo debe tener al menos 3 caracteres.");
            return;
        }
          break;
        case "email":
          if (!validarEmail(valorCampo)) {
            agregarMensajeError("Ingrese un correo electrónico válido.");
            return;
          }
          break;
          case "rut":
            if (!validarRut(valorCampo)) {
              agregarMensajeError("Ingrese un Rut válido.");
              return;
            }
            break;
        case "numero_entero":
          if (!validarNumeroEntero(valorCampo)) {
            agregarMensajeError("Ingrese un número entero válido y un rango del 0 al 100.");
            return;
          }
          break;
        case "numero_decimal":
          const regexNumeroDecimal = /^\d+(\.\d+)?$/;
          if (!regexNumeroDecimal.test(valorCampo)) {
            agregarMensajeError("Ingrese un número decimal válido.");
            return;
          }
          break;
        case "longitud_texto":
          const minLength = campo.dataset.minLength
            ? parseInt(campo.dataset.minLength, 3)
            : 0;
          const maxLength = campo.dataset.maxLength
            ? parseInt(campo.dataset.maxLength, )
            : Infinity;
          if (valorCampo.length < minLength || valorCampo.length > maxLength) {
            agregarMensajeError(`El campo debe tener entre ${minLength} y ${maxLength} caracteres.`);
            return;
          }
          break;
        case "seleccion_obligatoria":
          if (campo.value === "") {
            agregarMensajeError("Seleccione una opción.");
            return;
          }
          break;
        case "checkbox_obligatorio":
          if (!campo.checked) {
            agregarMensajeError("Debe aceptar los términos y condiciones.");
            return;
          }
          break;

      }
    }
    alert("Formulario validado correctamente");
  }
  
  // Función para agregar un mensaje de error al campo
  function agregarMensajeError(mensaje) {
    alert(mensaje);
  }