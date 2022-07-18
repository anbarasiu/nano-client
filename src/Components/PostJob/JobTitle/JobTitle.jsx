import { useEffect } from "react";
import "./JobTitle.css";

const JobTitle = (props) => {

  useEffect(() => {
    if (props.jobCategory) {
      document.getElementById("jobCategorySelection").value = props.jobCategory;
    }
  })

  let handleNextBtnClick = () => {
    props.setJobPostProgress(2);
    let jobCategory = handleJobCategorySelection();
    props.setJobCategory(jobCategory);
  }

  let handleJobTitleChange = (e) => {
    props.checkJobPostTitle(e.target.value, 1);
    props.setJobPostTitle(e.target.value);
  }

  let handleJobCategorySelection = () => {
    let jobCategory = document.getElementById("jobCategorySelection").selectedOptions[0].value;
    props.setJobCategory(jobCategory);
    return jobCategory;
  }

  return (
    <div>
      <div className="bg-white mb-2 mb-lg-5 rounded">
        <div className="container py-3 p-lg-3 borderBottomPrimary">
          <div className="container col p-0 px-lg-3">
            <div className="h4 mb-0">Title</div>
            <div>Step 1 of 6</div>
          </div>
        </div>
        <div className="container py-3 py-lg-0 p-lg-3">
          <div className="container col p-0 px-lg-3">
            <div className="h6">Enter the name of your job post</div>
            <div className="mb-2">
              <input value={props.jobPostTitle} onChange={handleJobTitleChange} className="col-11 col-lg-10 py-2 jobTitleInput" />
            </div>
            <div>
              <div className="h6">Here are some good examples:</div>
              <ul className="pl-4" id="jobTitleExamples">
                <li>Developer needed for creating a responsive WordPress Theme</li>
                <li>CAD designer to create a 3D model of a residential building</li>
                <li>Need a design for a new company logo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mb-5 rounded">
        <div className="container p-lg-3 borderBottomPrimary">
          <div className="container col px-0 px-lg-3 py-3 py-lg-0">
            <div className="h6">Job Category</div>
            <div>Let's categorize your job, which helps us personalize your job details and match your job to relevant freelancers and agencies.</div>
            <div className="mt-2">
              <select id="jobCategorySelection" onChange={handleJobCategorySelection} className="p-2 col-12 col-lg-auto jobTitleInput">
                <option value="Web Design">Web Design</option>
                <option value="FullStack Development">Full Stack Development</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Translation">Translation</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container p-0 p-lg-3">
          <div className="container col p-0 px-lg-3">
            <div>
              <button id="exitBtn" className="btn rounded mr-lg-4">Exit</button>
              {
                props.isJobTitleValid ?
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

export default JobTitle;