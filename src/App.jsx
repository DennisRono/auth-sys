import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import './css/auth.css'

const App = () => {
  const [login, setLogin] = useState('reg');
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }
  const setActivity = (login) => {
    let regform = document.querySelector('.register')
    let logform = document.querySelector('.login')
    if(login === "reg"){
      regform.style.display="unset";
      logform.style.display="none";
    } else if(login === "log"){
      regform.style.display="none";
      logform.style.display="unset";
    }
  }
  return (
    <div>
      <div className="authWrapper">
        <div className="authContainer">
          <div className="authFlex">
            <div className="authPlay">
              <div className="authReg">
                <div className="authRegFlex">
                  <div className="authRegForm">
                    <div className="authControls">
                      <div className="thecontrols">
                        <button className="showregform" onClick={()=>{setActivity('reg')}}>Register</button>
                        <button className="showlogform" onClick={()=>{setActivity('log')}}>Login</button>
                      </div>
                    </div>
                    <div className="register">
                      <form className="reg-form" autoComplete="off">
                          <p className="err-box"></p>
                          <input type="hidden" autoComplete="new-password" name="hidden" />
                          <div className="user-input-wrp">
                              <br/>
                              <input type="text" className="inputText" name="fullname" required/>
                              <span className="floating-label">Full Name</span>
                          </div>
                          <div className="user-input-wrp">
                              <br/>
                              <input id="id-input" type="text" className="inputText" name="phoneno"   required/>
                              <span className="floating-label">Phone number (optional)</span>
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
                      <GoogleLogin
                        className="google-login"
                        clientId="19488264174-ph00unj3grek6shl3sq5euc9ru0fq2l0.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                      />
                    </div>
                    <div className="login">
                      <form className="reg-form" autoComplete="off">
                          <p className="err-box"></p>
                          <input type="hidden" autoComplete="new-password" name="hidden" />
                          <div className="user-input-wrp">
                              <br/>
                              <input type="text" className="inputText" name="fullname" required/>
                              <span className="floating-label">Full Name</span>
                          </div>
                          <div className="user-input-wrp">
                              <br/>
                              <input id="id-input" type="text" className="inputText" name="phoneno"   required/>
                              <span className="floating-label">Phone number (optional)</span>
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
                      <GoogleLogin
                        className="google-login"
                        clientId="19488264174-ph00unj3grek6shl3sq5euc9ru0fq2l0.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                      />
                    </div>
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

export default App