import baseURL from "./baseURL";
import axios from "axios";
export async function likeJobPost(userId, jobId) {
  let payload;
  let data = {
    userId: userId,
    jobId: jobId,
  };
  try {
    let response = await axios
      .post(`${baseURL}/api/job/like`, data)
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
    type: "LIKE_JOB_POST",
    payload,
  };
}
export async function dislikeJobPost(userId, jobId, reason) {
  let payload;
  let data = {
    userId: userId,
    jobId: jobId,
    reason: reason,
  };
  try {
    let response = await axios
      .post(`${baseURL}/api/job/dislike`, data)
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
    type: "DISLIKE_JOB_POST",
    payload,
  };
}
export async function unlikeJobPost(userId, jobId) {
  let payload;
  let data = {
    userId: userId,
    jobId: jobId,
  };
  try {
    let response = await axios
      .post(`${baseURL}/api/job/unlike`, data)
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
    type: "UNLIKE_JOB_POST",
    payload,
  };
}
export async function undislikeJobPost(userId, jobId) {
  let payload;
  let data = {
    userId: userId,
    jobId: jobId
  };
  try {
    let response = await axios
      .post(`${baseURL}/api/job/undislike`, data)
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
    type: "UNDISLIKE_JOB_POST",
    payload,
  };
}
