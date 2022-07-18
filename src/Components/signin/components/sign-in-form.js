import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkLoggingStatus,logIn } from "./../../../Actions/userData";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import baseURL from "./../../../Actions/baseURL";


class SigninForm extends Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: " ",
      password: "",
      isLoggedIn:false
    };
    console.log(this.props.isLoggedIn)
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

   onSubmit = async( e) => {
    e.preventDefault();
   
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    let payload;
    try{
    let response = await axios.post(`${baseURL}/api/user/login`, data)
    payload = response.data
    console.log(payload);
  
    console.log(`email: ${this.state.email}`);
    console.log(`password: ${this.state.password}`);

    await this.props.logIn({
      email: this.state.email,
      password: this.state.password,
    })
    // if(this.props.userId){
    //   this.setState({isLoggedIn: true});
    // }
    this.props.checkLoggingStatus(localStorage.getItem('token'));
    this.props.allProps.history.push(`/`);
    window.location.reload();
    //  if(payload.user.type=="Freelancer"){
    //    this.props.allProps.history.push(`/`)
    //  }
    //  else{
    //   this.props.allProps.history.push(`/clienthome`)



    // }
  }catch(err){
 
    var errElement = document.getElementById("error");
    console.log(errElement);
    errElement.style.display = "block";
  }
    
  };

  render() {
   
    
    return (
      <div className="my-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-7  col-md-12 col-sm-12 col-xs-12">
                    <div className="text-center bg-white mb-5 py-4 px-5 border rounded">
                      <div className="alert-box error" id="error">
                        
                        <span> error: </span>The Email or password is not
                        available.
                      </div>
                      <h3 className="font-weight-bolder head-font my-4">
                        
                        Log in and get to work
                      </h3>
                      <Form className="mt-4 text-dark">
                        <div className="form-group">
                          <div class="input mb-4">
                            <div className="msg-icon d-flex justify-content-center align-items-center">
                              <FontAwesomeIcon
                                className="text-muted"
                                icon={faUser}
                              />
                            </div>

                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Username or Email"
                              onChange={this.onChangeEmail}
                            />
                          </div>
                          <div class="input mb-4">
                            <div className="msg-icon d-flex justify-content-center align-items-center">
                              <FontAwesomeIcon
                                className="text-muted"
                                icon={faLock}
                              />
                            </div>

                            <Input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              onChange={this.onChangePassword}
                            />
                          </div>
                          <div class="form-group form-check">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck1"
                            />
                            <label class="form-check-label" for="exampleCheck1">
                              
                              Keep me logged in
                            </label>
                          </div>
                          <a
                            id="forgot-password"
                            target="_self"
                            href="/ab/account-security/reset-password?from=login&amp;redir=/ab/find-work/&amp;login=hebayehya1111%40gmail.com"
                          >
                            
                            Forgot password ?
                          </a>
                          <div className="continue-btn my-3">
                            <button
                              type="submit"
                              className="continue-button btn btn-success btn-lg btn-block"
                              onClick={this.onSubmit}
                              href="/"
                            >
                              
                              Log in
                            </button>
                          </div>
                        </div>
                        <div class="text-center text-dark my-3">
                          <p className="or"> or </p>
                        </div>
                        <div className="google-btn mb-4">
                          <div className="google-icon d-flex justify-content-center align-items-center px-2 border rounded">
                            <svg
                              className="mx-1"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="18px"
                              height="18px"
                              viewBox="0 0 48 48"
                            >
                              <g>
                                <path
                                  fill="#EA4335"
                                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                ></path>
                                <path
                                  fill="#4285F4"
                                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                                ></path>
                                <path
                                  fill="#FBBC05"
                                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                                ></path>
                                <path
                                  fill="#34A853"
                                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                ></path>
                                <path fill="none" d="M0 0h48v48H0z"></path>
                              </g>
                            </svg>
                          </div>
                          <button className="rounded-0 btn btn-primary btn-lg btn-block google-button">
                            Continue With Google
                          </button>
                        </div>
                        <button className="mt-4 rounded-0 d-flex justify-content-center align-items-center btn btn-lg btn-block apple-button">
                          <svg
                            className="mx-2"
                            width="3.8469mm"
                            height="3.7625mm"
                            version="1.1"
                            viewBox="0 0 3.8469 4.7625"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g transform="translate(-64.345 -143.35)">
                              <path d="m65.3 148.04c-0.28391-0.17313-0.67141-0.76332-0.84045-1.2801-0.08795-0.26886-0.11025-0.42084-0.11353-0.77372-5e-3 -0.53416 0.07013-0.78453 0.32071-1.0692 0.32908-0.37386 0.80475-0.48983 1.2754-0.31094 0.28741 0.10923 0.40289 0.10558 0.79215-0.0251 0.25755-0.0864 0.3669-0.10301 0.53413-0.0809 0.27892 0.0369 0.51512 0.14539 0.6838 0.31406l0.138 0.138-0.15036 0.12394c-0.35848 0.29549-0.46412 0.84523-0.24639 1.2822 0.09783 0.19631 0.33073 0.42321 0.48834 0.47574 0.07682 0.0256-0.27148 0.68647-0.49609 0.94128-0.31615 0.35864-0.47304 0.40634-0.86417 0.26274-0.38534-0.14149-0.49243-0.14492-0.83466-0.0268-0.37222 0.12848-0.51369 0.13441-0.68687 0.0288zm0.95956-3.6652c-0.04406-0.11481 0.09887-0.49259 0.25567-0.67578 0.14967-0.17485 0.45436-0.3477 0.61294-0.3477 0.08074 0 0.08756 0.0177 0.06932 0.17944-0.0488 0.43295-0.36807 0.79774-0.77487 0.88535-0.10672 0.0229-0.14178 0.0141-0.16305-0.0413z"></path>
                            </g>
                          </svg>
                          Continue With Apple
                        </button>

                        <div class="text-center text-dark my-3">
                          <p className="new">New to Nano?</p>
                        </div>
                        <div className="form-group">
                        <Link to ="/signup" >
                          <button className="btn btn-outline-success btn-lg btn-block login-btn">
                            Sign up
                          </button>
                          </Link>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
    userId: state.userReducer.userID,
    userData: state.userReducer.userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({checkLoggingStatus, logIn},dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
