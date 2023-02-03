import './App.css';
import Todolistform from './components/todolist';
import DisplayTodolist from './components/todolistdisplay';
import { useState } from 'react';


function App() {

  const [Todolist,setTodolist] = useState ([])

  return (
    <div className="App">
      <h1>Task Need To Be Done</h1>
      <Todolistform Todolist={Todolist} setTodolist={setTodolist}/>
      <DisplayTodolist Todolist={Todolist}/>
    </div>
  );
}

export default App;
