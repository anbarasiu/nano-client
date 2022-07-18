import './styles/jobdetails.css';
import JobDetails from './jobdetails';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.jsx';

const jobpage = (props) => {
    return(
        <div className="job-details">
            <Header/>
            <JobDetails allprops={props}/>
            <Footer/>
        </div>
    )
}

export default jobpage;