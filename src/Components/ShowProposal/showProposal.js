import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './style/showProposal.css';
import { Link } from 'react-router-dom';
import {faTag, faUserCog, faCheckCircle, faStar, faPaperclip} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getOneProposal, receiveJob } from "./../../Actions/getJobs";
import axios from "axios";
import baseURL from "./../../Actions/baseURL";

class ShowProposal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jobPage : `/job/${this.props.match.params.jobId}`, 
            message: "", 
            sendJob: false,
            allFiles: []
        }
    }
    componentDidMount = () => {
        this.props.getOneProposal(localStorage.getItem("id"),this.props.match.params.jobId)
        console.log(this.props);
        console.log("ana ahoooooooo")
    }
    handleOnSubmit = (e) => {
            try{
                const data = {
                    'Content-Type':'multipart/form-data',
                    'userid' : localStorage.getItem('id'),
                    'jobid' : this.props.match.params.jobId,
                    'message': this.state.message
                  };
                e.preventDefault();
                const formData = new FormData();
                for(let i = 0; i <this.state.allFiles.length; i++){
                    formData.append('fileList', this.state.allFiles[i]);
                }
                axios.post(`${baseURL}/api/job/uploadjobfiles`,formData, {headers: data})
                .then(result => console.log(result))
                } catch (error) {
                    console.log(error);
                }
            window.location.reload();
    }
    handleFiles = () => {
        if(this.props.getProposal.myProposal[0].receivedJob.receivedJobFiles.length > 0){
        let files = [];
            files.push (
                <div>
                    { (() => {
                        let data =  []
                        this.props.getProposal.myProposal[0].receivedJob.receivedJobFiles.map((file) =>{
                        data.push(<a id="proposljobfile" target="_blank" href={`${baseURL}/api/job/downloadfiles/${file}`} className="job-files color-nano px-3 py-2 d-block">
                        <FontAwesomeIcon icon={faPaperclip} className="-mx-3 d-inline"></FontAwesomeIcon>
                        <span className="mx-2">{file}</span>
                        </a>)
                    }   )
                    return data
                    })()}
                </div>
                )
            return files;
        }  
        else{
            return(
                <div><h6>No files uploaded</h6></div>
            )
        }
    }
    handleBtn = () => {
        if (this.props.getProposal.myProposal[0].proposal.status === 0){
            return (
            <div className="">
                <button className="btn btn-outline-dark px-4 py-3 font-weight-bold withdraw-btn">Withdraw proposal</button>
            </div>
            )
        }
        else if(this.props.getProposal.myProposal[0].proposal.status === 2){
            return (
                <div className="">
                    <button className="btn btn-success px-4 py-3 font-weight-bold receive-btn" data-toggle="modal" data-target="#recieveModal">Submit Job</button>
                    <div className="modal fade" id="recieveModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title font-weight-bold">Receive Work</h5>
                                <button type="button" className="close color-nano" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="container">
                                    <div className="modal-body p-5">
                                        <form onSubmit={this.handleOnSubmit} encType="multipart/form-data">
                                            <div className="form-group d-flex" id="jobReceiveForm">
                                                <label for="exampleFormControlTextarea1" className="color-black font-weight-bold mr-3">Message:</label>
                                                <textarea required className="form-control message-textarea" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{
                                                    this.setState({message: e.target.value});
                                                }}></textarea>
                                            </div>
                                            <div className="custom-file mt-4">
                                                <input type="file" name="fileList" enctype="multipart/form-data" multiple id="jobFile" className="form-control-file" onChange={(event) =>{
                                                        this.setState({allFiles: event.target.files})
                                                }}/>
                                                <div id="uploadJobFiles" className="col-12 px-0 mb-2 d-flex justify-content-center align-items-center" onClick={()=>{
                                                    document.getElementById('jobFile').click()
                                                }}>
                                                    <div className=" d-inline-block">
                                                    drag or <span>upload</span> project images
                                                    </div>
                                                </div>
                                            </div>
                                            {/* data-dismiss="modal" */}
                                            <div className="modal-footer mt-5 d-flex justify-content-center">
                                                <input type="submit" className="btn btn-success text-white btn-nano" value="Send Job"/>
                                            </div>
                                        </form>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
        }
        else if(this.props.getProposal.myProposal[0].proposal.status === 3){
            return (
                <div className="">
                    <button disabled className="btn btn-outline-success px-4 my-3 py-3 font-weight-bold color-black">You finished this job <FontAwesomeIcon icon={faCheckCircle}className="ml-4 text-success check-circle"/></button>
                    <div className="py-2 border border-right-0 border-left-0 border-muted">
                        <h5 className="font-weight-bold my-3 py-3 border border-right-0 border-left-0 border-top-0 border-muted">Your received work</h5>
                        <h6 className="font-weight-bold">Message:</h6>
                        <p className="mb-4">{this.props.getProposal.myProposal[0].receivedJob.message}</p>
                        <h5 className="font-weight-bold">Files:</h5>
                        {this.handleFiles()}
                    </div>
                </div>
                )
        }
        else{
            return (
                <div className="">
                    <button disabled className="btn btn-outline-danger px-4 py-3 font-weight-bold color-black">This job is closed</button>
                </div>
                )
        }
    }
    show = () => {
        if(this.props.getProposal){
            return (
                <div className="proposal-details-container">
                <div className="pb-5 container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10">
                            <div className="h5-proposal-details m-3">
                                <h5 className="font-weight-bold ">Proposal Details</h5>
                            </div>
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="proposal-details-content border rounded bg-white pb-3 w-100">
                                        <div className="h5-job-details px-4 py-4 border border-right-0 border-left-0 border-top-0 border-muted">
                                            <h5 className="font-weight-bold">Job Details</h5>
                                        </div>
                                        <div className="py-3 px-4 job-details">
                                            <div className="row border border-right-0 border-left-0 border-top-0 border-muted pb-3">
                                                <div className="col-md-9 border border-bottom-0 border-left-0 border-top-0 border-muted">
                                                    <div>
                                                        <h5 className="font-weight-bold">{this.props.getProposal.myProposal[0].myJob.postName}</h5>
                                                        <div className="my-3 skills">
                                                            <div className="badge badge-secondary category-font-color px-2 py2">{this.props.getProposal.myProposal[0].myJob.category}</div>
                                                        </div>
                                                        <div className="mb-3">
                                                            {this.props.getProposal.myProposal[0].myJob.description}
                                                        </div>
                                                        <Link to={this.state.jobPage}>View Job Post</Link>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="">
                                                        <div className="row my-2">
                                                            <div className="col-sm-2">
                                                                <div>
                                                                    <FontAwesomeIcon  icon={faUserCog} className="color-balck"/>                                                                    
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <div className="d-flex flex-wrap justify-content-center">
                                                                    <p className="font-weight-bold w-100 text-wrap">{this.props.getProposal.myProposal[0].myJob.experienceLevel}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row my-2">
                                                            <div className="col-sm-2">
                                                                <div>
                                                                    <FontAwesomeIcon  icon={faTag} className="color-balck"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <div>
                                                                    <p className="font-weight-bold text-wrap">{this.props.getProposal.myProposal[0].myJob.estimatedBudget}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row py-3 border border-right-0 border-left-0 border-top-0 border-muted">
                                                <div className="col-md-12">
                                                    <div className="my-2">
                                                        <h5 className="font-weight-bold mb-2">Skills and expertise</h5>
                                                        {this.props.getProposal.myProposal[0].myJob.skills.map((skill) => {
                                                            <div className="badge badge-secondary skill-font-color px-2 py2">{skill}</div>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row py-3 border border-right-0 border-left-0 border-top-0 border-muted">
                                                <div className="col-md-12">
                                                    <div className="my-2">
                                                        <h5 className="font-weight-bold mb-2">Your proposed terms</h5>
                                                        <div className="my-3">
                                                            <p className="my-0 font-weight-bold">Bid/Budget</p>
                                                            <p className="my-0 ">Total amount the client will see on your proposal</p>
                                                            <p className="mp-2">${this.props.getProposal.myProposal[0].proposal.terms.bid}</p>
                                                        </div>
                                                        <div className="my-3">
                                                            <p className="my-0 font-weight-bold">You'll Receive</p>
                                                            <p className="my-0 ">The estimated amount you'll receive after service fees</p>
                                                            <p className="mp-2">${this.props.getProposal.myProposal[0].proposal.terms.received}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                {this.handleBtn()}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white my-4 border rounded">
                                        <div>
                                            <div className="p-3 border border-right-0 border-left-0 border-top-0 border-muted">
                                                <h5 className="font-weight-bold">Cover Letter</h5>
                                            </div>
                                            <div className="cover-letter-content p-3 ml-3">
                                                {this.props.getProposal.myProposal[0].proposal.coverLetter}
                                            </div>
                                            {(() =>{
                                                let data = [];
                                                let comingData = this.props.getProposal.myProposal[0].myJob.proposals.proposalFiles;
                                                if(comingData){
                                                if(comingData.length > 0){
                                                    for(let i = 0; i < comingData.length; i++){
                                                            if(comingData[i].userId == localStorage.getItem('id')){
                                                                console.log(comingData[i].userId)
                                                                comingData[i].files.map(file =>{
                                                                    data.push(
                                                                        <div>
                                                                            <a id="proposljobfile2" target="_blank" href={`${baseURL}/api/job/downloadfiles/${file}`} className="job-files color-nano px-3 py-2 d-block">
                                                                                <FontAwesomeIcon icon={faPaperclip} className="-mx-3 d-inline"></FontAwesomeIcon>
                                                                                <span className="mx-2 font-weight-bold font-size-small">{file}</span>
                                                                            </a>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        } 
                                                    }
                                                }
                                                return data;
                                            })()}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div>
                                        <h6 className="font-weight-bold mb-3">About the client</h6>
                                        <div className="d-flex justify-content-start payment-verified">
                                            <p>Payment Method Verified</p>
                                            <FontAwesomeIcon icon={faCheckCircle}className="ml-4 text-success check-circle"/>
                                        </div>
                                        <div className="my-2">
                                            <FontAwesomeIcon icon={faStar} className="text-success"/>
                                            <FontAwesomeIcon icon={faStar} className="text-success"/>
                                            <FontAwesomeIcon icon={faStar} className="text-success"/>
                                            <FontAwesomeIcon icon={faStar} className="text-success"/>
                                            <FontAwesomeIcon icon={faStar} className="text-success"/>
                                        </div>
                                        <div className="Location my-2">
                                            <h6 className="font-weight-bold">Location</h6>
                                            <p>{this.props.getProposal.clientData.country}</p>
                                        </div>
                                        <div className="History">
                                            <h6 className="font-weight-bold mb-2">History</h6>
                                            <p className="m-0"> {this.props.getProposal.myProposal[0].myJob.proposals.length} proposals </p>
                                            <p className="m-0">{this.props.getProposal.clientData.allJobsPosted} post job</p>
                                            <p className="m-0">{this.props.getProposal.clientData.currentOpenJobs} open job</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ) 
        }
        else{
            return(
                <div className="d-flex justify-content-center my-5">
                    <h3 className="my-5 py-5">This Proposal does not exist</h3>
                </div>
            )
        }
    }
    render() { 
        return ( 
            <div>
                <Header />
                {this.show()}
                <Footer />
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.userReducer.isLoggedIn,
      userId: state.userReducer.userID,
      getProposal: state.getJobsReducer.getOneProposal,
      receivedJob: state.getJobsReducer.receiveJob,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getOneProposal, receiveJob},dispatch);
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ShowProposal);