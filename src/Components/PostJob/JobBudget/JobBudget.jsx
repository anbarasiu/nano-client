import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./JobBudget.css";

const JobBudget = (props) => {
  let history = useHistory();

  let handleSubmitBtn = () => {
    let jobPost = {
      clientId: localStorage.getItem("id"),
      postName: props.jobPostTitle,
      category: props.jobCategory,
      description: props.jobPostDescription,
      projectType: props.projectType,
      screaningQuestions: props.screeningQuestions,
      coverLetter: true,
      skills: [],
      experienceLevel: props.jobExperienceLevel,
      visibility: props.jobPostVisibility,
      freelancersNo: props.numberOfFreelancersForJob,
      estimatedBudget: props.jobPostBudget,
      file: props.jobPostFiles
    }

    props.createJobPost(jobPost);
    props.setJobPostProgress(1);

    history.push("/");
    props.setJobPostTitle("");
    props.setJobCategory("Web Design");
    props.setJobPostDescription("");
    props.setProjectType("");
    props.setScreeningQuestions(null);
    props.setJobExperienceLevel("");
    props.setJobPostVisibility("");
    props.setNumberOfFreelancersForJob(null);
    props.setJobPostBudget(null);
    props.checkJobPostTitle("", 5);
    props.checkJobPostDescription("", 50);
    props.setFreelancersNeeded("");
    props.setJobPostProgress(1);
  }

  let handleBackBtnClick = () => {
    props.setJobPostProgress(5);
  }

  let handleBudgetInput = (e) => {
    props.setJobPostBudget(e.target.value);
  }

  return (
    <div>
      <div className="bg-white mb-2 mb-lg-5 rounded">
        <div className="container py-3 p-lg-3 borderBottomPrimary">
          <div className="container col p-0 px-lg-3">
            <div className="h4 mb-0">Budget</div>
            <div>Step 6 of 6</div>
          </div>
        </div>
        <div className="container py-3 py-lg-0 p-lg-3 borderBottomPrimary">
          <div className="container col p-0 px-lg-3">
            <div className="h6">Do you have a specific budget</div>
            <div className="mb-4 mb-lg-5">
              <div>
                <div className="col-12 col-lg-4 px-0">
                  <input onChange={handleBudgetInput} value={props.jobPostBudget} placeholder="0" type="number" className="nano-input rounded col-12 p-2 text-right" />
                  <div id="budget-dollar-sign" className="d-inline-block position-absolute">
                    <FontAwesomeIcon icon="dollar-sign" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-0 p-lg-3">
          <div className="container col p-0 px-lg-3">
            <div>
              <button onClick={handleBackBtnClick} id="exitBtn" className="btn rounded mr-lg-4">Back</button>
              <button onClick={handleSubmitBtn} id="nextBtn" className="btn rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobBudget;