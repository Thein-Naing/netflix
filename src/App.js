import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
// import Signup from './pages/Signup';

import Home from "./pages/Home";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./context/StateProvider";
import { onAuthStateChanged } from "firebase/auth";


function App() {

  // const user =  user;
  const [{}, dispatch] = useStateValue();

  const[user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })
  const handleAuthentication = async() => {
    if (user) {
      auth.signOut()
    }
  }






  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((authUser)=> {
      console.log('The user is >>>', authUser);
      if (authUser) {
        //user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
          });
        console.log(authUser);
        } else {
          // use is log out
          dispatch({
            type: "SET_USER",
            user: null,
            });
          }
      // this will run when components load only
        });

        return unsubscribe;
        }, [dispatch]);





  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route
              onClick={handleAuthentication} exact path="/" element={<Home />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
