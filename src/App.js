import logo from './logo.svg';
import './App.css';
import Acordeon from './components/Acordeon';
import Cards from './components/Cards/Cards';
import Head from './components/head';
import Modal from './components/modal';
import NavBar  from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">


      <NavBar title="Tienda de Relojes"/> <br />


      <Cards/> <br />
      <header className="App-header">
      <h1>
         Tienda Smart Watch
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <h6>Proyecto de: Millaray Quezada</h6> 
      </header>
    </div>
  );
}

export default App;
