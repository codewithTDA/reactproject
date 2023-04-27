 import React, { Component } from 'react';
import Style4 from './about.module.css';
import pic from '../images/about.jpg';
export default class About extends Component {
  render() {
    return (
       <div className={Style4.container}>
         <img src={pic} alt='ff' className={Style4.bgimage}  ></img>
         <div className={Style4.insidecontainer} >
            <div className={Style4.head} >WHO<br/>WE ARE</div>
           <div className={Style4.para} ><p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or  double click me to add your own content and make changes to the font. Feel free to drag and  drop me anywhere you like on your page. I’m a great place for you to tell a story and let your  users know a little more about you.</p></div>
       </div>
  </div>
    )
  }
}
