export function jobReactionReducer (state = {}, action) {
    switch (action.type) {
      case "LIKE_JOB_POST": {
        return {...state, likeJobPost: action.payload}
      }
      case "DISLIKE_JOB_POST": {
        return {...state, dislikeJobPost: action.payload}
      }
      case "UNLIKE_JOB_POST": {
        return {...state, unlikeJobPost: action.payload}
      }
      case "UNDISLIKE_JOB_POST": {
        return {...state, undislikeJobPost: action.payload}
      }
      default: return state;
    }
  }