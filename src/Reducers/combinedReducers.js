import { combineReducers } from 'redux';
import { userReducer } from './userData';
import { jobPostReducer } from './jobPost';
import { utilsReducer } from './utils';
import {postProposalReducer} from './postProposal'
import { getJobsReducer } from './getJobs';
import { jobReactionReducer } from './likesAndDislikes';


export default combineReducers({
  userReducer,
  jobPostReducer,
  utilsReducer,
  postProposalReducer,
  getJobsReducer, 
  jobReactionReducer,
})