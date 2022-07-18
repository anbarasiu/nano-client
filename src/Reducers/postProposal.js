export function postProposalReducer (state = {}, action) {
    switch (action.type) {
      case "POST_PROPOSAL": {
        return {...state, postProposal: action.payload}
      }
      case "GET_PROPOSAL": {
        return {...state, getProposal: action.payload}
      }
      case "ACCEPT_PROPOSAL":{
        return {...state, acceptProposal : action.payload}
      }
      default: return state;
    }
  }

