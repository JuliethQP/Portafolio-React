import React, { Fragment } from "react";
import '../index.css';

class Navbar extends React.Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <nav class="navbar navbar-light">
                        <a class="navbar-brand" href="#">Julieth Quinchia Pineda</a>
                    </nav>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#conoce-sobre-mi">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#conoce-portafolio">Experiencia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#contactame">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        );
    }
}
export default Navbar;
