import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Componente1 from './components/Componente1';
import Body from './components/Body/Body';
import Timer from './components/Timer/Timer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Body nombre="Usuario"/>
      <Componente1 />
      <Timer />

      <p className="read-the-docs">
        Pag creada por los alumnos Armando García Sarao, Cinthia Citlali Rejón Lopéz y Carlos Alberto Virgen Aguilar 
      </p>
    </>
  )
}

export default App
