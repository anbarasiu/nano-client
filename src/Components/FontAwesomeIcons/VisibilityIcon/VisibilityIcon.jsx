import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./VisibilityIcon.css";

const VisibilityIcon = () => {
  return (
    <dvi>
      <div>
        <FontAwesomeIcon icon="search" />
      </div>
      <div id="userChildOfSearch">
        <FontAwesomeIcon icon="user" />
      </div>
    </dvi>
  )
}

export default VisibilityIcon;