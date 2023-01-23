import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import piedra from './assets/piedra.png';
import papel from './assets/papel.png';
import tijera from './assets/tijera.png';
import './App.css';

function App() {
  const mensaje= 'Has tu movida, la computadora ya escogió el suyo'
  const pierdesVida = 'Pierdes una vida'
  const pcVida = 'La computadora pierde una vida'
  const ganaste = 'La Computadora tiene 0 vidas ¡GANASTE!'
  const perdiste =  'Tienes 0 vidas ¡PERDISTE!'
  const [message, setMessage] = useState('Has tu movida, la computadora ya escogió el suyo')
  const [vidas,setVidas] = useState([3,3])
  const movidas = ["Piedra", "Papel", "Tijeras"]
  const [control, setControl]= useState(true)
  

  const movePiedra = () => {
    const move = movidas[Math.floor(Math.random() * 3)]
    if (move==="Piedra") {
      setMessage('Empate')
    }
    if (move==="Papel") {
      setVidas([vidas[0],vidas[1]-1])
      if(vidas[1]===1){
        setControl(!control)
        setMessage(perdiste)
      }
      else{
        setMessage(pierdesVida)
      }
    }
    if (move==="Tijeras") {
      setVidas([vidas[0]-1,vidas[1]])
      if(vidas[0]===1){
        setControl(!control)
        setMessage(ganaste)
      }
      else{
        
        setMessage(pcVida)
      }
    }
  }

  const movePapel = () => {
    const move = movidas[Math.floor(Math.random() * 3)]
    console.log(move)
    if (move==="Piedra") {
      setVidas([vidas[0]-1,vidas[1]])
      if(vidas[0]===1){
        setControl(!control)
        setMessage(ganaste)
      }
      else{
        
        setMessage(pcVida)
      }
    }
    if (move==="Papel") {
      setMessage('Empate')
      
    }
    if (move==="Tijeras") {
      setVidas([vidas[0],vidas[1]-1])
      if(vidas[1]===1){
        setControl(!control)
        setMessage(perdiste)
      }
      else{
        
        setMessage(pierdesVida)
      }
    }
  }

  const moveTijeras = () => {
    const move = movidas[Math.floor(Math.random() * 3)]
    if (move==="Piedra") {
      setVidas([vidas[0],vidas[1]-1])
      if(vidas[1]===1){
        setControl(!control)
        setMessage(perdiste)
      }
      else{
        setMessage(pierdesVida)
      }
    }
    if (move==="Papel") {
      setVidas([vidas[0]-1,vidas[1]])
      if(vidas[0]===1){
        setControl(!control)
        setMessage(ganaste)
      }
      else{
        setMessage(pcVida)
      }
    }
    if (move==="Tijeras") {
      setMessage('Empate')
    }
  }

  const reiniciar = () => {
    setControl(!control)
    setVidas([3,3])
    setMessage(mensaje)
  }


  return (
    <Container>
      <div className="App">
        <h1>Piedra, Papel y Tijeras</h1>

        <Row>
        <Col sm={4}>
          <h4>Computadora</h4>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <h3>Vidas: {vidas[0]}</h3>
        </Col>
          
        </Row>
        <Row className="Center">
          <h1>{message}</h1>

        </Row>
        <Row>
          <Col sm="4">
            <h4>Jugador</h4>
          </Col>
          {control ? <Col sm="4">
              <img className="Move" src={piedra} alt="piedra" width="50" onClick={movePiedra}/>
              <img className="Move" src={papel} alt="papel" width="50" onClick={movePapel}/>
              <img className="Move" src={tijera} alt="tijera" width="50" onClick={moveTijeras}/>
          </Col> : null}
          
          <Col sm="4">
            <h3>Vidas:{vidas[1]}</h3>
          </Col>
        
        </Row>
        <Row>
          <Button variant="success" onClick={reiniciar}>Reiniciar</Button>
        </Row>
      </div>
    </Container>
  );
}

export default App;
