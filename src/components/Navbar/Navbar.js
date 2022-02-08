import react from "react";
import './NavBar.css' 
import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";


function NavBar({title, ...rest})  {
    
    const handleOferta = () => {
        console.log ("ofertas!")
    }
    const handleMujer = () => {
        console.log ("mujer!")
    }
    const handleHombre = () => {
        console.log ("hombre!")
    }
    const handleCarrito = () => {
        console.log ("carrito!")
    }


    return (
        <nav className="NavBardos">
        <ul className="menu">
            <h1 className="">{title}</h1>
            <Button Label="Ofertas" backgroundColor="#0095ff" colorText="white" handleClick={handleOferta}/>
            <Button Label="Mujer" backgroundColor="#0095ff" colorText="white" handleClick={handleMujer}/>
            <Button Label="Hombre" backgroundColor="#0095ff" colorText="white" handleClick={handleHombre}/>
            <CartWidget handleClick={handleCarrito}/>
        </ul>
        </nav>

    );
  }

  export default NavBar;



