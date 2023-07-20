import {react, useState} from 'react';
import './App.css';

function App() {
  const [todolist, setTodolist ] = useState([]);
  const [keytrack, setKeytrack ] = useState('');

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
        {todolist}
      </div>
      
    </div>
  );
}

export default App;
