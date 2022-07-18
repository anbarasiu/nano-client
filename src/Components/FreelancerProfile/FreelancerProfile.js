import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setFreelancerHourlyRate, setFreelancerTitle, createProfileDetails, editProfileDescription, editProfilePrice, editProfileJobTitle, editProfileEducation, editProfileLanguage, getProfileInfo, getRegistrationInfo } from "../../Actions/userData";
import { getProfileImage } from "../../Actions/utils";
import "./FreelancerProfile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UploadProfileImage from '../Modals/Upload Profile Image/UploadProfileImage.jsx';
import EditTitleModal from '../Modals/EditTitleModal/EditTitleModal.jsx';
import EditHourlyRate from '../Modals/EditHourlyRate/EditHourlyRate';
import EditDescriptionModal from '../Modals/EditDescriptionModal/EditDescriptionModal.jsx';
import EditIcon from '../FontAwesomeIcons/EditIcon/EditIcon';
import baseURL from '../../Actions/baseURL';

const FreelancerProfile = (props) => {

  useEffect(() => {
    // if (!props.profileInfo) {
    //   props.createProfileDetails(localStorage.getItem('token'));
    // }
    // props.getRegistrationInfo(localStorage.getItem('token'));
    props.getProfileInfo(localStorage.getItem('token'));
    // props.getProfileImage(localStorage.getItem('id'));
  }, [])

  let profileImageSrc = `${baseURL}/api/job/getimage/${localStorage.getItem('id')}`

  return (
    <div id="freelancer-profile-body" className="p-lg-4">
      <div className="container bg-white pb-5 col-12 col-lg-10 rounded">
        <div className="row col-12 d-flex">
          <div className="my-4 mr-0 col-3 col-md-2 col-lg-1 p-0">
            <div id="profile-img-div" className="offset-3">
              <img src={props.uploadedFiles ? props.uploadedFiles : "https://via.placeholder.com/60"} height="60" width="60" alt="profile pic" className="rounded-circle"/>
              <div id="edit-profile-img" role="button" data-toggle="modal" data-target="#uploadProfileImage" >
                <EditIcon/>
              </div>
              {/* <UploadProfileImage /> */}
            </div>
          </div>
          <div className="col-9 col-lg-11 p-0 d-flex mt-4 flex-wrap">
            <div className="col-12 col-lg-6 h4 mb-0">{props.registrationInfo ? props.registrationInfo.firstName : ""} {props.registrationInfo ? props.registrationInfo.lastName : ""}</div>
            <div className="col-6 text-right d-none d-lg-block">
              <button id="profile-settings-btn">Profile Settings</button>
            </div>
            <div className="col-6">{props.registrationInfo ? props.registrationInfo.country : ""}</div>
          </div>
        </div>
        <hr/>
        <div className="row col-12 m-0 p-0 d-flex flex-column-reverse flex-lg-row">
          {/* Left Section */}
          <div className="col-12 col-lg-4 border-right">
            <div className="row p-2 col-12">
              <span className="h5 pr-4">View Profile</span>
              <span className="pr-3" role="button">
                <FontAwesomeIcon icon="plus" />
              </span>
              <EditIcon/>
            </div>
            <div className="row p-2 col-12">
              {props.profileTitle}
            </div>
            <hr className="" />
            <div className="row p-2 col-12">
              <span className="h5 pr-4">Languages</span>
              <span className="pr-3" role="button">
                <FontAwesomeIcon icon="plus" />
              </span>
              <EditIcon/>
            </div>
            <div className="row p-2 col-12 mb-3">
              <p><span className="h5">English:</span> Fluent</p>
            </div>
            <div className="row p-2 col-12">
              <span className="h5 pr-4">Education</span>
              <EditIcon/>
            </div>
            <div className="row px-2 pt-2 col-12">
              <div className="col-8 pl-0">
                <div className="row h5 col-12">Information Technology Institute</div>
              </div>
              <div className="col-4">
                <EditIcon/>
                <span role="button" className="ml-3">
                  <FontAwesomeIcon icon="trash-alt" />
                </span>
              </div>
            </div>
            <div className="row px-2 col-12">
              <div className="row col-12">Full Stack Web Development using MEA/RN 2020-2021</div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-lg-8 px-0 px-lg-3">
            <div className="row p-3 col-12">
              <div className="col-12 col-lg-7 p-0">
                <div className="h5">
                  {props.profileTitle}
                  <div className="pl-3 d-inline-block" data-toggle="modal" data-target="#edit-title">
                    <EditIcon/>
                    {/* <EditTitleModal/> */}
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 h5 text-lg-right p-0">
                ${props.profileHourlyRate}.00/hr
                <div className="pl-3 d-inline-block" data-toggle="modal" data-target="#edit-hourly-rate">
                  <EditIcon/>
                </div>
              </div>
            </div>
            <div className="row col-12 p-0 m-0">
              <div className="col-11 p-0">
                {props.profileDescription}
              </div>
              <div className="col-1 p-0">
                <div className="pl-1 pl-lg-3 d-inline-block" data-toggle="modal" data-target="#edit-description">
                  <EditIcon/>
                </div>
              </div>
            </div>
            <hr/>
            <div className="row col-12 h5">
              Portfolio
              <span className="pl-3" role="button">
                <FontAwesomeIcon icon="plus" />
              </span>
            </div>
            <div className="row col-12">
              <div className="col-12 col-lg-6 p-0">
                <div className="col-12 p-0">
                  <img className="col-12 px-0" role="button" src="https://images.unsplash.com/photo-1506452985227-70bc78385fb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="portfolio img" width="200px" />
                </div>
                <div className="col-12 p-0 portfolio-item"><strong role="button">Project 1</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UploadProfileImage {...props} />
      <EditTitleModal {...props} />
      <EditHourlyRate {...props} />
      <EditDescriptionModal {...props} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    hourlyRate: state.userReducer.freelancerHourlyRate,
    freelancerTitle: state.userReducer.freelancerTitle,
    profileInfo: state.userReducer.profileInfo,
    profileHourlyRate: state.userReducer.profileHourlyRate,
    profileTitle: state.userReducer.profileTitle,
    profileDescription: state.userReducer.profileDescription,
    registrationInfo: state.userReducer.registrationInfo,
    uploadedFiles: state.utilsReducer.uploadedFiles,
    getProfileImageSrc: state.utilsReducer.getProfileImageSrc
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setFreelancerHourlyRate,
    setFreelancerTitle,
    createProfileDetails,
    editProfileDescription,
    editProfilePrice,
    editProfileJobTitle,
    editProfileEducation,
    editProfileLanguage,
    getProfileInfo,
    getRegistrationInfo,
    getProfileImage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (FreelancerProfile);