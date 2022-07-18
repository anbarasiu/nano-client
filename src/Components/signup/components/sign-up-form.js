import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkLoggingStatus,logIn } from "./../../../Actions/userData";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import ReactFormInputValidation from "react-form-input-validation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faUser } from '@fortawesome/free-solid-svg-icons';
import {faLock } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import validator from 'validator';
import axios from 'axios';
import { Redirect } from  "react-router-dom";
import baseURL from "../../../Actions/baseURL";


class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flag:0,
            isDisabled:false,
            email:'',
            firstName:'',
            LastName:'',
            password:'',
            country:'',
            userType:'',
            ternarycolor: "#37A000",
            white : "#fff",
            isSignedup: false
         }
         this.form = new ReactFormInputValidation(this);
         this.form.onformcontinue = (event) => {
            if (!this.required() && !this.email()) {
                this.setState({ flag: 1});
                this.getForm();
            }
            else{
                alert("You must enter valid Email")
                event.preventDefault();
            }
        }
        this.form.onformsubmit = async (e) => {
            e.preventDefault();
            console.log(`Form submitted:`);
            console.log(`email: ${this.state.email}`);
            console.log(`firstName: ${this.state.firstName}`);
            console.log(`LastName: ${this.state.LastName}`);
            console.log(`password: ${this.state.password}`);
            console.log(`country: ${this.state.country}`);
            console.log(`userType: ${this.state.userType}`);
            const newUser = {
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.LastName,
                password: this.state.password,
                country: this.state.country,
                type: this.state.userType,
            };
            console.log(newUser);
            await axios.post(`${baseURL}/api/user/register`, newUser)
                .then(async res => 

                {                                
                    if (res.status === 200) {
                      this.setState({ isSignedup: true }); // after signing up, set the state to true. This will trigger a re-render
                      await this.props.logIn({
                        email: newUser.email,
                        password: newUser.password
                      })
                      this.props.history.push("/home");
                      window.location.reload();
                    }
                }
               );



            this.setState({
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                country: '',
                type: ''
            })
            }
    }
    
    required = () => {
        if (!(this.state.email.toString().trim().length)) {return true;}
        return false;
      };
       
      email = () => {
        if (!validator.isEmail(this.state.email)) {return true;}
        return false;
      };
      hiringClick = () =>{
         var hireBtn = document.getElementById("hire");
         var freelanceBtn = document.getElementById("freelance");
         freelanceBtn.style.backgroundColor = this.state.white;
         freelanceBtn.style.color = "#000";
         hireBtn.style.backgroundColor = this.state.ternarycolor;
         hireBtn.style.color = this.state.white;
         this.setState({userType:"client"});
         console.log(this.state.userType);
      }
      freelanceClick = () =>{
        var hireBtn = document.getElementById("hire");
        var freelanceBtn = document.getElementById("freelance");
        hireBtn.style.backgroundColor = this.state.white;
        hireBtn.style.color = "#000";
        freelanceBtn.style.backgroundColor = this.state.ternarycolor;
        freelanceBtn.style.color = this.state.white;
        this.setState({userType:"freelancer"});
        console.log(this.state.userType);
      }
    getForm = () => {


        if(this.state.flag == 0){
            return(
                <div>
                    <h3 className="font-weight-bolder head-font my-4">Get your free account</h3>
                    <Form className="mt-4 text-dark">
                        <div className="form-group">
                            <div className="google-btn mb-4">
                                <div className="google-icon d-flex justify-content-center align-items-center px-2 border rounded">
                                    <svg className="mx-1" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48">
                                        <g>
                                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                            <path fill="none" d="M0 0h48v48H0z"></path>
                                        </g>
                                    </svg>  
                                </div>
                                <button className="rounded-0 btn btn-primary btn-lg btn-block google-button">  
                                    Continue With Google
                                </button>
                            </div>
                            <button className="mt-4 rounded-0 d-flex justify-content-center align-items-center btn btn-lg btn-block apple-button">  
                            <svg className="mx-2" width="3.8469mm" height="3.7625mm" version="1.1" viewBox="0 0 3.8469 4.7625" xmlns="http://www.w3.org/2000/svg">
                                <g transform="translate(-64.345 -143.35)">
                                <path d="m65.3 148.04c-0.28391-0.17313-0.67141-0.76332-0.84045-1.2801-0.08795-0.26886-0.11025-0.42084-0.11353-0.77372-5e-3 -0.53416 0.07013-0.78453 0.32071-1.0692 0.32908-0.37386 0.80475-0.48983 1.2754-0.31094 0.28741 0.10923 0.40289 0.10558 0.79215-0.0251 0.25755-0.0864 0.3669-0.10301 0.53413-0.0809 0.27892 0.0369 0.51512 0.14539 0.6838 0.31406l0.138 0.138-0.15036 0.12394c-0.35848 0.29549-0.46412 0.84523-0.24639 1.2822 0.09783 0.19631 0.33073 0.42321 0.48834 0.47574 0.07682 0.0256-0.27148 0.68647-0.49609 0.94128-0.31615 0.35864-0.47304 0.40634-0.86417 0.26274-0.38534-0.14149-0.49243-0.14492-0.83466-0.0268-0.37222 0.12848-0.51369 0.13441-0.68687 0.0288zm0.95956-3.6652c-0.04406-0.11481 0.09887-0.49259 0.25567-0.67578 0.14967-0.17485 0.45436-0.3477 0.61294-0.3477 0.08074 0 0.08756 0.0177 0.06932 0.17944-0.0488 0.43295-0.36807 0.79774-0.77487 0.88535-0.10672 0.0229-0.14178 0.0141-0.16305-0.0413z"></path>
                                </g>
                            </svg>
                                Continue With Apple
                            </button>
                            <div className="text-center text-dark my-3">
                                <p className="or">or</p>
                            </div>
                            <div className="input mb-4">
                                <div className="msg-icon d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon className="text-muted" icon={faEnvelope} />
                                </div>                  
                                <Input type="email" className="form-control" placeholder="Work Email Address" onChange={event => this.setState({email: event.target.value})} validations={[this.required, this.email]}/>
                                {this.required() ? <p style={{color: "#D50000"}}>*Email is required</p> : ''}
                                {this.email(this.state.email) ? <p style={{color: "#D50000"}}>*Email must be valid</p> : ''}
                            </div>
                            <div className="continue-btn my-3">
                                <button onClick={this.form.onformcontinue} disabled ={this.state.isDisabled} className="continue-button btn btn-success btn-lg btn-block">
                                    Continue With Email
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div className="text-center">
                        <h3 className="font-weight-bolder head-font my-4">Complete your free account setup</h3>
                        <p className="text-dark">{this.state.email} </p>
                    </div>
                    <Form className="my-3" onSubmit={this.form.onformsubmit}>
                        <div className="container">
                            <div className="row my-2">
                                <div className="col-md-6">
                                    <div className="mr-2 second-form-input1 second-form-input">
                                        <div className="user-icon icon"><FontAwesomeIcon className="text-muted" icon={faUser} /></div>
                                        <Input type="text" required className="form-control my-3 border rounded" placeholder="First Name" onChange={event => this.setState({firstName: event.target.value})}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mr-2 second-form-input2 second-form-input">
                                        <div className="user-icon icon"><FontAwesomeIcon className="text-muted" icon={faUser} /></div>
                                        <Input type="text" required className="my-3 form-control border rounded" placeholder="Last Name" onChange={event => this.setState({LastName: event.target.value})}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-md-12">
                                    <div className="second-form-input3 second-form-input">
                                        <div className="user-icon icon"><FontAwesomeIcon className="text-muted" icon={faLock} /></div>
                                        <Input type="password" className="form-control border rounded" placeholder="Password" required onChange={event => this.setState({password: event.target.value})}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-md-12">
                                    <div className="second-form-input3">
                                        <select required className="form-control border rounded" name="Country" onChange={event => this.setState({country: event.target.value})}> 
                                        <option value="" selected="selected">Select Country</option> 
                                        <option value="United States">United States</option> 
                                        <option value="United Kingdom">United Kingdom</option> 
                                        <option value="Afghanistan">Afghanistan</option> 
                                        <option value="Albania">Albania</option> 
                                        <option value="Algeria">Algeria</option> 
                                        <option value="American Samoa">American Samoa</option> 
                                        <option value="Andorra">Andorra</option> 
                                        <option value="Angola">Angola</option> 
                                        <option value="Anguilla">Anguilla</option> 
                                        <option value="Antarctica">Antarctica</option> 
                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option> 
                                        <option value="Argentina">Argentina</option> 
                                        <option value="Armenia">Armenia</option> 
                                        <option value="Aruba">Aruba</option> 
                                        <option value="Australia">Australia</option> 
                                        <option value="Austria">Austria</option> 
                                        <option value="Azerbaijan">Azerbaijan</option> 
                                        <option value="Bahamas">Bahamas</option> 
                                        <option value="Bahrain">Bahrain</option> 
                                        <option value="Bangladesh">Bangladesh</option> 
                                        <option value="Barbados">Barbados</option> 
                                        <option value="Belarus">Belarus</option> 
                                        <option value="Belgium">Belgium</option> 
                                        <option value="Belize">Belize</option> 
                                        <option value="Benin">Benin</option> 
                                        <option value="Bermuda">Bermuda</option> 
                                        <option value="Bhutan">Bhutan</option> 
                                        <option value="Bolivia">Bolivia</option> 
                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> 
                                        <option value="Botswana">Botswana</option> 
                                        <option value="Bouvet Island">Bouvet Island</option> 
                                        <option value="Brazil">Brazil</option> 
                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option> 
                                        <option value="Brunei Darussalam">Brunei Darussalam</option> 
                                        <option value="Bulgaria">Bulgaria</option> 
                                        <option value="Burkina Faso">Burkina Faso</option> 
                                        <option value="Burundi">Burundi</option> 
                                        <option value="Cambodia">Cambodia</option> 
                                        <option value="Cameroon">Cameroon</option> 
                                        <option value="Canada">Canada</option> 
                                        <option value="Cape Verde">Cape Verde</option> 
                                        <option value="Cayman Islands">Cayman Islands</option> 
                                        <option value="Central African Republic">Central African Republic</option> 
                                        <option value="Chad">Chad</option> 
                                        <option value="Chile">Chile</option> 
                                        <option value="China">China</option> 
                                        <option value="Christmas Island">Christmas Island</option> 
                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option> 
                                        <option value="Colombia">Colombia</option> 
                                        <option value="Comoros">Comoros</option> 
                                        <option value="Congo">Congo</option> 
                                        <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option> 
                                        <option value="Cook Islands">Cook Islands</option> 
                                        <option value="Costa Rica">Costa Rica</option> 
                                        <option value="Cote D'ivoire">Cote D'ivoire</option> 
                                        <option value="Croatia">Croatia</option> 
                                        <option value="Cuba">Cuba</option> 
                                        <option value="Cyprus">Cyprus</option> 
                                        <option value="Czech Republic">Czech Republic</option> 
                                        <option value="Denmark">Denmark</option> 
                                        <option value="Djibouti">Djibouti</option> 
                                        <option value="Dominica">Dominica</option> 
                                        <option value="Dominican Republic">Dominican Republic</option> 
                                        <option value="Ecuador">Ecuador</option> 
                                        <option value="Egypt">Egypt</option> 
                                        <option value="El Salvador">El Salvador</option> 
                                        <option value="Equatorial Guinea">Equatorial Guinea</option> 
                                        <option value="Eritrea">Eritrea</option> 
                                        <option value="Estonia">Estonia</option> 
                                        <option value="Ethiopia">Ethiopia</option> 
                                        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option> 
                                        <option value="Faroe Islands">Faroe Islands</option> 
                                        <option value="Fiji">Fiji</option> 
                                        <option value="Finland">Finland</option> 
                                        <option value="France">France</option> 
                                        <option value="French Guiana">French Guiana</option> 
                                        <option value="French Polynesia">French Polynesia</option> 
                                        <option value="French Southern Territories">French Southern Territories</option> 
                                        <option value="Gabon">Gabon</option> 
                                        <option value="Gambia">Gambia</option> 
                                        <option value="Georgia">Georgia</option> 
                                        <option value="Germany">Germany</option> 
                                        <option value="Ghana">Ghana</option> 
                                        <option value="Gibraltar">Gibraltar</option> 
                                        <option value="Greece">Greece</option> 
                                        <option value="Greenland">Greenland</option> 
                                        <option value="Grenada">Grenada</option> 
                                        <option value="Guadeloupe">Guadeloupe</option> 
                                        <option value="Guam">Guam</option> 
                                        <option value="Guatemala">Guatemala</option> 
                                        <option value="Guinea">Guinea</option> 
                                        <option value="Guinea-bissau">Guinea-bissau</option> 
                                        <option value="Guyana">Guyana</option> 
                                        <option value="Haiti">Haiti</option> 
                                        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option> 
                                        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option> 
                                        <option value="Honduras">Honduras</option> 
                                        <option value="Hong Kong">Hong Kong</option> 
                                        <option value="Hungary">Hungary</option> 
                                        <option value="Iceland">Iceland</option> 
                                        <option value="India">India</option> 
                                        <option value="Indonesia">Indonesia</option> 
                                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option> 
                                        <option value="Iraq">Iraq</option> 
                                        <option value="Ireland">Ireland</option> 
                                        <option value="Israel">Israel</option> 
                                        <option value="Italy">Italy</option> 
                                        <option value="Jamaica">Jamaica</option> 
                                        <option value="Japan">Japan</option> 
                                        <option value="Jordan">Jordan</option> 
                                        <option value="Kazakhstan">Kazakhstan</option> 
                                        <option value="Kenya">Kenya</option> 
                                        <option value="Kiribati">Kiribati</option> 
                                        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option> 
                                        <option value="Korea, Republic of">Korea, Republic of</option> 
                                        <option value="Kuwait">Kuwait</option> 
                                        <option value="Kyrgyzstan">Kyrgyzstan</option> 
                                        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option> 
                                        <option value="Latvia">Latvia</option> 
                                        <option value="Lebanon">Lebanon</option> 
                                        <option value="Lesotho">Lesotho</option> 
                                        <option value="Liberia">Liberia</option> 
                                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option> 
                                        <option value="Liechtenstein">Liechtenstein</option> 
                                        <option value="Lithuania">Lithuania</option> 
                                        <option value="Luxembourg">Luxembourg</option> 
                                        <option value="Macao">Macao</option> 
                                        <option value="North Macedonia">North Macedonia</option> 
                                        <option value="Madagascar">Madagascar</option> 
                                        <option value="Malawi">Malawi</option> 
                                        <option value="Malaysia">Malaysia</option> 
                                        <option value="Maldives">Maldives</option> 
                                        <option value="Mali">Mali</option> 
                                        <option value="Malta">Malta</option> 
                                        <option value="Marshall Islands">Marshall Islands</option> 
                                        <option value="Martinique">Martinique</option> 
                                        <option value="Mauritania">Mauritania</option> 
                                        <option value="Mauritius">Mauritius</option> 
                                        <option value="Mayotte">Mayotte</option> 
                                        <option value="Mexico">Mexico</option> 
                                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option> 
                                        <option value="Moldova, Republic of">Moldova, Republic of</option> 
                                        <option value="Monaco">Monaco</option> 
                                        <option value="Mongolia">Mongolia</option> 
                                        <option value="Montserrat">Montserrat</option> 
                                        <option value="Morocco">Morocco</option> 
                                        <option value="Mozambique">Mozambique</option> 
                                        <option value="Myanmar">Myanmar</option> 
                                        <option value="Namibia">Namibia</option> 
                                        <option value="Nauru">Nauru</option> 
                                        <option value="Nepal">Nepal</option> 
                                        <option value="Netherlands">Netherlands</option> 
                                        <option value="Netherlands Antilles">Netherlands Antilles</option> 
                                        <option value="New Caledonia">New Caledonia</option> 
                                        <option value="New Zealand">New Zealand</option> 
                                        <option value="Nicaragua">Nicaragua</option> 
                                        <option value="Niger">Niger</option> 
                                        <option value="Nigeria">Nigeria</option> 
                                        <option value="Niue">Niue</option> 
                                        <option value="Norfolk Island">Norfolk Island</option> 
                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option> 
                                        <option value="Norway">Norway</option> 
                                        <option value="Oman">Oman</option> 
                                        <option value="Pakistan">Pakistan</option> 
                                        <option value="Palau">Palau</option> 
                                        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option> 
                                        <option value="Panama">Panama</option> 
                                        <option value="Papua New Guinea">Papua New Guinea</option> 
                                        <option value="Paraguay">Paraguay</option> 
                                        <option value="Peru">Peru</option> 
                                        <option value="Philippines">Philippines</option> 
                                        <option value="Pitcairn">Pitcairn</option> 
                                        <option value="Poland">Poland</option> 
                                        <option value="Portugal">Portugal</option> 
                                        <option value="Puerto Rico">Puerto Rico</option> 
                                        <option value="Qatar">Qatar</option> 
                                        <option value="Reunion">Reunion</option> 
                                        <option value="Romania">Romania</option> 
                                        <option value="Russian Federation">Russian Federation</option> 
                                        <option value="Rwanda">Rwanda</option> 
                                        <option value="Saint Helena">Saint Helena</option> 
                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
                                        <option value="Saint Lucia">Saint Lucia</option> 
                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option> 
                                        <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option> 
                                        <option value="Samoa">Samoa</option> 
                                        <option value="San Marino">San Marino</option> 
                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option> 
                                        <option value="Saudi Arabia">Saudi Arabia</option> 
                                        <option value="Senegal">Senegal</option> 
                                        <option value="Serbia and Montenegro">Serbia and Montenegro</option> 
                                        <option value="Seychelles">Seychelles</option> 
                                        <option value="Sierra Leone">Sierra Leone</option> 
                                        <option value="Singapore">Singapore</option> 
                                        <option value="Slovakia">Slovakia</option> 
                                        <option value="Slovenia">Slovenia</option> 
                                        <option value="Solomon Islands">Solomon Islands</option> 
                                        <option value="Somalia">Somalia</option> 
                                        <option value="South Africa">South Africa</option> 
                                        <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option> 
                                        <option value="Spain">Spain</option> 
                                        <option value="Sri Lanka">Sri Lanka</option> 
                                        <option value="Sudan">Sudan</option> 
                                        <option value="Suriname">Suriname</option> 
                                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option> 
                                        <option value="Swaziland">Swaziland</option> 
                                        <option value="Sweden">Sweden</option> 
                                        <option value="Switzerland">Switzerland</option> 
                                        <option value="Syrian Arab Republic">Syrian Arab Republic</option> 
                                        <option value="Taiwan, Province of China">Taiwan, Province of China</option> 
                                        <option value="Tajikistan">Tajikistan</option> 
                                        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option> 
                                        <option value="Thailand">Thailand</option> 
                                        <option value="Timor-leste">Timor-leste</option> 
                                        <option value="Togo">Togo</option> 
                                        <option value="Tokelau">Tokelau</option> 
                                        <option value="Tonga">Tonga</option> 
                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option> 
                                        <option value="Tunisia">Tunisia</option> 
                                        <option value="Turkey">Turkey</option> 
                                        <option value="Turkmenistan">Turkmenistan</option> 
                                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option> 
                                        <option value="Tuvalu">Tuvalu</option> 
                                        <option value="Uganda">Uganda</option> 
                                        <option value="Ukraine">Ukraine</option> 
                                        <option value="United Arab Emirates">United Arab Emirates</option> 
                                        <option value="United Kingdom">United Kingdom</option> 
                                        <option value="United States">United States</option> 
                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option> 
                                        <option value="Uruguay">Uruguay</option> 
                                        <option value="Uzbekistan">Uzbekistan</option> 
                                        <option value="Vanuatu">Vanuatu</option> 
                                        <option value="Venezuela">Venezuela</option> 
                                        <option value="Viet Nam">Viet Nam</option> 
                                        <option value="Virgin Islands, British">Virgin Islands, British</option> 
                                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option> 
                                        <option value="Wallis and Futuna">Wallis and Futuna</option> 
                                        <option value="Western Sahara">Western Sahara</option> 
                                        <option value="Yemen">Yemen</option> 
                                        <option value="Zambia">Zambia</option> 
                                        <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col-md-12">
                                    <h4 className="text-center text-dark font-weight-bold">I want to:</h4>
                                    <div className="btn-group w-100 d-flex justify-content-center">
                                        <a id="hire" className="btn btn-outline-dark border rounded user-type px-5 py-3" onClick={this.hiringClick}>Hire for a Project</a>
                                        <a id="freelance" className="btn btn-outline-dark border rounded user-type px-5 py-3" onClick={this.freelanceClick}>Work as a Freelancer</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-12">
                                    <div className="form-check">
                                        <input required className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="mx-3 form-check-label text-dark" for="flexCheckDefault">
                                            Yes, I understand and agree to the Nano Terms of Service, including the User Agreement and Privacy Policy.
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-4 d-flex justify-content-center">
                                <div className="col-md-6">
                                    <div className="continue-btn my-3">
                                        <button className="font-weight-bold submit-button btn btn-success btn-lg btn-block">
                                            Create My Account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            )
        }
    } 
    render() { 
        if (this.state.isSignedin) {
            // redirect to home if signed up
            return <Redirect to = {{ pathname: "/" }} />;
          }
        return ( 
            <div className="row d-flex justify-content-center mt-5 mb-4 p-0 mx-0">
                <div className="col-md-12 col-lg-7">
                    <div className="text-center bg-white mb-5 py-4 px-5 border rounded">
                        {this.getForm()}
                    </div>
                </div>
            </div>
         );
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({checkLoggingStatus, logIn},dispatch);
};
 
export default connect(null, mapDispatchToProps) (SignupForm);