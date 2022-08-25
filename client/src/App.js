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
import { Switch, Route, BrowserRouter,useHistory } from "react-router-dom";
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';
import Footer from './components/Footer'

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

//log in user 
  function onLogin(user){
    setUser(user)
  }
  
//log out user 
  function onLogout(user){
    setUser(null)
  }

  console.log(editDetails)
  // setting the state for User Profile page from the GET request to show a specific user when clicked 
  function handleSelectedMatch(selectedMatch){
    setSelectedMatch(selectedMatch)
  }

  return (
    <div 
    style={{
      backgroundSize: "cover",
      height: "1000px",
      // height: "full",
    

        backgroundImage: `url(https://images.unsplash.com/photo-1620503292890-c597f62cce8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)`,
    }}
   
    > 
  <BrowserRouter>
      {user && user.username ? 
        <NavBar user={user} setUser={setUser} onLogout={onLogout}/> 
      : 
      null}
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
            <PendingRequests handleSelectedMatch={handleSelectedMatch} updateCard={updateCard} update={update} setUpdate={setUpdate} currentUser={user} />
        </Route>
        <Route exact path='/userprofile/:id'> 
          <UserProfile user={user} match={selectedMatch} />
        </Route>
        <Route exact path='/editprofile/:id'>
            <EditProfile user={user} setUser={setUser} editDetails={editDetails} setEditDetails={setEditDetails} />
        </Route>
        <Route>
        </Route>

      </Switch>
    </div>
          <Footer />
  </BrowserRouter>

    </div>
  );
}

export default App;
