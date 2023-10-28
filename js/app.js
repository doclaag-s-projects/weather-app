import 'dotenv/config';

import { form, showError, Spinner, cleanHTML, showWeather } from "./forms.js";

window.addEventListener("load", () => {
  form.addEventListener("submit", searchWeather);
});

const searchWeather = (e) => {
  e.preventDefault();

  // Validate
  const city = document.querySelector("#city").value;
  const country = document.querySelector("#country").value;

  if (city === "" || country === "") {
    showError("Ambos campos son obligatorios");
    return;
  }

  // Consult API
  consultAPI(city, country);
};

const consultAPI = (city, country) => {
  const appId = process.env.API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

  Spinner();

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cleanHTML();

      if (data.cod === "404") {
        showError("Ciudad no encontrada");
        return;
      }
      // console.log(data)
      showWeather(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
