import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div>
      <div id="footerContainer" className="container-fluid">
        <div className="row col-12 justify-content-center px-0 mx-0 py-5 text-white">
          <div className="col-12 col-lg-9 d-flex flex-wrap">
            <div className="col-12 col-lg-3">
              <div className="row col-12 justify-content-center justify-content-lg-start py-2 py-lg-1 footerItems"><span>About Us</span></div>
              <div className="row col-12 justify-content-center justify-content-lg-start py-2 py-lg-1 footerItems"><span>Feedback</span></div>
              <div className="row col-12 justify-content-center justify-content-lg-start py-2 py-lg-1 footerItems"><span>Community</span></div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="row col-12 justify-content-center justify-content-lg-start py-2 py-lg-1 footerItems"><span>Trust, Safety & Security</span></div>
              <div className="row col-12 justify-content-center justify-content-lg-start py-2 py-lg-1 footerItems"><span>Help & Support</span></div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="row col-12 justify-content-center justify-content-lg-start py-2 py-lg-1 footerItems"><span>Terms of Service</span></div>
              <div className="row col-12 justify-content-center justify-content-lg-start py-2 py-lg-1 footerItems"><span>Privacy Policy</span></div>
              <div className="row col-12 justify-content-center justify-content-lg-start py-2 py-lg-1 footerItems"><span>Accessibility</span></div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="row col-12 justify-content-center justify-content-lg-start py-2 py-lg-1 footerItems"><span>Desktop App</span></div>
              <div className="row col-12 justify-content-center justify-content-lg-start py-2 py-lg-1 footerItems"><span>Cookie Policy</span></div>
              <div className="row col-12 justify-content-center justify-content-lg-start py-2 py-lg-1 footerItems"><span>Enterprise Solutions</span></div>
            </div>
            
            <div id="footerIconsRow" className="row col-12 mt-5">
              <div className="col-12 col-lg-6 justify-content-center d-flex d-lg-block py-2">
                <p className="d-inline">Follow us</p>
                <div className=" px-2 FooterIconContainer">
                  <FontAwesomeIcon icon={['fab', 'facebook-f']}/>
                </div>
                <div className=" px-2 FooterIconContainer">
                  <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
                </div>
                <div className=" px-2 FooterIconContainer">
                  <FontAwesomeIcon icon={['fab', 'twitter']}/>
                </div>
                <div className=" px-2 FooterIconContainer">
                  <FontAwesomeIcon icon={['fab', 'youtube']}/>
                </div>
                <div className=" px-2 FooterIconContainer">
                  <FontAwesomeIcon icon={['fab', 'instagram']}/>
                </div>
              </div>
              <div className="col-12 col-lg-6 justify-content-center d-flex d-lg-block py-2 mobile-app">
                <p className="d-inline">Mobile app</p>
                <div className=" px-2 FooterIconContainer">
                  <FontAwesomeIcon icon={['fab', 'apple']}/>
                </div>
                <div className=" px-2 FooterIconContainer">
                  <FontAwesomeIcon icon={['fab', 'android']}/>
                </div>
              </div>
            </div>
            <div className="row col-12 text-center d-block mt-4">
              The Nano Dev
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;