import React, { useEffect, useState } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([{text: "React hooks arastir" , completed:false, id:0.634924623},
  {text: "Javascript filter methodunu arastir" , completed:true, id:0.63496812923},
  {text: "Ingilizce calis" , completed:false, id:0.634998286426424623}

]);
  const [status,setStatus] =useState("all");
  const [filteredTodos,setFilteredTodos]=useState([])


useEffect(()=>{
getLocalTodos();
},[])

useEffect(()=>{
    filterHandler()
    saveLocalTodos()
},[todos,status]); //eslint-disable-line


const filterHandler = ()=> {
  switch (status) {
    case "completed":
      setFilteredTodos(todos.filter((todo)=>todo.completed === true));
      break;
    case "uncompleted":
      setFilteredTodos(todos.filter((todo)=>todo.completed === false));
      break;
    default:
      setFilteredTodos(todos);
      break;
  }
}

//save to localStorage
const saveLocalTodos = () =>{
  localStorage.setItem("todos",JSON.stringify(todos))
}
 const getLocalTodos = ()=>{
if(localStorage.getItem("todos")===null){
localStorage.setItem("todos",JSON.stringify([]))
}
 else{
setTodos(JSON.parse(localStorage.getItem("todos")))
 }
 }
  return (
    <div className="App">
      <header>
        <h1>My Todo List </h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}></TodoList>
    </div>
  );
}

export default App;
