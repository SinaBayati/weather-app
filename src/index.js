import "./styles.css";
import { 
  getWeather,
  composeURL,
} from './modules/weather';

const inputEl = document.querySelector("#city");
const tempKey = "23f84a7ed3bef67a51a44d47ea5a393d";

function validateUserInput(inputElement){
  if (inputElement.validity.valid){
    return true;
  } else {
    alert("Please enter a valid city name");
    return false;
  }
}

const formEl = document.querySelector("#form");

formEl.addEventListener("submit",submitHandler);

function submitHandler(event){
  event.preventDefault();
  if (validateUserInput(inputEl)) {
    const city = inputEl.value;
    const url = composeURL(city,tempKey);
    getWeather(url)
      .then(data => addWeather(data))
      .catch(err => console.log(err));
    inputEl.value = null;
  }
}

function getIcon(iconDescription){
  let result = "";
  switch (iconDescription){
    case "sunny":
      result = "☀️";
      break;
    case "scattered clouds":
      result = "⛅";
      break;
    case "haze":
      result = "😶‍🌫️";
      break;
    case "cloudy":
      result = "☁️";
      break;
    case "rainy":
      result = "🌧️"
      break;
    case "snowy":
      result = "🌨️"
    default:
      result = "🤔";
      break;
  }
  return result;
}

function addWeather(data){
  console.log(data);
  const template = 
  `
<div class="card">
  <div class="header">
    <div class="left">
      <span>${data.name}</span>
      <span>${new Date().toDateString()}</span>
    </div>
    <div class="right">
      <span>${getIcon(data.weather[0].description)}</span>
      <span>${data.weather[0].description}</span>
    </div>
  </div>
  <div class="main">
    <div class="tp">${(data.main.temp - 273).toFixed(1)}°C</div>
    <div>
      <span>Humidity ${data.main.humidity}%</span>
      <span>Pressure ${data.main.pressure}hPa</span>
    </div>
  </div>
</div>
  `;

  document.querySelector("#target")
    .innerHTML = null;
  document.querySelector("#target")
    .insertAdjacentHTML("afterbegin",template);
}
