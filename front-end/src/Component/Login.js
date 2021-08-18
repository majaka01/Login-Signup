import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  signInHandler = () => {
    let { email, password } = this.state;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request body
    const body = JSON.stringify({
      email,
      password,
    });
    console.log(body);

    axios
      .post("http://localhost:9000/api/auth/login", body, config)
      .then(async (response) => {
        // handle success
        if (response.data.result === true) {
          console.log("Something went wrong ", response);
        } else {
          console.log("Logged In Successfully!", response);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  render() {
    let { email, password } = this.state;

    return (
      <>
        <h3>Login</h3>

        <div className="form-group">
          <label>E-mail address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter e-mail"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={() => this.signInHandler()}
        >
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </>
    );
  }
}
