var usuarios = [];

function cargarUsuario() {
    // Obtengo los valores del formulario
    var nombreusuario = document.getElementById('nombreusuario').value;
    var apellidousuario = document.getElementById('apellidousuario').value;
    var edadusuario = document.getElementById('edadusuario').value;
    var dniusuario = document.getElementById('dniusuario').value;

    // Creo un objeto JSON con los datos del usuario
    var usuario = {
        nombre: nombreusuario,
        apellido: apellidousuario,
        edad: edadusuario,
        dni: dniusuario
    };

    // Agregamos el usuario al array
    usuarios.push(usuario);

    // información en la página
    mostrarInformacion(usuario);

    // array a formato JSON y almacenamos en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}


// información del usuario en la página
function mostrarInformacion(usuario) {
    var userInfoDiv = document.getElementById('userInfo');

    // información en el div
    userInfoDiv.innerHTML = '<h2>Información del Último Usuario:</h2><p><strong>Nombre de usuario:</strong> ' + usuario.nombre + '</p><p><strong>Correo electrónico:</strong> ' + usuario.apellido + '</p> <p><strong>Nombre de usuario:</strong> ' + usuario.edad + '</p> <p><strong>Nombre de usuario:</strong> ' + usuario.dni + '</p>';
}

