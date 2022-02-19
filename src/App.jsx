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
                      <h2>Sign Up</h2>
                      <p>create an account with us</p>
                      <form class="regForm">
                        
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