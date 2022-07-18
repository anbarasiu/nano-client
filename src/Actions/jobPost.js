import baseURL from './baseURL';
import axios from 'axios';

export async function getAllJobs (userID) {
  let payload;
  try {
    let response = axios.post(`${baseURL}/api/job/getalljobs`, {userId: userID});
    payload = (await response).data
    console.log(payload);
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "GET_ALL_JOBS",
    payload
  }
}

export async function getOneJob(userID, jobID) {
  let payload;
  try {
    let response = axios.post(`${baseURL}/api/job/getonejob`, {userId: userID, jobId: jobID});
    payload = (await response).data
    console.log(payload);
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "GET_ONE_JOB",
    payload
  }
}

export async function createJobPost (jobPost) {
  let payload;
  try {
    let response = await axios.post(`${baseURL}/api/job/createjob`, jobPost);
    payload = response.data
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "CREATE_JOB_POST",
    payload
  }
}

export async function saveJobTitle (postName, category) {
  let payload;
  try {
    let response = await fetch(`${baseURL}/api/job/saveTitle`,
    {method: "POST", body: JSON.stringify({postName, category})});
    payload = await response.json();
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "SAVE_JOB_TITLE",
    payload
  }
}

export async function saveJobDescription (description) {
  let payload;
  try {
    let response = await fetch(`${baseURL}/api/job/saveDescription`,
    {method: "PATCH", body: JSON.stringify({description})});
    payload = await response.json();
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "SAVE_JOB_DESCRIPTION",
    payload
  }
}

export async function saveJobDetails (details) {
  let payload;
  try {
    let response = await fetch(`${baseURL}/api/job/saveDetails`,
    {method: "PATCH", body: JSON.stringify({details})});
    payload = await response.json();
  }
  catch (err) {
    console.log(err);
  }
}

export async function saveJobExpertise (expertise) {
  let payload;
  try {
    let response = await fetch(`${baseURL}/api/job/saveExpertise`,
    {method: "PATCH", body: JSON.stringify({expertise})});
    payload = await response.json();
  }
  catch (err) {
    console.log(err);
  }

  return {
    type: "SAVE_JOB_EXPERTISE",
    payload
  }
}

export function setJobPostTitle (title) {
  return {
    type: "SET_JOB_POST_TITLE",
    title
  }
}

export function checkJobPostTitle (title, minimumCharacters) {
  return {
    type: "CHECK_JOB_POST_TITLE",
    title,
    minimumCharacters
  }
}

export function setJobCategory (category) {
  return {
    type: "SET_JOB_CATEGORY",
    category
  }
}

export function setJobPostDescription (description) {
  return {
    type: "SET_JOB_POST_DESCRIPTION",
    description
  }
}

export function checkJobPostDescription (description, minimumCharacters) {
  return {
    type: "CHECK_JOB_POST_DESCRIPTION",
    description,
    minimumCharacters
  }
}

export function setProjectType (projectType) {
  return {
    type: "SET_PROJECT_TYPE",
    projectType
  }
}

export function setJobPostProgress (progress = 1) {
  return {
    type: "SET_JOB_POST_PROGRESS",
    progress
  }
}

export function setScreeningQuestionsCounter (counter) {
  return {
    type: "SET_SCREENING_QUESTIONS_COUNTER",
    counter
  }
}

export function setScreeningQuestions (questions) {
  return {
    type: "SET_SCREENING_QUESTIONS",
    questions
  }
}

export function setJobExperienceLevel (experienceLevel) {
  return {
    type: "SET_JOB_EXPERIENCE_LEVEL",
    experienceLevel
  }
}

export function setJobPostVisibility (visibility) {
  return {
    type: "SET_JOB_POST_VISIBILITY",
    visibility
  }
}

export function setFreelancersNeeded (freelancersNeeded) {
  return {
    type: "SET_FREELANCERS_NEEDED",
    freelancersNeeded
  }
}

export function setJobPostBudget (budget) {
  return {
    type: "SET_JOB_POST_BUDGET",
    budget
  }
}

export function setNumberOfFreelancersForJob (number) {
  return {
    type: "SET_NUMBER_OF_FREELANCERS_FOR_JOB",
    number
  }
}

export function setJobPostFiles (files) {
  return {
    type: "SET_JOB_POST_FILES",
    files
  }
}