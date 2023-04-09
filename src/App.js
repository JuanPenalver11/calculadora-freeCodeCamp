import logo from './imagenes/logo.png'
import './App.css';
import Boton from './componentes/boton'
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState(' ');

  const addInput = val => {

    setInput(input + val);

  };

  const resultado = () =>{
    if (input){
      setInput(evaluate(input))
    } else {
      alert("Por favor, añada operación")
    }
   
  }





  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={logo}
          className='freecodecamp-logo'
          alt='logo de FreeCodeCamp'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={addInput}>1</Boton>
          <Boton manejarClick={addInput}>2</Boton>
          <Boton manejarClick={addInput}>3</Boton>
          <Boton manejarClick={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={addInput}>4</Boton>
          <Boton manejarClick={addInput}>5</Boton>
          <Boton manejarClick={addInput}>6</Boton>
          <Boton manejarClick={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={addInput}>7</Boton>
          <Boton manejarClick={addInput}>8</Boton>
          <Boton manejarClick={addInput}>9</Boton>
          <Boton manejarClick={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={resultado}>=</Boton>
          <Boton manejarClick={addInput}>0</Boton>
          <Boton manejarClick={addInput}>.</Boton>
          <Boton manejarClick={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear = {() => setInput(' ')}>Clear</BotonClear>
        </div>

      </div>

    </div>
  );
}

export default App;
