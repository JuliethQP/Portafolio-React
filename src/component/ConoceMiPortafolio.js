import React, { Fragment } from "react";
import '../index.css';
import hoja from './Imagenes/hojatecnica.png';
import clone from './Imagenes/clonwikipedia.PNG';
import formulario from './Imagenes/formularioimag.PNG'
import reto1 from './Imagenes/reto1Equipo.PNG'
import vestido from './Imagenes/vestido.png'
import ecopay from './Imagenes/Ecopay.jpeg'
import react from './Imagenes/react.png'

class ConoceMiPortafolio extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="container" id="conoce-portafolio">
                    <div>
                        <h1 className="titulo"><strong>Portafolio</strong></h1>
                    </div>
                    <div className="row mr-10 ml-10">
                        <div className="col mt-3" id="firstcolum">
                            <div className="card mb-4 shadow-sm" id="card-contenedor">
                                <div className="card-header">
                                    <h4 className="my-0 font-weight-normal  text-center">Tribute page</h4>
                                </div>
                                <div className="card-body">
                                    <img className="card-img" src="https://github.com/JuliethQP/Portafolio-reto/blob/master/Madame-Curie-2.jpg?raw=true" alt="" />
                                    <a href="https://juliethqp.github.io/Page-Tribute/">
                                        <button type="button" className="btn btn-lg btn-block btn-dark">
                                            Ir...</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-3" id="secondcolumn">
                            <div className="card mb-4 shadow-sm" id="card-contenedor">
                                <div className="card-header">
                                    <h4 className="my-0 font-weight-normal  text-center">Landing page</h4>
                                </div>
                                <div className="card-body mx-auto">
                                    <img className="card-img-top  " src={vestido} alt="" />
                                    <a href="https://juliethqp.github.io/Tienda-Reto/">
                                        <button type="button" className="btn btn-lg btn-block btn-dark">
                                            Ir...</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-3" id="secondcolumn">
                            <div className="card mb-4 shadow-sm" id="card-contenedor">
                                <div className="card-header">
                                    <h4 className="my-0 font-weight-normal  text-center">Technical page</h4>
                                </div>
                                <div className="card-body">
                                    <img className="card-img" src={hoja}
                                        alt="" />
                                    <a href="https://juliethqp.github.io/Pagina-tecnica/">
                                        <button type="button" className="btn btn-lg btn-block btn-dark">
                                            Ir...</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mr-10 ml-10">
                        <div className="col mt-3" id="firstcolum">
                            <div className="card mb-4 shadow-sm" id="card-contenedor">
                                <div className="card-header">
                                    <h4 className="my-0 font-weight-normal  text-center">Form</h4>
                                </div>
                                <div className="card-body">
                                    <img className="card-img" src={formulario} alt="" />
                                    <a href=" https://juliethqp.github.io/Formulario/">
                                        <button type="button" className="btn btn-lg btn-block btn-dark">
                                            Ir...</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-3" id="firstcolum">
                            <div className="card mb-4 shadow-sm" id="card-contenedor">
                                <div className="card-header">
                                    <h4 className="my-0 font-weight-normal  text-center">Clon Wikipedia</h4>
                                </div>
                                <div className="card-body">
                                    <img className="card-img" src={clone} alt="" />

                                    <a href="https://juliethqp.github.io/Clone-Wikipedia/">
                                        <button type="button" className="btn btn-lg btn-block btn-dark">
                                            Ir...</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" id="trabajo-equipo">
                    <div>
                        <h1 className="titulo"> <strong>React J's</strong></h1>
                        <div className="row mr-10 ml-10">
                            <div className="col mt-3" id="firstcolum">
                                <div className="card mb-4 shadow-sm" id="card-contenedor">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal  text-center"> Calculator</h4>
                                    </div>
                                    <div className="card-body">
                                        <img className="card-img" src={react} alt="" />
                                        <a href="https://juliethqp.github.io/Calculadora-React/">
                                            <button type="button" className="btn btn-lg btn-block btn-dark">
                                                Ir...</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col mt-3" id="firstcolum">
                                <div className="card mb-4 shadow-sm" id="card-contenedor">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal  text-center">Clock</h4>
                                    </div>
                                    <div className="card-body">
                                        <img className="card-img" src={react} alt="" />
                                        <a href="https://juliethqp.github.io/Clock/">
                                            <button type="button" className="btn btn-lg btn-block btn-dark">
                                                Ir...</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col mt-3" id="firstcolum">
                                <div className="card mb-4 shadow-sm" id="card-contenedor">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal  text-center">Quote machine</h4>
                                    </div>
                                    <div className="card-body">
                                        <img className="card-img" src={react} alt="" />
                                        <a href="https://juliethqp.github.io/QuoteMachine/">
                                            <button type="button" className="btn btn-lg btn-block btn-dark">
                                                Ir...</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col mt-3" id="firstcolum">
                                <div className="card mb-4 shadow-sm" id="card-contenedor">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal  text-center">Api consumption</h4>
                                    </div>
                                    <div className="card-body">
                                        <img className="card-img" src={react} alt="" />
                                        <a href="https://prueba-tecnica-julieth.netlify.app/">
                                            <button type="button" className="btn btn-lg btn-block btn-dark">
                                                Ir...</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" id="trabajo-equipo">
                    <div>
                        <h1 className="titulo"> <strong>Team Work: Geek Academy</strong></h1>
                        <div className="row mr-10 ml-10">
                            <div className="col mt-3" id="firstcolum">
                                <div className="card mb-4 shadow-sm" id="card-contenedor">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal  text-center">Challenge 1</h4>
                                    </div>
                                    <div className="card-body">
                                        <img className="card-img" src={reto1} alt="" />
                                        <a href="https://dubis78.github.io/Reto-1/">
                                            <button type="button" className="btn btn-lg btn-block btn-dark">
                                                Ir...</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col mt-3" id="firstcolum">
                                <div className="card mb-4 shadow-sm" id="card-contenedor">
                                    <div className="card-header">
                                        <h4 className="my-0 font-weight-normal  text-center">Challenge 2: recycling app</h4>
                                    </div>
                                    <div className="card-body">
                                        <img className="card-img" src={ecopay} alt="" />
                                        <a href="https://ecopay.netlify.app/">
                                            <button type="button" className="btn btn-lg btn-block btn-dark">
                                                Ir...</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default ConoceMiPortafolio