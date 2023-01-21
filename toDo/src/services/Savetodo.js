import axios from 'axios'
const baseUrl = 'http://localhost:3001/toDo'

const getAll = async() => {
  return await axios.get(baseUrl)
}

const create = async (newObject) => {
  return await axios.post(baseUrl, newObject)
}

const update = async(id, newObject) => {
  return await axios.put(`${baseUrl}/${id}`, newObject)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update }