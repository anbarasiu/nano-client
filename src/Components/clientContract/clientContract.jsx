import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import './style/showProposal.css';
import { Link } from 'react-router-dom';
import {faTag, faUserCog, faCheckCircle, faStar, faFile, faPaperclip} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import baseURL from "./../../Actions/baseURL"
import { receiveJob, getOneJob } from "./../../Actions/getJobs";


class clientContract extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jobPage : `/job/${this.props.match.params.jobId}`, 
            message: "", 
            sendJob: false,
            proposalStatus: 0
        }
    }
    componentDidMount = () => {
        console.log(localStorage.getItem('token'),this.props.match.params.jobId)
        console.log(localStorage.getItem('id'))
        this.props.getOneJob(this.props.match.params.jobId,localStorage.getItem("id"))
        console.log("doneeeeeee",this.props.getJob);
    }
    handleFiles = (p) => {
        console.log("PPP",p);
        if(p.receivedJob.receivedJobFiles.length > 0){
            console.log("ah malkesh da3wa")
        let files = [];
            files.push (
                <div>
                    <div className="job-files border rounded px-3 py-2">
                        <FontAwesomeIcon icon={faFile} className="-mx-3 d-inline"></FontAwesomeIcon>
                    </div>
                    {this.props.getProposal.myProposal[0].receiveJob.jobFiles.map(file =>{
                        <span className="mx-2" onClick={()=>{
                            this.props.downloadJobFiles(file)
                            }}>{file}</span>
                    })}
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
        if (this.props.getJob[0].postStatus === 1){
            return (
            <div className="">
                <button className="btn btn-outline-dark px-4 py-3 font-weight-bold withdraw-btn">End job</button>
            </div>
            )
        }
        else{
            let data = []
            this.props.getJob[0].proposals.proposalsList.map(p=>{
                 if(p.proposal.status === 3){
                    console.log(";;;" ,p.receivedJob);

                    data.push(
                        <div className="">
                            <button disabled className="btn btn-outline-success px-4 my-3 py-3 font-weight-bold color-black">This freelancer finished his job <FontAwesomeIcon icon={faCheckCircle}className="ml-4 text-success check-circle"/></button>
                            <div className="py-2 border border-right-0 border-left-0 border-muted">
                                <h5 className="font-weight-bold my-3 py-3 border border-right-0 border-left-0 border-top-0 border-muted">Your received work</h5>
                                <h6 className="font-weight-bold">Message:</h6>
                                <p className="mb-4">{p.receivedJob ? p.receivedJob.message : ""}</p>
                                <h5 className="font-weight-bold">Files:</h5>
                                {(()=>{
                                    console.log("PPP",p);
                                    if( p.receivedJob.receivedJobFiles.length > 0 ){
                                        
                                    let files = [];
                                    files.push (
                                        <div>
                                            { (() => {
                                                let data =  []
                                                p.receivedJob.receivedJobFiles.map((file) =>{
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
                                
                 }})()}
                            </div>
                            
                            <button disabled className="btn btn-outline-danger px-4 py-3 font-weight-bold color-black">This job is closed</button>
                        
                        </div>
                        )
                }
                // else{
                //     data.push(
                //         <div className="">
                //             <button disabled className="btn btn-outline-danger px-4 py-3 font-weight-bold color-black">This job is closed</button>
                //         </div>
                //         )
                // }
            }
            
            )
            return(data)
            
        }
    } 
    show = () => {
        console.log(this.props)
        if(this.props.getJob){
            return (
                <div className="proposal-details-container">
                <div className="pb-5 container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10">
                            <div className="h5-proposal-details m-3">
                                <h5 className="font-weight-bold ">Contract Details</h5>
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
                                                        <h5 className="font-weight-bold">{this.props.getJob[0].postName}</h5>
                                                        <div className="my-3 skills">
                                                            <div className="badge badge-secondary category-font-color px-2 py2">{this.props.getJob[0].category}</div>
                                                        </div>
                                                        <div className="mb-3">
                                                            {this.props.getJob[0].description}
                                                        </div>
                                                        {/* <Link to={this.state.jobPage}>View Job Post</Link> */}
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
                                                                <div>
                                                                    <p className="font-weight-bold">{this.props.getJob[0].experienceLevel}</p>
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
                                                                    <p className="font-weight-bold">{this.props.getJob[0].estimatedBudget}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="row py-3 border border-right-0 border-left-0 border-top-0 border-muted">
                                                <div className="col-md-12">
                                                    <div className="my-2">
                                                        <h5 className="font-weight-bold mb-2">Skills and expertise</h5>
                                                        {this.props.getJob[0].skills.map((skill) => {
                                                            <div className="badge badge-secondary skill-font-color px-2 py2">{skill}</div>
                                                        })}
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="row py-3 border border-right-0 border-left-0 border-top-0 border-muted">
                                                <div className="col-md-12">
                                                    <div className="my-2">
                                                        <h5 className="font-weight-bold mb-2">Your proposed terms</h5>
                                                        <div className="my-3">
                                                            <p className="my-0 font-weight-bold">Bid/Budget</p>
                                                            <p className="my-0 ">Total amount the client will see on your proposal</p>
                                                            <p className="mp-2">${this.props.getJob[0].proposals.proposalsList[0]?this.props.getJob[0].proposals.proposalsList[0].proposal.terms.bid : ""}</p>
                                                        </div>
                                                        <div className="my-3">
                                                            <p className="my-0 font-weight-bold">You'll Receive</p>
                                                            <p className="my-0 ">The estimated amount you'll receive after service fees</p>
                                                            <p className="mp-2">${this.props.getJob[0].proposals.proposalsList[0]?this.props.getJob[0].proposals.proposalsList[0].proposal.terms.received:""}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="mt-4">
                                                {this.handleBtn()}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="bg-white my-4 border rounded">
                                        <div>
                                            <div className="p-3 border border-right-0 border-left-0 border-top-0 border-muted">
                                                <h5 className="font-weight-bold">Cover Letter</h5>
                                            </div>
                                            <div className="cover-letter-content p-3 ml-3">
                                                {this.props.getJob[0].proposals.proposalsList[0]?this.props.getJob.proposals.proposalsList[0].proposal.coverLetter:""}
                                            </div>
                                        </div>
                                    </div> */}
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
                                        {/* <div className="Location my-2">
                                            <h6 className="font-weight-bold">Location</h6>
                                            <p>{this.props.getProposal.clientData.country}</p>
                                        </div>
                                        <div className="History">
                                            <h6 className="font-weight-bold mb-2">History</h6>
                                            <p className="m-0"> {this.props.getProposal.myProposal[0].myJob.proposals.length} proposals </p>
                                            <p className="m-0">{this.props.getProposal.clientData.allJobsPosted} post job</p>
                                            <p className="m-0">{this.props.getProposal.clientData.currentOpenJobs} open job</p>
                                        </div> */}
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
                <div className="d-flex justify-content-center">
                    <h3>This Proposal does  not exist</h3>
                </div>
            )
        }
    }
    render() { 
        console.log("hhhhhhgg",this.props.getJob)
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
      getJob: state.getJobsReducer.getJob,
      receivedJob: state.getJobsReducer.receiveJob,
      proposals: state.getJobsReducer.proposals,
      proposalStatus: state.getJobsReducer.proposalStatus
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getOneJob, receiveJob},dispatch);
  };
  export default connect(mapStateToProps, mapDispatchToProps)(clientContract);