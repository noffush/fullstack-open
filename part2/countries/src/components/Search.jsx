const Search = ({ query, setQuery }) => {

  const handleFilterChange = (event) => {
    setQuery(event.target.value);
  }

  return (
    <form>
      <div>Find countries <input value={query} onChange={handleFilterChange} /></div>
    </form>
  );
}

export default Search;
