import { useState, useEffect } from 'react'
import Search from './components/Search';
import CountriesList from './components/CountriesList';
import CountryInfo from './components/CountryInfo';
import countriesService from './services/countries';

function App() {
  const [countries, setCountries] = useState(null);
  const [query, setQuery] = useState('');
  const [selectedCountryName, setSelectedCountryName] = useState(null);

  useEffect(() => {
    console.log('Effect run, fetching countries...');
    countriesService
      .getAll()
      .then(countriesList => setCountries(countriesList))
      .catch(error => console.log('Error getting countires', error));
  }, []);

  const filterCountries = () => {
    return countries.filter(country => 
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
  };

  useEffect(() => {
    if (countries) {
      const filteredCountries = filterCountries();

      if (filteredCountries.length === 1) {
        setSingleCountry(filteredCountries[0]);
      } else {
        setSelectedCountryName(null);
      }
    }
  }, [query, countries]);

  let countriesToShow;

  if (countries) {
      countriesToShow = filterCountries();
  }

  const setSingleCountry = (country) => {
    setSelectedCountryName(country.name.common);
  }

  return (
    <>
      <Search query={query} setQuery={setQuery}/>
      { selectedCountryName
        ? <CountryInfo countryName={selectedCountryName} />
        : <CountriesList countries={countriesToShow} handleSelectCountry={setSingleCountry}/>
      }
    </>
  );
}

export default App;
