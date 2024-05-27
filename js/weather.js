const API_KEY = "7bbbc26b216c343508baf892b5a2becd"

function onGeoOk(position) { //position이라고 적는 것은 자바스크립트가 채울 공간을 만들어 주는 것
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //js가 url을 부른다. 우리가 아니라
    // fetch의 의미는 promise이다. 그 말은 당장 무엇이 일어나는 것이 아니라 시간이 좀 걸린 뒤에 일어나는 것이다.
}
function onGeoError() {
    alert("Can't find you. N o weather for you."); 
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 
//이걸 부르면 브라우저에서 위치 좌표 제공(wifi, 위치, GPS 등등)