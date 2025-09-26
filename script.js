document.querySelector('.busca').addEventListener('submit', (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== "") {
        showWarning("Carregando...");
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=${ endondedURI(input) }&appid=221f0ff7955589a8b2d228b2e6a23ad0';
    } else {

    }
});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;

}