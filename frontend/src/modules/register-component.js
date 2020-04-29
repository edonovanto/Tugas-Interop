import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
const axios = require("axios");

const api = axios.create({
  baseURl: `http://127.0.0.1:8000/api/auth/register`,
  responseType: `json`,
});

class RegisterComponent extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.handleNameChange = (event) => {
      this.setState({ name: event.target.value });
    };

    this.handleEmailChange = (event) => {
      this.setState({ email: event.target.value });
    };

    this.handlePasswordChange = (event) => {
      this.setState(
        { password: event.target.value },
        console.log(this.state.password)
      );
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let url = `http://127.0.0.1:8000/api/auth/register`;
    axios
      .post(url, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
      .then();
  };
  render() {
    return (
      <body class="bg-gradient-primary">
        <div class="container">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div class="col-lg-7">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form class="user" onSubmit={this.handleSubmit}>
                      <div class="form-group row">
                        <div class="col-sm-12 mb-3 mb-sm-0">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="exampleFirstName"
                            placeholder="First Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          placeholder="Email Address"
                          value={this.state.email}
                          onChange={this.handleEmailChange}
                        />
                      </div>
                      <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                          />
                        </div>
                        <div class="col-sm-6">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleRepeatPassword"
                            placeholder="Repeat Password"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary btn-user btn-block"
                      >
                        Register Account
                      </button>
                      <hr />
                      <a
                        href="index.html"
                        class="btn btn-google btn-user btn-block"
                      >
                        <i class="fab fa-google fa-fw"></i> Register with Google
                      </a>
                      <a
                        href="index.html"
                        class="btn btn-facebook btn-user btn-block"
                      >
                        <i class="fab fa-facebook-f fa-fw"></i> Register with
                        Facebook
                      </a>
                    </form>
                    <hr />
                    <div class="text-center">
                      <a class="small" href="forgot-password.html">
                        Forgot Password?
                      </a>
                    </div>
                    <div class="text-center">
                      <Link to="/">
                        <a class="small" href="login.html">
                          Already have an account? Login!
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

        <script src="js/sb-admin-2.min.js"></script>
      </body>
    );
  }
}

export default RegisterComponent;
