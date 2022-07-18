import "./FreelancerJobs.css";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserJobs, getRegistrationInfo } from "../../Actions/userData";

const MyJobs = (props) => {

  useEffect(() => {
    if (localStorage.getItem('id')) {
      props.getUserJobs(localStorage.getItem('id'));
    }
    if (localStorage.getItem('token')) {
      props.getRegistrationInfo(localStorage.getItem('token'));
    }
  }, []);

  let history = useHistory();

  let navigateToShowProposals = (jobId) => {
    history.push(`/freelancer/myjobs/${jobId}`);
  }

  let activeContract = () => {
    if (props.userJobs) {
      return props.userJobs.map((job) => {
        if (job.proposal.status === 2) {
          return (
            <div onClick={() => navigateToShowProposals(job.myjob._id)} key={job.myjob._id} className="column col-12 py-3 mx-0 one-job-container">
              <div className="h5">{job.myjob.postName}</div>
              <div>{job.myjob.description}</div>
            </div>
          )
        }
      })
    }
  }

  let activeProposal = () => {
    if (props.userJobs) {
      return props.userJobs.map((job) => {
        if (job.proposal.status === 0) {
          return (
            <div onClick={() => navigateToShowProposals(job.myjob._id)} key={job.myjob._id} className="column col-12 py-3 mx-0 one-job-container">
              <div className="h5">{job.myjob.postName}</div>
              <div>{job.myjob.description}</div>
            </div>
          )
        }
      })
    }
  }

  let finishedContract = () => {
    if (props.userJobs) {
      return props.userJobs.map((job) => {
        if (job.proposal.status === 3) {
          return (
            <div onClick={() => navigateToShowProposals(job.myjob._id)} key={job.myjob._id} className="column col-12 py-3 mx-0 one-job-container">
              <div className="h5">{job.myjob.postName}</div>
              <div>{job.myjob.description}</div>
            </div>
          )
        }
      })
    }
  }

  let archivedProposal = () => {
    if (props.userJobs) {
      return props.userJobs.map((job) => {
        if (job.proposal.status === -1) {
          return (
            <div onClick={() => navigateToShowProposals(job.myjob._id)} key={job.myjob._id} className="column col-12 py-3 mx-0 one-job-container">
              <div className="h5">{job.myjob.postName}</div>
              <div>{job.myjob.description}</div>
            </div>
          )
        }
      })
    }
  }


  return (
    <div id="freelancer-jobs-body" className="px-0 p-lg-4">
      <div className="container pb-5 col-12 col-lg-10 rounded">
        <div className="col-12">
          <div className="col d-lg-flex mx-auto col-12 justify-content-between mb-2">
            <div className="h3">My Jobs</div>
            <div className="h5">Earnings available now: <span className="text-tertiary">${props.registrationInfo ? props.registrationInfo.paymentAccount.availableAmount : ""}.00</span></div>
          </div>
          <div id="jobs-container" className="container col-12 bg-white px-0 rounded mb-3">
            <div id="active-contracts-title" className="row col-12 rounded py-3 mx-0">
              <div className="h4">Active contracts</div>
            </div>
            <div className="row col-12 py-3 mx-0 d-none">
              <div>Contracts you're actively working on will appear here. <span id="start-searching">Start searching for new projects now!</span></div>
            </div>
            {activeContract()}
          </div>
          <div id="jobs-container" className="container col-12 bg-white px-0 rounded mb-3">
            <div id="active-contracts-title" className="row col-12 rounded py-3 mx-0">
              <div className="h4">Active proposals</div>
            </div>
            <div className="row col-12 py-3 mx-0 d-none">
              <div>Contracts you're actively working on will appear here. <span id="start-searching">Start searching for new projects now!</span></div>
            </div>
            {activeProposal()}
          </div>
          <div id="jobs-container" className="container col-12 bg-white px-0 rounded mb-3">
            <div id="active-contracts-title" className="row col-12 rounded py-3 mx-0">
              <div className="h4">Finished contracts</div>
            </div>
            <div className="row col-12 py-3 mx-0 d-none">
              <div>Contracts you're actively working on will appear here. <span id="start-searching">Start searching for new projects now!</span></div>
            </div>
            {finishedContract()}
          </div>
          <div id="jobs-container" className="container col-12 bg-white px-0 rounded mb-3">
            <div id="active-contracts-title" className="row col-12 rounded py-3 mx-0">
              <div className="h4">Archived proposals</div>
            </div>
            <div className="row col-12 py-3 mx-0 d-none">
              <div>Contracts you're actively working on will appear here. <span id="start-searching">Start searching for new projects now!</span></div>
            </div>
            {archivedProposal()}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUserJobs,
    getRegistrationInfo
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    userJobs: state.userReducer.userJobs,
    registrationInfo: state.userReducer.registrationInfo
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (MyJobs);