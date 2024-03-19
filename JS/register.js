/* 
document.querySelector("#createUser").addEventListener("click", saveUser);
function saveUser() {
  let name = document.querySelector("#name").value;
  let lastName = document.querySelector("#lastName").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirmPassword").value;
  let pin = document.querySelector("#pin").value;
  let country = document.querySelector("#country").value;
  let birthday = document.querySelector("#birthay").value;
  if (name && lastName && email && password && confirmPassword && pin && country && birthday) {
    if (password == confirmPassword) {
      const newUser = {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        pin: pin,
        country: country,
        birthday: birthday,
        speedAverage: "",
        aboutMe: "",
      };
      console.log(newUser);
      let users = getUsers();
      users.push(newUser);
      localStorageUserList(users);

      alert("¡Se ha registrado exitosamente!"); //You have successfully registered!
      document.querySelector("#name").value = "";
      document.querySelector("#lastName").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#password").value = "";
      document.querySelector("#confirmPassword").value = "";
      document.querySelector("#pin").value = "";
      document.querySelector("#country").value = "";
      document.querySelector("#birthday").value = "";
    } else {
      alert("¡Las contraseñas no coinciden!"); //Passwords do not match.
    }
  } else {
    alert("Debes llenar todos los espacios"); //You must fill all the spaces
  }
}

function getUsers() {
  const storedList = localStorage.getItem("localUserList");
  if (storedList != null) {
    return JSON.parse(storedList);
  }
  return [];
}

function localStorageUserList(users) {
  localStorage.setItem("localUserList", JSON.stringify(users));
} */
document.addEventListener('DOMContentLoaded', function () {
  var loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('click', function () {
    var name = document.getElementById('email').value;
    var lastName = document.getElementById('email').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('email').value;
    var confirmPassword = document.getElementById('email').value;
    var pin = document.getElementById('email').value;
    var country = document.getElementById('email').value;
    var birthday = document.getElementById('email').value;
    if (!name || !lastName || !email || !password ||!confirmPassword
      || !pin || !country || !birthday) {
      alert("Por favor, ingrese todos los datos.");

      return;
  }

      /* var formData = new FormData(registerForm); // Obtiene los datos del formulario
      var formObject = {}; */ // Objeto para almacenar los datos del formulario

      // Convierte los datos del formulario a un objeto
      /* formData.forEach(function (value, key) {
          formObject[key] = value;
      }); */

      // Envía los datos del formulario a la API
      fetch('http://localhost:8080/api/users', {
          method: 'POST',
          body: JSON.stringify({ name, lastName, email, password,
          confirmPassword, pin, country, birthday }),
          headers: {
              'Content-Type': 'application/json'},
          
      }).then(response => response.json()
      )
      .then(data=> {
        console.log(data)
          if (!response.ok) {
              throw new Error('Error al registrar usuario');
          }
          return response.json();
      })
      .then(data => {
          // Maneja la respuesta de la API
          console.log('Usuario registrado:', data);
          alert('Usuario registrado exitosamente');
          localStorage.setItem("user",JSON.stringify(data.user))
          // Redirecciona a la página de inicio de sesión u otra página según sea necesario
          window.location.href = "../authentication/autenticathion.html";
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Hubo un error al registrar el usuario');
      });
  });
});
