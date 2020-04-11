import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderEnlaces from './component/HeaderEnlaces'
import * as serviceWorker from './serviceWorker';

import Navbar from "./component/Navbar"
import ConoceSobreMi from "./component/ConoceSobreMi"
import Footer from './component/Footer'
import ConoceMiPortafolio from './component/ConoceMiPortafolio'




ReactDOM.render(
  <React.StrictMode>
       <HeaderEnlaces />
         <Navbar />
         <br/>
         <ConoceSobreMi />
         <br/>
         <ConoceMiPortafolio/>
         <br/>
         <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
