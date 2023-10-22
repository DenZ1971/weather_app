import {useEffect, useState} from 'react';
import PageTitle from '../page-title/page-title';
import WeatherCard from '../weather-card/weather-card';
import {API_END_POINT, API_KEY} from '../../const';
import {CityInputForm} from '../Cityinput/cityinput';
import {getUrl, transformWeatherData} from '../../utils'
import Loader from '../loader/loader';


export default function App() {
  
  const [coordinates, setCoordinates] = useState({latitude: null, longitude: null});
  const [weatherData, setWeatherData] = useState('');

  useEffect(() => {
    (async () => {
      if (!coordinates) {
        return;
      }

      const url = getUrl(coordinates.latitude, coordinates.longitude, API_END_POINT, API_KEY);
      const response = await fetch(url);
      const rawData = await response.json();
      setWeatherData(transformWeatherData(rawData));
    })();

  }, [coordinates]);

  const handleCoordinatesChange = (newCoordinates) => {
    setCoordinates(newCoordinates);
  };

  return (
    <>
      <PageTitle title="Weather App" /> 
      <CityInputForm onCoordinatesChange={handleCoordinatesChange} />
      {!weatherData ? <Loader /> :  <WeatherCard data={weatherData} />}
      
    </>
  )
}
