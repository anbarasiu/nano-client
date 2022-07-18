import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import FreelancerProfile from "../FreelancerProfile/FreelancerProfile";
import Footer from "../Footer/Footer";

const FreelancerProfilePage = () => {
  let history = useHistory()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      history.push("/signin");
    }
  })
  
  return (
    <div>
      <Header/>
      <FreelancerProfile/>
      <Footer/>
    </div>
  )
}

export default FreelancerProfilePage;