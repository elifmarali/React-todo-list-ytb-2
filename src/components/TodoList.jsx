import React from 'react';
import Todo from './Todo';
function TodoList({todos,setTodos}) {
  return (
<div className='todo-container'>
 <ul className="todo-list">
{todos.map((todo)=>{
    return(
        <Todo text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} todo={todo}></Todo>
    )
})}
 </ul>
</div>
  )
}

export default TodoList;