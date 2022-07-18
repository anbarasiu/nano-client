import React from 'react';
import { bindActionCreators } from 'redux';
import {  connect } from 'react-redux';
import { Switch, Route, withRouter} from 'react-router-dom';
import './Components/FontAwesomeIcons/index';
import './App.css';
import FreelancerProfilePage from './Components/FreelancerProfilePage/FreelancerProfilePage';
import Home from './Components/HomePage/HomePage';
import JobPostPage from './Components/PostJob/JobPostPage/jobPostPage';
import FreelancerJobsPage from './Components/FreelancerJobsPage/FreelancerJobsPage.jsx';
import Signin from "./Components/signin/components/signin";
import Signup from "./Components/signup/components/signup";
import ErrorComponent from './Components/Error/Error';
import { checkLoggingStatus } from "./Actions/userData";
import  jobpage from "./Components/JobDetails/jobpage";
import { getOneJob } from "./Actions/jobPost";
import Apply from './Components/ApplyJob/ApplyJob';
import HomeHiring from './Components/hiring/homeHire/homeHiring';
import JobProposals from './Components/jobProposals/jobProposals';
import ShowProposal from './Components/ShowProposal/showProposal';
import MyClientJobs from './Components/clientActiveJobs/clientActiveJobs';
import clientContract from './Components/clientContract/clientContract';





class App extends React.Component {
  componentDidMount() {
    if (this.props.history.location.pathname !== "/signup") {
      if (!localStorage.getItem('token')) {
        this.props.history.push("/signin");
        console.log(localStorage.getItem('type'));
      }
    }
    console.log(this.props.history.location.pathname);
    // this.props.getOneJob();
  }

  render() {
    if (localStorage.getItem('type') === "Freelancer" || localStorage.getItem('type') === "freelancer") {
      return (
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/profile/freelancer/:id" component={FreelancerProfilePage} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/freelancer/myjobs/:jobId" component={ShowProposal} />
            <Route exact path="/freelancer/myjobs" component={FreelancerJobsPage} />
            <Route path="/sumbit-proposal/:id" component={Apply} />
            <Route path="/job/:id" component={jobpage} />
            <Route path="*" component={ErrorComponent} />
          </Switch>
        </div>
      );
    } else if (localStorage.getItem('type') === "client") {
      return (
        <div>
          <Switch>
            <Route exact path="/" component={HomeHiring} />
            <Route path="/home" component={HomeHiring} />
            <Route path="/job-post" component={JobPostPage} />
            <Route path="/job-proposals/:id" component={JobProposals} />
            <Route exact path="/client/jobs" component={MyClientJobs} />
            <Route path="/client/jobs/:jobId" component={clientContract} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="*" component={ErrorComponent} />
          </Switch>
        </div>
      );
    } else {
      return (
        <div>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="*" component={ErrorComponent} />
          </Switch>
        </div>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({checkLoggingStatus, getOneJob}, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps) (App));
