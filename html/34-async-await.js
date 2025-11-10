// Prueba inicial sin el async
function fetchDataPrueba() {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

//fetchData();

// Prueba con Async de solo una solicitud
async function fetchData() {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character");
        let data = await response.json();
        console.log(data);
    }catch(error) {
        console,log(error)
    }
}

// Prueba con Async de solo una solicitud
const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
]

async function fetchNewData() {
    try{
        for await(let url of urls) {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data)
        } 
    }catch(error) {
        console.log(error)
    }
}