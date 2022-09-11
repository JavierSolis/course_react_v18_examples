import holamundo from './holamundo.jpeg'
import './App.css';

const createContent=()=>{
  return (
    <>
    Hola Mundo
    <br/>
    <img src={holamundo} alt="texto para que no se queje el slint" />
    </>
  )
}

function App() {
  return (
    <div className="App">
      {createContent()}
    </div>
  );
}

export default App;
