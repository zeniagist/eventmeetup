import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Login from "./Login";
import { getEvents, checkToken } from "./api";

class App extends Component {

  async componentDidMount() {
    const accessToken =
      localStorage.getItem("access_token");
    const validToken = accessToken !== null ? await
      checkToken(accessToken) : false;
    this.setState({ tokenCheck: validToken });
    if (validToken === true) this.updateEvents()
    const searchParams = new
      URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.mounted = true;
    if (code && this.mounted === true && validToken
      === false) {
      this.setState({ tokenCheck: true });
      this.updateEvents()
    }
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;