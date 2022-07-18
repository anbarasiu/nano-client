import './EditHourlyRate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EditHourlyRate = (props) => {

  let handleSaveBtnClick = () => {
    let getHourlyRateValue = document.getElementById("editHourlyRate").value;
    if (localStorage.getItem('token')) {
      props.editProfilePrice(localStorage.getItem('token'), getHourlyRateValue);
    }
    // props.setFreelancerHourlyRate(getHourlyRateValue);
  }

  return (
    <div>
      
      {/* Modal */}
      <div className="modal fade" id="edit-hourly-rate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title col-10" id="exampleModalLongTitle">Change hourly rate</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="col-12 py-3">
                Please note that your new hourly rate will only apply to new contracts. The Nano Service Fee is 20% when you begin a contract with a new client. Once you bill over $500 with your client, the fee will be 10%.
              </div>
              <div className="col-12 mb-3">Your profile rate: <strong>${props.profileHourlyRate}/hr</strong></div>
              <div className="col-10 d-flex justify-content-between flex-wrap">
                <div className="col-12 col-lg-6 px-0">
                  <strong className="col-12 px-0">Hourly Rate</strong>
                  <p className="col-12 px-0">Total amount the client will see</p>
                </div>
                <div className="px-0">
                  <div className="col-10 px-0 d-flex">
                    <input id="editHourlyRate" className="mt-2 text-right py-1 rounded pr-2 editTitleInput" />
                    <div className="positionDollarSign">
                      <FontAwesomeIcon icon="dollar-sign"/>
                    </div>
                    <div className="d-inline mt-2 ml-2 pt-1">/hr</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button id="exitHourlyRateModal" type="button" className="btn" data-dismiss="modal">Cancel</button>
              <button onClick={handleSaveBtnClick} id="editHourlyRateModal" data-dismiss="modal" type="button" className="btn px-4">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditHourlyRate;