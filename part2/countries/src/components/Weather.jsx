import { useEffect, useState } from "react";
import weatherService from "../services/weather";

const Weather = ({ capital }) => {
  const [wind, setWind] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [iconName, setIconName] = useState(null);

  useEffect(() => {
    console.log('Weather effect run, fetching data...');
    weatherService
      .getWeatherData(capital)
      .then(({weather, main, wind}) => {
          setWind(wind.speed);
          setTemperature(main.temp);
          setIconName(weather[0].icon);
        })
      .catch(error => console.log('Error getting weather', error));
  }, []);

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <div>Temperature: {temperature} Celsius</div>
      <img src={weatherService.getWeatherIconUrl(iconName)} style={{ width: 100 }}/>
      <div>Wind: {wind} m/s</div>
    </div>
  )
}

export default Weather;
