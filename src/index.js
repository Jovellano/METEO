function refreshclima(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  console.log(response.datacondition.description);

  cityElement.innerHTML = response.data.city;
  descriptionElement = response.data.condition.description;
  temperatureElement.innerHTML = Math.round(temperature);
  //console.log(response.data.temperature.current);
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
