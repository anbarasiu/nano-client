import { connect } from "react-redux";
import "./PostJobNavigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PostJobNavigation = (props) => {
  return (
    <div className="d-none d-lg-block col-lg-3 pl-5">
      <div className="row col-12 px-0 mx-0 pb-3 pt-3">
        <div className="col-1 px-0">
          <FontAwesomeIcon icon="pencil-alt" />
        </div>
        <div className="col-11 px-0">
          <div className="row col-12 justify-content-between mx-0">
            <div><strong>Title</strong> </div>
            <div>
              <FontAwesomeIcon icon="check-circle" color="green" />
            </div>
          </div>
        </div>
      </div>
      <div className="row col-12 px-0 mx-0 pb-3">
        <div className="col-1 px-0">
          <FontAwesomeIcon icon="edit" />
        </div>
        <div className="col-11 px-0">
          <div className="row col-12 justify-content-between mx-0">
            <div><strong>Description</strong> </div>
            <div>
              <FontAwesomeIcon icon="check-circle"
              color={props.jobPostProgress >= 2 ? "green" : "black"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row col-12 px-0 mx-0 pb-3">
        <div className="col-1 px-0">
          <FontAwesomeIcon icon="list-alt" />
        </div>
        <div className="col-11 px-0">
          <div className="row col-12 justify-content-between mx-0">
            <div><strong>Details</strong> </div>
            <div>
              <FontAwesomeIcon icon="check-circle"
              color={props.jobPostProgress >= 3 ? "green" : "black"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row col-12 px-0 mx-0 pb-3">
        <div className="col-1 px-0">
          <FontAwesomeIcon icon="mug-hot" />
        </div>
        <div className="col-11 px-0">
          <div className="row col-12 justify-content-between mx-0">
            <div><strong>Expertise</strong> </div>
            <div>
              <FontAwesomeIcon icon="check-circle"
              color={props.jobPostProgress >= 4 ? "green" : "black"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row col-12 px-0 mx-0 pb-3">
        <div className="col-1 px-0">
          <FontAwesomeIcon icon="search" />
        </div>
        <div className="col-11 px-0">
          <div className="row col-12 justify-content-between mx-0">
            <div><strong>Visibility</strong> </div>
            <div>
              <FontAwesomeIcon icon="check-circle"
              color={props.jobPostProgress >= 5 ? "green" : "black"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row col-12 px-0 mx-0 pb-3">
        <div className="col-1 px-0">
          <FontAwesomeIcon icon="dollar-sign" />
        </div>
        <div className="col-11 px-0">
          <div className="row col-12 justify-content-between mx-0">
            <div><strong>Budget</strong> </div>
            <div>
              <FontAwesomeIcon icon="check-circle"
              color={props.jobPostProgress >= 6 ? "green" : "black"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {jobPostProgress: state.jobPostReducer.jobPostProgress}
}

export default connect(mapStateToProps, null) (PostJobNavigation);