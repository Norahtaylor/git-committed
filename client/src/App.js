import Login from './components/Login';
import Homepage from './components/Homepage'
import NavBar from './components/NavBar'
import SwipePage from './components/SwipePage'
import MyMatches from './components/MyMatches';
import MyProfile from './components/MyProfile';
import CreateNewProfile from './components/CreateNewProfile';
import PendingApproval from './components/PendingApproval';
import PendingRequests from './components/PendingRequests';
import {useState, useEffect} from 'react';
import { Switch, Router, Route, BrowserRouter,useHistory } from "react-router-dom";
import MatchCard from './components/MatchCard';


function App() {
  const [user, setUser] = useState({})
  const history = useHistory()

  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user))
      }
    })
  }, [])

  //when i go to my matches it loses the currentUser 
  console.log("currentUser", user)

  function onLogin(user){
    setUser(user)
  }

  function onLogout(){
    setUser(null)

  }

    // if(!user) {
    //   history.push('/login')
    //   return <Login />}

  return (
    <div> 
      {user && user.username ? 
        <NavBar onLogout={onLogout}/> 
      : 
      null}

  <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route exact path="/myprofile">
            <MyProfile user={user} setUser={setUser} />
        </Route>
        <Route exact path="/createProfile">
            <CreateNewProfile setUser={setUser} currentUser={user} />
        </Route>
        <Route exact path="/">
            <Homepage setUser={setUser}/>
        </Route>
        
        <Route exact path="/login">
            <Login 
            user={user}
            onLogin={onLogin} setUser={setUser} />
        </Route>
        <Route exact path = "/swipe">
          <SwipePage currentUser={user}/>
        </Route>

        <Route exact path= "/mymatches">
          <MyMatches currentUser={user}  />
        </Route>
            <Route exact path="/pendingapproval">
              <PendingApproval currentUser={user} />
        </Route>
        <Route exact path='/pendingrequests'> 
            <PendingRequests currentUser={user} />
        </Route>

        
      </Switch>
    </div>
  </BrowserRouter>

    </div>
  );
}

export default App;
