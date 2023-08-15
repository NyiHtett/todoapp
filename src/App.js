import {react, useState, useEffect} from 'react';
import './App.css';

function App() {
  const [todolist, setTodolist ] = useState([]);
  const [keytrack, setKeytrack ] = useState('');

  //retrieve the todolist
  useEffect(() => {
        const data = JSON.parse(localStorage.getItem('todolist'));
        if(data){
          console.log(data);
          setTodolist(data);
        }
  },[]);

  //when to do list updates save the data to local storage
  useEffect(()=>{
        localStorage.setItem('todolist', JSON.stringify(todolist));
  },[todolist]);


  const handleClicker = () => {
    if(keytrack.trim() !== ''){
      setTodolist([...todolist, keytrack]);
      setKeytrack('');
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1> ToDoList </h1>
      </header>

      <div>
        <input 
        type = "text"
        value = {keytrack}
        onChange={(e)=>{
          setKeytrack(e.target.value);
        }}
        placeholder="Enter a task"
        /> 
        <button onClick={handleClicker}> Submit</button>
        
      </div>
      <div>
        {
          todolist.map((task, index) => (
            <div key = {index}> {task} </div>
          ))
        }
      </div>
      
    </div>
  );
}

export default App;
