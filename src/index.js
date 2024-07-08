function refreshclima(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let velocidadvientoElement = document.querySelector("#velocidadviento");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconoElement = document.querySelector("#icono");

  //console.log(response.data.condition.description);

  console.log(response.data);

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatoFecha(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}`;
  velocidadvientoElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconoElement.innerHTML = ` <img src="${response.data.condition.icon_url}"class="clima-app-icono"/>`;
  //console.log(response.data.temperature.current);

  getForecast(response.data.city);
}
function formatoFecha(date) {
  let minutos = date.getMinutes();
  let horas = date.getHours();
  let dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  let day = dias[date.getDay()];
  if (minutos < 10) {
    minutos = `0${minutos}`;
  }
  return `${day} ${horas}:${minutos}`;
}
function seacrhCity(city) {
  let apikey = "3dfbt24a697c355eb92bof5b6004aa5c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
  axios.get(apiUrl).then(refreshclima);
  //console.log(apiUrl);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  //console.log(searchInput.value);
  //let cityElement = document.querySelector("#city");
  // cityElement.innerHTML = searchInput.value;
  seacrhCity(searchInput.value);
}

const background = document.getElementById("background");
const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};
const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);
  return `hsl(${h}deg, ${s}%, ${l}%)`;
};
const setBackgroundColor = () => {
  const randomColor = getRandomColor();
  background.style.backgroundColor = randomColor;
  background.style.color = randomColor;
};
setBackgroundColor();
setInterval(() => {
  setBackgroundColor();
}, 1500);

function getForecast() {
  let apikey = "3dfbt24a697c355eb92bof5b6004aa5c";
  let apiUrl = `https://api.shecodes.io/weather/v1/forescast?query=${city}&key=${apikey}$units=metric`;
  axios(apiUrl).then(displayforescast);
  console.log(apiUrl);
}
function displayforescast(response) {
  console.log(response.data);
  /*let dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];*/
  let forescasthtml = "";
  response.data.daily.forEach(function (day) {
    forescasthtml =
      forescasthtml +
      `
  <div class="clima-forescast-day">
    <div class="clima-forescast-date">domingo</div>
    <div class="clima-forescast-icono">☀️</div>
    <div class="clima-forescast-temperaturas">
      <div class="clima-forescast-temperatura">
        <strong>${day.temperature.maximum}</strong>
      </div>
      <div class="clima-forestcast-temperatura">
        <strong>26° </strong>
      </div>
    </div>`;
  });
  let forescastElement = document.querySelector("#forescast");
  forescastElement.innerHTML = forescasthtml;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

getForecast("Paris");
