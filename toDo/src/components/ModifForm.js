import { useDispatch } from 'react-redux';
import { updateToDo } from '../reducers/toDoReducer'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function ModiFormulario({item}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch()
    const toDo = item
    const updateActivity= async (event)=>{
        
        const id = toDo.id
        const descripcion = event.target.descripcion.value
        const fechaCreacion = event.target.fechaCreacion.value
        const fechaFin = event.target.fechaFin.value
        const estado = event.target.estado.value

        const updateActivity ={
            id: id,
            descripcion: descripcion,
            fechaCreacion: fechaCreacion,
            fechaFin: fechaFin,
            estado: estado
        }
        dispatch(updateToDo(updateActivity))
    }
    return(
        <div>
            <h4> Nueva actividad</h4>
            <Form onSubmit={updateActivity}>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                    Id
                    </Form.Label>
                    <Col sm="8">
                    <Form.Control type="text" name="toDoId" value={toDo.id} readonly/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm="2">
                    Descripción
                    </Form.Label>
                    <Col sm="8">
                    <Form.Control as="textarea" name="descripcion" placeholder={toDo.descripcion} required/>
                    </Col>
                </Form.Group>
                <Row>
                    <Form.Group as={Col} sm="6">
                        <Row>
                            <Form.Label column sm="4">
                                Fecha de creación
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control type="date" name="fechaCreacion" placeholder={toDo.fechaCreacion}/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group as={Col} sm="6" >
                        <Row>
                            <Form.Label column sm="4">
                                Fecha de finalización
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control type="date" name="fechaFin" placeholder={toDo.fechaFin}/>
                            </Col>
                        </Row>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Label column sm="2">Estado</Form.Label>
                    <Col sm="2">
                    <Form.Select name="estado" placeholder={toDo.estado}>
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

export default ModiFormulario