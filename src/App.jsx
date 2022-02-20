import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import './css/auth.css'

const App = () => {
  //register states
  const [regData, setRegData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    cpassword: ""
  });
  //loginstates
  const [logData, setLogData] = useState({
    email: "",
    password: ""
  });

  //handle registration submit
  const handleregSubmit = (e) => {
    e.preventDefault()
    console.log(regData)

  }
  //handle registration submit
  const handlelogSubmit = (e) => {
    e.preventDefault()
    console.log(logData)

  }
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }
  const setActivity = (login) => {
    let regform = document.querySelector('.register')
    let logform = document.querySelector('.login')
    let regbutton = document.querySelector('.showregform')
    let logbutton = document.querySelector('.showlogform')
    if(login === "reg"){
      regform.style.display="unset";
      logform.style.display="none";
      regbutton.style.borderBottom="3px solid cyan";
      logbutton.style.borderBottom="none";
    } else if(login === "log"){
      regform.style.display="none";
      logform.style.display="unset";
      regbutton.style.borderBottom="none";
      logbutton.style.borderBottom="3px solid cyan";
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
                      <form className="reg-form" autoComplete="off" onSubmit={handleregSubmit}>
                          <p className="err-box"></p>
                          <input type="hidden" autoComplete="new-password" name="hidden" />
                          <div className="user-input-wrp">
                              <br/>
                              <input value={regData.fullname} onChange={(e)=>{setRegData({...regData, fullname: e.target.value})}} type="text" className="inputText" name="fullname" required/>
                              <span htmlFor="FullName" className="floating-label">Full Name</span>
                          </div>
                          <div className="user-input-wrp">
                              <br/>
                              <input value={regData.phone} onChange={(e)=>{setRegData({...regData, phone: e.target.value})}} id="id-input" type="text" className="inputText" name="phoneno"   required/>
                              <span className="floating-label">Phone number (optional)</span>
                          </div>
                          <span id="id-err"></span>
                          <div className="user-input-wrp">
                              <br/>
                              <input value={regData.email} onChange={(e)=>{setRegData({...regData, email: e.target.value})}} type="email" className="inputText" name="email"   required/>
                              <span className="floating-label">Email Address</span>
                          </div>
                          <div className="user-input-wrp"style={{ marginBottom: "5px !important" }} >
                              <br/>
                              <input value={regData.password} onChange={(e)=>{setRegData({...regData, password: e.target.value})}} type="password" className="inputText" name="password" required/>
                              <span className="floating-label">Password</span>
                          </div>
                          <div className="user-input-wrp">
                              <br/>
                              <input value={regData.cpassword} onChange={(e)=>{setRegData({...regData, cpassword: e.target.value})}} type="password" className="inputText" name="cpassword" required/>
                              <span className="floating-label">Confirm Password</span>
                          </div><br/>
                          <input type="submit" className="submit-btn" value="Register" name="submit"/>
                      </form>
                      <GoogleLogin
                        className="google-login"
                        clientId="19488264174-ph00unj3grek6shl3sq5euc9ru0fq2l0.apps.googleusercontent.com"
                        buttonText="Sign up using Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                      />
                    </div>
                    <div className="login"><br/><br/>
                      <form className="reg-form" autoComplete="off" onSubmit={handlelogSubmit}>
                          <p className="err-box"></p>
                          <input type="hidden" autoComplete="new-password" name="hidden" />
                          <div className="user-input-wrp">
                              <br/>
                              <input value={logData.email} onChange={(e)=>{setLogData({...logData, email: e.target.value})}} type="email" className="inputText" name="email"   required/>
                              <span className="floating-label">Email Address</span>
                          </div><br/>
                          <div className="user-input-wrp"style={{ marginBottom: "5px !important" }} >
                              <br/>
                              <input value={logData.password} onChange={(e)=>{setLogData({...logData, password: e.target.value})}} type="password" className="inputText" name="password" required/>
                              <span className="floating-label">Password</span>
                          </div><br/><br/>
                          <input type="submit" className="submit-btn" value="Login" name="submit"/>
                      </form><br/>
                      <GoogleLogin
                        className="google-login"
                        clientId="19488264174-ph00unj3grek6shl3sq5euc9ru0fq2l0.apps.googleusercontent.com"
                        buttonText="sign in using Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                      />
                    </div>
                  </div>
                  <div className="authRegImage">
                    <img src={`./illustrations/reg-ill.jpg`} alt="" />
                  </div>
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