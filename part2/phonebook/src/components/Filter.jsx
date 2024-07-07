const Filter = ({ nameFilter, setNameFilter }) => {
  
  const handleFilterChange = (event) => {
    setNameFilter(event.target.value);
  }

  return (
    <form>
      <div>filter shown with <input value={nameFilter} onChange={handleFilterChange} /></div>
    </form>
  );
}

export default Filter;
