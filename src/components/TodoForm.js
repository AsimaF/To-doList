import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
const [input, setInput] = useState(props.edit ? props.edit.value : '');

// clean up console data
const inputRef = useRef(null);

useEffect(() => {
    inputRef.current.focus();
});

const handleChange = e => {
    setInput(e.target.value);
};

const handleSubmit = e => {
    e.preventDefault();


    // will show id and text on console
    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });

    setInput ('');

};


  return (
    <form onSubmit={handleSubmit} className= 'todo-form' >
        {props.edit ? (
         <>
    <input 
        placeholder='Edit task' 
        value={input}
        name = 'text'
        className='todo-input edit'
        ref={inputRef}
        onChange={handleChange}
        />

        <button onClick={handleSubmit} 
        className='todo-button edit'
        > 
        Update 
        </button>
        </>
    ) : (
        <>
        <input 
        placeholder="Enter tasks here.."
        value={input}
        name = 'text'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
        input type= 'text'
        autoComplete = 'off'
    />
    <button onClick={handleSubmit} 
    className='todo-button'
    >
        Add task
        </button>
    </>
    )}
    </form>
  );
}

export default TodoForm;