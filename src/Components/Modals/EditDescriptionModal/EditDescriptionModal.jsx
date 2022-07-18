import "./EditDescriptionModal.css";

const EditDescriptionModal = (props) => {

  let handleSaveChangesBtn = () => {
    let freelancerDescription = document.getElementById('freelancerDescriptionInput').value;
    props.editProfileDescription(localStorage.getItem('token'), freelancerDescription)
  }

  return (
    <div>
      
      {/* Modal */}
      <div className="modal fade" id="edit-description" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title h4 ml-3" id="exampleModalLongTitle">Edit your description</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ml-3">
              <div className="modalSmallTitle">{props.profileDescription}</div>
              <div className="modalSmallText mb-3">
                Enter a brief description of your professional skills/experience.
              </div>
              <div>
                <input id="freelancerDescriptionInput" className="col-12 rounded py-1 editTitleInput" />
              </div>
            </div>
            <div className="modal-footer">
              <button id="editTitleExitButton" type="button" className="btn" data-dismiss="modal">Cancel</button>
              <button onClick={handleSaveChangesBtn} data-dismiss="modal" id="editTitleSucessButton" type="button" className="btn">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditDescriptionModal;