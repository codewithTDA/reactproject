import React, { Component } from 'react'
import Styleform from './form.module.css'
export default class Form extends Component {
  render() {
    return (
      <div className={Styleform.container} >

        <div className={Styleform.headc}  >
            <div className={Styleform.head} >GET IN <br/> TOUCH</div>
        </div>
        <div className={Styleform.formContainer} >
        <div className={Styleform.form} >
          <form>
            <label>Enter Your Name</label><br/>
            <input className={Styleform.input} defaultValue="Name" name='text' /><br/>
            <label>Enter Your Email</label><br/>
      
            <input className={Styleform.input} name='text' /><br/>
            <label>Enter Your Subject</label><br/>
            <input className={Styleform.input} name='text' /><br/>
            <label>Enter Your Subject</label><br/>
            <input className={Styleform.input} name='text' /><br/>
            <label>Enter Your Messaage</label><br/>
            <textarea  className={Styleform.input} type='textarea' defaultValue="Message" cols="3" rows="4"  ></textarea>
            <br/>
            <button className={Styleform.submit}  >Submit</button>
          </form>
        </div>
        <div className={Styleform.sideC} >
          <div>We can't wait to hear from you</div><br/>
          <div>500 Terry Francine Street, <br/>

San Francisco, <br/>

CA 94158</div>
          <div>info@mysite.com<br/>

123-456-7890</div>
        </div>
        </div>
      </div>
    )
  }
}
