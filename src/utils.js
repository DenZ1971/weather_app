import dayjs from 'dayjs';


const FORMAT_TIME_STRING = 'HH:mm';

export function getCurrentPosition() {
  if (!window.navigator || !window.navigator.geolocation) {
    throw new Error('Oops! Geolocation API not supported :-(');
  }

  return new Promise((resolve, reject) =>
      window.navigator.geolocation.getCurrentPosition(resolve, reject));
}




export function getUrl(latitude, longitude, endpoint, apiKey) {
  return `${endpoint}/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
}

function getVisibility(meterCount) {
  return (meterCount / 1000).toFixed();
}

function getWeatherData(rawData) {
  const {visibility, main, weather, wind, dt_txt} = rawData;
  const {humidity, temp} = main;

  return {
    date: dayjs(dt_txt).toDate(),
    visibility: `${getVisibility(visibility)}/km`,
    humidity: `${humidity}%`,
    wind: `${Math.ceil(wind.speed)} m/sec`,
    temp: `${Math.ceil(temp)}°C`,
    icon: weather.at(0).icon,
    description: weather.at(0).description,
    shortDescription: weather.at(0).main,
  }
}

export function transformWeatherData(rawData) {
  const {city, list} = rawData;
  const today = list.at(0);
  const tomorrow = list.at(5);
  const two_days = list.at(13);
  const three_days = list.at(21);
  const four_days = list.at(29);
  const five_days = list.at(-3);

  return {
    city: city.name,
    sunrise: dayjs
        .unix(city.sunrise)
        .format(FORMAT_TIME_STRING),

    sunset: dayjs
        .unix(city.sunset)
        .format(FORMAT_TIME_STRING),

    today: getWeatherData(today),
    tomorrow: getWeatherData(tomorrow),
    two_days: getWeatherData(two_days),
    three_days: getWeatherData(three_days),
    four_days: getWeatherData(four_days),
    five_days: getWeatherData(five_days)
  }
}

