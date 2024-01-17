// registrar elemento
function registrarElemento() {
    const nombreElemento = document.getElementById('nombreElemento').value;
  
    if (nombreElemento.trim() !== '') {
      const elementos = JSON.parse(localStorage.getItem('elementos')) || [];
      elementos.push({ nombre: nombreElemento });
      localStorage.setItem('elementos', JSON.stringify(elementos));
      alert('Elemento registrado con éxito.');
    } else {
      alert('Por favor, ingrese un nombre de elemento válido.');
    }
  
    document.getElementById('formularioElemento').reset();
  }