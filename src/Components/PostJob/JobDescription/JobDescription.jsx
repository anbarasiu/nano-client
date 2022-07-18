import "./JobDescription.css";

const JobDescription = (props) => {
  let checkDescriptionLength = (e) => {
    props.checkJobPostDescription(e.target.value, 50);
    props.setJobPostDescription(e.target.value);
  }
  let handleNextBtnClick = () => {
    props.setJobPostProgress(3);
  }
  let handleBackBtnClick = () => {
    props.setJobPostProgress(1);
  }
  return (
    <div>
      <div className="bg-white mb-2 mb-lg-5 rounded">
        <div className="container py-3 p-lg-3 borderBottomPrimary">
          <div className="container col p-0 px-lg-3">
            <div className="h4 mb-0">Description</div>
            <div>Step 2 of 6</div>
          </div>
        </div>
        <div className="container py-3 py-lg-0 p-lg-3">
          <div className="container col p-0 px-lg-3">
            <div>
              <div className="h6">A good description includes:</div>
              <ul className="pl-4" id="jobTitleExamples">
                <li>What the deliverable is</li>
                <li>Type of freelancer or agency you're looking for</li>
                <li>Anything unique about the project, team, or your company</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container py-3 pt-lg-0">
          <div className="container col p-0 px-lg-3">
            <div className="mb-4">
              <textarea value={props.jobPostDescription} onChange={checkDescriptionLength} className="col-12 py-2 largeInput" />
              <div className="col-12 px-0 text-right primary-color">(minimum 50)</div>
            </div>
            <div>
              <div className="h6">Additional project files (optional)</div>
              <div id="uploadProjectImages" className="col-12 px-0 mb-2">
                <div className=" d-inline-block">
                  drag or <span>upload</span> project images
                </div>
              </div>
              <div className="small-font-size">
                You may attach up to 5 files under <strong>100 MB</strong> each
              </div>
            </div>
          </div>
        </div>
        <div className="container py-3 pt-lg-3 border-top">
          <div className="container col p-0 px-lg-3">
            <button onClick={handleBackBtnClick} id="exitBtn" className="btn rounded mr-lg-4 disabled">Back</button>
            {
              props.isJobPostDescriptionValid ?
              <button onClick={handleNextBtnClick}  id="nextBtn" className="btn rounded">Next</button> :
              <button id="nextBtnDisabled" disabled className="btn rounded">Next</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDescription;