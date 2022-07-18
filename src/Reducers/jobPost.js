export function jobPostReducer (state = {}, action) {
  switch (action.type) {
    case "GET_ALL_JOBS": {
      return {...state, allJobs: action.payload}
    }
    case "GET_ONE_JOB": {
      return {...state, jobDetails: action.payload}
    }
    case "CREATE_JOB_POST": {
      return {...state, jobCreated: action.payload}
    }

    case "SET_JOB_POST_TITLE": {
      return {...state, jobPostTitle: action.title}
    }

    case "CHECK_JOB_POST_TITLE": {
      if (action.title.length < action.minimumCharacters) {
        return {...state, jobPostTitleValid: false}
      } else return {...state, jobPostTitleValid: true}
    }

    case "SET_JOB_CATEGORY": {
      return {...state, jobCategory: action.category}
    }

    case "CHECK_JOB_POST_DESCRIPTION": {
      if (action.description.length < action.minimumCharacters) {
        return {...state, jobPostDescriptionValid: false}
      } else return {...state, jobPostDescriptionValid: true}
    }

    case "SET_JOB_POST_DESCRIPTION": {
      return {...state, jobPostDescription: action.description}
    }

    case "SET_PROJECT_TYPE": {
      return {...state, projectType: action.projectType}
    }

    case "SET_JOB_POST_PROGRESS": {
      return {...state, jobPostProgress: action.progress}
    }

    case "SET_SCREENING_QUESTIONS_COUNTER": {
      return {...state, screeningQuestionsCounter: action.counter}
    }

    case "SET_SCREENING_QUESTIONS": {
      return {...state, screeningQuestions: action.questions}
    }

    case "SET_JOB_EXPERIENCE_LEVEL": {
      return {...state, jobExperienceLevel: action.experienceLevel}
    }

    case "SET_JOB_POST_VISIBILITY": {
      return {...state, jobPostVisibility: action.visibility}
    }

    case "SET_FREELANCERS_NEEDED": {
      return {...state, freelancersNeeded: action.freelancersNeeded}
    }

    case "SET_JOB_POST_BUDGET": {
      return {...state, jobPostBudget: action.budget}
    }

    case "SET_NUMBER_OF_FREELANCERS_FOR_JOB": {
      return {...state, numberOfFreelancersForJob: action.number}
    }

    case "SET_JOB_POST_FILES": {
      return {...state, jobPostFiles: action.files}
    }


    default: return state;
  }
}