import React from 'react';
import { TodoListProps } from '../types';
import TodoListItem from './TodoListItem';

const TodoList: React.FC<TodoListProps> = ({ deleteTodo, editTodo, todos }) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoListItem 
                    key={todo.id} 
                    todo={todo} 
                    deleteTodo={deleteTodo} 
                    editTodo={editTodo} 
                />
            ))}
        </div>
    );
};

export default TodoList;
