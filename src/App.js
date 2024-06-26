import './App.css';
import HelloWorld from './Componentes/HelloWorld';

function App() {

  let name = "Eduardo";

  return (

    <div className="App">
      <header/>
      <HelloWorld conteudo = {name} /> 
    </div>
  );
}

export default App;
