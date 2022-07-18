import { Link } from 'react-router-dom';
import './styles/errorStyle.css';
const ErrorComponent = () =>{
    return(
        <div className="all-error-page">
            <div className="error-component">
                <div className="row justify-content-center align-items-center">
                    <div className="error-msg text-center">
                        <h1 className="font-weight-bold my-4">This page doesn't exist</h1>
                        <p className="my-0">Please <span>return</span> to the previous page, or visit our <Link to="/"><span className="return-home">home page</span></Link>.</p>
                        <p className="my-0">If the issue continues, visit our <span>Help Center</span>.</p>
                        <p className="my-5">Error 404 (N)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ErrorComponent;