import React, {useState} from "react";
import "./style.css";
import Input from "./Input"
import TodoList from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
   
    <div class="container">
  <div class="row">
  <h1>Todo App</h1>
  </div>
    <div class="col-4">
    <Input/>    
    <TodoList/>
    </div>
  </div>

  
  );
}
