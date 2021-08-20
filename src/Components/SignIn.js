import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import HostelBooking from "./HostelBooking";
import {useEffect} from 'react'
import { Link, useHistory } from "react-router-dom";
function SignIn(props) {
  const {user} = props;
  const history = useHistory()
  useEffect(() => {
    if(user){
      history.push({
        pathname: '/hostelbooking',
        state: { detail:user }
      })
    }
  }, [user])
  return (
    <div className="App">
    
        <div className="signInPage">
          <b>Hostel Allocation</b>
          <div>Please sign-in:</div>
          <GoogleLoginButton
            style={{ width: "20%" }}
            onClick={() => {
              props.signInWithGooglePopUp();
            }}
          >
            <span>Sign in with Google</span>
          </GoogleLoginButton>
          <FacebookLoginButton
            style={{ width: "20%" }}
            onClick={() => {
              props.signInWithFacebookPopUp();
            }}
          >
            <span>Sign in with Facebook</span>
          </FacebookLoginButton>
        </div>
      
    </div>
  );
}

export default SignIn;
