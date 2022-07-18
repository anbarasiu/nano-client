import {  faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postProposal } from "../../Actions/sumbitProbosal";
import {getOneJob} from "../../Actions/jobPost"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './ApplyJob.css'
import '../HomePage/HomePage.css'
import '../hiring/homeHire/homeHiring.css'
import axios from 'axios';
import baseURL from '../../Actions/baseURL';


class Apply extends Component {
    constructor(){
        super();
        // const formData = new formData()
        this.state = {
            profile : "General profile",
            numberOfConnects : 4,
            remainingConnects : 19,
            data:{
                title:"Expert Three.js Developer",
                workType: "Hourly",
                level:"Intermediate",
                timeZone: "Est",
                duaration:"Less than 1 month",
                houres: "10-30 hrs/week",
                posted:"17 minutes ago",
                description :"Hello, I need help to build my educational website completed.  and make it work",
                tags:['PHP','WordPress',"HTML","jQuery","PSD to HTML","jQuery Mobile","CSS3"],
                proposals:"Less than 5",
                paymentvervied:false,
                stars:0,
                spend:0,
                country:"Canada",
                like: true,
                id:1,
                dislike: false,
                dislikeTitle:"",
                budget:400.00,
            },
            bid : 0.00,
            fee : 0.00,
            recived : 0.00,
            cover : "",
            allFiles : [],
        }
    }

    componentDidMount= async ()=> {
        await this.props.getOneJob(localStorage.getItem('id'),this.props.match.params.id)
        console.log("data",this.props.jobDetails[0]);
        console.log("done",this.props);
    }

    handleSubmit = async ()=>{
    

        try{
            let data = {
                'Content-Type' : 'multipart/form-data' ,
                'userid' : localStorage.getItem('id'),
                'jobid' : this.props.match.params.id
            }
            let formData = new FormData();

            for(let i = 0; i <this.state.allFiles.length; i++){
                formData.append('file', this.state.allFiles[i]);
            }

             await axios.post(`${baseURL}/api/job/uploadproposlsfiles`,formData,{headers: data})

            .then(result => console.log(result))
       
        } 
        catch(error){
            console.log(error);
        }
        
        console.log("props",this.props);
        let x = {
            id: localStorage.getItem('id'),
            job: this.props.match.params.id,
            bid:this.state.bid,
            fee:this.state.fee,
            res : this.state.recived,
            cover:this.state.cover
        }
        console.log("this======>",x);
        this.props.postProposal(localStorage.getItem('id'),this.props.match.params.id,this.state.bid,this.state.fee,this.state.recived,this.state.cover)
        this.props.history.push("/");
    }
    

    handleProfile = (title)=>{
        this.setState({profile : title});
    }

    handleCoverLetter = async(e)=>{
        await this.setState({cover: e.target.value})
    }

    handleprice= (e) =>{
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
               this.setState({bid: e.target.value})
            console.log(e.target.value);
            }
            let fee = e.target.value * 0.2 
            this.setState({fee})
            let recived = e.target.value * 0.8
            this.setState({recived})
    }

    handleRecived= async(e) =>{
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
           this.setState({recived: e.target.value})
        console.log(e.target.value);
        let bid = e.target.value / 0.8
        await this.setState({bid})
        console.log(this.state.bid);
        let fee = this.state.bid - e.target.value
        this.setState({fee})
        }
}

    render = ()=>{
        return(
            <div>
              <Header />

              <div className="Home-container ">
                { 
                this.props.jobDetails? 
                <div className="container  ">
                    <div className="row justify-content-center">
                        <div className="col-11">
                            <p className="h3 ml-3 font-weight-bold mb-4">Submit a proposal</p>
                            <div className="posting-hiring-home mt-0">
                                <p className="h4  font-weight-bold">Proposal settings</p>
                            </div>
                            <div className="posting-hire-home question-boarder mb-4">
                                <p className="font-weight-bold">Propose with a Specialized profile</p>
                                <div className="dropdown mb-3">
                                <button className="btn btn-outline-secondary px-5 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.state.profile}
                                    </button>
                                   
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                      <p className="dropdown-item" onClick={()=>this.handleProfile("General profile")} >General profile</p>
                                      <p className="dropdown-item" onClick={()=>this.handleProfile("Full Stack Development")} >Full Stack Development</p>
                                    </div>
                                </div>
                                <div className="d-flex ">
                                    <p className="edit-font-mediumplus">This proposal requires <span className="font-weight-bold">{this.state.numberOfConnects} Connects</span></p>
                                    < FontAwesomeIcon icon={faQuestionCircle} className="ml-3 mt-1 green-color"/>
                                </div>
                                <p className="edit-font-mediumplus mb-0">When you submit this proposal, you'll have <span className="font-weight-bold">{this.state.remainingConnects} Connects</span> remaining</p>
                            </div>
                            {/* ........................................................ */}
                            <div className="posting-hiring-home mt-0">
                                <p className="h4  font-weight-bold">Job details</p>
                            </div>

                             
                             <div className="posting-hire-home question-boarder mb-4">
                                <div className="d-flex">
                                    <div className="col-9">
                                        <p className="font-weight-bold h5 mb-4">{this.props.jobDetails[0].postName}</p>
                                        <p>
                                        {this.props.jobDetails[0].description}
                                        </p>
                                        <p ><a className="help-one-link font-weight-bold" href="">view job posting</a></p>
                                    </div>
                                    <div className="col-1">
                                        <div className="div-border"></div>   
                                    </div>
                                    <div className="col-2">
                                        <div>
                                            <p className="font-weight-bold mb-2">{this.props.jobDetails[0].experienceLevel}</p>
                                            <p className="mb-2">Experience Level</p>
                                        </div>
                                        <div>
                                            <p className="font-weight-bold">Fixed Price</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="skills-border">
                                    <p className="font-weight-bold">Skills and expertise</p>
                                    <div className="Home-posts-tags">
                                        {this.props.jobDetails[0].skills?
                                        this.props.jobDetails[0].skills.map((t)=>{
                                            
                                            return(
                                                <div className="Home-posts-tag" >
                                                            <p>{t}</p>
                                                        </div>
                                            )
                                        }):""}
                                    </div>
                                </div>
                            </div> 
                            {/* -------------------------------------------------------------- */}

                            <div className="posting-hiring-home mt-0 d-flex justify-content-between ">
                                <p className="h4  font-weight-bold">Terms</p>
                                
                                <p className="font-weight-bold">Client's budget: ${this.props.jobDetails[0].estimatedBudget} USD</p>
                            </div>

                            <div className="posting-hire-home question-boarder mb-4">
                                <div className="d-flex">
                                    <div className="col-8">
                                        <p className="font-weight-bold">What is the full amount you'd like to bid for this job?</p>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p className="font-weight-bold mb-1">Bid</p>
                                                <p>Total amount the client will see on your proposal</p>
                                            </div>
                                            <div>
                                                <input className="input-proposal" type="text" onChange={this.handleprice} value={this.state.bid}/>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between box-border">
                                            <div>
                                                <p className="font-weight-bold mb-1">Nano Service Fee</p>
                                            </div>
                                            <div>
                                                <p>{this.state.fee}</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between box-border">
                                            <div>
                                                <p className="font-weight-bold mb-1">You'll Receive</p>
                                                <p>The estimated amount you'll receive after service fees</p>
                                            </div>
                                            <div>
                                                <input className="input-proposal" type="text" onChange={this.handleRecived} value={this.state.recived}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">
                                        <svg className="protection" role="img" viewBox="0 0 145 130" xmlns="http://www.w3.org/2000/svg"><path d="M72.5.5L16.8 17.6v61c0 5.6 1.4 11.2 4.2 16.1 6.1 10.8 20.3 27.5 51.5 34.8 31.2-7.2 45.4-24 51.5-34.8 2.8-4.9 4.2-10.5 4.2-16.1v-61L72.5.5z" fill="#6fda44"></path><path d="M128.2 78.6v-61L72.5.5v129c31.2-7.2 45.4-24 51.5-34.8 2.8-4.9 4.2-10.4 4.2-16.1z" fill="#34ba08"></path><path d="M75.9 75.9c2.8-.4 4.4-1.6 4.4-4 0-2-1.2-3.2-4.4-4.9l-6.1-1.6C61 62.9 56.5 59.7 56.5 52c0-6.9 5.3-11.3 13.3-12.5v-3.6h6.5v3.6c4.4.4 8.1 2 11.7 4.4l-4 7.3c-2.4-1.6-5.3-2.8-7.7-3.6 0 0-2-.8-6.1-.4-3.2.4-4.4 2-4.4 4s.8 3.2 4.4 4.4l6.1 1.6C86 59.6 90 63.7 90 70.5c0 6.9-5.3 11.7-13.3 12.5v4h-6.5v-4c-6.1-.4-11.3-2.4-15.4-5.7l4.9-7.3c3.2 2.4 6.5 4.4 10.1 5.3 4.1 1 6.1.6 6.1.6z" fill="#fff"></path></svg>
                                    </div>
                                </div>
                            </div>   

                            {/* -----------------------------------------------------------------  */}

                            <div className="posting-hiring-home mb-4 div-addtional">
                                <p>How long will this project take?</p>
                                <select id="" name="" placeholder="ggg">
                                  <option value="More than 6 months">More than 6 months</option>
                                  <option value="3 to 6 months">3 to 6 months</option>
                                  <option value="1 to 3 months">1 to 3 months</option>
                                  <option value="Less than 1 months">Less than 1 months</option>
                                </select>
                            </div>

                            {/* -------------------------------------------------------------- */}

                            <div className="posting-hiring-home mt-0 ">
                                <p className="h4  font-weight-bold">Additional details</p>
                            </div>
                            <div className="posting-hire-home question-boarder ">
                                <div>
                                        <p className="font-weight-bold">Cover Letter</p>
                                        <textarea name="" id="" cols="120" rows="10" onChange={this.handleCoverLetter}></textarea>
                                </div>
                                <div>
                                        <p className="font-weight-bold">Attachments</p>
                                        <div className="upload">
                                            <input type="file" id="myfile" name="file" onChange={(event)=>{
                                                // for(let i = 0 ; i<event.target.files.length ; i++){
                                                //     this.formData.append("file",event.target.files[i])
                                                // }
                                                this.setState({allFiles : event.target.files})
                                            }}></input>
                                        </div>
                                </div>
                            
                            </div> 
                            <div className="posting-hire-home question-boarder footer-proposal-page">
                                <button className="submit" onClick={this.handleSubmit}>Submit a Proposal</button>
                                <button className="cancel">Cancel</button>
                            </div>

                             


                        </div>
                    </div>
                </div> : ""}
            </div>

              <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("hhhhhhhh", state);
    return {
        jobDetails : state.jobPostReducer.jobDetails
    }
  }
  
 const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        postProposal,
        getOneJob
    }, dispatch)
  }
export default connect(mapStateToProps, mapDispatchToProps) (Apply) ;