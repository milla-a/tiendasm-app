import logo from './logo.svg';
import './App.css';
import Acordeon from './components/Acordeon';
import Cards from './components/cards';
import Navbar from './components/navbar';
import Head from './components/head';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
         Tienda Smart Watch
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <h6>Proyecto de: Millaray Quezada</h6> 
      </header>

      <Navbar/> <br />
      <Cards/> <br />

    </div>
  );
}

export default App;
