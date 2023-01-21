import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import Formulario from './components/Forms';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { initList } from './reducers/toDoReducer';

function App() {
  const dispatch = useDispatch()
  const todo = useSelector((state)=> state.toDo)
  const [control, setControl] = useState(true)
  let mesagge='No tienes pendientes'

  useEffect(() => {
    dispatch(initList())
  }, [dispatch])

  const handlerNewTodo =() => {
    setControl(false)
  }
  return (
    <div className='App'>
      <h1>To do</h1>
      <Alert variant="primary">
      <Alert.Heading>Hola!</Alert.Heading>
      {mesagge}
      </Alert>
      {control ?
        <Button variant="success" onClick={handlerNewTodo}>Nueva Actividad</Button> : <Formulario />
      }
      
    </div>
  );
}

export default App;
