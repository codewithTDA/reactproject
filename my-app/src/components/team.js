import React, { Component } from 'react'
import STeam from './team.module.css'
export default class Team extends Component {
  render() {
    return (
    <div  className={STeam.container} >

        <div>
            <div>OUR TEAM</div>
            <div><p>I'm a paragraph. Click here to add your own text and edit me.It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p></div>
        </div>
    </div>
    )
  }
}
