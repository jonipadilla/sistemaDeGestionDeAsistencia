// registrar empleado
function registrarEmpleado() {
    const nombreEmpleado = document.getElementById('nombreEmpleado').value;
    const apellidoEmpleado = document.getElementById('apellidoEmpleado').value;
    const edadEmpleado = document.getElementById('edadEmpleado').value;
    const dniEmpleado = document.getElementById('dniEmpleado').value;
  
    if (
      nombreEmpleado.trim() !== '' &&
      apellidoEmpleado.trim() !== '' && 
      edadEmpleado.trim() !== '' && 
      dniEmpleado.trim() !== ''
      ) {
      const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
      empleados.push({ 
        nombre: nombreEmpleado, 
        apellido:apellidoEmpleado,
        edad:edadEmpleado,
        dni:dniEmpleado,
        assignedElement: null 
      });
      
      localStorage.setItem('empleados', JSON.stringify(empleados));
      alert('Empleado registrado con éxito.');
    } else {
      alert('Por favor, ingrese un nombre de empleado válido.');
    }

    document.getElementById('formularioEmpleado').reset();
  }  

