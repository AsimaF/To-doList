import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState ([]);

    // wont include spaces if letteres arent typed. got from stackoverlfow
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);

    };


    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    
    };



    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };



    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

        const DOW = 
        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        const d = new Date ();
        let day = DOW[d.getDay()];
        

  return (
    <>
        <h1> {day}'s To-do List </h1>
        
        <TodoForm onSubmit={addTodo} />
        <Todo 
        todos={todos} 
        completeTodo={completeTodo} 
        removeTodo={removeTodo} 
        updateTodo = {updateTodo} 
        />

    </>

  );
}

export default TodoList;