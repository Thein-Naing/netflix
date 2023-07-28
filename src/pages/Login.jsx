import netflixicon from "../images/netflixicon.jpg";
import '../Style/Login.css';
import login from "../images/login.jpg";
import { useState } from "react";
import Signup from "../pages/Signup";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className='login'>
      <div className="login__background">
      <img src={login} alt="bg"
      className="login__background"/>
     <img className='login__logo'
     src={netflixicon} alt="logo" />
      </div>
    <button className="login__btn">Sign In</button>
      <div className="login_gradient">
      </div>
      <div className="login__body">
        {/*conditional rendering */}
        {signIn ? (
          <Signup />
        ) : (
<>
      <h1>Unlimited films, TV programmes and more...</h1>
      <h2>Watch anywhere.Cancel at any time.</h2>
      <h3>Ready to watch? Enter our email  to create or
        restart your membership
      </h3>
      <div className="login__input">
        <form>
          <input  type="email"
          placeholder="Email Address" />
          <button className="login__getStarted"
          onClick={(() => setSignIn(true))}

          >
            GET STARTED
          </button>
        </form>
      </div>

      </>
        )}


      </div>
    </div>
  )
}

export default Login
