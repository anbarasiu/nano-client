import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getProposal , acceptProposal} from '../../Actions/sumbitProbosal';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {faTag, faUserCog, faCheckCircle, faStar, faPaperclip} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import baseURL from "../../Actions/baseURL";

class JobProposals extends Component{
    constructor(){
        super()
        this.state={
            data:"",
            x:""
        }
    }

    componentDidMount= async()=>{
        this.props.getProposal(this.props.match.params.id)
        console.log("donedone",this.props.getpro);
        await this.setState({data : this.props.getpro})
    }

    handleAccept= (userId)=>{
        this.props.acceptProposal(this.props.match.params.id,userId)
        window.location.reload();
    }

    render=()=>{
        return(

            <div>
              <Header />

              <div className="Home-container ">
                <div className="container hiring-page-header px-lg-5 px-1 ">
                    <div className="d-flex flex-wrap justify-content-between px-lg-5 px-1 ">
                        
                        {/* <div className="mt-4 mt-lg-0">
                            <button className="btn btn-outline-success bg-light mr-1  px-lg-4 px-1 font-weight-bold">Browse Pre-defined Projects</button>
                            <button className="btn btn-success ml-1 mr-2 px-lg-4 px-1 font-weight-bold">Post a Job</button>
                        </div> */}
                    </div>
                    <div className="Home-row row px-lg-4 px-1">
                        <div className="col-12 ">
                            <div className="d-flex flex-wrap  justify-content-between posting-hiring-home">
                                <p className="h4 font-weight-bold ">Proposals</p>
                            </div>
                        </div>
                        {this.props.getpro ? 
                            this.props.getpro.map((p)=>{
                                return(
                                    p.proposal.status === 0 ? 
                                    <div className="col-12">
                                    <div className="posting-hire-home  ">
                                        <div className="d-flex justify-content-between">
                                            <p className="font-weight-bold" key={p.userId}>{`${p.userFirstName} ${p.userLastName}`}</p>
                                            <p className="m-0 font-weight-bold ">${p.proposal.terms.bid}</p>
                                            
                                        </div>
                                        <div className=" ">
                                            <div>
                                                <p className="m-0 ">{p.proposal.coverLetter}</p>
                                                {/* <div className="d-flex">
                                                    <p className="m-0 edit-font-small">Invite-only</p>
                                                    <p className="m-0 edit-font-small">- Created </p>
                                                </div> */}
                                            </div>
                                            <div>
                                            {(() =>{
                                              let data = [];
                                              let comingData = this.props.getpro.proposalFiles
                                              if(comingData){
                                              if(comingData.length > 0){
                                                  for(let i = 0; i < comingData.length; i++){
                                                          if(comingData[i].userId == p.userId){
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
                                            <div className="mt-3">
                                            <button className="btn btn-success" onClick={()=>this.handleAccept(p.userId)}>Accept</button>
                                            </div>
                                        </div>
                                    </div>
                                    </div> : ""
                                )
                            })
                            :<div className="col-12">
                              <div className="posting-hire-home justify-content-center d-flex">
                                <p className="h6">This job Post doesn't have any proposals.</p>
                              </div>
                            </div>
                            }
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
        getpro : state.postProposalReducer.getProposal
    }
  }
  
 const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getProposal,
        acceptProposal
    }, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps) (JobProposals);