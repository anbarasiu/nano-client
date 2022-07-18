import {
  faClock,
  faHeart,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import {
  faSearch,
  faEllipsisH,
  faCheckCircle,
  faHeart as fullHeart,
  faStar,
  faMapMarkerAlt,
  faPen,
  faEye,
  faGlobe,
  faStopwatch,
  faChevronRight,
  faThumbsUp as fullThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from "./../Header/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllJobs, getOneJob } from "./../../Actions/getJobs";
import {
  likeJobPost,
  dislikeJobPost,
  unlikeJobPost,
  undislikeJobPost,
} from "./../../Actions/likesAndDislikes";
import { checkLoggingStatus, logIn } from "../../Actions/userData";
import "./HomePage.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Website development for education course",
          workType: "Hourly",
          level: "Intermediate",
          timeZone: "Est",
          duaration: "Less than 1 month",
          houres: "10-30 hrs/week",
          posted: "17 minutes ago",
          description:
            "Hello, I need help to build my educational website completed.  and make it work",
          tags: [
            "PHP",
            "WordPress",
            "HTML",
            "jQuery",
            "PSD to HTML",
            "jQuery Mobile",
            "CSS3",
          ],
          proposals: "Less than 5",
          paymentvervied: false,
          stars: 0,
          spend: 0,
          country: "Canada",
        },
        {
          title: "Website development for education course",
          workType: "Hourly",
          level: "Intermediate",
          timeZone: "Est",
          duaration: "Less than 1 month",
          houres: "10-30 hrs/week",
          posted: "17 minutes ago",
          description:
            "Hello, I need help to build my educational website completed.  and make it work",
          tags: [
            "PHP",
            "WordPress",
            "HTML",
            "jQuery",
            "PSD to HTML",
            "jQuery Mobile",
            "CSS3",
          ],
          proposals: "Less than 5",
          paymentvervied: false,
          stars: 0,
          country: "Canada",
        },
      ],
      returnData: [],
      searchHistory: ["html", "css and simple js", "javaScript"],
      categories: ["Web Development", "Web & Mobile Design"],
      like: true,
      heart: "faHeart",
      likeState:false,
      dislikeState:false,
      thumbDown: "faThumbsUp",
      myFlaaaaag: "true"
    };
  }
  componentDidMount = () => {
    this.props.getAllJobs(localStorage.getItem("id"));
  };
  componentDidUpdate = () => {
    this.props.getAllJobs(localStorage.getItem("id"));
  }
  handleNoReactions = (job) => {
    let likeState = false;
    let dislikeState = false;
    return (
      <div className="title-icons-posts">
        <div className="dropdown">
          <div
            className="title-faThumbsDown"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            {(() => {
            let myThumb;
            if(dislikeState){
              myThumb = fullThumbsUp;
            }
            else{
              myThumb = faThumbsUp;
            }
            return (
              <FontAwesomeIcon icon={myThumb} className="text-primary"/>
              )
          })()}
          </div>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Just not interested");
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Just not interested
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Vague Description");
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Vague Description
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Unrealistic Expectations")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Unrealistic Expectations
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Too Many Applications")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Too Many Applications
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Job posted too long ago")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Job posted too long ago
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Doesn't Match Skills")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Doesn't Match Skills
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"I am overqualified")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                I am overqualified
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Budget too low")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Budget too low
              </Link>
            </li>
          </ul>
        </div>
        {(() => {
            let myHeart;
            if(likeState){
              myHeart = fullHeart;
            }
            else{
              myHeart = faHeart;
            }
            return (
              <div>
                <Link to='/home' className="title-faHeart" onClick={()=>{
                  if(likeState){
                    likeState = false;
                    this.props.unlikeJobPost(localStorage.getItem('id'),job._id);
                  }
                  else{
                    likeState = true;
                    if(dislikeState){
                      dislikeState = false;
                    }
                    this.props.likeJobPost(localStorage.getItem('id'),job._id);
                    this.props.undislikeJobPost(localStorage.getItem('id'),job._id);
                  }
                  if(likeState){
                    myHeart = fullHeart; 
                  }
                  else{
                    myHeart = faHeart;
                  }
                  this.setState({myFlaaaaag: likeState});
                }}>
                  <FontAwesomeIcon  icon={myHeart} className="text-danger heeeeeeart"/>
                </Link>
              </div>
            )
          })()}
      </div>
    );
  };
  handleLikeState = (job) => {
    let likeState =  true;
    let dislikeState = false;
      return (
        <div className="title-icons-posts">
        <div className="dropdown">
          <div
            className="title-faThumbsDown"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            {(() => {
            let myThumb;
            if(dislikeState){
              myThumb = fullThumbsUp;
            }
            else{
              myThumb = faThumbsUp;
            }
            return (
              <FontAwesomeIcon icon={myThumb} className="text-primary"/>
              )
              })()}
          </div>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Just not interested");
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Just not interested
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Vague Description");
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Vague Description
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Unrealistic Expectations")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Unrealistic Expectations
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Too Many Applications")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Too Many Applications
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Job posted too long ago")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Job posted too long ago
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Doesn't Match Skills")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Doesn't Match Skills
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"I am overqualified")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                I am overqualified
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Budget too low")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Budget too low
              </Link>
            </li>
          </ul>
        </div>
        {(() => {
            let myHeart;
            if(likeState){
              myHeart = fullHeart;
            }
            else{
              myHeart = faHeart;
            }
            return (
              <div>
                <Link to='/home' className="title-faHeart" onClick={()=>{
                  if(likeState){
                    likeState = false;
                    this.props.unlikeJobPost(localStorage.getItem('id'),job._id);
                  }
                  else{
                    likeState = true;
                    if(dislikeState){
                      dislikeState = false;
                    }
                    this.props.likeJobPost(localStorage.getItem('id'),job._id);
                    this.props.undislikeJobPost(localStorage.getItem('id'),job._id);
                  }
                  if(likeState){
                    myHeart = fullHeart; 
                  }
                  else{
                    myHeart = faHeart;
                  }
                  this.setState({myFlaaaaag: likeState});
                }}>
                  <FontAwesomeIcon icon={myHeart} className="text-danger"/>
                </Link>
              </div>
            )
          })()}
      </div>
      )
  }
  handleDislikeState = (job) => {
    let likeState = false;
    let dislikeState = true;
      return (
        <div className="title-icons-posts">
        <div className="dislike-reason">{job.reason}</div>
        <div className="dropdown">
          <div
            className="title-faThumbsDown"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-expanded="false">
            {(() => {
            let myThumb;
            if(dislikeState){
              myThumb = fullThumbsUp;
            }
            else{
              myThumb = faThumbsUp;
            }
            return (
              <FontAwesomeIcon icon={myThumb} className="text-primary"/>
              )
          })()}
          </div>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Just not interested");
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Just not interested
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Vague Description");
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Vague Description
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Unrealistic Expectations")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Unrealistic Expectations
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Too Many Applications")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Too Many Applications
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Job posted too long ago")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Job posted too long ago
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Doesn't Match Skills")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Doesn't Match Skills
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"I am overqualified")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                I am overqualified
              </Link>
            </li>
            <li>
            <Link className="dropdown-item" to='/home' onClick={() => {
                this.props.dislikeJobPost(localStorage.getItem('id'), job._id,"Budget too low")
                this.props.unlikeJobPost(localStorage.getItem('id'), job._id);
                likeState = false;
                dislikeState = true;
                this.setState({myFlaaaaag: likeState});
              }}>
                Budget too low
              </Link>
            </li>
          </ul>
        </div>
        {(() => {
            let myHeart;
            if(likeState){
              myHeart = fullHeart;
            }
            else{
              myHeart = faHeart;
            }
            return (
              <div>
                <Link to='/home' className="title-faHeart" onClick={()=>{
                  if(likeState){
                    likeState = false;
                    this.props.unlikeJobPost(localStorage.getItem('id'),job._id);
                  }
                  else{
                    likeState = true;
                    if(dislikeState){
                      dislikeState = false;
                    }
                    this.props.likeJobPost(localStorage.getItem('id'),job._id);
                    this.props.undislikeJobPost(localStorage.getItem('id'),job._id);
                  }
                  if(likeState){
                    myHeart = fullHeart; 
                  }
                  else{
                    myHeart = faHeart;
                  }
                }}>
                  <FontAwesomeIcon icon={myHeart} className="text-danger"/>
                </Link>
              </div>
            )
          })()}
      </div>
      )
  }
  handleReactions = (job) => {
      if (job.status === 0) {
        return (
            <div>
                {this.handleNoReactions(job)}
            </div>
        );
      } else if (job.status === 1) {
        return (
            <div>
                {this.handleLikeState(job)}
            </div>
        );
      } else {
        return (
            <div>
                {this.handleDislikeState(job)}
            </div>
        );
      }
  };
  getJobs = () => {
    if (this.props.getJobs) {
      let data = [];
      if (this.props.getJobs.length > 0) {
          this.props.getJobs.map((job) => {
            if(job.postStatus === 1){
            data.push(             
              <div className="Home-posts" key={job._id}>
                <div className="reaction-section float-right">
                    {this.handleReactions(job)}
                </div>
                <Link to={`/job/${job._id}`}>
                  <div className="title-container color-black">
                    <p>{job.postName}</p>
                  </div>
                  <div className="Home-posts-status">
                    <p>
                      <span className="bold grey">{job.category}</span> -
                      {job.experienceLevel}
                    </p>
                  </div>
                  <div className="Home-posts-description">
                    <p className="color-black">{job.description}</p>
                  </div>
                  <div className="Home-posts-tags">
                    {job.skills.map((skill) => {
                      return (
                        <div className="Home-posts-tag">
                          <p className="skill-color">{skill}</p>
                        </div>
                      );
                    })}
                  </div>
                 <div className="d-flex justify-content-start">
                 <div className="Home-posts-proposals d-inline mx-3">
                    <p className="text-muted">
                      Proposals:
                      <span className="bold color-black mx-2">{job.proposals.length}</span>
                    </p>
                  </div>
                  <div className="Home-posts-proposals d-inline mx-3">
                    <p className="text-muted">
                      number of freelancers needed:
                      <span className="bold color-black mx-2">{job.freelancersNo}</span>
                    </p>
                  </div>
                 </div>
                  <div className="Home-posts-footer">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="faCheckCircle-footer mb-2"
                    />
                    <p className="payment mb-2 color-black">Payment verified</p>
                    <div className="allstars mb-2">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="star-footer text-warning"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="star-footer text-warning"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="star-footer text-warning"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="star-footer text-warning"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="star-footer text-warning"
                      />
                    </div>
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="location mb-2"
                    />
                    <p className="payment mb-2 color-black">{job.clientCountry}</p>
                  </div>
                </Link>
              </div>
            );
          }
        });
        return data;
      } else {
        return (
          <div>
            <h3 className="text-center text-dark">
              No jobs available
            </h3>
          </div>
        );
      }
    } else {
      return (
        <div className="my-4 d-block">
          <h3 className="text-center text-dark">No jobs exist </h3>
        </div>
      );
    }
  };
  render = () => {
    return (
      <div>
        <Header />
        <div className="Home-container pt-5">
          <div className="container-home container ">
            <div className="Home-row">
              <div className="Home-leftSection ">
                <p className="main-title">Find Work</p>
                <div className="home-feed details-active">
                  <p>
                    <a href="">My Feed</a>
                  </p>
                </div>
                <div className="home-recommended">
                  <p>
                    <a href="">Recommended</a>
                  </p>
                </div>
                <div className="home-Search-history">
                  <p className="bold">Recent Searches</p>
                  {this.state.searchHistory.map((h) => {
                    return (
                      <p className="home-Search-history-data">
                        <a href="">{h}</a>
                      </p>
                    );
                  })}
                </div>
                <div className="home-categories">
                  <p className="bold">My Categories</p>
                  {this.state.categories.map((h) => {
                    return (
                      <p className="home-categories-data">
                        <a href="">{h}</a>
                      </p>
                    );
                  })}
                  <div className="home-category-edit">
                    <FontAwesomeIcon icon={faPen} />
                  </div>
                </div>
              </div>
              <div className="Home-centerSection ">
                <div className="home-proposals-sm">
                  <p className="bold">My Proposals</p>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
                <div className="home-profile-sm">
                  <p className="bold">My Profile</p>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
                <div className="feed-recomendation">
                  <div className="feed-recomendation-f feed-recomendation-active">
                    <p>MY FEED</p>
                  </div>
                  <div className="feed-recomendation-r ">
                    <p>RECOMMENDED</p>
                  </div>
                </div>
                <div className="Home-search">
                  <input
                    type="text"
                    placeholder="Search for jobs"
                    name="search"
                  />
                  <button className="">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
                <p className="search-link">
                  <a href="">Advanced Search</a>
                </p>
                <div className="Home-myfeed">
                  <p>My Feed</p>
                  <div className="dropdown">
                    <div
                      className="ellipsish "
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon icon={faEllipsisH} />
                    </div>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          RSS
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Atom
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {this.getJobs()}
              </div>
              <div className="Home-rightSection ">
                <div className="home-profile">
                  <img
                    src="https://via.placeholder.com/40"
                    alt=""
                    className="rounded-circle"
                  />
                  <p className="bold">My Profile</p>
                </div>
                <div className="home-view-profile">
                  <FontAwesomeIcon icon={faEye} />
                  <p>
                    <a href="">View Profile</a>
                  </p>
                </div>
                <p className="bold visibality">Visibility</p>
                <div className="home-public side-flex">
                  <FontAwesomeIcon icon={faGlobe} className="public-globe" />
                  <p>Public</p>
                  <div className="home-category-edit">
                    <FontAwesomeIcon icon={faPen} />
                  </div>
                </div>
                <p className="bold visibality">Availability</p>
                <div className="home-public side-flex">
                  <FontAwesomeIcon icon={faClock} className="public-globe" />
                  <p>More than 30 hrs/week</p>
                  <div className="home-category-edit avalability">
                    <FontAwesomeIcon icon={faPen} />
                  </div>
                </div>
                <div className="side-flex">
                  <div className="progress-home"></div>
                  <p className="progress-p">100%</p>
                </div>
                <p className="bold side-flex mt-4 mb-3">Proposals</p>
                <p className="small-font-home side-flex mb-3">
                  <a href="">1 active candidacy</a>
                </p>
                <p className="small-font-home side-flex mb-3">
                  <a href="">16 submitted proposals</a>
                </p>
                <p className="small-font-home side-flex mb-3">
                  <a href="">23 available connects</a>
                </p>
                <div className="side-flex timer-home mb-4">
                  <FontAwesomeIcon icon={faStopwatch} />
                  <p className="small-font-home">
                    <a href="">Track time with the desktop app</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
    userId: state.userReducer.userID,
    getJobs: state.getJobsReducer.getJobs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      checkLoggingStatus,
      logIn,
      getAllJobs,
      getOneJob,
      likeJobPost,
      unlikeJobPost,
      dislikeJobPost,
      undislikeJobPost,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
