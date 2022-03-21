import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/customers')
      .then(res => res.json())
      .then(data => {
        setCustomers(data);
      })
  }, []);

  return (
    <div className="App">
      <h1>Customer Management System</h1>
      <ul>
        {customers.map(customers => (
          <li key={customers.id}>
            {customers.first_name} {customers.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
