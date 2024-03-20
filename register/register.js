document.addEventListener('DOMContentLoaded', function () {
  var registerButton = document.getElementById('registerButton');
  registerButton.addEventListener('click', function () {
    var formData = {
      name: document.getElementById('name').value,
      lastname: document.getElementById('lastname').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      confirmPassword: document.getElementById('confirmPassword').value,
      pin: document.getElementById('pin').value,
      role: document.getElementById('role').value,
      country: document.getElementById('country').value,
      birthday: document.getElementById('birthday').value
    };
    if (Object.values(formData).some(value => value === '')) {
      alert('Por favor, complete todos los campos.');
      return;
    }
    fetch('http://localhost:8080/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
      return response.json();
    }).then(data => {
      // Manejar la respuesta del servidor
      console.log(data);
      alert('Usuario registrado exitosamente');
      window.location.href = "../authentication/autenticathion.html";
    })
      .catch(error => {
        // Manejar errores de la solicitud
        console.error('Error al registrar el usuario:', error);
        alert('Hubo un error al registrar el usuario');
      });
  });
});
