export interface Todo{
   id:number,
   title:string,
   completed:boolean 
}


export interface CommonTodoProps{
    editTodo:(id:number,title:string)=>void,
    deleteTodo:(id:number)=>void
}


export interface TodoListProps extends CommonTodoProps{
    todos:Todo[]

}

export interface TodoItemProps extends CommonTodoProps{
    todo:Todo
}


