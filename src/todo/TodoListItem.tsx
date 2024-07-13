import React from 'react'
import { TodoItemProps } from '../types'

const TodoListItem:React.FC<TodoItemProps> = ({todo,deleteTodo,editTodo}) => {
    console.log(todo,"todo==>")
  return (
    <div style={{display:"flex",width:"30%",justifyContent:"space-between", alignItems:"center"}}>
       
    <span>{todo.title}</span>
    <span>{todo.completed ? "Completed": "NotYet"}</span>
    <div onClick={()=>editTodo(todo.id,todo.title)}>Edit</div>
    <div onClick={()=>deleteTodo(todo.id)}>Delete</div>
    </div>
  )
}

export default TodoListItem
