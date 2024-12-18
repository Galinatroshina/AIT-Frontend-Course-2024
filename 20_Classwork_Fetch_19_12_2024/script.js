const weatherList = document.querySelector("#weather");

function decoderWeather(weatherCode) {
  let desc;
  switch (weatherCode) {
    case 0:
      desc = "Clear sky";
      break;
    case 1:
      desc = "Mainly clear";
      break;
    case 2:
      desc = "Partly cloudy";
      break;
    case 3:
      desc = "Overcast";
      break;
    case 45:
      desc = "Fog";
      break;
    case 48:
      desc = "Depositing rime fog";
      break;
    case 51:
      desc = "Drizzle: Light";
      break;
    case 53:
      desc = "Drizzle: Moderate";
      break;
    case 55:
      desc = "Drizzle: Dense intensity";
      break;
    case 56:
      desc = "Freezing Drizzle: Light";
      break;
    case 57:
      desc = "Freezing Drizzle: Dense intensity";
      break;
    case 61:
      desc = "Rain: Slight";
      break;
    case 63:
      desc = "Rain: Moderate";
      break;
    case 65:
      desc = "Rain: Heavy intensity";
      break;
    case 66:
      desc = "Freezing Rain: Light";
      break;
    case 67:
      desc = "Freezing Rain: Heavy intensity";
      break;
    case 71:
      desc = "Snow fall: Slight";
      break;
    case 73:
      desc = "Snow fall: Moderate";
      break;
    case 75:
      desc = "Snow fall: Heavy intensity";
      break;
    case 77:
      desc = "Snow grains";
      break;
    case 80:
      desc = "Rain showers: Slight";
      break;
    case 81:
      desc = "Rain showers: Moderate";
      break;
    case 82:
      desc = "Rain showers: Violent";
      break;
    case 85:
      desc = "Snow showers: Slight";
      break;
    case 86:
      desc = "Snow showers: Heavy";
      break;
    case 95:
      desc = "Thunderstorm: Slight or moderate";
      break;
    case 96:
      desc = "Thunderstorm with slight hail";
      break;
    case 99:
      desc = "Thunderstorm with heavy hail";
      break;
  }
  return desc;
}

async function getWeather() {
  const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const data = await res.json();
  // const city = data.city
  // const latitude = data.latitude
  // const longitude = data.longitude
  // console.log(data)
  const { city, latitude, longitude } = data;
  console.log(city, latitude, longitude);

  const newUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  const newRes = await fetch(newUrl);
  const newData = await newRes.json();
  const { temperature, windspeed, interval, weathercode } =
    newData.current_weather;
  const temperatureUnit = newData.current_weather_units.temperature;
  const windUnit = newData.current_weather_units.windspeed;

  console.log(temperature, windspeed, interval, weathercode);

  const weatherDesc = decoderWeather(weathercode);
  console.log(weatherDesc);

  const cityElement = document.createElement("h2");
  cityElement.textContent = `Weather in ${city}`;
  const weatherDescElement = document.createElement("p");
  weatherDescElement.textContent = `Weather: ${weatherDesc}`;
  const tempElement = document.createElement("p");
  tempElement.textContent = `Temperature: ${temperature} ${temperatureUnit}`;
  const windElement = document.createElement("p");
  windElement.textContent = `Windspeed: ${windspeed} ${windUnit}`;

  weatherList.append(cityElement, weatherDescElement, tempElement, windElement);
}

getWeather();
