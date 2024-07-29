const CountriesList = ({ countries, handleSelectCountry }) => {

  if (countries === undefined || countries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  }
  if (countries.length === 0) {
    return (
      <div>No matches found, specify another filter</div>
    )
  }

  return (
    <div>
      { countries.map(country =>
        <div key={country.name.common}>
          <span>{country.name.common}</span>
          <button onClick={() => handleSelectCountry(country)}>show</button>
        </div>
     )}
    </div>
  );
}

export default CountriesList;
