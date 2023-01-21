import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import Formulario from './components/Forms';
import ModiFormulario from './components/ModifForm';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import { initList } from './reducers/toDoReducer';

function App() {
  const dispatch = useDispatch()
  const todo = useSelector((state)=> state.toDo)
  const [control, setControl] = useState(true)
  const [control2, setControl2] = useState(true)
  let mesagge='No tienes pendientes'

  useEffect(() => {
    dispatch(initList())
  }, [dispatch])

  const handlerNewTodo =() => {
    setControl(false)
  }
  const modifHandler =() => {
    setControl2(false)
  }
  return (
    <div className='App'>
      <h1>To do</h1>
      <p>{todo.length}</p>
      {
        todo.length === 0 ?
        <Alert variant="primary">
        <Alert.Heading>Hola!</Alert.Heading>
        {mesagge}
        </Alert>: 
        <div>
        {todo.map((todo) => (
          <Col sm="6">
            {control2 ?
              <p key={todo.id} onClick={modifHandler}>{todo.descripcion}</p>:
              <ModiFormulario item={todo} modifHandler={modifHandler}/>
            }
          </Col>
        ))}
        </div>

      }
      
      {control ?
        <Button variant="success" onClick={handlerNewTodo}>Nueva Actividad</Button> : <Formulario />
      }
      
    </div>
  );
}

export default App;
