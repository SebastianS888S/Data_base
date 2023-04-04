import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const[name, setName] = useState('')
  const[age, setAge] = useState(0)
  const[pozition, setPozition] = useState('')
  const[country, setCountry] = useState('')
  const[wage, setWge] = useState(0)
  const[list, setList] = useState([])

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      pozition: pozition,
      country: country,
      wage: wage
    }).then(() => {
      console.log("succes")
    })
  }

  const getList = () =>{
    Axios.get('http://localhost:3001/list', {
      
    }).then((response) => {
      setList(response.data)
    })
  }

  return (
    <div className="App">
      <div className='information'>
        <label>Name:</label>
        <input type="text" 
        onChange={(event) => {setName(event.target.value)}}></input>
        <label>Age:</label>
        <input type="number"
        onChange={(event) => {setAge(event.target.value)}}></input>
        <label>Pozition:</label>
        <input type="text"
        onChange={(event) => {setPozition(event.target.value)}}></input>
        <label>Country:</label>
        <input type="text"
        onChange={(event) => {setCountry(event.target.value)}}></input>
        <label>Wage (year)</label>
        <input type="number"
        onChange={(event) => {setWge(event.target.value)}}></input>
        <button onClick={addEmployee}>Send</button>
      </div>
      <div className='employees'>
        <button onClick={getList}>Show employees</button>
        </div>
      <div>
        {list.map((val, key) => {
          return <div className='list'> 
            <h3>Name: {val.name} </h3>
            <h3>Age: {val.age} </h3>
            <h3>Pozition: {val.pozition} </h3>
            <h3>Country: {val.country} </h3>
            <h3>Salary: {val.wage} EUR </h3>
      </div>
        })}
      </div>
    </div>
  );
}

export default App;
