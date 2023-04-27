import React, { Component } from 'react'
import Style3 from './Services.module.css';
export default class Services extends Component {
  render() {
    return (
      <div  className={Style3.container} >
        <div className={Style3.heading}  > OUR<br/>SERVICES</div>
        <div className={Style3.lower} > 
          <div>SOCIAL <br/> MEDIA</div>
          <div>CREATIVE <br/> STRATEGY </div>
          <div>PUBLIC <br/> RELATIONS</div>
          <div>CONTENT <br/> MARKETING</div>
        </div>
      </div>
    )
  }
}
