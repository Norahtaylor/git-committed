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
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';


function App() {
  const [user, setUser] = useState({})
  const history = useHistory()
  const [selectedMatch, setSelectedMatch] = useState({})
  const [update, setUpdate] = useState(false)
  const [editDetails, setEditDetails] = useState({
    first_name: "",
    age: "",
    location: "",
    hometown: "",

    education: "",
    bio: "",
    gender: "",
    interested_in: "",
    language: "",
    profile_photo: "",
  })

  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user))
      }
    })
  }, [])


  // dependency to handle changes on useEffects
  function updateCard() {
    setUpdate(!update)
  }

  function onLogin(user){
    setUser(user)
  }

  function onLogout(user){
    setUser(null)
  }

  //this is setting the state for User Profile page from the GET request to show a specific user when clicked 
  function handleSelectedMatch(selectedMatch){
    setSelectedMatch(selectedMatch)
  }
  console.log(selectedMatch)

    // if(!user) {
    //   history.push('/login')
    //   return <Login />}

  return (
    <div> 
      {user && user.username ? 
        <NavBar user={user} setUser={setUser} onLogout={onLogout}/> 
      : 
      null}

  <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route exact path="/myprofile">
            <MyProfile editDetails={editDetails} setEditDetails={setEditDetails} user={user} setUser={setUser} />
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
            <MyMatches updateCard={updateCard} update={update} setUpdate={setUpdate} handleSelectedMatch={handleSelectedMatch} currentUser={user}  />
        </Route>
            <Route exact path="/pendingapproval">
            <PendingApproval currentUser={user} />
        </Route>
        <Route exact path='/pendingrequests'> 
            <PendingRequests updateCard={updateCard} update={update} setUpdate={setUpdate} currentUser={user} />
        </Route>
        <Route exact path='/userprofile/:id'> 
          <UserProfile user={user} match={selectedMatch} />
        </Route>
        <Route exact path='/editprofile/:id'>
            <EditProfile user={user} editDetails={editDetails} setEditDetails={setEditDetails} />
        </Route>

      </Switch>
    </div>
  </BrowserRouter>

    </div>
  );
}

export default App;
