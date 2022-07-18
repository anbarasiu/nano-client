import React, { Component } from 'react';
import './homeHiring.css';
import '../../HomePage/HomePage.css';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getClientJobs} from "../../../Actions/getJobs"
import {getRegistrationInfo, getProfileInfo, createProfileDetails} from "../../../Actions/userData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faEllipsisH, faQuestionCircle, faUserPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class HomeHiring extends Component {
    constructor(){
        super();
        this.state = {
                datas : undefined,
                data : {
                    name:"Yasser Mohamed",
                    post: [
                        {
                            title : "Javascript developer",
                            typePrice : "Fixed-price",
                            hiringType : "Invite-only",
                            created: "6 hours ago",
                            proposals : "0",
                            message: "0",
                            hired : "0"
                        },
                    ],
                    draft: [
                        {
                            title : "Frontend developer",
                            saved : "Saved 1 minute ago"
                        }
                    ]
                },
                action : "expand",
                actionState : "d-block",
                templates : ["Accounting & Consulting","Admin Support","Customer Service","Design & Creative","Legal","Mobile Development","Sales & Marketing","Translation","Web Development","Writing"],
                draftState : "d-block"
        }
    }

    navigateToJobPostProposal = (id) => {
      this.props.history.push(`/job-proposals/${id}`);
    }

    handlePostJobButton = () => {
      this.props.history.push('/job-post');
    }


    handleAction = ()=>{
        this.state.action === "expand" ? this.setState({action : "collapse" , actionState : "d-none"}) : this.setState({action : "expand" , actionState : "d-block"})
    }

    checkDraft = ()=>{
        this.state.data.draft.length > 0 ? this.setState({draftState : "d-block"}) : this.setState({draftState : "d-none"})
    }

    componentDidMount = ()=>{
        // this.checkDraft();
         this.props.getClientJobs(localStorage.getItem('id'));
        //  console.log("yasser",this.props.getClient);

        this.props.getRegistrationInfo(localStorage.getItem('token'));
        this.props.getProfileInfo(localStorage.getItem('token'));
        if (!this.props.profileInfo) {
          this.props.createProfileDetails(localStorage.getItem('token'));
        }

         this.setState({datas :this.props.getClient})
        // console.log("done",this.props.getJobsReducer.getClientJobs);
        // console.log("props",this.props);
    }

    render = ()=>{
        console.log("yasr",this.state.datas);
        return(
            <div>
              <Header />

              <div className="Home-container ">
                <div className="container hiring-page-header px-lg-5 px-1 ">
                    <div className="d-flex flex-wrap justify-content-between px-lg-5 px-1 ">
                        <div className="d-flex flex-wrap h3 font-weight-bold mt-4 mt-lg-0">
                            <p className="mr-5 ml-3">{this.props.registrationInfo ? `${this.props.registrationInfo.firstName} ${this.props.registrationInfo.lastName}` : ""}</p>
                            <a><FontAwesomeIcon icon={faUserPlus} className="h5 mt-3 text-success stretched-link" /></a>
                        </div>
                        <div className="mt-4 mt-lg-0">
                            <button className="btn btn-outline-success bg-light mr-1  px-lg-4 px-1 font-weight-bold">{this.props.registrationInfo ? `$${this.props.registrationInfo.paymentAccount.totalAmount}` : ""}</button>
                            <button onClick={this.handlePostJobButton} className="btn btn-success ml-1 mr-2 px-lg-4 px-1 font-weight-bold">Post a Job</button>
                        </div>
                    </div>
                    <div className="Home-row row px-lg-4 px-1">
                        <div className="col-12 col-lg-8">
                            <div className="d-flex flex-wrap  justify-content-between posting-hiring-home">
                                <p className="h4 font-weight-bold ">My Postings</p>
                                <a className="header-hiring-allPosting">All Posting</a>
                            </div>
                            {this.props.getClient ? 
                            this.props.getClient.map((p)=>{
                                return(
                                    <div onClick={() => this.navigateToJobPostProposal(p._id)} className="posting-hire-home">
                                        <div className="d-flex justify-content-between">
                                            <p className="font-weight-bold">{p.postName}</p>
                                            <div class="dropdown">
                                                <div className="ellipsish-hiring-header " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <FontAwesomeIcon icon={faEllipsisH}/>
                                                </div>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                  <a class="dropdown-item" >View proposals</a>
                                                  <div class="dropdown-divider"></div>
                                                  <a class="dropdown-item" >Upgrade to Featured</a>
                                                  <a class="dropdown-item" >Make Public</a>
                                                  <div class="dropdown-divider"></div>
                                                  <a class="dropdown-item" >View job posting</a>
                                                  <a class="dropdown-item" >Edit posting</a>
                                                  <a class="dropdown-item" >Reuse posting</a>
                                                  <a class="dropdown-item" >Remove posting</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap justify-content-between">
                                            <div>
                                                <p className="m-0 ">Fixed-price</p>
                                                <div className="d-flex">
                                                    <p className="m-0 edit-font-small">Invite-only</p>
                                                    <p className="m-0 edit-font-small">- Created {p.updatedAt}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="d-flex justify-content-around mt-2">
                                                    <div className="mr-4">
                                                        <p className="m-0 font-weight-bold ">{p.proposals.length}</p>
                                                        <p className="edit-font-small m-0">Proposals</p>
                                                    </div>
                                                    <div className="mx-4">
                                                        <p className="m-0 font-weight-bold ">0</p>
                                                        <p className="edit-font-small m-0">Messaged</p>
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="m-0 font-weight-bold ">{p.proposals.hiringLength}</p>
                                                        <p className="edit-font-small m-0">Hired</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            : ""
                            }
                            {/* <div className={this.state.draftState}>
                            <div className="d-flex flex-wrap  justify-content-between posting-hiring-home mt-4">
                                <p className="h4 font-weight-bold ">My Drafts</p>
                                <a href="" className="header-hiring-allPosting">All drafts</a>
                            </div>
                            
                            { 
                            
                                this.state.data.draft.map((d)=>{
                                if(this.state.data.draft.length > 0 )
                                return(
                                    <div className="posting-hire-home">
                                        <div className="d-flex justify-content-between">
                                            <p className="font-weight-bold">{d.title}</p>
                                            <div class="dropdown">
                                                <div className="ellipsish-hiring-header " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <FontAwesomeIcon icon={faEllipsisH}/>
                                                </div>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                  <a class="dropdown-item" href="#">Edit draft</a>
                                                  <a class="dropdown-item" href="#">Remove draft</a>                                             
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="edit-font-mediumplus">{d.saved}</p>
                                        </div>
                                    </div>
                                )
                            }) 
                        }
                            </div> */}
                            <div className="d-flex justify-content-between posting-hiring-home m-0 mt-5">
                                <p className="font-weight-bold h4 ">How it Works</p>
                                <FontAwesomeIcon icon={this.state.action === "expand" ? faChevronUp : faChevronDown } onClick={this.handleAction} /> 
                            </div>
                            <div className={this.state.actionState}>
                                <div className="posting-hire-home d-flex help-box-size ">
                                    <div className="col-2">
                                        <svg role="img" viewBox="0 0 145 130" xmlns="http://www.w3.org/2000/svg"><path d="M124.271 128.788c0 .815-.668 1.479-1.48 1.479H20.909a1.483 1.483 0 0 1-1.479-1.479V1.749c0-.815.666-1.48 1.479-1.48H122.79c.813 0 1.479.665 1.479 1.48v127.039h.002z" fill="#1d4354"></path><path d="M36.479 101.504h44.849v13.584H36.479z" fill="#6fda44"></path><path d="M40.733 15.617v7.578c0 1.162-.316 2.057-.951 2.681-.632.624-1.506.942-2.625.942-1.214 0-2.175-.342-2.888-1.028-.712-.685-1.065-1.67-1.065-2.957h2.651c0 1.033.392 1.554 1.175 1.554.68 0 1.02-.4 1.02-1.192v-7.578h2.683zm10.279.557a5.306 5.306 0 0 1 2.014 2.024c.495.865.738 1.837.738 2.928 0 1.083-.245 2.066-.747 2.929a5.317 5.317 0 0 1-2.022 2.031 5.624 5.624 0 0 1-2.83.731 5.657 5.657 0 0 1-2.832-.731 5.349 5.349 0 0 1-2.021-2.031c-.497-.863-.747-1.846-.747-2.929 0-1.091.25-2.063.747-2.928a5.38 5.38 0 0 1 2.021-2.024c.852-.484 1.799-.726 2.832-.726 1.043.001 1.995.242 2.847.726zm-4.943 2.621c-.514.568-.772 1.347-.772 2.333 0 .966.258 1.745.772 2.32.523.572 1.22.861 2.096.861.869 0 1.564-.289 2.085-.861.523-.575.786-1.354.786-2.32 0-.977-.261-1.749-.775-2.324-.521-.575-1.216-.863-2.096-.863-.876 0-1.573.286-2.096.854zm17.836 3.178c.392.491.589 1.057.589 1.708 0 .951-.318 1.691-.951 2.225-.632.536-1.539.798-2.724.798h-5.16V15.617h5.037c1.13 0 2.001.247 2.621.74.616.495.923 1.19.923 2.1 0 .671-.176 1.227-.531 1.67a2.46 2.46 0 0 1-1.395.872c.668.157 1.2.477 1.591.974zm-5.558-1.822H60.1c.932 0 1.395-.398 1.395-1.188 0-.796-.474-1.192-1.427-1.192h-1.721v2.38zm3.402 3.156c0-.4-.133-.71-.392-.938-.26-.222-.633-.333-1.112-.333h-1.898v2.494h1.913c.99-.001 1.489-.409 1.489-1.223zm10.744-.493v3.891h-2.681V15.617h4.343c1.315 0 2.319.327 3.01.981.688.652 1.033 1.536 1.033 2.643 0 .69-.155 1.304-.461 1.844s-.767.962-1.37 1.272c-.609.308-1.346.458-2.212.458l-1.662-.001zm2.978-3.573c0-.973-.539-1.455-1.615-1.455h-1.362v2.883h1.362c1.076 0 1.615-.478 1.615-1.428zm12.554-3.067a5.336 5.336 0 0 1 2.015 2.024c.491.865.737 1.837.737 2.928 0 1.083-.246 2.066-.746 2.929a5.269 5.269 0 0 1-2.022 2.031c-.85.484-1.794.731-2.827.731s-1.98-.248-2.832-.731a5.328 5.328 0 0 1-2.021-2.031c-.499-.863-.744-1.846-.744-2.929 0-1.091.245-2.063.744-2.928a5.387 5.387 0 0 1 2.021-2.024c.852-.484 1.799-.726 2.832-.726 1.047.001 1.99.242 2.843.726zm-4.939 2.621c-.518.568-.777 1.347-.777 2.333 0 .966.262 1.745.777 2.32.521.572 1.213.861 2.096.861.865 0 1.563-.289 2.084-.861.521-.575.784-1.354.784-2.32 0-.977-.258-1.749-.776-2.324-.517-.575-1.213-.863-2.092-.863-.883 0-1.577.286-2.096.854zm17.112 6.406c-.296.495-.737.885-1.321 1.175-.576.295-1.279.443-2.105.443-1.244 0-2.271-.306-3.074-.912-.809-.604-1.246-1.455-1.315-2.539h2.851c.047.417.19.745.449.99.256.241.58.357.98.357.345 0 .617-.092.813-.282.195-.187.299-.437.299-.751a.965.965 0 0 0-.274-.706 2.172 2.172 0 0 0-.681-.465 14.379 14.379 0 0 0-1.129-.43 13.905 13.905 0 0 1-1.715-.695 3.254 3.254 0 0 1-1.149-1.005c-.32-.443-.476-1.024-.476-1.734 0-.661.166-1.229.502-1.713.33-.478.795-.848 1.388-1.099.587-.258 1.266-.385 2.032-.385 1.23 0 2.209.291 2.939.878.729.585 1.134 1.388 1.227 2.414H97.54c-.05-.368-.187-.658-.397-.874-.218-.211-.507-.32-.867-.32-.314 0-.568.088-.767.254-.19.164-.289.411-.289.736 0 .262.087.482.259.665.178.184.389.332.654.448.26.118.633.265 1.13.441.707.239 1.288.476 1.738.712.449.237.837.579 1.162 1.028.323.45.483 1.033.483 1.756a3.094 3.094 0 0 1-.448 1.613zm10.297-9.584v2.134h-3.013v8.954h-2.696v-8.954h-2.979v-2.134h8.688zm-72.742 33.57a2.279 2.279 0 0 1-2.279 2.276 2.27 2.27 0 0 1-2.27-2.276 2.273 2.273 0 0 1 2.27-2.272 2.28 2.28 0 0 1 2.279 2.272m60.778 1.514H45.006a1.516 1.516 0 1 1 0-3.032h53.525a1.517 1.517 0 0 1 0 3.032zM37.753 65.333a2.279 2.279 0 0 1-2.279 2.276 2.27 2.27 0 0 1-2.27-2.276 2.273 2.273 0 0 1 2.27-2.272 2.28 2.28 0 0 1 2.279 2.272m60.778 1.517H45.006a1.518 1.518 0 0 1 0-3.034h53.525c.839 0 1.519.68 1.519 1.517s-.68 1.517-1.519 1.517zM37.753 80.24a2.28 2.28 0 0 1-2.279 2.275 2.273 2.273 0 0 1 0-4.546 2.28 2.28 0 0 1 2.279 2.271m60.778 1.518H45.006a1.518 1.518 0 0 1 0-3.036h53.525a1.519 1.519 0 1 1 0 3.036z" fill="#e0e0e0"></path></svg>
                                    </div>
                                    <div className="">
                                        <p className="font-weight-bold m-0 mb-1 ">1. Post a job to get free quotes</p>
                                        <p className="edit-font-small m-0 help-one-text mb-1 ">Write a clear, detailed description of your job to share with qualified freelancers. Start receiving proposals in less than 24 hours.</p>
                                        <a href="" className="mb-5 help-one-link edit-font-small d-block">View great job post examples</a>
                                    </div>
                                </div>
                                <div className="posting-hire-home d-flex help-box-size">
                                    <div className="col-2">
                                    <svg role="img" viewBox="0 0 145 130" xmlns="http://www.w3.org/2000/svg"><path d="M145 18.601l-71.604-8.207-.909 7.944-.907-7.916L0 18.622l12.049 105.185 60.44-6.923 60.461 6.925z" fill="#e0e0e0"></path><path d="M28.472 0h88.055v130H28.472z" fill="#1d4354"></path><path d="M46.352 99.789h53.601v16.229H46.352z" fill="#6fda44"></path><path d="M98.925 40.338c0 14.554-11.802 26.361-26.354 26.361-14.56 0-26.36-11.807-26.36-26.361 0-14.552 11.801-26.355 26.36-26.355 14.552 0 26.354 11.804 26.354 26.355" fill="#f9f9f9"></path><path d="M81.664 37.781c0 4.764-3.865 8.633-8.626 8.633-4.769 0-8.629-3.869-8.629-8.633 0-4.763 3.86-8.633 8.629-8.633 4.761 0 8.626 3.87 8.626 8.633m-.971 9.439a12.184 12.184 0 0 1-6.476 2.661c-.396.043-.791.078-1.19.078-.402 0-.798-.035-1.194-.081a12.085 12.085 0 0 1-6.457-2.666A18.452 18.452 0 0 0 55.05 59.997c4.66 4.154 10.781 6.706 17.519 6.706 7.108 0 13.541-2.832 18.285-7.409A18.44 18.44 0 0 0 80.693 47.22" fill="#b2b2b2"></path><path d="M109.936 122.305l-6.063-6.059 5.198-3.309c.128-.121.063-.34-.11-.385l-18.143-6.512a.227.227 0 0 0-.281.271l6.518 18.149c.04.177.262.235.387.106l3.31-5.189 6.056 6.053c.16.162.424.162.584 0l2.545-2.545a.411.411 0 0 0-.001-.58z" fill="#fff"></path><path d="M96.029 80.154H48.971a1.568 1.568 0 1 1 0-3.136H96.03c.867 0 1.566.701 1.566 1.568s-.7 1.568-1.567 1.568zm-3.102 9.319H52.075a1.568 1.568 0 1 1 0-3.135h40.852a1.567 1.567 0 1 1 0 3.135z" fill="#336278"></path></svg>
                                    </div>
                                    <div className="">
                                        <p className="font-weight-bold m-0 mb-1">2. Evaluate freelancers and hire</p>
                                        <p className="edit-font-small m-0 help-one-text mb-1 "> Review proposals or invite qualified freelancers to your project. Quickly chat live or video call with favorites, and offer a contract to the best match.</p>
                                        <a href="" className="help-one-link edit-font-small d-block">Review tips on finding talent</a>
                                        <a href="" className="mb-5 help-one-link edit-font-small d-block">Prepare to interview freelancers</a>
                                    </div>
                                </div>
                                <div className="posting-hire-home d-flex help-box-size">
                                    <div className="col-2">
                                    <svg role="img" viewBox="0 0 145 130" xmlns="http://www.w3.org/2000/svg"><path d="M83.9 75.9H25c-1 0-1.9-.8-1.9-1.9V15.1c0-1 .9-1.9 1.9-1.9h58.9c1 0 1.9.8 1.9 1.9V74c0 1.1-.8 1.9-1.9 1.9" fill="#e0e0e0"></path><path d="M50.1 30.7c0 3.8-3 6.8-6.8 6.8s-6.8-3-6.8-6.8 3-6.8 6.8-6.8c3.7 0 6.8 3 6.8 6.8" fill="#6fda44"></path><path d="M77 34.5c-.5-.5-1.3-.5-1.7 0L53.2 58.3c-.4.4-1 .5-1.5.2L36.9 46.3c-.5-.3-1.1-.2-1.5.1L23.1 58.1v17.1c0 .4.4.8.8.8l61.1-.2c.5 0 .8-.4.8-.8l-.1-31.7-8.7-8.8zM74.4 3C72.8 1.4 70.6.5 68.3.5s-4.4.9-6.1 2.5c-1.6 1.6-2.5 3.8-2.5 6.1v4.2H62V9.1c0-1.7.7-3.2 1.8-4.4 1.2-1.2 2.8-1.8 4.4-1.8 1.7 0 3.2.7 4.4 1.8 1.2 1.2 1.8 2.8 1.8 4.4v17.5c0 .8-.3 1.5-.8 2s-1.3.8-2 .8c-.8 0-1.5-.3-2-.8s-.8-1.2-.8-2V10.2c0-.6-.5-1.2-1.2-1.2-.6 0-1.2.5-1.2 1.2v16.4c0 1.4.5 2.7 1.5 3.6 1 1 2.3 1.5 3.6 1.5.5 0 .9-.1 1.4-.2.8-.2 1.6-.7 2.3-1.3 1-1 1.5-2.3 1.5-3.6V9.1c.2-2.3-.7-4.5-2.3-6.1z" fill="#b2b2b2"></path><path d="M121.4 64.5H43.6c-.3 0-.5.2-.5.5v50c0 .3.2.5.5.5h48.1v12.8c0 1.1 1.3 1.6 2.1.9l15.3-13.7h12.3c.3 0 .5-.2.5-.5V65c0-.3-.3-.5-.5-.5z" fill="#1d4354"></path><g fill="#fff"><circle cx="67" cy="89.9" r="3.2"></circle><circle cx="82.5" cy="89.9" r="3.2"></circle><circle cx="97.9" cy="89.9" r="3.2"></circle></g></svg>
                                    </div>
                                    <div className="">
                                        <p className="font-weight-bold m-0 mb-1">3. Work together</p>
                                        <p className="edit-font-small m-0 help-one-text mb-1 ">Use
                                                Nano Messages to securely chat, share files, and collaborate on projects.
                                                View progress against project goals with the
                                                Work Diary tool.</p>
                                        <a href="" className="mb-5 help-one-link edit-font-small">Learn about Nano pricing</a>

                                    </div>
                                </div>
                                <div className="posting-hire-home d-flex help-box-size">
                                    <div className="col-2">
                                    <svg role="img" viewBox="0 0 145 130" xmlns="http://www.w3.org/2000/svg"><path d="M136.1 56.7L61.4 76.9c-1.4.4-2.8-.4-3.2-1.8L45.4 27.4c-.4-1.4.4-2.8 1.8-3.2L121.9 4c1.4-.4 2.8.4 3.2 1.8L138 53.4c.3 1.5-.5 2.9-1.9 3.3z" fill="#1d4354"></path><path d="M142.4 118.3H65c-1.4 0-2.6-1.2-2.6-2.6V66.4c0-1.4 1.2-2.6 2.6-2.6h77.4c1.4 0 2.6 1.2 2.6 2.6v49.4c0 1.4-1.2 2.5-2.6 2.5z" fill="#f2f2f2"></path><path d="M62.4 73.9H145v11.8H62.4z" fill="#1d4354"></path><path d="M70.1 92.8h49.5v14.3H70.1z" fill="#e0e0e0"></path><path d="M115.6 98.5h-7.3c-.4 0-.8-.4-.8-.8s.4-.8.8-.8h7.3c.4 0 .8.4.8.8s-.4.8-.8.8z" fill="#b2b2b2"></path><path d="M72.9 72.3H62.6V34.1c0-11.1-9.1-20.2-20.2-20.2S22.2 23 22.2 34.1v38.3H11.9V34.1c0-16.8 13.7-30.5 30.5-30.5s30.5 13.7 30.5 30.5v38.2z" fill="#e0e0e0"></path><path d="M82.2 126.4H2.6c-1.4 0-2.6-1.2-2.6-2.6v-72c0-1.4 1.2-2.6 2.6-2.6h79.7c1.4 0 2.6 1.2 2.6 2.6v72c-.1 1.5-1.2 2.6-2.7 2.6z" fill="#6fda44"></path><path d="M50.8 80.1c0-5.2-4.7-9.3-10.1-8.2-3.2.7-5.7 3.3-6.4 6.4-.9 4.3 1.6 8.2 5.3 9.6 0 0 .1.1 0 .1l-5.2 14.8c-.2.5.2 1.1.8 1.1h14.4c.5 0 .9-.5.8-1.1L45.2 88c3.2-1.2 5.6-4.3 5.6-7.9z" fill="#34ba08"></path><g fill="#33637a"><path d="M116 18.5l-5.6 1.5 1.1 3.9c.1.4.6.7 1 .6l4.8-1.3-1.3-4.7zM115.6 17.2l-1.4-5.3-4.8 1.3c-.4.1-.7.6-.6 1l1.2 4.5 5.6-1.5zM122.7 20.9l-2.6-9.7c-.1-.4-.6-.7-1-.6l-3.6 1 3.1 11.3 3.6-1c.4-.1.6-.6.5-1z"></path></g></svg>
                                    </div>
                                    <div className="">
                                        <p className="font-weight-bold m-0 mb-1">4. Pay and invoice through Nano</p>
                                        <p className="edit-font-small m-0 help-one-text mb-1 ">Get invoices and make payments after reviewing time billed or approving milestones. With Nano Payment Protection, only pay for work you authorize.</p>
                                        <a href="" className=" help-one-link edit-font-small d-block">View great job post examples</a>
                                        <a href="" className="mb-5 help-one-link edit-font-small">Determine how much to pay freelancers</a>
                                    </div>
                                </div>
                                <div className="posting-hire-home question-boarder">
                                    <div className="d-flex ">
                                        <FontAwesomeIcon icon={faQuestionCircle} className="mt-1 help-one-link mr-2" />
                                        <p className="m-0 font-weight-bold">Questions?</p>
                                    </div>
                                    <p className="m-0 ml-4">Vist our <a className="help-one-link">Help Center</a> to contact our support team.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="posting-hiring-home">
                                <p className="font-weight-bold h4">COVID-19</p>
                            </div>
                            <div className="posting-hire-home question-boarder">
                                <p className="edit-font-medium">See how other businesses are connecting with experts to adjust in these uncertain times. Choose a job template to quickly fill projects you need now.</p>
                                <a className="btn btn-outline-success ">See Job Templates</a>
                            </div>
                            <div className="posting-hiring-home m-0 mt-5">
                                <p className="font-weight-bold h4 ">Job Templates</p>
                            </div>
                            {this.state.templates.map(m =>{
                                return(
                                    <div className="posting-hire-home d-flex p-0 py-3 ">
                                        <svg class="col-3 vertical-align-middle mt-2" width="20px" height="25px" viewBox="0 0 20 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                                    <title>document-icon</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs></defs>
                                    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="right-rail/job-template-link" transform="translate(-20.000000, -25.000000)" fill="#B2B2B2">
                                    <path d="M28.2969805,25 L20,32.7714286 L20,49.5029626 C20,49.7774688 20.2246261,50 20.4944215,50 L39.5070656,50 C39.7801271,50 40.0011256,49.7838736 40.0006518,49.5006155 L39.9605013,25.4993845 C39.9600399,25.223582 39.7371024,25 39.4585349,25 L28.2969805,25 Z M21.818317,33.9285714 L28.5916639,33.9285714 C28.8677627,33.9285714 29.0915851,33.7070227 29.0915851,33.4377367 L29.0915851,26.7875 L38.1158924,26.7875 L38.1831702,48.2160714 L21.818317,48.2160714 L21.818317,33.9285714 Z M27.2059903,28.5732143 L27.2005354,32.1446429 L23.5693563,32.1446429 L27.2059903,28.5732143 Z M24,36 L33,36 L33,38 L24,38 L24,36 Z M24,40 L36,40 L36,42 L24,42 L24,40 Z M24,44 L36,44 L36,46 L24,46 L24,44 Z" id="document-icon"></path>
                                    </g>
                                    </g>
                                </svg>
                                        <p className="col-7 mt-2 edit-font-small">{m}</p>
                                        <FontAwesomeIcon icon={faChevronRight} className="col-2 mt-3" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

              <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("hhhhhhhh", state);
    return {
        getClient : state.getJobsReducer.getClientJobs,
        registrationInfo: state.userReducer.registrationInfo
    }
  }
  
 const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getClientJobs,
        getRegistrationInfo,
        getProfileInfo,
        createProfileDetails
    }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps) (HomeHiring) ; 