document.querySelector('.busca').addEventListener('submit', async(event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== "") {
        showWarning("Carregando...");
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=${ endondedURI(input) }&appid=221f0ff7955589a8b2d228b2e6a23ad0&units=metric&lang=pt_br';
    
        let result = await fetch(url);
        let json = await result.json();

        console.log(json);

        if(json.cod == 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            })
        }
    } else {
        showWarning("Não encontramos essa localização");
    }
});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
    
    document.querySelector('.resultado').style.display = 'block'; 
}

function showInfo(json){
    showWarning("");
    document.querySelector('.resultado').style.display = 'block';
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp}/<sup>°C</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>Km/h</span>`;

    document.querySelector('.temp img').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`
}

