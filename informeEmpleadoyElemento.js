// listado de empleados con elementos asignados
document.addEventListener('DOMContentLoaded', function () {
    displayempleados();
  });
  
  function displayempleados() {
    const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    const tableBody = document.getElementById('empleadoTableBody');
  
    // Limpiar la tabla antes de agregar nuevos datos
    tableBody.innerHTML = '';
  
    empleados.forEach(empleado => {
      const row = tableBody.insertRow();
      const cellName = row.insertCell(0);
      const cellApellido = row.insertCell(1);
      const cellEdad = row.insertCell(2);
      const cellDni = row.insertCell(3);
      const cellAssignedElement = row.insertCell(4);
  
      cellName.textContent = empleado.nombre;
      cellApellido.textContent = empleado.apellido;
      cellEdad.textContent = empleado.edad;
      cellDni.textContent = empleado.dni;
      cellAssignedElement.textContent = empleado.assignedElement || 'No asignado';
    });
  }