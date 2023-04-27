import React, { Component } from 'react'
import Stylef from './footer.module.css'
export default class Footer extends Component {
  render() {
    return (
    <div className={Stylef.container} >
        <div className={Stylef.c} >© 2035 by SociaLight.Powered<br/> and secured by Wix</div>
      
            <div>Be a SociaLight and  Follow Us:</div>
    
    </div>
    )
  }
}
