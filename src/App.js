import logo from './logo.svg';
import './App.css';
import Acordeon from './components/Acordeon';
import Cards from './components/Cards/Cards';
import Navbar from './components/Navbar/Navbar';
import Head from './components/head';
import Modal from './components/modal';


function App() {
  return (
    <div className="App">


      <Navbar/> <br />
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
