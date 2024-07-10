import { useState } from 'react';

const PersonForm = ({ persons, addPerson, updatePerson }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleClickAdd = (event) => {
    event.preventDefault();
    const existingPerson = persons.find(person => person.name === newName);

    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        updatePerson(existingPerson.id, { ...existingPerson, number: newNumber, id: 564 });
      } else {
        setNewName('');
        setNewNumber('');
        return;
      }
    } else {
      addPerson({ name: newName, number: newNumber });
    }
    setNewName('');
    setNewNumber('');
  } 

  return (
    <form>
      <div>name: <input value={newName} onChange={handleNameChange} /></div>
      <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
      <div><button type="submit" persons={persons} onClick={handleClickAdd}>add</button></div>
    </form>
  );
}

export default PersonForm;
