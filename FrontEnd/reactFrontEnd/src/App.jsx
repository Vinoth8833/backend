import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [count, setCount] = useState([]);

  const getMethod = async () => {
    try {
      const res = await axios.get("http://localhost:3000/");
      setCount(res.data.message); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMethod();
  }, []); // Fetch data when the component mounts

  const delete1 = (index) => {
    // Filter out the item at the given index
    const newCount = count.filter((ig,idx) => idx !== index);
    setCount(newCount); // Update the state
  };

  return (
    <>
      <h1>Data:</h1>
      <table className='table-section'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th> {/* Added a header for the action column */}
          </tr>
        </thead>
        <tbody>
          {count.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => delete1(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
