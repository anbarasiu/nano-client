import baseURL from './baseURL';
import axios from 'axios';


export async function postProposal(userID, jobID,bid,fees,received,coverLetter) {
    let payload;
    try {
      let response = axios.post(`${baseURL}/api/job/createproposal`, {userId: userID, jobId: jobID , bid ,fees,received,coverLetter});
      payload = (await response).data
      console.log("jhjhj",payload);
    }
    catch (err) {
      console.log(err);
    }
  
    return {
      type: "POST_PROPOSAL",
      payload
    }
  }

  export async function getProposal(jobId) {
    let payload;
    try {
      let response = axios.post(`${baseURL}/api/job/getproposals` , {jobId});
      payload = (await response).data
      console.log("allProposals",payload);
    }
    catch (err) {
      console.log(err);
    }
  
    return {
      type: "GET_PROPOSAL",
      payload
    }
  }

  export async function acceptProposal(jobId,userId) {
    let payload;
    try {
      let response = axios.post(`${baseURL}/api/job/acceptproposal` , {jobId , userId});
      payload = (await response).data
      console.log("acceptedProposals",payload);
    }
    catch (err) {
      console.log(err);
    }
  
    return {
      type: "ACCEPT_PROPOSAL",
      payload
    }
  }