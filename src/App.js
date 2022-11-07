import React, { useEffect } from 'react';
import Homescreen from './screens/Homescreen.js';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen.js';
import { auth } from './firebase.js';
import {useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice.js';
import ProfileScreen from './screens/ProfileScreen.js';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
 const unsubscribe = auth.onAuthStateChanged(userAuth => {
if (userAuth){

  console.log(userAuth);

  dispatch(login({
    uid: userAuth.uid,
    email: userAuth.email,
  })
  );

  //Logged In
}else {

  dispatch(logout());

  //Logged Out
}
});
return unsubscribe;


},[dispatch]);

  return (
    <div className="app">
      <Router>
        {!user? (
          <LoginScreen />
        ): (
     <Switch>
       <Route path="/profile">
         <ProfileScreen/>
       </Route>
<Route exact path="/">
      <Homescreen />
</Route>
     </Switch>
  )}
      </Router>
    </div>
  );
}

export default App;
