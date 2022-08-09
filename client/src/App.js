
import {useState, useEffect} from 'react';


function App() {
  const [count, setCount] = useState()

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);


  return (
    <div >
      <h1> page count: {count} </h1>
    </div>
  );
}

export default App;
