import { useEffect } from "react";
import "./JobDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const JobDetails = (props) => {

  useEffect(() => {
    if (props.projectType) {
      document.getElementById(props.projectType).checked = true;
    }
  })

  let handleNextBtnClick = () => {
    props.setJobPostProgress(4);
    props.setScreeningQuestions(savingScreeningQuestions());
  }

  let handleBackBtnClick = () => {
    props.setJobPostProgress(2);
  }

  let handleProjectTypeSelection = (e, projectType) => {
    props.setProjectType(projectType);
    document.getElementById(projectType).checked = true;
  }

  let handleCloseQuestionBtn = () => {
    let x = props.screeningQuestionsCounter;
    props.setScreeningQuestionsCounter(x - 1);
    console.log(props.screeningQuestionsCounter);
  }

  let handleAddQuestionBtn = () => {
    if (props.screeningQuestionsCounter < 5 || props.screeningQuestionsCounter === undefined) {
      props.setScreeningQuestionsCounter((props.screeningQuestionsCounter || 0) + 1);
    }
    console.log(props.screeningQuestionsCounter);
  }

  let savingScreeningQuestions = () => {
    let questions = document.getElementsByClassName("screening-questions-input");
    let questionsValue = [];
    for (let i = 0; i < questions.length; i++) {
      questionsValue.push(questions[i].value);
    }
    return questionsValue;
  }

  let renderedQuestions = [];
  for (let i = 0; i < props.screeningQuestionsCounter; i++) {
    renderedQuestions.push(
      <div className="mb-5" key={i}>
        <input className="col-11 col-lg-8 py-2 rounded nano-input screening-questions-input" />
        <div onClick={handleCloseQuestionBtn} className="d-inline ml-2 close-question">
          <FontAwesomeIcon icon="times" />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="bg-white mb-2 mb-lg-5 rounded">
        <div className="container py-3 p-lg-3 borderBottomPrimary">
          <div className="container col p-0 px-lg-3">
            <div className="h4 mb-0">Details</div>
            <div>Step 3 of 6</div>
          </div>
        </div>
        <div className="container py-3 py-lg-0 p-lg-3">
          <div className="container col p-0 px-lg-3">
            <div className="h6">What type of project do you have?</div>
            <div className="mb-4 mb-lg-5 row">
              <div className="col-4">
                <div onClick={(e) => handleProjectTypeSelection(e, "onetime-project")} className="col-12 col project-type-card p-3 rounded">
                  <div className="text-right">
                    <input type="radio" id="onetime-project" value="onetime-project" name="project-type" />
                  </div>
                  <div className="text-center pb-2">
                    <FontAwesomeIcon icon="user" />
                  </div>
                  <div className="text-center project-card-title">One-time project</div>
                  <div className="d-none d-lg-block text-center project-card-text mb-3">Find the right skills for a short-term need.</div>
                </div>
              </div>
              <div className="col-4">
                <div onClick={(e) => handleProjectTypeSelection(e, "ongoing-project")} className="col-12 col project-type-card p-3 rounded">
                  <div className="text-right">
                    <input type="radio" id="ongoing-project" value="ongoing-project" name="project-type" />
                  </div>
                  <div className="text-center pb-2">
                    <FontAwesomeIcon icon="clipboard-list" />
                  </div>
                  <div className="text-center project-card-title">Ongoing project</div>
                  <div className="d-none d-lg-block text-center project-card-text mb-3">Find a skilled resource for an extended engagement.</div>
                </div>
              </div>
              <div className="col-4">
                <div onClick={(e) => handleProjectTypeSelection(e, "complex-project")} className="col-12 col project-type-card p-3 rounded">
                  <div className="text-right">
                    <input type="radio" id="complex-project" value="complex-project" name="project-type" />
                  </div>
                  <div className="text-center pb-2">
                    <FontAwesomeIcon icon="compress" />
                  </div>
                  <div className="text-center project-card-title">Complex project</div>
                  <div className="d-none d-lg-block text-center project-card-text mb-3">Find specialized experts and agencies for large projects.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mb-5 rounded">
        <div className="container p-lg-3 borderBottomPrimary">
          <div className="container col px-0 px-lg-3 py-3 py-lg-0">
            <div id="screening-questions" className="h6">Screening Questions <span>(optional)</span></div>
            <div className="mt-4">Add screening questions and/or require a cover letter</div>
            <div id={
              props.screeningQuestionsCounter === 5 ? "add-btn-disabled" : "add-screening-question"
            }
            className="my-4">
              <FontAwesomeIcon icon="plus" />
              <span onClick={handleAddQuestionBtn} className="ml-3">Add a question</span>
            </div>
            {renderedQuestions}
          </div>
        </div>
        <div className="container p-0 p-lg-3">
          <div className="container col p-0 px-lg-3">
            <div>
              <button onClick={handleBackBtnClick} id="exitBtn" className="btn rounded mr-lg-4">Back</button>
              {
                props.projectType ?
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

export default JobDetails;