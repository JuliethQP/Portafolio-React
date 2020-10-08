import React, { Fragment } from "react";
import '../index.css';

class ConoceSobreMi extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="container" id="conoce-sobre-mi">
                    <div>
                        <h1 className="titulo"> <strong> About me </strong></h1>
                    </div>
                    <div className="row mr-10 ml-10">
                        <div className="col mr-10 ml-10" >
                            <img className="ml-5 mr-5 " width="200px" src="https://github.com/JuliethQP/Portafolio-reto/blob/master/IMG_20190128_100531.jpg?raw=true"></img>
                        </div>
                        <div className="col mt-4 justify-content-justify align-content-center flex-wrap" id="secondcolumn">
                            <p className="" id="texto-conoce-sobre-mi">
                            Julieth has analytical skills to solve problems. As a programmer, Julieth has been helping to develop programming abilities and evaluating video games for the students in a Bootcamp, Julieth currently contributing to internal developments as a front-end engineer using modern technologies like react J’s .. Julieth's training as an engineer allows her to understand problems multidisciplinary and agility in the acquisition of new knowledge.
                            </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ConoceSobreMi;