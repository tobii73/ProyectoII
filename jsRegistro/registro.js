class Usuario {
  constructor(id, email, password) {
    this.id = id;
    //this.nombre = nombre;
    this.email = email;
    this.password = password;
  }
}

//const tablaUsuarios = document.querySelector('#tablaUsuarios');
const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

function validateYRegistrarUsuario(event, form) {
  event.preventDefault();
  // Validar los campos aquí
  if (validate(form)) {
    //    console.log(form.email.value, form.pass.value, 'datos del usuario dentro de VALIDACION Y REGISTRO DE USUARIO');

    registrarUsuario(form);
  } else {
    // Si la validación falla, puedes mostrar un mensaje de error o realizar otras acciones
    console.log("Error en la validación");
  }
}

function validate(form) {
  var exp_regular =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var exp_regular_pass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  //Test para comprobar que el campo email cumpla con la expresion regular
  if (!form.email.value) {
    document.getElementById("error_email").innerHTML =
      "Debe completar el campo de Email*";
    return false;
  } else {
    if (!exp_regular.test(form.email.value)) {
      document.getElementById("error_email").innerHTML = "Email incorrecto*";
      return false;
    } else {
      const comprobandoEmail = usuariosRegistrados.find(function (usuario) {
        return usuario.email === form.email.value;
      });
      console.log(usuariosRegistrados, 'usuarios registrados');
      console.log(comprobandoEmail, 'comprobando email');
      if (comprobandoEmail) {
        alert("mail ya registrado");
        return;
      }

      if (comprobandoEmail !== undefined) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El Correo ingresado ya esta Registrado!"
        });
        return;
      }

      document.getElementById("error_email").innerHTML = "";
    }
  }

  //Comprobamos si el campo contraseña  esta vacio
  if (form.pass.value.trim().length == 0) {
    document.getElementById("error_pass").innerHTML = "Contraseña obligatoria*";
    return false;
  } else {
    if (!exp_regular_pass.test(form.pass.value)) {
      document.getElementById("error_pass").innerHTML =
        "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.";
      return false;
    } else {
      document.getElementById("error_pass").innerHTML = "";
    }
  }

  //comprobamos si la contraseña tienes menos de 8 carateres.
  if (form.pass.value.trim().length <= 8) {
    document.getElementById("error_pass").innerHTML =
      "La contraseña debe tener mas de 8 caracteres*";
    return false;
  } else {
    document.getElementById("error_pass").innerHTML = "";
  }

  //comprobamos si las contraseñas no coinciden.
  if (form.pass.value != form.pass_confir.value) {
    document.getElementById("error_pass_confir").innerHTML =
      "Las contraseñas no coinciden*";
    return false;
  } else {
    document.getElementById("error_pass_confir").innerHTML = "";
  }

  //Comprobamos si el check terminos  no esta checked
  if (!form.terminos.checked) {
    document.getElementById("error_terminos").innerHTML =
      "Debe aceptar los términos y condiciones*";
    return false;
  } else {
    document.getElementById("error_terminos").innerHTML = "";
  }

  console.log(
    form.email.value,
    form.pass.value,
    "datos del usuario dentro de VALIDATE"
  );

  //enviamos una alerta personalizada de registro exitoso y bienvenida
  document.getElementById("alerta_bienvenido").innerHTML = alerta(
    "Tu registro fue exitoso Bienvenido a TREKKING BAGS",
    "primary"
  );
  return true;
}
//definimos una funcion que retorna un alert, recibe como parametros el texto del alert y el tipo de alerta (primary, danger, warning etc)
function alerta(texto, tipo) {
  var html = `
  <div class="alert alert-${tipo}" role="alert">
  ${texto}
      
  </div>`;
  return html;
}

function registrarUsuario(form) {
  //e.preventDefault();
  const id = Date.now();
  var email = form.email.value;
  var pass = form.pass.value;

  //const email = document.querySelector('#email').value;
  //const pass = document.querySelector('#pass').value;

  // Obtener los valores del formulario utilizando el DOM
  //console.log(form.email.value, form.pass.value, 'datos del usuario dentro de REGISTRANDO USUARIO');

  const newUser = new Usuario(id, email, pass);
  usuariosRegistrados.push(newUser);

  localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));

  form.reset();
}
