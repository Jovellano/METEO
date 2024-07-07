function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  //console.log(searchInput.value);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.ariaValue;
}
let searchFormElement = document.querySelector("seacrh-form");

searchFormElement.addEventListener("submit", handleSearchSubmit);
