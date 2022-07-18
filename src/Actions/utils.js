import baseURL from './baseURL';
import axios from 'axios';

export async function uploadMultipleFiles (formData, userId) {
  let payload;
  try {
    let response = await axios.post(`${baseURL}/api/job/saveimage`, formData, {headers: {'Content-Type': 'multipart/form-data', 'userid':userId}});
    payload = response;
    console.log(payload);
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "UPLOAD_MULTIPLE_FILES",
    payload
  }
}

export async function getProfileImage (id) {
  // let payload;
  // try {
  //   let response = await axios.get(`${baseURL}/api/job/getimage/${id}`);
  //   payload = response;
  // }
  // catch (err) {
  //   console.log(err);
  // }

  return {
    type: "GET_PROFILE_IMAGE",
    getURL: `${baseURL}/api/job/getimage/${id}`
  }
}