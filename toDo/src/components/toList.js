import { useState } from 'react'
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ModiFormulario from './ModifForm';

const ToList = ()=>{
    const list = useSelector((state)=> state.toDo)
    let mesagge='No tienes pendientes'
    let todo = list
    const [control2, setControl2] = useState(true)
    const [filter, setFilter] = useState('All')
    
    const modifHandler =() => {
        setControl2(!control2)
      }
    
  

    return(
        <div>
            <DropdownButton title="Filtrar por" variant="success">
                <Dropdown.Item onClick={()=>setFilter('All')}>Todos</Dropdown.Item>
                <Dropdown.Item onClick={()=>setFilter('Por hacer')}>Por hacer</Dropdown.Item>
                <Dropdown.Item onClick={()=>setFilter('Cancelado')}>Cancelado</Dropdown.Item>
                <Dropdown.Item onClick={()=>setFilter('Terminado')}>Terminado</Dropdown.Item>
            </DropdownButton>
        {
            todo.length === 0 ?
            <Alert variant="primary">
            <Alert.Heading>Hola!</Alert.Heading>
            {mesagge}
            </Alert>:
            <div>
                { filter === 'All' ?
                    <div> 
                        {todo.map((todo) => (
                        <Col sm="6">
                            {control2 ?
                            <p key={todo.id} onClick={modifHandler}>{todo.descripcion}</p>:
                            <ModiFormulario item={todo} />
                            }
                        </Col>
                        ))}
                    </div> :
                    <div>
                        {todo.map((todo) => (todo.estado=== filter ?
                        <Col sm="6">
                            {control2 ?
                            <p key={todo.id} onClick={modifHandler}>{todo.descripcion}</p>:
                            <ModiFormulario item={todo} />
                            }
                        </Col> :
                        null
                        ))}
                    </div>
                }
            </div>
        }
        </div>
    )
 }

 export default ToList