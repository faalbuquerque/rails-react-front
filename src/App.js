import { useEffect, useState } from 'react';
import './App.css';
import Users from './components/Users';

const URL = 'http://127.0.0.1:3000/users'

const getApiData = () =>{
  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  }).then(response => response.json())
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getApiData().then((data)=>{
      setUsers(data);
    })
  }, [])

  return (
    <div className="App">
      < Users usersList={ users } />
    </div>
  );
}

export default App;
