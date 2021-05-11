import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import Feed from './components/Feed/Feed';
import { auth } from './components/Firebase/Firebase';
import Header from './components/header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/widgets/Widgets';
import Login from './Login/Login';
import { login, logout, selectUser } from './Login/userSlice';

function App() {

  const state = useSelector(selectUser)
  const dispatch = useDispatch();

  React.useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user is logged in
        dispatch(
          login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.photoURL,
        })
        );

      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  },[])

  const user = useSelector(selectUser)
  return (
    <div className="app"> 

      <Header />

      {!user ? (
        <Login /> 
      ) : (
          <div className="app__body">
          <Sidebar />  
          < Feed /> 
          <Widgets />
        </div>
      )}
      {/* App body */}


      {/* Feed */}
      {/* Widgets */}

    </div>
  );
}

export default App;
