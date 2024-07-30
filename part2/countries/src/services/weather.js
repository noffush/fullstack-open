import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_KEY;
const baseUrl = 'https://api.openweathermap.org';

const getWeatherData = (city) => {
  const request = axios.get(`${baseUrl}/data/2.5/weather`, {
    params: {
      appid: API_KEY,
      q: city,
      units: 'metric',
    }
  });
  return request.then(response => response.data);
}

const getWeatherIconUrl = (iconName) => iconName && `https://openweathermap.org/img/wn/${iconName}@2x.png`;

export default {
  getWeatherData,
  getWeatherIconUrl,
}
