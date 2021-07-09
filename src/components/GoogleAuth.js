import { useEffect, useState } from "react";
import {connect} from 'react-redux';
import {trySignIn, trySignOut} from '../actions';

const GoogleAuth = ({trySignIn, trySignOut, isSignedIn}) => {
  //STATE
  const [auth, setAuth] = useState(null);
  //COMPONENT LEVEL STATE
  /* const [isSignedIn, setIsSignedIn] = useState(null); */
 

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      // 2. Initialize the JavaScript client library.
      window.gapi.client
        .init({
          clientId:
            "21753150709-17fep4bpnkm8pnl3tfah3gvfad0reac2.apps.googleusercontent.com",
          scope: "profile",
        })
        .then(() => {
          let gOauth = window.gapi.auth2.getAuthInstance()
          setAuth(gOauth);
          /* setIsSignedIn(gOauth.isSignedIn.get()) */
          gOauth.isSignedIn.get()?trySignIn(gOauth.currentUser.get().getBasicProfile().getId()):trySignOut()
          gOauth.isSignedIn.listen(() => {
            gOauth.isSignedIn.get()?trySignIn(gOauth.currentUser.get().getBasicProfile().getId()):trySignOut()
          });
        });
    });
  }, []);

  



//LOGOUT
  const logOut=()=>{
    window.confirm("Are you sure")&&auth.signOut();
  }
  //LOGIN
  const logIn=()=>{
    auth.signIn();
  }

  const renderAuthButton = () => {
    return isSignedIn === true ? <>
    <img style={{width:"20px",height:"20px",borderRadius:"50%",margin:"0 5px"}} src={auth.currentUser.get().getBasicProfile().getImageUrl()} alt=""/>
    <span> Hi, {auth.currentUser.get().getBasicProfile().getGivenName()}</span>
    <i onClick={logOut} title="Logout" style={{margin:"0 5px",color:"#15AABF"}} className="fas fa-sign-out-alt"></i> 
     </> : 
     <span onClick={logIn} >Sign in <i title="Signin" style={{margin:"0 5px",color:"#15AABF"}} class="fas fa-sign-out-alt"></i></span>;
  }; 

  return (
    <>
    {renderAuthButton()}
    </>
  );
};

const mapStateToProps = (state)=>{
  /* console.log(state) */
  return {isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps,{trySignIn, trySignOut})(GoogleAuth);
