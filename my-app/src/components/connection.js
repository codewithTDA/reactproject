import React, { Component } from 'react'
import Style1 from './connection.module.css'

export default class Connection extends Component {
  render() {
    return (
     <>
        <div className={Style1.container} > 
     
           <div className={Style1.inside} >
           <div><span className={Style1.black} >MAKING</span><br/> <sapn className={Style1.black} >CONNECTION</sapn><br/> <span  className={Style1.white} >DELIVERING</span><br/> <span className={Style1.white} >RESULTS</span></div>
           <div className={Style1.lower} ><span>BUILDING YOUR SOCIAL BRAND</span></div>
           </div>
        </div>
     </>
    )
  }
}
