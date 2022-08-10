
import {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState()

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);


  return (
    <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route path="/testing">
          <h1>i am new info proving heroku push works</h1>
        </Route>
        <Route path="/">
          <h1> page count: {count} </h1>
        </Route>
          <Route path="/newtest">
            <h1> new test </h1>
          </Route>
      </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
