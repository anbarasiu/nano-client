import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./JobVisibility.css";

const JobVisibility = (props) => {

  useEffect(() => {
    if (props.jobPostVisibility) {
      document.getElementById(props.jobPostVisibility).checked = true;
    }

    if (props.freelancersNeeded) {
      document.getElementById(props.freelancersNeeded).checked = true;
      if (props.freelancersNeeded === "many-freelancers") {
        document.getElementById('numberOfFreelancersInput').style.display = "block";
      }
    }
  })

  let handleNextBtnClick = () => {
    props.setJobPostProgress(6);
  }

  let handleBackBtnClick = () => {
    props.setJobPostProgress(4);
  }

  let handleJobVisibilitySelection = (e, visibility) => {
    let visibilitySelectedElement = document.getElementById(visibility);
    visibilitySelectedElement.checked = true;
    props.setJobPostVisibility(visibility);
  }

  let handleFreelancersNeededSelection = (e, freelancersNeeded) => {
    let optionSelectedElement = document.getElementById(freelancersNeeded);
    let freelancersNumberInput = document.getElementById('numberOfFreelancersInput');
    optionSelectedElement.checked = true;
    props.setFreelancersNeeded(freelancersNeeded);
    if (freelancersNeeded === "one-freelancer") {
      props.setNumberOfFreelancersForJob(1);
      freelancersNumberInput.style.display = "none";
    } else if (freelancersNeeded === "many-freelancers") {
      props.setNumberOfFreelancersForJob("")
      freelancersNumberInput.style.display = "block";
    }
  }

  let handleFreelancersNumberInputChange = (e) => {
    props.setNumberOfFreelancersForJob(e.target.value);
  }

  return (
    <div>
      <div className="bg-white mb-2 mb-lg-5 rounded">
        <div className="container py-3 p-lg-3 borderBottomPrimary">
          <div className="container col p-0 px-lg-3">
            <div className="h4 mb-0">Visibility</div>
            <div>Step 5 of 6</div>
          </div>
        </div>
        <div className="container py-3 py-lg-0 p-lg-3 borderBottomPrimary">
          <div className="container col p-0 px-lg-3">
            <div className="h6">Who can see your job?</div>
            <div className="mb-4 mb-lg-5 row">
              <div className="col-4">
                <div onClick={(e) => handleJobVisibilitySelection(e, "anyone")} className="col-12 col project-type-card visibility-card p-3 rounded">
                  <div className="text-right">
                    <input type="radio" id="anyone" value="anyone" name="job-visibility" />
                  </div>
                  <div className="text-center pb-2">
                    <FontAwesomeIcon icon="user" />
                  </div>
                  <div className="text-center project-card-title">Anyone</div>
                  <div className="d-none d-xl-block text-center project-card-text mb-3">Freelancers and agencies using nano and public search engines can find this job.</div>
                </div>
              </div>
              <div className="col-4">
                <div onClick={(e) => handleJobVisibilitySelection(e, "only-nano")} className="col-12 col project-type-card visibility-card p-3 rounded">
                  <div className="text-right">
                    <input type="radio" id="only-nano" value="only-nano" name="job-visibility" />
                  </div>
                  <div className="text-center pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="40" height="20" role="img" aria-hidden="true"><path fill="black" d="M27.6 6.9c-3.8 0-6.7 2.5-7.9 6.5-1.8-2.7-3.1-5.7-4-8.8h-4.1v10.6c0 2.1-1.7 3.8-3.8 3.8S4 17.3 4 15.2V4.7H0v10.6c0 4.3 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9v-1.8c.8 1.7 1.8 3.3 2.9 4.8L16.2 30h4.2l1.8-8.5c1.6 1.1 3.5 1.7 5.5 1.7 4.5 0 8.1-3.6 8.1-8.1-.1-4.5-3.7-8.2-8.2-8.2zm0 12.2c-1.7-.1-3.3-.7-4.6-1.8l.3-1.6v-.1c.3-1.7 1.3-4.6 4.2-4.6 2.2-.1 4 1.7 4.1 3.9.1 2.2-1.7 4-3.9 4.1l-.1.1z"></path></svg>
                  </div>
                  <div className="text-center project-card-title">Only Nano talent</div>
                  <div className="d-none d-xl-block text-center project-card-text mb-3">Only Nano users can find this job.</div>
                </div>
              </div>
              <div className="col-4">
                <div onClick={(e) => handleJobVisibilitySelection(e, "invite-only")} className="col-12 col project-type-card visibility-card p-3 rounded">
                  <div className="text-right">
                    <input type="radio" id="invite-only" value="invite-only" name="job-visibility" />
                  </div>
                  <div className="text-center pb-2">
                    <FontAwesomeIcon icon="lock" />
                  </div>
                  <div className="text-center project-card-title">Invite-only</div>
                  <div className="d-none d-xl-block text-center project-card-text mb-3">Only freelancers and agencies you have invited can find this job.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container col p-0 px-lg-3">
            <div className="h6">How many people do you need for this job?</div>
            <div className="mb-4 mb-lg-5 row">
              <div className="col-6 col-md-4">
                <div onClick={(e) => handleFreelancersNeededSelection(e, "one-freelancer")} className="col-12 col project-type-card visibility-card-2 p-3 rounded">
                  <div className="text-right">
                    <input type="radio" id="one-freelancer" value="one-freelancer" name="one-or-many-freelancers" />
                  </div>
                  <div className="text-center pb-2">
                    <FontAwesomeIcon icon="user" />
                  </div>
                  <div className="text-center project-card-title">One freelancer</div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div onClick={(e) => handleFreelancersNeededSelection(e, "many-freelancers")} className="col-12 col project-type-card visibility-card-2 p-3 rounded">
                  <div className="text-right">
                    <input type="radio" id="many-freelancers" value="many-freelancers" name="one-or-many-freelancers" />
                  </div>
                  <div className="text-center pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="40" height="20" role="img" aria-hidden="true"><path fill="black" d="M27.6 6.9c-3.8 0-6.7 2.5-7.9 6.5-1.8-2.7-3.1-5.7-4-8.8h-4.1v10.6c0 2.1-1.7 3.8-3.8 3.8S4 17.3 4 15.2V4.7H0v10.6c0 4.3 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9v-1.8c.8 1.7 1.8 3.3 2.9 4.8L16.2 30h4.2l1.8-8.5c1.6 1.1 3.5 1.7 5.5 1.7 4.5 0 8.1-3.6 8.1-8.1-.1-4.5-3.7-8.2-8.2-8.2zm0 12.2c-1.7-.1-3.3-.7-4.6-1.8l.3-1.6v-.1c.3-1.7 1.3-4.6 4.2-4.6 2.2-.1 4 1.7 4.1 3.9.1 2.2-1.7 4-3.9 4.1l-.1.1z"></path></svg>
                  </div>
                  <div className="text-center project-card-title">More than one freelancer</div>
                </div>
              </div>
              <div id="numberOfFreelancersInput" className="col-12 col-md-8 col-lg-6 mt-3">
                <div className="h6">Number of Freelancers</div>
                <input onChange={handleFreelancersNumberInputChange} value={props.numberOfFreelancersForJob} type="number" className="nano-input col-8 rounded" />
              </div>
            </div>
          </div>
        </div>
        <div className="container p-0 p-lg-3">
          <div className="container col p-0 px-lg-3">
            <div>
              <button onClick={handleBackBtnClick} id="exitBtn" className="btn rounded mr-lg-4">Back</button>
              {
                props.jobPostVisibility && props.numberOfFreelancersForJob ?
                <button onClick={handleNextBtnClick}  id="nextBtn" className="btn rounded">Next</button> :
                <button id="nextBtnDisabled" disabled className="btn rounded">Next</button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobVisibility;