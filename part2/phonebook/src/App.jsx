import { useState, useEffect } from 'react';
import phonebook from './services/phonebook';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');

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
        .then(() => {
          setMessageVars(`Deleted ${person.name}`, 'success');
          setTimeout(() => setMessage(null), 5000);
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
      .then(() => {
        setMessageVars(`Added ${newPerson.name}`, 'success');
        setTimeout(() => setMessage(null), 5000);
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
      .then(() => {
        setMessageVars(`Updated ${person.name}`, 'success');
        setTimeout(() => setMessage(null), 5000);
      })
      .catch(error => {
        setMessageVars(`Information of ${person.name} has already been removed from server`, 'fail');
        setTimeout(() => setMessage(null), 5000);
      });
  }

  const setMessageVars = (message, type) => {
    setMessage(message);
    setMessageType(type);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={messageType}/>
      <Filter nameFilter={nameFilter} setNameFilter={setNameFilter} />

      <h3>Add a new person</h3>
      <PersonForm persons={persons} addPerson={addPerson} updatePerson={updatePerson} />

      <h3>Numbers</h3>
      <Persons persons={personsToShow} deletePerson={deletePerson}/>
    </div>
  );
}

export default App;
