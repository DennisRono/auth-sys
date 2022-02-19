import React, { Component } from 'react'
//import GoogleLogin from 'react-google-login'
import './css/auth.css'

export class App extends Component {

  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }
  // <GoogleLogin
  //         clientId="19488264174-ph00unj3grek6shl3sq5euc9ru0fq2l0.apps.googleusercontent.com"
  //         buttonText="Login with Google"
  //         onSuccess={this.responseGoogle}
  //         onFailure={this.responseGoogle}
  //         cookiePolicy={'single_host_origin'}
  //       />
  render() {
    return (
      <div>
        <div className="authWrapper">
          <div className="authContainer">
            <div className="authFlex">
              <div className="authPlay">
                <div className="authReg">
                  <div className="authRegFlex">
                    <div className="authRegForm">
                      <h1>Register</h1>
                      <p>Create an account with us</p>
                      <form className="form" autoComplete="off">
                          <p className="err-box"></p>
                          <input type="hidden" autoComplete="new-password" name="hidden" />
                          <div className="user-input-wrp">
                              <br/>
                              <input type="text" className="inputText" name="fullname" required/>
                              <span className="floating-label">Full Name</span>
                          </div>
                          <div className="user-input-wrp">
                              <br/>
                              <input type="text" className="inputText" name="regno"   required/>
                              <span className="floating-label">Registration number</span>
                          </div>
                          <div className="user-input-wrp">
                              <br/>
                              <input type="text" autoComplete="off" className="inputText" name="course"   required/>
                              <span className="floating-label">Course</span>
                          </div>
                          <div className="user-input-wrp">
                              <br/>
                              <input id="id-input" type="text" className="inputText" name="idno"   required/>
                              <span className="floating-label">ID number</span>
                          </div>
                          <span id="id-err"></span>
                          <div className="user-input-wrp">
                              <br/>
                              <input type="email" className="inputText" name="email"   required/>
                              <span className="floating-label">Email Address</span>
                          </div>
                          <div className="user-input-wrp"style={{ marginBottom: "5px !important" }} >
                              <br/>
                              <input type="password" className="inputText" name="password" required/>
                              <span className="floating-label">Password</span>
                          </div>
                          <div className="user-input-wrp">
                              <br/>
                              <input type="password" className="inputText" name="cpassword" required/>
                              <span className="floating-label">Confirm Password</span>
                          </div><br/>
                          <input type="submit" className="submit-btn" value="Register" name="submit"/>
                      </form>
                    </div>
                    <div className="authRegImage"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App