import React, { Component } from 'react'
import Style from './navbar.module.css';
class Navbar extends Component {
  render() {
    return (
      <>
        <div className={Style.navbar}  >
        <nav className={Style.first} >
            <h1 className={Style.navbarh1} >Codewithtda</h1>
           
                <ul className={Style.navul} >
                    <li className={Style.li} ><a  className={Style.navbara} href='#' >SERVICES</a></li>
                    <li className={Style.li} ><a className={Style.navbara} href='#' >ABOUT US</a></li>
                    <li className={Style.li} ><a className={Style.navbara} href='#' >PROGRAMS</a></li>
                    <li className={Style.li} ><a className={Style.navbara} href='#' >WORK</a></li>
                </ul>
            </nav>
        </div>
      </>
    )
  }
}


export default Navbar;
