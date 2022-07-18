import "./EditTitleModal.scss";

const EditTitleModal = (props) => {

  let handleSaveChangesBtn = () => {
    let freelancerTitle = document.getElementById("freelancerTitleInput").value;
    props.editProfileJobTitle(localStorage.getItem('token'), freelancerTitle);
    // props.setFreelancerTitle(freelancerTitle);
  }

  return (
    <div>
      
      {/* Modal */}
      <div className="modal fade" id="edit-title" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title h4 ml-3" id="exampleModalLongTitle">Edit your title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ml-3">
              <div className="modalSmallTitle">{props.profileTitle}</div>
              <div className="modalSmallText mb-3">
                Enter a single sentence description of your professional skills/experience (e.g. Expert Web Designer with Ajax experience)
              </div>
              <div>
                <input id="freelancerTitleInput" className="col-12 rounded py-1 editTitleInput" />
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

export default EditTitleModal;