import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, []);

  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} />

      <h3>Add a new person</h3>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h3>Numbers</h3>
      <Persons persons={personsToShow}/>
    </div>
  );
}

export default App;
