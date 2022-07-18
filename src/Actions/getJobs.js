import baseURL from "./baseURL";
import axios from "axios";
export async function getAllJobs(userId) {
  let payload;
  let data = {
    userId: userId,
  };
  try {
    await axios
      .post(`${baseURL}/api/job/getalljobs`, data)
      .then((response) => {
        if (response.data.length > 0) {
          payload = response.data;
        } else {
          payload = null;
        }
      });
  } catch (err) {
    console.log(err);
  }
  return {
    type: "GET_ALL_JOBS",
    payload,
  };
}
export async function getOneJob(jobId, userId) {
  const data = {
    userId: userId,
    jobId: jobId,
  };
  console.log(data)
  let payload;
  try {
    await axios
      .post(`${baseURL}/api/job/getonejob`, data)
      .then((response) => {
        if (response.data.length > 0) {
          payload = response.data;
        } else {
          payload = null;
        }
      });
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "GET_A_JOB",
    payload,
  };
}
export async function getClientJobs(clientId) {
  let payload;
  try {
    await axios
      .get(`${baseURL}/api/job/getclientjobs/${clientId}`)
      .then((response) => {
        if (response.data.length > 0) {
          payload = response.data;
        } else {
          payload = null;
        }
      });
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "GET_CLIENT_JOBS",
    payload,
  };
}

export async function getOneProposal(userId, jobId) {
  const data = {
    userId : userId,
    jobId: jobId
  };
  let payload;
  try {
    await axios
      .post(`${baseURL}/api/job/getoneofmyproposals`,data)
      .then((response) => {
        if(response){
          console.log(response)
        }
        if (response.data) {
          payload = response.data;
          console.log(response.data)
        } else {
          payload = null;
        }
      });
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "GET_ONE_PROPOSAL",
    payload,
  };
}
export async function receiveJob(userId, jobId) {
  let payload;
  let data = {
    userId: userId,
    jobId: jobId,
  }
  try {
    await axios
      .post(`${baseURL}/api/job/receivejob`, data)
      .then((response) => {
        if(response){
          console.log(response)
        }
        if (response.data) {
          payload = response.data;
          console.log(response.data)
        } else {
          payload = null;
        }
      });
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "RECEIVE_JOB",
    payload,
  };
}