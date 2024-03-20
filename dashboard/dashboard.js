document.addEventListener("DOMContentLoaded", function () {
    const userId = JSON.parse(localStorage.getItem("user")).uid || "";

    fetch(`http://localhost:8080/api/playlist/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }).then(response => response.json()
    )
        .then(data => {
            console.log(data)
            const playlist = data.playlist;

            if (playlist) {
                mostrarVideos(playlist)
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al procesar su solicitud');
        });
})

function mostrarVideos(videos) {
    const videosListContainer = document.getElementById('videos-list');

    // Limpiar cualquier contenido previo
    videosListContainer.innerHTML = '';

    // Iterar sobre la lista de videos y crear elementos HTML para mostrarlos
    videos.forEach(video => {
        const videoElement = document.createElement('tbody');
        videoElement.classList.add('video-item');
        videoElement.innerHTML = `

                <tr> <h2>${video.name}</h2></tr>
                <tr>
                    <iframe class="embed-responsive-item" src="${video.url}" allowfullscreen></iframe>
                </tr>
           
        `;
        videosListContainer.appendChild(videoElement);
    });
}