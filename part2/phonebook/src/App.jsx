import { useState, useEffect } from 'react';
import phonebook from './services/phonebook';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    phonebook
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
      .catch(error => {
        alert('Error getting persons from phonebook!');
      })
  }, []);

  const personsToShow = persons?.filter(person => 
    person.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      phonebook
        .deleteOne(person.id)
        .then(deletedPerson => {
          setPersons(persons.filter(person => person.id !== deletedPerson.id))
        })
        .catch(error => {
          alert(`Error deleting ${person.name}!`);
        });
    }
  }

  const addPerson = (newPerson) => {
    phonebook
      .create(newPerson)
      .then(returnedPerson => {
        setPersons([...persons, returnedPerson]); 
      })
      .catch(error => {
        alert(`Error adding ${newPerson.name}!`);
      });
  }

  const updatePerson = (id, person) => {
    phonebook
      .update(id, person)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson));
      })
      .catch(error => {
        alert(`Error updating ${person.name}!`);
      });
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} />

      <h3>Add a new person</h3>
      <PersonForm persons={persons} addPerson={addPerson} updatePerson={updatePerson} />

      <h3>Numbers</h3>
      <Persons persons={personsToShow} deletePerson={deletePerson}/>
    </div>
  );
}

export default App;
