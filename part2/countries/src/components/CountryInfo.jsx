import { useEffect } from "react";
import { useState } from "react";
import countriesService from '../services/countries';
import Weather from "./Weather";

const CountryInfo = ({ countryName }) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    console.log('CountryInfo effect run, fetching country info for', countryName);
    countriesService
      .getCountry(countryName)
      .then(country => setCountry(country))
      .catch(error => console.log('Error getting country', error));
  }, [countryName]);

  if (!country) {
    return null;
  }
  return (
    <div>
      <h1>{countryName}</h1>
      <div>capital {country.capital ? country.capital[0] : 'none'}</div>
      <div>area {country.area}</div>
      <div>
        <h3>Languages:</h3>
        <ul>
          { Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>) }
        </ul>
      </div>
      <img src={country.flags.png} style={{ width: 200 }}/>
      {country.capital && <Weather capital={country.capital[0]} /> }
    </div>
  );
}

export default CountryInfo;
