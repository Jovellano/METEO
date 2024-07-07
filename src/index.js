function seacrhCity(city) {
  let apiKey = "3dfbt24a697c355eb92bof5b6004aa5c";
  let apiUrl = `"https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&unidad=metric"`;
  console.log(apiUrl);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  //console.log(searchInput.value);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.ariaValue;
  seacrhCity(searchInput.value);
}
let searchFormElement = document.querySelector("seacrh-form");

searchFormElement.addEventListener("submit", handleSearchSubmit);
