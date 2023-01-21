import { useDispatch } from 'react-redux';
import { newToDo } from '../reducers/toDoReducer'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Formulario() {
    const dispatch = useDispatch()

    const createActivity=(event)=>{
        
        const id = event.target.toDoId.value
        const descripcion = event.target.dercripcion.value
        const fechaCreacion = event.target.fechaCreacion.value
        const fechaFin = event.target.fechaFin.value
        const estado = event.target.estado.value

        const newActivity ={
            id: id,
            descripcion: descripcion,
            fechaCreacion: fechaCreacion,
            fechaFin: fechaFin,
            estado: estado
        }
        dispatch(newToDo(newActivity))
    }
    return(
        <div>
            <h4> Nueva actividad</h4>
            <Form onSubmit={createActivity}>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                    Id
                    </Form.Label>
                    <Col sm="8">
                    <Form.Control type="text" name="toDoId" placeholder="ID" required/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm="2">
                    Descripción
                    </Form.Label>
                    <Col sm="8">
                    <Form.Control as="textarea" name="descripcion" placeholder="Descripción" required/>
                    </Col>
                </Form.Group>
                <Row>
                    <Form.Group as={Col} sm="6">
                        <Row>
                            <Form.Label column sm="4">
                                Fecha de creación
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control type="date" name="fechaCreacion"/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group as={Col} sm="6" >
                        <Row>
                            <Form.Label column sm="4">
                                Fecha de finalización
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control type="date" name="fechaFin"/>
                            </Col>
                        </Row>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Label column sm="2">Estado</Form.Label>
                    <Col sm="2">
                    <Form.Select name="estado">
                        <option>Seleccionar</option>
                        <option value="Por hacer">Por hacer</option>
                        <option value="Cancelado">Cancelado</option>
                        <option value="Terminado">Terminado</option>
                    </Form.Select>
                    </Col>
                </Row>
                <Button variant="success" type="submit">Guardar</Button>
            </Form>
        </div>
    )
}

export default Formulario