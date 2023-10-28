import { kelvinToCentigrade } from "./scripts.js";

export const container = document.querySelector(".container");
export const result = document.querySelector("#result");
export const form = document.querySelector("#form");

export const showError = (message) => {
  const alert = document.querySelector(".bg-red-100");

  if (!alert) {
    const alert = document.createElement("div");
    alert.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alert.innerHTML = `
            <strong class="font-bold">¡Error!</strong>
            <span class="block">${message}</span>
        `;

    container.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
};

export const showWeather = (data) => {
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = data;

  const centigrade = kelvinToCentigrade(temp);
  const max = kelvinToCentigrade(temp_max);
  const min = kelvinToCentigrade(temp_min);

  const nameCity = document.createElement("p");
  nameCity.textContent = `Clima en ${name}`;
  nameCity.classList.add("font-bold", "text-2xl");

  const actual = document.createElement("p");
  actual.innerHTML = `${centigrade} &#8451;`;
  actual.classList.add("font-bold", "text-6xl");

  const tempMax = document.createElement("p");
  tempMax.innerHTML = `Max: ${max} &#8451;`;
  tempMax.classList.add("text-xl");

  const tempMin = document.createElement("p");
  tempMin.innerHTML = `Min: ${min} &#8451;`;
  tempMin.classList.add("text-xl");

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("text-center", "text-white");
  resultDiv.appendChild(nameCity);
  resultDiv.appendChild(actual);
  resultDiv.appendChild(tempMax);
  resultDiv.appendChild(tempMin);

  result.appendChild(resultDiv);
};

export const cleanHTML = () => {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
};

export const Spinner = () => {
  cleanHTML();

  const divSpinner = document.createElement("div");
  divSpinner.classList.add("sk-fading-circle");

  divSpinner.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>`;

  result.appendChild(divSpinner);
};
