import React, { Component } from "react";
import axios from "axios";
export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
    };
  }

  signUpHandler = () => {
    let { firstname, lastname, phone, email, password } = this.state;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request body
    const body = JSON.stringify({
      firstname,
      lastname,
      phone,
      email,
      password,
    });
    console.log(body);

    axios
      .post("http://localhost:9000/api/auth/register", body, config)
      .then(async (response) => {
        // handle success
        if (response.data.result === true) {
          console.log("Something went wrong ", response);
        } else {
          console.log("Successfully Created", response);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    console.log(this.state.firstname);

    let { firstname, lastname, phone, email, password } = this.state;

    return (
      <>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your first name"
            value={firstname}
            onChange={(e) => this.setState({ firstname: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your last name"
            value={lastname}
            onChange={(e) => this.setState({ lastname: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your e-mail adress"
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
          <label>Telephone number</label>
          <input
            type="telephone"
            className="form-control"
            placeholder="Enter your telephone"
            value={phone}
            onChange={(e) => this.setState({ phone: e.target.value })}
          />
        </div>

        <button
          //   type="submit"
          className="btn btn-primary btn-block"
          onClick={() => this.signUpHandler()}
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="#">Login?</a>
        </p>
      </>
    );
  }
}

// await fetch("http://localhost:9000/api/auth/register", {
//   method: "POST",
//   headers: {
//     Accept: "application/json, text/plain, */*",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     firstname,
//     lastname,
//     phone,
//     email,
//     password,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.error);
//     // code here //
//     if (data.error) {
//       alert("Error Password or Username"); /*displays error message*/
//     } else {
//       window.open(
//         "target.html"
//       ); /*opens the target page while Id & password matches*/
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });
