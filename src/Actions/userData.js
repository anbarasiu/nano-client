import baseURL from './baseURL';
import axios from 'axios';

export async function getProfileData(id = null) {
  let payload = null
  try {
    let response = await fetch(`${baseURL}/${id}`);
    payload = response.body;
  } catch (err) {
    console.log(err);
  }
  return {
    type: "PROFILE_DATA",
    payload
  }
}

export async function editHourlyRate (id, hourlyRate) {
  let payload;
  try {
    let response = await axios.post(`${baseURL}/api/user/addprice/${id}`, hourlyRate);
    payload = response.data;
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "EDIT_HOURLY_RATE",
    payload
  }
}

export async function logIn (user) {
  let payload
  try {
    let response = await axios.post(`${baseURL}/api/user/login`, user)
    payload = response.data
    console.log(payload);
    localStorage.setItem('token', payload.token);
    localStorage.setItem('id', payload.user._id);
    localStorage.setItem('type', payload.user.type);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "LOGIN",
    payload
  }
}

export function checkLoggingStatus (token) {
  return {
    type: "CHECK_LOGGING_STATUS",
    token
  }
}

export function checkProfileOwner (userID, profileID) {
  return {
    type: "CHECK_PROFILE_OWNER",
    userID,
    profileID
  }
}

export function setFreelancerHourlyRate (hourlyRate) {
  return {
    type: "SET_FREELANCER_HOURLY_RATE",
    hourlyRate
  }
}

export function setFreelancerTitle (title) {
  return {
    type: "SET_FREELANCER_TITLE",
    title
  }
}

export function setProfilePic (pic) {
  return {
    type: "SET_PROFILE_PIC",
    pic
  }
}

export async function getUserJobs (id) {
  let payload;
  try {
    let response = await axios.post(`${baseURL}/api/job/getmyproposals`, {userId: id});
    payload = response.data;
    console.log(payload);
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "GET_USER_JOBS",
    payload
  }
}

export async function createProfileDetails (token) {
  let payload;
  try {
    let response = await axios.post(`${baseURL}/api/user/adddesc`,
    {description: ""}, {headers: {Authorization: token}});
    payload = response.data;
    console.log(payload);
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "CREATE_PROFILE_DETAILS",
    payload
  }
}

export async function editProfileDescription (token ,description) {
  let payload;
  try {
    let response = await axios.patch(`${baseURL}/api/user/addprofileinfo`, {description},
    {headers: {Authorization: token}});
    payload = response.data;
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "EDIT_PROFILE_DESCRIPTION",
    payload
  }
}

export async function editProfilePrice (token ,price) {
  let payload;
  try {
    let response = await axios.patch(`${baseURL}/api/user/addprofileinfo`, {price},
    {headers: {Authorization: token}});
    payload = response.data;
    console.log(payload);
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "EDIT_PROFILE_PRICE",
    payload
  }
}

export async function editProfileJobTitle (token ,jobTitle) {
  let payload;
  try {
    let response = await axios.patch(`${baseURL}/api/user/addprofileinfo`, {jobtitle: jobTitle},
    {headers: {Authorization: token}});
    payload = response.data;
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "EDIT_PROFILE_JOB_TITLE",
    payload
  }
}

export async function editProfileEducation (token ,education) {
  let payload;
  try {
    let response = await axios.patch(`${baseURL}/api/user/addprofileinfo`, {education},
    {headers: {Authorization: token}});
    payload = response.data;
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "EDIT_PROFILE_EDUCATION",
    payload
  }
}

export async function editProfileLanguage (token ,language) {
  let payload;
  try {
    let response = await axios.patch(`${baseURL}/api/user/addprofileinfo`, {language},
    {headers: {Authorization: token}});
    payload = response.data;
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "EDIT_PROFILE_LANGUAGE",
    payload
  }
}

export async function getProfileInfo (token) {
  let payload;
  try {
    let response = await axios.get(`${baseURL}/api/user/allinfo`, {headers: {Authorization: token}});
    payload = response.data;
    console.log(payload[0]);
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "GET_PROFILE_INFO",
    payload: payload[0] ? payload[0] : ""
  }
}

export async function getRegistrationInfo (token) {
  let payload;
  try {
    let response = await axios.get(`${baseURL}/api/user/users/me`, {headers: {Authorization: token}});
    payload = response.data;
    console.log(payload);
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "GET_REGISTRATION_INFO",
    payload
  }
}

export async function setProfileImage (id, image) {
  let payload;
  try {
    let response = await axios.post(`${baseURL}/api/job/saveimage`, {userId: id, image});
    payload = response.data;
    console.log(payload);
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "SET_PROFILE_IMAGE",
    payload
  }
}

