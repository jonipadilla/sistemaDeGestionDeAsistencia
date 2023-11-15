let nombre;
let edad;
let dni;
let sexo;
var sumaEdades = 0;
let opcion = 0;
let sexoMasculino = 0;
let sexoFemenino = 0;
let m = 'm';
let f = 'f';
let mayorEdad = 0;
let menorEdad = 0;

do {

    opcion = parseInt(prompt("Seleccione 1 para registrar un nuevo usuario ó 2 para salir:"));

    if (opcion === 1) {

        // Solicita nombre
        nombre = prompt("Ingrese el nombre del empleado:");

        // Solicita edad
        edad = prompt("Ingrese la edad del empleado:");

        // Solicita DNI
        dni = prompt("Ingrese el DNI del empleado:");

        //Solicita Sexo
        sexo = prompt("Ingrese el sexo: para masculino M ó Femenino F");

        // Validar que no se ingresen datos vacíos
        if (!nombre || !edad || !dni) {
            alert("Por favor, ingrese todos los datos. Inténtelo nuevamente.");

        }
        // sumaEdades = sumaEdades + parseInt(edad);

        if(sexo===m){
            sexoMasculino ++;
        }
        else if (sexo === f){
            sexoFemenino ++;
        }

        if (edad>=40) {
            mayorEdad ++;
        }
        else
            menorEdad ++;
    }


} while (opcion !== 2);


// Mostrar los datos ingresados
console.log("\nDatos del empleado:");
console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("DNI: " + dni);
console.log("Suma de edades" + sumaEdades);
console.log("Empleados Sexo Masculino: " + sexoMasculino);
console.log("Empleados Sexo Femenino: " + sexoFemenino);
console.log("Empleados Mayores a 40 años: " + mayorEdad);
console.log("Empleados Menores a 40 años: " + menorEdad);