import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export class App extends Component {

  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="19488264174-ph00unj3grek6shl3sq5euc9ru0fq2l0.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}

export default App