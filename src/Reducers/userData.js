export function userReducer (state = {}, action) {
  switch(action.type) {
    case "PROFILE_DATA": {
      return {...state, profile: action.payload};
    }

    case "EDIT_HOURLY_RATE": {
      return {...state, hourlyRate: action.payload}
    }

    case "LOGIN": {
      if (action.payload) {
        return {...state, userID: action.payload.user._id, userData: action.payload}
      } else {
        return {...state}
      }
    }
    case "CHECK_LOGGING_STATUS": {
      if (action.token) {
        console.log("Hi user, You're logged in!");
        return {...state, isLoggedIn: true};
      } else {
        console.log("Hi guest, Register now!");
        return {...state, isLoggedIn: false};
      }
    }
    case "CHECK_PROFILE_OWNER": {
      let profileOwner;
      if (action.userID === action.profileID) {
        profileOwner = true;
      } else {
        profileOwner = false;
      }
      return {...state, isProfileOwner: profileOwner};
    }

    case "SET_FREELANCER_HOURLY_RATE": {
      return {...state, freelancerHourlyRate: action.hourlyRate}
    }

    case "SET_FREELANCER_TITLE": {
      return {...state, freelancerTitle: action.title}
    }

    case "SET_PROFILE_PIC": {
      return {...state, profilePicture: action.pic}
    }

    case "GET_USER_JOBS": {
      return {...state, userJobs: action.payload}
    }

    case "EDIT_PROFILE_PRICE": {
      return {...state, profileHourlyRate: action.payload.price}
    }

    case "EDIT_PROFILE_JOB_TITLE": {
      return {...state, profileTitle: action.payload.jobtitle}
    }

    case "EDIT_PROFILE_DESCRIPTION": {
      return {...state, profileDescription: action.payload.description}
    }

    case "GET_PROFILE_INFO": {
      return {
        ...state,
        profileInfo: action.payload,
        profileHourlyRate: action.payload.price || 0,
        profileTitle: action.payload.jobtitle || "Add your job title",
        profileDescription: action.payload.description || "Add description"
      }
    }

    case "GET_REGISTRATION_INFO": {
      return {...state, registrationInfo: action.payload || {}}
    }

    case "SET_PROFILE_IMAGE": {
      return {...state, profileImage: action.payload}
    }


    default: return state;
  }
}