import React, { Component } from 'react'
import Style5 from './work.module.css'
export default class Work extends Component {
  render() {
    return (
      <div className={Style5.outer}  >
        <div className={Style5.container}  >
            <div className={Style5.head}  >OUR<br/>
WORK</div>
            <div><p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p></div>
      </div>
      </div>
    )
  }
}
