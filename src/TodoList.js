import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  return todos.map((todo, index) => (
    <div
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
    </div>
  ));
};

  export default TodoList;