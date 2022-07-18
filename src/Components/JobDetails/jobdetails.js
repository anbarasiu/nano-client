import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getOneJob } from "./../../Actions/getJobs";
import { checkLoggingStatus, logIn } from "../../Actions/userData";

class JobDetails extends Component {
  constructor(props) {
    super(props);

    console.log("constrctor");
  }
  componentDidMount = async () => {
    if (!this.props.checkLoggingStatus(localStorage.getItem("token"))) {
      this.props.allprops.history.push("/signin");
    }
    this.props.getOneJob(
      this.props.allprops.match.params.id,
      localStorage.getItem("id")
    );
    console.log("Did mount");

    console.log(this.props);
  };

  handleSubmitButtonClick = () => {
    this.props.allprops.history.push(`/sumbit-proposal/${this.props.allprops.match.params.id}`);
  }

  handleExperienceLevel() {
    if (this.props.getJob[0].experienceLevel === "entry-level") {
      return (
        <div>
          <strong className="color-black">
            {this.props.getJob[0].experienceLevel}
          </strong>

          <p className="text-muted">
            I am looking for freelancers with the lowest rates
          </p>
        </div>
      );
    }
    if (this.props.getJob[0].experienceLevel === "intermediate-level") {
      return (
        <div>
          <strong className="color-black">
            {this.props.getJob[0].experienceLevel}
          </strong>

          <p className="text-muted">
            I am looking for a mix of experience and value
          </p>
        </div>
      );
    }
    if (this.props.getJob[0].experienceLevel === "expert-level") {
      return (
        <div>
          <strong className="color-black">
            {this.props.getJob[0].experienceLevel}
          </strong>

          <p className="text-muted">
            I am willing to pay higher rates for the most experienced
            freelancers
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <strong className="color-black">
            {this.props.getJob[0].experienceLevel}
          </strong>

          <p className="text-muted">experienceLevel is not available</p>
        </div>
      );
    }
  }
  handleSubmitbutton() {
    if (this.props.getJob[0].postStatus === 2) {
      return <p>This job is closed</p>;
    } else {
      let flag = 0;
      for (
        let i = 0;
        i < this.props.getJob[0].proposals.proposalsList.length;
        i++
      ) {
        if (
          this.props.getJob[0].proposals.proposalsList[i].userId ==
          localStorage.getItem("id")
        ) {
          flag = 1;
        }
      }
      if (flag === 0) {
        return (
          <button onClick={this.handleSubmitButtonClick} className="btn btn-success submit-proposal-btn px-5 mb-4 py-2">
            Submit proposal
          </button>
        );
      } else {
        return (
          <button
            className="btn btn-success submit-proposal-btn px-5 mb-4 py-2 "
            disabled="true"
          >
            Submit proposal
          </button>
        );
      }
    }
  }
  Showjob() {
    if (this.props.getJob) {
      console.log(this.props.getJob[0].postName);
      console.log(this.props.getJob[0].status);
      console.log(this.props.getJob.status);
      console.log(this.props.getclientdata);

      return (
        <div className="Job-container  py-5 ">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-12">
                <div>
                  <h2 className="color-black p-3 m-2">Job details</h2>
                  <div className="bg-white rounded">
                    <div className="row">
                      <div className="col-lg-9 col-md-6 col-sm-6 pr-0 ">
                        <div className="border border-bottom-0 border-left-0 border-top-0 border-muted">
                          <div className="header-section border border-right-0 border-left-0 border-top-0 border-muted">
                            <h3 className="color-black p-4 ">
                              {this.props.getJob[0].postName}
                            </h3>
                          </div>
                          <div className=" p-4">
                            <h5 className="color-green ">
                              {this.props.getJob[0].category}
                            </h5>
                            <p className="text-muted">Posted one hour ago</p>
                          </div>

                          <div className=" border  border-left-0 border-right-0 border-muted color-black">
                            <p className="p-4 ">
                              {this.props.getJob[0].description}
                            </p>
                          </div>

                          <div className="  border border-right-0 border-left-0 border-top-0 border-muted ">
                            <div className="row p-4">
                              <div className="col-lg-6 col-md-12 col-sm-12 ">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-2">
                                      <div>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 14 14"
                                          aria-hidden="true"
                                          role="img"
                                        >
                                          <path d="M12.8 8.4l-1.3-2.3v-.8C11.6 2.4 9.2 0 6.3 0S1.1 2.4 1.1 5.3c0 1.4.5 2.6 1.4 3.5v4.5c0 .4.3.7.7.7h5.3c.4 0 .7-.3.7-.7v-1h1.7c.4 0 .7-.3.7-.7V9h.9c.4 0 .5-.3.3-.6zM8.7 5.3v.4l.7.4c-.2.5-.4.9-.8 1.3L7.9 7c-.2.2-.5.3-.8.4v.8c-.2.1-.5.1-.8.1-.3 0-.5 0-.8-.1v-.8c-.2-.1-.5-.2-.7-.4l-.7.4c-.4-.4-.7-.8-.8-1.3l.7-.4v-.9l-.7-.4c.1-.5.4-1 .8-1.3l.7.4c.2-.2.5-.3.7-.4v-.8c.3-.1.5-.1.8-.1.3 0 .5 0 .8.1v.8c.3.1.5.2.8.4l.7-.4c.4.4.6.8.8 1.3l-.7.4v.5z"></path>
                                          <circle
                                            cx="6.3"
                                            cy="5.3"
                                            r=".9"
                                          ></circle>
                                        </svg>
                                      </div>
                                    </div>

                                    <div className="col-10">
                                      <div className="px-2">
                                        {this.handleExperienceLevel()}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-2">
                                      <div>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 14 14"
                                          aria-hidden="true"
                                          role="img"
                                        >
                                          <path d="M13.688.311L8.666 0 0 8.665 5.334 14 14 5.332 13.688.311zm-2.354 1.528a.827.827 0 11-.002 1.654.827.827 0 01.002-1.654zM6.441 9.892c-.384-.016-.761-.168-1.128-.455l-.73.729-.579-.578.73-.729a3.612 3.612 0 01-.498-.872 3.186 3.186 0 01-.223-.934l.965-.331c.018.339.094.672.229 1.002.133.325.297.586.488.777.164.164.32.264.473.295s.287-.009.4-.123a.422.422 0 00.131-.315c-.004-.123-.035-.249-.094-.381s-.146-.308-.27-.52a6.892 6.892 0 01-.39-.793 1.501 1.501 0 01-.086-.7c.028-.248.157-.486.383-.714.275-.273.596-.408.971-.402.369.008.74.149 1.109.423l.682-.682.578.577-.676.677c.176.224.326.461.446.707.121.25.205.495.252.734l-.965.354a3.638 3.638 0 00-.314-.84 2.369 2.369 0 00-.419-.616.863.863 0 00-.404-.253.344.344 0 00-.342.1.438.438 0 00-.109.458c.049.18.162.427.332.739.172.31.299.582.383.807.086.226.113.465.084.714-.03.252-.161.493-.393.723-.295.297-.635.436-1.016.422z"></path>
                                        </svg>
                                      </div>
                                    </div>

                                    <div className="col-10">
                                      <div className="px-2">
                                        <strong className="color-black">
                                          $
                                          {this.props.getJob[0].estimatedBudget}
                                        </strong>
                                        <p className="text-muted">
                                          Fixed price
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border border-right-0 border-left-0 border-top-0 border-muted">
                            <div className="p-4">
                              <strong className="color-black">
                                Project Type:
                              </strong>
                              <span className="color-black">
                                Ongoing project
                              </span>
                            </div>
                          </div>

                          <div className="border border-right-0 border-left-0 border-top-0 border-muted">
                            <div className="p-4">
                              <h4 className="color-black pb-3">
                                Skills and Expertise
                              </h4>
                              <div>
                                {this.props.getJob[0].skills.map((skill) => {
                                  return (
                                    <span className="badge badge-pill badge-light py-3 px-3 job-page-skill mx-3">
                                      {skill}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          <div className="border border-right-0 border-left-0 border-top-0 border-muted">
                            <div className="p-4">
                              <h4 className="color-black pb-3">
                                Activity on this job
                              </h4>
                              <div>
                                <p className="text-muted">
                                  Propsals:{" "}
                                  {this.props.getJob[0].proposals.length}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 pl-0 ml-0 ">
                        <div className=" py-4 px-0 m-0  ">
                          <div className="p-0 m-0">
                            <div className="border border-right-0 border-left-0 border-top-0 border-muted ">
                              <div className="d-flex justify-content-center">
                                {this.handleSubmitbutton()}
                              </div>
                            </div>
                            <div className="border border-right-0 border-left-0 border-top-0 border-muted ">
                              <div className="d-flex justify-content-center">
                                <div className="py-4">
                                  <h4 className="color-black pb-4">
                                    About the client
                                  </h4>
                                  <div className="pb-2">
                                    <strong className="color-black">
                                      {this.props.getJob[0].country}
                                    </strong>
                                  </div>
                                  <div>
                                    <strong className="color-black">
                                      {this.props.getJob[0].allJobsPosted} job
                                      posted
                                    </strong>
                                    <p className="text-muted pt-0 mt-0">
                                      0% hire rate,{" "}
                                      {this.props.getJob[0].currentOpenJobs}{" "}
                                      open job
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="d-flex justify-content-center">
          <h2>This Job does not exist</h2>
        </div>
      );
    }
    console.log(this.props.getJob);
  }

  render = () => {
    return <div>{this.Showjob()}</div>;
  };
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
    userId: state.userReducer.userID,
    getJob: state.getJobsReducer.getJob,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ checkLoggingStatus, logIn, getOneJob }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);
