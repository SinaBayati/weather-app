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

function addWeather(data){
  // create and add a card to the page
}
