// import { useRef } from "react";
// import "../Style/Signup.css";
// import auth  from "../firebase/firebase";


// const Signup = () => {

//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//  // for sign up link
//   const register = (e) => {
//     e.preventDefault();

//     auth.createUserWithEmailAndPassword(
//       emailRef.current.value,
//       passwordRef.current.value)
//     .then((authUser) => {
//     console.log(authUser)
//     })
//     .catch((error) => {
//     alert(error.message)
//     })

//   }

//   const signIn = (e) => {
//     e.preventDefault();
//   }

import "../Style/Signup.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

function Signup(){

  //create useState/useNavigate hooks
    const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


  //create signIn function
    const signIn = async (e) => {
        e.preventDefault();
        try{
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            if(auth){
                navigate("/")
            }
        }catch(error){
            alert(error.message);
        }
    }

      //create register function
    const register = async (e) => {
        e.preventDefault();
        try{
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
        }catch(error){
            alert(error.message);
        }
    }


  return (
    <div className="signup">
      <form>
        <h1>Sign In</h1>
        <input  type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
        <input  type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
          <span className="signup__gray">New to Netflix? </span>
          <span className="signup__link" onClick={register}>Sign Up now!</span>
        </h4>
      </form>
    </div>
  );
};

export default Signup;
