import Login from './components/Login';
import Homepage from './components/Homepage'
import NavBar from './components/NavBar'
import SwipePage from './components/SwipePage'
import {useState, useEffect} from 'react';
import { Switch, Router, Route, BrowserRouter } from "react-router-dom";


function App() {
  const [user, setUser] = useState('')

  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user))
      }
    })
  }, [])

  // function onLogin(user){
  //   setCurrentUser(user)
  // }

  function onLogout(){
    setUser(null)
  }

console.log(user)
  return (
    <div> 
      {/* <NavBar user={user} onLogout={onLogout} /> */}
  <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route exact path="/testing">
        </Route>
        <Route exact path="/">
            <Homepage setUser={setUser}/>
        </Route>
        <Route exact path="/login">
            <Login setUser={setUser} />
        </Route>
        <Route exact path = "/swipe">
          <SwipePage  onLogout={onLogout}/>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
    </div>
  );
}

export default App;
