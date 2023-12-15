class Usuario{
    nombre;
    apellido;
    edad;
    dni;
    
    constructor(nombre,apellido,edad,dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
    }
}


    
let opcion = 0;
let cantidadusuario = 0;
opcion = parseInt(prompt("Seleccione 1 para registrar un nuevo usuario ó 2 para salir:"));
cantidadusuario = parseInt(prompt("Ingrese la cantidad de usuarios a registrar:"));

if (opcion !== 2){

    const listaUsuarios = [];

    function agregarUsuario(nombre, apellido, dni, edad, genero) {
        const nuevoUsuario = new Usuario(nombre, apellido, dni, edad, genero);
        listaUsuarios.push(nuevoUsuario);
    }


    for (let i = 0; i < cantidadusuario; i++) {
  
        agregarUsuario(
            Usuario.nombre = prompt("ingrese Nombre"),
            Usuario.apellido = prompt("Ingrese Apellido"),
            Usuario.dni = prompt("Ingrese Dni"),
            Usuario.edad = prompt("Ingrese Edad"),
            Usuario.genero = prompt("Ingrese Genero")
        );

    }
    
    listaUsuarios.forEach(element => {
        console.log(`Nombre: ${element.nombre}, Apellido: ${element.apellido}, DNI: ${element.dni}, Edad: ${element.edad}, Genero: ${element.genero}`);
    });


    //Busqueda

    function buscarUsuariosPorNombre(nombreBuscado) {
        const usuariosEncontrados = listaUsuarios.filter(
          usuario => usuario.nombre.toLowerCase() === nombreBuscado.toLowerCase()
        );
      
        return usuariosEncontrados;
      }
      
      let nombreABuscar = prompt("ingrese el nombre a buscar");
      const usuariosEncontrados = buscarUsuariosPorNombre(nombreABuscar);
      
      if (usuariosEncontrados.length > 0) {
        console.log(`Usuarios encontrados con el nombre ${nombreABuscar}:`);
        usuariosEncontrados.forEach(element => {
          console.log(`Nombre: ${element.nombre}, Apellido: ${element.apellido}, DNI: ${element.dni}, Edad: ${element.edad}, Genero: ${element.genero}`);
        });
      } else {
        console.log(`No se encontraron usuarios con el nombre ${nombreABuscar}.`);
      }

}
    



