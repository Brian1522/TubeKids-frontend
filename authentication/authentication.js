document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function () {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (!email) {
            alert("Por favor, ingrese un correo electrónico.");

            return;
        }
        if (!password) {
            alert("Por favor, ingrese una contraseña.");

            return;
        }
        
        fetch('http://localhost:8080/api/auth/login', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers:{"Content-Type": "application/json"},         
        }).then(response => response.json()     
        )
        .then( data =>{
            console.log(data)
            
            if ( data.user ){
                localStorage.setItem("user",JSON.stringify(data.user))
                window.location.replace("../accounts/accounts.html")
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al procesar su solicitud');
        });
    })
        
});

