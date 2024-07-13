import React, { useState } from 'react';
import './App.css';
import { Todo } from './types';
import TodoList from './todo/TodoList';


const App:React.FC= ()=> {
  const[todos,setTodos]=useState<Todo[]>([])
  console.log(todos,"todos")
  // const[todoItem,setTodoItem]=useState({title:"",completed:false} as Todo)
  const [todoItem, setTodoItem] = useState<{ title: string, completed: boolean }>({
    title: '',
    completed: false
});

console.log(todoItem,"todoItem")



  const editTodo=(id:number,title:String)=>{
   const updatedTodos =todos?.map((item)=>{
    return item.id === id ? {...item,title:title} : item
   })
  //  setTodos(updatedTodos)
    
  }

  const addTodo=()=>{
    const newTodo:Todo={
        id:Date.now(),
        title:todoItem?.title,
        completed:todoItem?.completed
    }

    setTodos(prevTodos=>[...prevTodos,newTodo])
    setTodoItem({title:"",completed:false})

  }

  const deleteTodo=()=>{

  }

  const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
 
    const {name, value, type, checked}=e.target
    const val = type === 'checkbox' ? checked : value;
      setTodoItem(prevState=>({...prevState,[name]: val}))
    
  }
  
  return (
    <div>
      <h1>TODO list</h1>
      <input type="text" value={todoItem?.title} name="title" onChange={handleInputChange} />
      <input type="checkbox"  checked={todoItem?.completed || false} name="completed" onChange={handleInputChange}/>    
      <button onClick={addTodo}>AddTODO</button>
      
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
