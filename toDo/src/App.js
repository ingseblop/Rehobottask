import { useState, useEffect } from 'react'
import { useDispatch} from 'react-redux'

import './App.css'
import Formulario from './components/Forms';
import Button from 'react-bootstrap/Button';
import { initList } from './reducers/toDoReducer';
import ToList from './components/toList';
import { Container } from 'react-bootstrap';

function App() {
  const dispatch = useDispatch()
  
  const [control, setControl] = useState(true)
 

  useEffect(() => {
    dispatch(initList())
  }, [dispatch])

  const handlerNewTodo =() => {
    setControl(false)
  }

  return (
    <Container>
      <div className='App'>
        <h1>To do</h1>
        <ToList/>
        {control ?
          <Button variant="success" onClick={handlerNewTodo}>Nueva Actividad</Button> : <Formulario />
        }
        
      </div>
    </Container>
  );
}

export default App;
