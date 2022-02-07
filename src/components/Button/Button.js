import react from "react";
import './Button.css'



const Button = ({Label ="Boton", backgroundColor ="#0095ff", colorText ="white", handleClick, ...rest}) => {
    return (
    <button className="button-1" style={{backgroundColor, colorText}} onClick={handleClick}>{Label}</button>
    );
  }

  export default Button;