import {react, useState, useEffect} from 'react';
import './App.css';
import { auth, database } from './firebase';
function App() {
  const [user,setUser] = useState(null);
  const [todolist, setTodolist ] = useState([]);
  const [keytrack, setKeytrack ] = useState('');

  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    const tasksRef = database.ref(`tasks/${user?.uid}`);
  tasksRef.on('value', (snapshot) => {
    const data = snapshot.val() || [];
    setTodolist(data);
  });
  
    return () => {
      tasksRef.off('value');
    };
  },[user]);

  
  //retrieve the todolist
  useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('todolist'));
        if(data){
          console.log(data);
          setTodolist(data);
        }
  },[]);

  //when to do list updates save the data to local storage
  useEffect(()=>{
        sessionStorage.setItem('todolist', JSON.stringify(todolist));
  },[todolist]);

  // const handleClicker = () => {
  //   if(keytrack.trim() !== ''){
  //     setTodolist([...todolist, keytrack]);
  //     setKeytrack('');
  //   }
  // }

  const handleClicker = () => {
    if(keytrack.trim() !== ''){
      const tasksRef = database.ref(`tasks/${user?.uid}`);
      tasksRef.push(keytrack);
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
