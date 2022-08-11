import Login from './components/Login';
import Homepage from './components/Homepage'
import NavBar from './components/NavBar'
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

console.log(user)
  // function onLogin(user){
  //   setCurrentUser(user)
  // }

  function onLogout(){
    setUser(null)
  }


  return (
    <div> 
      <NavBar user={user} onLogout={onLogout} />
  <BrowserRouter>
    <div className='App'>
      <Switch>

        <Route exact path="/testing">
          <h1>testing</h1>
        </Route>
        <Route exact path="/">
            <Homepage setUser={setUser}/>
        </Route>
        <Route exact path="/login">
            <Login setUser={setUser} />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
    </div>
  );
}

export default App;
