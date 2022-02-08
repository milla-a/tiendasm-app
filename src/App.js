import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import NavBar  from './components/NavBar/NavBar'
import ItemListContainer from  "./components/ItemListContainer/ItemListContainer"


function App() {
  return (
    <div className="App">

      <NavBar title="Tienda de Relojes"/> <br />
      <ItemListContainer greeting ="¡HOLA MUNDO!"/>
      <Cards/> <br />


      <header className="App-header">
        <h1>tienda Smart Watch</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <h6>Proyecto de: Millaray Quezada</h6> 
      </header>
    </div>
  );
}

export default App;
