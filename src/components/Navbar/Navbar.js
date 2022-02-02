import React from "react";
import './Navbar.css' 

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <img className="Logoprincipal" src={"./images/logo192.jpg"} alt="logo"/>
                <a class="navbar-brand m-2" href="#!">Tienda Smart Watch</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item d-none d-lg-block">
                            <button class="btn btn-primary m-2" data-toggle="modal" data-target="#loginModal">
                            Ofertas<div class="ripple-container"></div></button>
                            <button class="btn btn-primary m-2" data-toggle="modal" data-target="#loginModal">
                            Mujer<div class="ripple-container"></div></button>
                            <button class="btn btn-primary m-2" data-toggle="modal" data-target="#loginModal">
                            Hombre<div class="ripple-container"></div></button>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Carrito
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
  }

  export default Navbar;