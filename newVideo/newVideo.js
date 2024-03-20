document.addEventListener('DOMContentLoaded', function () {
    var createButton = document.getElementById('createButton');

    createButton.addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var url = document.getElementById('url').value;
        var userId = JSON.parse(localStorage.getItem("user")).uid || "";

        if (!name) {
            alert("Por favor, ingrese el nombre.");

            return;
        }
        if (!url) {
            alert("Por favor, ingrese la URL.");

            return;
        }
        
        fetch('http://localhost:8080/api/playlist', {
            method: "POST",
            body: JSON.stringify({ name, url, userId }),
            headers:{"Content-Type": "application/json"},         
        }).then(response => response.json()     
        )
        .then( data =>{
            console.log(data)
            const playlistCreated =data.playlist;
            if (playlistCreated){
                alert(data.msg);
                window.location.replace("../dashboard/dashboard.html")
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al procesar su solicitud');
        });
    })
        
});

