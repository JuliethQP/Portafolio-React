import React, { Fragment } from "react";
import '../index.css';

class Footer extends React.Component {
    render() {
        return (
            <Fragment>
                <h1 className="titulo"><strong>Contáctame</strong> </h1>
                <div class="container-fluid bg-dark text-center" id="contactame">

                    <div class="row ">

                            <div class="container  text-center">

                                <ul class="icon-list-items ">
                                    <li class="icon-list-item justify-content-start">
                                        <span class="icon-list-icon">
                                            <i class="" aria-hidden="true"> <img width="50px" src="https://github.com/JuliethQP/Portafolio-reto/blob/master/icons8-whatsapp-48.png?raw=true" alt="" /></i>
                                        </span>
                                        <span class="elementor-icon-list-text text-white">31113873520 </span>
                                    </li>
                                   
                                    <li class="icon-list-item">
                                        <span class="elementor-icon-list-icon">

                                            <i class="" aria-hidden="true"> <img width="40px" src="https://github.com/JuliethQP/Portafolio-reto/blob/master/icons8-email-64.png?raw=true" alt="" /></i>
                                        </span>
                                        <span class="elementor-icon-list-text text-white"> juliethquinchia@gmail.com</span>
                                    </li>
                                </ul>

                            </div>


                        


                    </div>

                </div>

            </Fragment>

        )
    }
}
export default Footer;