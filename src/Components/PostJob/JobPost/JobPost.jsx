import "./JobPost.css";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { checkJobPostTitle, checkJobPostDescription, setJobPostProgress, setProjectType, setScreeningQuestionsCounter, setScreeningQuestions, setJobCategory, setJobExperienceLevel, setJobPostVisibility, setFreelancersNeeded, setJobPostBudget, setJobPostDescription, setJobPostTitle, createJobPost, setNumberOfFreelancersForJob, setJobPostFiles } from '../../../Actions/jobPost';
import PostJobNavigation from "../PostJobNavigation/PostJobNavigation";
import JobTitle from "../JobTitle/JobTitle";
import JobDescription from "../JobDescription/JobDescription";
import JobDetails from "../JobDetails/JobDetails";
import JobExpertise from "../JobExpertise/JobExpertise";
import JobVisibility from "../JobVisibility/JobVisibility";
import JobBudget from "../JobBudget/JobBudget";

const JobPost = (props) => {
  props.setJobPostProgress(props.jobPostProgress)
  let componentToRender;
  switch (props.jobPostProgress) {
    case 1: componentToRender = <JobTitle {...props} />
      break;
    case 2: componentToRender = <JobDescription {...props} />
      break;
    case 3: componentToRender = <JobDetails {...props} />
      break;
    case 4: componentToRender = <JobExpertise {...props} />
      break;
    case 5: componentToRender = <JobVisibility {...props} />
      break;
    case 6: componentToRender = <JobBudget {...props} />
      break;
    default: componentToRender = <JobTitle {...props} />
  }
  return (
    <div className="container-fluid jobPostContainer px-0 px-lg-3">
      <div className="row col-12 col-lg-10 mx-auto pt-5 px-0 px-lg-3 jobPostContainer">
        <PostJobNavigation />
        <div className="col-12 col-lg-9 px-0 px-lg-3">
          {componentToRender}
          {/* <JobBudget /> */}
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    checkJobPostTitle,
    checkJobPostDescription,
    setJobPostProgress,
    setProjectType,
    setScreeningQuestionsCounter,
    setScreeningQuestions,
    setJobCategory,
    setJobExperienceLevel,
    setJobPostVisibility,
    setFreelancersNeeded,
    setJobPostBudget,
    setJobPostDescription,
    setJobPostTitle,
    createJobPost,
    setNumberOfFreelancersForJob,
    setJobPostFiles
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    isJobTitleValid: state.jobPostReducer.jobPostTitleValid,
    isJobPostDescriptionValid: state.jobPostReducer.jobPostDescriptionValid,
    jobPostProgress: state.jobPostReducer.jobPostProgress,
    projectType: state.jobPostReducer.projectType,
    screeningQuestionsCounter: state.jobPostReducer.screeningQuestionsCounter,
    screeningQuestions: state.jobPostReducer.screeningQuestions,
    jobCategory: state.jobPostReducer.jobCategory,
    jobExperienceLevel: state.jobPostReducer.jobExperienceLevel,
    jobPostVisibility: state.jobPostReducer.jobPostVisibility,
    freelancersNeeded: state.jobPostReducer.freelancersNeeded,
    jobPostBudget: state.jobPostReducer.jobPostBudget,
    jobPostDescription: state.jobPostReducer.jobPostDescription,
    jobPostTitle: state.jobPostReducer.jobPostTitle,
    jobCreated: state.jobPostReducer.jobCreated,
    numberOfFreelancersForJob: state.jobPostReducer.numberOfFreelancersForJob,
    jobPostFiles: state.jobPostReducer.jobPostFiles
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (JobPost);
