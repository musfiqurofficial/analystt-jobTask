import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponents from './components/Card';

function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div className="container mx-auto bg-slate-200 grid grid-cols-3 gap-3 py-5">
      {
        users?.map(user => <CardComponents key={user.id} user={user} />)
      }
    </div>
  );
}

export default App;
