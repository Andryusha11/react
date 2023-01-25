import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      spinner: false,
    };
  }

  loginButton = () => {
    this.setState({
      spinner: true,
    });
    setTimeout(() => {
      this.setState({
        isLogin: true,
        spinner: false,
      });
    }, 2000);
  };

  logoutButton = () => {
    this.setState({
      isLogin: false,
    });
  };

  render() {
    let button;
    if (this.state.isLogin) {
      button = <Logout onLogout={this.logoutButton} />;
    } else {
      button = this.state.spinner ? (
        <Spinner size={50} />
      ) : (
        <Login onLogin={this.loginButton} />
      );
    }
    return <>{button}</>;
  }
}

export default Auth;
