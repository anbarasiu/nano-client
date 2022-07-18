
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserJobs, getRegistrationInfo } from "../../Actions/userData";
import {getClientJobs} from "../../Actions/getJobs"

const MyClientJobs = (props) => {

  useEffect(() => {
    if (localStorage.getItem('id')) {
      props.getClientJobs(localStorage.getItem('id'));
    }
    if (localStorage.getItem('token')) {
      props.getRegistrationInfo(localStorage.getItem('token'));
    }
  }, []);

  let history = useHistory();

  let navigateToShowProposals = (jobId) => {
    history.push(`/client/jobs/${jobId}`);
  }

  let activeContract = () => {
    console.log("data=====>",props.clientJobs);
    if (props.clientJobs) {
      return props.clientJobs.map((job) => {
          
        if (job.postStatus === 1) {
          return (
            <div onClick={() => navigateToShowProposals(job._id)} key={job._id} className="column col-12 py-3 mx-0 one-job-container">
              <div className="h5">{job.postName}</div>
              <div>{job.description}</div>
            </div>
          )
        }
      })
    }
  }

  let openContract = () => {
    console.log("data=====>",props.clientJobs);
    if (props.clientJobs) {
      return props.clientJobs.map((job) => {
          
        if (job.postStatus === 2) {
            let x = 0;
            job.proposals.proposalsList.map((p)=>{
                
                if(p.proposal.status === 2){
                    console.log("open");
                    console.log("====>",job.postName);
                    x = 1;
                }
            })
            if(x === 1)
            return (
                    <div onClick={() => navigateToShowProposals(job._id)} key={job._id} className="column col-12 py-3 mx-0 one-job-container">
                      <div className="h5">{job.postName}</div>
                      <div>{job.description}</div>
                    </div>
                 )
        }
      })
    }
  }



  let finishedContract = () => {
    if (props.clientJobs) {
      return props.clientJobs.map((job) => {
        if (job.postStatus === 2) {
          return (
            <div onClick={() => navigateToShowProposals(job._id)} key={job._id} className="column col-12 py-3 mx-0 one-job-container">
              <div className="h5">{job.postName}</div>
              <div>{job.description}</div>
            </div>
          )
        }
      })
    }
  }


  return (
    <div>
      <Header />

      <div id="freelancer-jobs-body" className="px-0 p-lg-4">
      <div className="container pb-5 col-12 col-lg-10 rounded">
        <div className="col-12">
          <div className="col d-lg-flex mx-auto col-12 justify-content-between mb-2">
            <div className="h3">My Jobs</div>
            <div className="h5">Earnings available now: <span className="text-tertiary">${props.registrationInfo ? props.registrationInfo.paymentAccount.totalAmount: ""}.00</span></div>
          </div>
          <div id="jobs-container" className="container col-12 bg-white px-0 rounded">
            <div id="active-contracts-title" className="row col-12 rounded py-3 mx-0">
              <div className="h4">Active contracts</div>
            </div>
            <div className="row col-12 py-3 mx-0 d-none">
              <div>Contracts you're actively working on will appear here. <span id="start-searching">Start searching for new projects now!</span></div>
            </div>
            {activeContract()}
          </div>

          <div id="jobs-container" className="container col-12 bg-white px-0 rounded">
            <div id="active-contracts-title" className="row col-12 rounded py-3 mx-0">
              <div className="h4">Open contracts</div>
            </div>
            <div className="row col-12 py-3 mx-0 d-none">
              <div>Contracts you're actively working on will appear here. <span id="start-searching">Start searching for new projects now!</span></div>
            </div>
            {openContract()}
          </div>
        
          <div id="jobs-container" className="container col-12 bg-white px-0 rounded">
            <div id="active-contracts-title" className="row col-12 rounded py-3 mx-0">
              <div className="h4">Finished contracts</div>
            </div>
            <div className="row col-12 py-3 mx-0 d-none">
              <div>Contracts you're actively working on will appear here. <span id="start-searching">Start searching for new projects now!</span></div>
            </div>
            {finishedContract()}
          </div>
        </div>
      </div>
    </div>

      <Footer />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getClientJobs,
    getRegistrationInfo
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    clientJobs: state.getJobsReducer.getClientJobs,
    registrationInfo: state.userReducer.registrationInfo
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (MyClientJobs);