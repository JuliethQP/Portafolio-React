import React, { Fragment } from "react";
import '../index.css';

class ConoceSobreMi extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="container" id="conoce-sobre-mi">
                    <div>
                        <h1 className="titulo"> <strong> Conoce sobre mi </strong></h1>
                    </div>
                    <div className="row mr-10 ml-10">
                        <div className="col mr-10 ml-10" >
                            <img className="ml-5 mr-5 " width="200px" src="https://github.com/JuliethQP/Portafolio-reto/blob/master/IMG_20190128_100531.jpg?raw=true"></img>
                        </div>
                        <div className="col mt-4 justify-content-justify align-content-center flex-wrap" id="secondcolumn">
                            <p className="" id="texto-conoce-sobre-mi">
                                Bioingeniera de la Universidad de Antioquia. Con conocimientos básicos en: ANSYS, lenguaje de programación
                                en C++ , Python, CSS, html, y JavaScript (desarrolladora Web Front-End).
                                <br />
                                Me caracterizo por ser una persona responsable, proactiva, dinámica, puntual, paciente y colaboradora; tengo
                                aptitudes para el trabajo en equipo, liderazgo, buenas relaciones interpersonales, dispuesta a aprender.
                            </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default ConoceSobreMi;