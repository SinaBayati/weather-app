const API_KEY = "1669f34ccb83df0bddf702e7e6dfc99c";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

function composeURL(
  city = "london",
  apiKey = API_KEY,
  baseURL = BASE_URL
){
  return `${baseURL}${city}&appid=${apiKey}`;
}

async function getWeather(url){
  try {
    const response = await fetch(url,{mode:"cors"});
    const data = await response.json();
    return data;  
  } catch (error) {
    console.error(error);
  }
}

export { 
  getWeather,
  composeURL,
};