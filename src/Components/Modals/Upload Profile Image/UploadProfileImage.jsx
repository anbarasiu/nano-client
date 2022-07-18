import './UploadProfileImage.css';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { uploadMultipleFiles, getProfileImage } from '../../../Actions/utils';
import { setProfilePic, setProfileImage } from '../../../Actions/userData';
import { useState, useEffect } from 'react';
import $ from "jquery";

const UploadProfileImage = (props) => {
  let imgFile;

  $(document).on('hide.bs.modal','#uploadProfileImage', function () {
    console.log("Hidden");
    props.setProfilePic(null);
    document.getElementById('profileImage').innerHTML = "Attach or Drop photo Here";
    console.log(props.uploadedFiles);
  });

  $(document).on('shown.bs.modal','#uploadProfileImage', function () {
    console.log("Shown");
    // setImgSrc("123");
  });

  let triggerUploadFile = (e) => {
    e.preventDefault();
    document.getElementById("uploadFileInput").click();
  }

  let saveProfilePic = (e) => {
    let pic = document.getElementById("profileImage");
    let picName = pic.children[0].attributes[1].nodeValue;
    console.log(picName);
    props.uploadMultipleFiles(picName)
    console.log(props.uploadedFiles);
    console.log(document.getElementById("confirmUploadBtn"));
  }

  let submitProfilePic = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.set('file', props.profilePicture)
    console.log(data);
    console.log(props.profilePicture);
    props.uploadMultipleFiles(data, localStorage.getItem('id'));
    console.log(props.uploadedFiles);
    $("#uploadProfileImage").modal("hide");
  }


  let showFileName = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    props.setProfilePic(e.target.files[0]);
    console.log(props.profilePicture);
    let uploadButton = document.getElementById("confirmUploadBtn");
    imgFile = e.target.files[0];
    let image = document.getElementById("profileImage");
    
    const reader = new FileReader();
    reader.onload = () => {
      let result = reader.result;
      // setProfileImage(localStorage.getItem('id'), reader.result);
      let fileName = e.target.files[0].name;
      image.innerHTML = `<img src=${result} filename=${fileName} width="300px" height="300px" style="border-radius: 50%;" />`;
      // console.log(image.children[0].attributes[1].nodeValue);
      // setImgSrc(result);
      // uploadButton.textContent = "Save Photo";
      // uploadButton.type = "submit";
      // uploadButton.onclick = saveProfilePic
    }
    if (imgFile) {
      reader.readAsDataURL(imgFile);
    }
  }


  return (
    <div>
      {/*Modal*/}
      <div className="modal fade " id="uploadProfileImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Edit Photo</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body container">
              <div className="row col-12">
                <div className="col-12 col-lg-6">
                  <div className="m-auto" id="previewImage"><div id="profileImage" className="h6">Attach or Drop photo Here</div></div>
                </div>
                <div className="col-6 d-none d-lg-block">
                  <div className="col-12 h3">Show clients the best version of yourself!</div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button id="exitModal" type="button" className="btn" data-dismiss="modal">Cancel</button>
              <form>
                <input name="file" type="file" id="uploadFileInput" onChange={showFileName} className="d-none" />
                {
                  !props.profilePicture ?
                  <button onClick={triggerUploadFile} id="attachPhotoBtn" className="btn">Attach photo</button> :
                  <button onClick={submitProfilePic} type="submit" id="confirmUploadBtn" className="btn">Save Photo</button>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    uploadedFiles: state.utilsReducer.uploadedFiles,
    profilePicture: state.userReducer.profilePicture,
    profielImage: state.userReducer.profileImage
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    uploadMultipleFiles,
    setProfilePic,
    setProfileImage,
    getProfileImage
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (UploadProfileImage);