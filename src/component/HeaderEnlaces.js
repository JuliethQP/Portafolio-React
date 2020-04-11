import React, { Fragment } from "react";
import '../index.css';


class HeaderEnlaces extends React.Component {
   constructor(props){
    super(props);
    this.state={
      data :[{
        id: 1,
        href:"https://www.facebook.com/yuli.quinchia/",
        url:"https://img.icons8.com/ios-filled/72/facebook-new.png",


      },{
        id:2,
        href:"https://www.linkedin.com/in/julieth-quinchia-a4a04289",
        url:"https://img.icons8.com/ios-filled/72/linkedin.png"
        
      },{
          id:3,
          href:"https://github.com/JuliethQP",
          url:"https://img.icons8.com/ios-glyphs/72/github.png"
      }
      ]
    }
  }
  render() {
    return (
      <div className="articleHeader">
        <ul className="list-group list-group-horizontal">

        {
          this.state.data.map((icono)=>{
            return(
                 <li className="list-group-item-fluid">

          <a className="nav-link" href={icono.href}>
            <i>
              <img width="45" src={icono.url} />
            </i>
          </a>
      </li>

            )
             

          })
        }
      
     
        </ul>
      </div>
    );
  }
}

export default HeaderEnlaces;

