function checkLogin() {
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  if (usernameInput === 'admin' && passwordInput === 'admin') {
    window.location.href = 'index.html';
  } else {
    alert('Credenciales incorrectas. Intenta de nuevo.');
  }
}




// function checkLogin() {
//   const usernameInput = document.getElementById('username').value;
//   const passwordInput = document.getElementById('password').value;


//   fetch("./usuarioContraseña.json")
//     .then(response => response.json())
//     .then(usuarioContraseña => {
//       const validarsesion = usuarioContraseña.find(usuario => usuario.nombreUsuario === usernameInput && usuario.contraseñaUsuario === passwordInput);
//       console.log(validarsesion);
//       if (validarsesion) {       
//         window.location.href = 'index.html';
//       } else {
//         alert('Credenciales incorrectas. Intenta de nuevo.');
//       }
//     })
//     .catch(error => {
//       console.error('Error al cargar el archivo JSON:', error);
//       alert('Error al intentar iniciar sesión. Por favor, intenta de nuevo.');
//     });
// }



