import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const axios = require("axios");
console.log("token login : ", cookies.get("access_token"));

class LandingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    let that = this;
    let url = "http://127.0.0.1:8000/api/auth/login";

    axios
      .post(url, {
        email: this.state.email,
        password: this.state.password,
      })
      .then(function (response) {
        console.log(response.data["access_token"]);
        cookies.set("access_token", response.data["access_token"], {
          path: "/",
        });
        that.props.history.push("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (cookies.get("access_token") != null) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <html>
        <body class="bg-gradient-primary">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                  <div class="card-body p-0">
                    <div class="row">
                      <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                      <div class="col-lg-6">
                        <div class="p-5">
                          <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                          </div>
                          <form class="user" onSubmit={this.login}>
                            <div class="form-group">
                              <input
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                type="email"
                                class="form-control form-control-user"
                                id="exampleInputEmail"
                                aria-describedby="emailHelp"
                                placeholder="Enter Email Address..."
                              />
                            </div>
                            <div class="form-group">
                              <input
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                type="password"
                                class="form-control form-control-user"
                                id="exampleInputPassword"
                                placeholder="Password"
                              />
                            </div>
                            <div class="form-group">
                              <div class="custom-control custom-checkbox small">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customCheck"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck"
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>

                            <button
                              type="submit"
                              class="btn btn-primary btn-user btn-block"
                              onClick={this.handleLogin}
                            >
                              login
                            </button>
                            <hr />
                            <a
                              href="index.html"
                              class="btn btn-google btn-user btn-block"
                            >
                              <i class="fab fa-google fa-fw"></i> Login with
                              Google
                            </a>
                            <a
                              href="index.html"
                              class="btn btn-facebook btn-user btn-block"
                            >
                              <i class="fab fa-facebook-f fa-fw"></i> Login with
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
                            <Link class="nav-link" to="/register">
                              <i class="fas fa-fw fa-tachometer-alt"></i>
                              <a class="small">Create an Account!</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

export default LandingComponent;
