// asignar elemento a un empleado
document.addEventListener('DOMContentLoaded', function () {
    cargarEmpleados();
    cargarElementos();
  });
  
  function cargarEmpleados() {
    const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    const empleadoselect = document.getElementById('empleadoselect');
  
    empleados.forEach((empleados, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.text = `${empleados.nombre} ${empleados.apellido}`;
      empleadoselect.add(option);
    });
  }
  
  function cargarElementos() {
    const elementos = JSON.parse(localStorage.getItem('elementos')) || [];
    const elementoselect = document.getElementById('elementoselect');
  
    elementos.forEach((elementos, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.text = elementos.nombre;
      elementoselect.add(option);
    });
  }
  
  function asignarElemento() {
    const empleadosIndex = document.getElementById('empleadoselect').value;
    const elementosIndex = document.getElementById('elementoselect').value;
  
    const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    const elementos = JSON.parse(localStorage.getItem('elementos')) || [];
  
    if (empleadosIndex && elementosIndex) {
      empleados[empleadosIndex].assignedElement = elementos[elementosIndex].nombre;
      localStorage.setItem('empleados', JSON.stringify(empleados));
      alert('Elemento asignado con éxito.');
    } else {
      alert('Por favor, seleccione un empleado y un elemento.');
    }
  }