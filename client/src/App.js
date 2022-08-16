import Login from './components/Login';
import Homepage from './components/Homepage'
import NavBar from './components/NavBar'
import SwipePage from './components/SwipePage'
import MyMatches from './components/MyMatches';
import MyProfile from './components/MyProfile';
import CreateNewProfile from './components/CreateNewProfile';
import {useState, useEffect} from 'react';
import { Switch, Router, Route, BrowserRouter } from "react-router-dom";


function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user))
      }
    })
  }, [])

  console.log("currentUser", user)

  // function onLogin(user){
  //   setCurrentUser(user)
  // }

  function onLogout(){
    setUser(null)
  }

  //Fetch matches 

  // useEffect(() => {
  //   fetch('/matches')
  //     .then(res => res.json())
  //     .then(data => {
  //       setMatches(data)
  //     })
  // }, [])


  return (
    <div> 
      {user && user.username ? 
        <NavBar /> 
      : 
      null}
  <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route exact path="/myprofile">
          <MyProfile />
        </Route>
        <Route exact path="/createProfile">
          <CreateNewProfile />
        </Route>
        <Route exact path="/">
            <Homepage setUser={setUser}/>
        </Route>
        <Route exact path="/login">
            <Login setUser={setUser} />
        </Route>
        <Route exact path = "/swipe">
          <SwipePage currentUser={user} onLogout={onLogout}/>
        </Route>
        <Route exact path= '/mymatches'>
          <MyMatches currentUser={user}  />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
    </div>
  );
}

export default App;
