const date = document.getElementById("_Date");
const city = document.getElementById("_City");
const tempImage = document.getElementById("_TempImage");
const weDes = document.getElementById("_Wedes");
const temp = document.getElementById("_Temp");
const highs = document.getElementById("_Highs");
const lows = document.getElementById("_Lows");
const search = document.getElementById("myButton");
const cityName = document.getElementById("_CityName");

function formatDate() {
  const date = new Date(); // Get the current date
  const options = { month: "short", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

date.innerHTML = formatDate();
cityName.value = "kolkata";

const app = document.getElementById("app");

const getWeather = async () => {
  try {
    const Weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=40fc98243f68f3401caef00e163136aa`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const jsonWeather = await Weather.json();
    tempImage.src = `https://openweathermap.org/img/wn/${jsonWeather.weather[0].icon}.png`;
    weDes.innerHTML = jsonWeather.weather[0].main;
    temp.innerHTML = (jsonWeather.main.temp - 273.15).toFixed(2) + "°c";
    city.innerHTML = jsonWeather.name;
    highs.innerHTML = (jsonWeather.main.temp_max - 273.15).toFixed(2) + "°c";
    lows.innerHTML = (jsonWeather.main.temp_min - 273.15).toFixed(2) + "°c";
  } catch (err) {
    console.log(err);
  }
};

search.addEventListener("click", getWeather);
getWeather();
