function refreshclima(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let velocidadvientoElement = document.querySelector("#velocidadviento");
  let timeElement = document.querySelector("#time");
  let date = new date(response.data, time * 1000);
  let iconoElement = document.querySelector("#icono");

  //console.log(response.data.condition.description);

  console.log(response.data);

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatofecha(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}`;
  velocidadvientoElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconoElement.innerHTML = ` <img src="${response.data.condition.icon_url}"class="clima-app-icono"/>`;
  //console.log(response.data.temperature.current);
}
function formatofecha(date) {
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
  let day = dias[day.getday()];
  if (minutos < 10) {
    mintos = `0{minutos}`;
  }
  return `${dias} ${horas}:${minutos}`;
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
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
