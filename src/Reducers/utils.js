import baseURL from "../Actions/baseURL";

export function utilsReducer (state = {}, action) {
  switch (action.type) {
    case "UPLOAD_MULTIPLE_FILES": {
      let arrayBufferView = new Uint8Array(action.payload.data.userImage.data);
      let blob = new Blob([arrayBufferView], {type: "image/jpeg"});
      let urlCreator = window.URL || window.webkitURL;
      let imageUrl = urlCreator.createObjectURL(blob);
      return {...state, uploadedFiles: imageUrl}
    }

    case "GET_PROFILE_IMAGE": {
      // let arrayBufferView = new Uint8Array(action.payload.data);
      // let blob = new Blob([arrayBufferView], {type: "image/jpeg"});
      // let urlCreator = window.URL || window.webkitURL;
      // let imageUrl = urlCreator.createObjectURL(blob);
      return {...state, uploadedFiles: action.getURL}
    }


    default: return state;
  }
}