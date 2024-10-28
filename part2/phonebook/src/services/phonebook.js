import axios from 'axios';
// const baseUrl = 'http://localhost:3001/api/persons';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => {
    return response.data;
  });
}

const create = (personObject) => {
  const request = axios.post(baseUrl, personObject);
  return request.then(response => {
    return response.data;
  });
}

const deleteOne = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => {
    return response.data;
  });
}

const update = (id, updatedPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
  return request.then(response => {
    return response.data;
  });
}

export default { getAll, create, deleteOne, update }
