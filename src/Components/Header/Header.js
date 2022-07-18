import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setFreelancerHourlyRate, setFreelancerTitle, createProfileDetails, editProfileDescription, editProfilePrice, editProfileJobTitle, editProfileEducation, editProfileLanguage, getProfileInfo, getRegistrationInfo } from "../../Actions/userData";
import { getProfileImage } from "../../Actions/utils";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { bars } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  let history = useHistory();

  useEffect(() => {
    if (!props.profileInfo) {
      props.createProfileDetails(localStorage.getItem('token'));
    }
    if (!props.registrationInfo) {
      props.getRegistrationInfo(localStorage.getItem('token'));
    }
    if (props.registrationInfo) {
      if (!props.uploadedFiles && props.registrationInfo.userImage.data.length > 0) {
        props.getProfileImage(localStorage.getItem('id'));
      }
    }
  }, [props.registrationInfo])

  let navigateToHome = () => {
    history.push("/");
  }

  let navigateToMyProfile = () => {
    if (localStorage.getItem('type') === "freelancer" || localStorage.getItem('type') === "Freelancer") {
      history.push(`/profile/freelancer/${localStorage.getItem('id')}`)
    } else if (localStorage.getItem('type') === "client") {
      history.push('/');
    }
  }

  let handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('type');
    history.push("/signin");
  }

  let onClickMyJobs = () => {
    if (localStorage.getItem('type') === "freelancer" || localStorage.getItem('type') === "Freelancer") {
      history.push("/freelancer/myjobs");
    } else if (localStorage.getItem('type') === "client") {
      history.push('/client/jobs');
    }
  }

  let clicked = false;
  let toggleNavBar = () => {
    let navBar = document.getElementById("mobile-nav-bar");
    if (clicked === false) {
      navBar.style.display = "block";
      clicked = true;
    } else {
      navBar.style.display = "none";
      clicked = false;
    }
  }
  return (
    <div id="header-container" className="container col-12">
      <div className="row justify-content-center py-3 d-none d-lg-flex">
        <div className="col-12 col-xl-9 row">
          <div className="col-5 d-flex align-items-center">
            <div onClick={navigateToHome} role="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.4 30" width="106" height="30" role="img" aria-hidden="true"><path fill="#ffffff" d="M65.4 6.9c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm0 12.9c-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8c2.6 0 4.8 2.1 4.8 4.7 0 2.7-2.1 4.9-4.8 4.9zM83.4 10.8c-2.3 0-4.2 1.9-4.2 4.2v7.7h-3.5V7.4h3.5v2.4c1-1.5 2.7-2.4 4.5-2.4h1.1v3.4h-1.4zM48.2 7.4L50.8 18l2.9-10.6h3.4l-4.4 15.3h-3.5L46.5 12l-2.7 10.7h-3.5L35.9 7.4h3.4L42.2 18l2.7-10.6zM95 14.4c2.6-1.4 4.1-4.1 4.1-7.1h-3.4c0 2.6-2.1 4.6-4.6 4.6h-.5V0h-3.5v22.7h3.5v-7.2h.4c.4 0 .8.2 1 .5l4.9 6.7h4.2L95 14.4z"></path> <path fill="#6fda44" d="M27.6 6.9c-3.8 0-6.7 2.5-7.9 6.5-1.8-2.7-3.1-5.7-4-8.8h-4.1v10.6c0 2.1-1.7 3.8-3.8 3.8S4 17.3 4 15.2V4.7H0v10.6c0 4.3 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9v-1.8c.8 1.7 1.8 3.3 2.9 4.8L16.2 30h4.2l1.8-8.5c1.6 1.1 3.5 1.7 5.5 1.7 4.5 0 8.1-3.6 8.1-8.1-.1-4.5-3.7-8.2-8.2-8.2zm0 12.2c-1.7-.1-3.3-.7-4.6-1.8l.3-1.6v-.1c.3-1.7 1.3-4.6 4.2-4.6 2.2-.1 4 1.7 4.1 3.9.1 2.2-1.7 4-3.9 4.1l-.1.1z"></path></svg>
            </div>
            <input id="searchBar" placeholder="Search" type="text" className="rounded-pill h-100 w-75 ml-2"></input>
          </div>
          <div className="col-7">
            <ul id="navbar" className="d-flex list-unstyled text-white align-items-center m-0">
              <li id="find-work">
                Find Work
                <ul id="sub-menu" className="list-unstyled bg-white text-dark p-2 shadow col-6 rounded d-none">
                  <li>Find Work</li>
                  <li>Saved Jobs</li>
                  <li>Proposals</li>
                </ul>
              </li>
              <li onClick={onClickMyJobs}>
                My Jobs
              </li>
              <li>Reports</li>
              <li>Messages</li>
              <li id="question-mark-icon" className="ml-4 mr-4 navbar-icon">
                <FontAwesomeIcon icon="question" />
              </li>
              <li id="bell-icon" className="mr-4 navbar-icon">
                <FontAwesomeIcon icon={["far", "bell"]} />
              </li>
              <li id="messaging-icon" className="mr-4 navbar-icon">
                <FontAwesomeIcon icon="paper-plane" />
              </li>
              <li>
                <div className="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={props.uploadedFiles ? props.uploadedFiles : "https://via.placeholder.com/40"} height="40" width="40" alt="" className="rounded-circle dropdown-toggle" />
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div onClick={navigateToMyProfile} className="dropdown-item row mx-0 px-3 dropdown-menu-items" tabIndex="1">
                    <div className="d-inline mr-2">
                      <img src={props.uploadedFiles ? props.uploadedFiles : "https://via.placeholder.com/25"} height="25" width="25" alt="" className="rounded-circle" />
                    </div>
                    <div className="d-inline">{props.registrationInfo ? `${props.registrationInfo.firstName} ${props.registrationInfo.lastName}` : ""}</div>
                  </div>
                  <div className="dropdown-item row mx-0 dropdown-menu-items" tabIndex="2">
                    <div className="d-inline mr-2">
                      <FontAwesomeIcon icon="cog" />
                    </div>
                    <div className="d-inline">Settings</div>
                  </div>
                  <div onClick={handleLogout} className="dropdown-item row mx-0 dropdown-menu-items" tabIndex="3">
                    <div className="d-inline mr-2">
                      <FontAwesomeIcon icon="sign-out-alt" />
                    </div>
                    <div className="d-inline">Logout</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row d-lg-none">
        <div id="mobile-navbar" className="container mx-2 col-12">
          <div className="row col-12 m-2 d-flex">
            <div className="col-2 p-0" onClick={toggleNavBar}>
              <div role="button" className="d-inline-block">
                <FontAwesomeIcon icon="bars" size="2x" color="white" />
              </div>
            </div>
            <div className="col-8 text-center">
              <div onClick={navigateToHome} role="button" className="d-inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.4 30" width="106" height="30" role="img" aria-hidden="true"><path fill="#ffffff" d="M65.4 6.9c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm0 12.9c-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8c2.6 0 4.8 2.1 4.8 4.7 0 2.7-2.1 4.9-4.8 4.9zM83.4 10.8c-2.3 0-4.2 1.9-4.2 4.2v7.7h-3.5V7.4h3.5v2.4c1-1.5 2.7-2.4 4.5-2.4h1.1v3.4h-1.4zM48.2 7.4L50.8 18l2.9-10.6h3.4l-4.4 15.3h-3.5L46.5 12l-2.7 10.7h-3.5L35.9 7.4h3.4L42.2 18l2.7-10.6zM95 14.4c2.6-1.4 4.1-4.1 4.1-7.1h-3.4c0 2.6-2.1 4.6-4.6 4.6h-.5V0h-3.5v22.7h3.5v-7.2h.4c.4 0 .8.2 1 .5l4.9 6.7h4.2L95 14.4z"></path> <path fill="#6fda44" d="M27.6 6.9c-3.8 0-6.7 2.5-7.9 6.5-1.8-2.7-3.1-5.7-4-8.8h-4.1v10.6c0 2.1-1.7 3.8-3.8 3.8S4 17.3 4 15.2V4.7H0v10.6c0 4.3 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9v-1.8c.8 1.7 1.8 3.3 2.9 4.8L16.2 30h4.2l1.8-8.5c1.6 1.1 3.5 1.7 5.5 1.7 4.5 0 8.1-3.6 8.1-8.1-.1-4.5-3.7-8.2-8.2-8.2zm0 12.2c-1.7-.1-3.3-.7-4.6-1.8l.3-1.6v-.1c.3-1.7 1.3-4.6 4.2-4.6 2.2-.1 4 1.7 4.1 3.9.1 2.2-1.7 4-3.9 4.1l-.1.1z"></path></svg>
              </div>
            </div>
          </div>
          <div id="mobile-nav-bar">
            <div className="row col-12">
              <input id="searchBar" placeholder="Search" type="text" className="rounded-pill h-100 col-12 m-2 py-2"></input>
            </div>
            <div onClick={navigateToMyProfile} className="row col-12 text-white mobile-nav-item">
              <div className="m-2">
                <img src={props.uploadedFiles ? props.uploadedFiles : "https://via.placeholder.com/40"} height="40" width="40" alt="" className="rounded-circle" />
                <span className="ml-3">{props.registrationInfo ? `${props.registrationInfo.firstName} ${props.registrationInfo.lastName}` : ""}</span>
              </div>
            </div>
            <div className="row col-12 m-2 text-white mobile-nav-item">
              <p>Find Work</p>
            </div>
            <div onClick={onClickMyJobs} className="row col-12 m-2 text-white mobile-nav-item">
              <p>My Jobs</p>
            </div>
            <div className="row col-12 m-2 text-white mobile-nav-item">
              <p>Reports</p>
            </div>
            <div className="row col-12 m-2 text-white mobile-nav-item">
              <p>Messages</p>
            </div>
            <div className="row col-12 m-2 mb-4 text-white mobile-nav-item">
              <div className="d-flex justify-content-between align-items-center col-12 p-0">
                <p className=" col-4 m-0 p-0">Help</p>
                <div className="col-1 text-right">
                  <FontAwesomeIcon icon="question" />
                </div>
              </div>
            </div>
            <div className="row col-12 m-2 mb-4 text-white mobile-nav-item">
              <div className="d-flex justify-content-between align-items-center col-12 p-0">
                <p className=" col-4 m-0 p-0">Notifications</p>
                <div className="col-1 text-right">
                  <FontAwesomeIcon icon={["far", "bell"]} />
                </div>
              </div>
            </div>
            <div className="row col-12 m-2 mb-4 text-white mobile-nav-item">
              <div className="d-flex justify-content-between align-items-center col-12 p-0">
                <p className=" col-4 m-0 p-0">Direct Contracts</p>
                <div className="col-1 text-right">
                  <FontAwesomeIcon icon="paper-plane" />
                </div>
              </div>
            </div>
            <div className="row col-12 m-2 mb-4 text-white align-items-center mobile-nav-item">
              <FontAwesomeIcon icon="cog" size="sm" color="white" />
              <span className="ml-3">Settings</span>
            </div>
            <div onClick={handleLogout} className="row col-12 m-2 text-white align-items-center mobile-nav-item">
              <FontAwesomeIcon icon="sign-out-alt" size="sm" color="white" />
              <span className="ml-3">Log out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    registrationInfo: state.userReducer.registrationInfo,
    uploadedFiles: state.utilsReducer.uploadedFiles
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createProfileDetails,
    getRegistrationInfo,
    getProfileInfo,
    getProfileImage
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);