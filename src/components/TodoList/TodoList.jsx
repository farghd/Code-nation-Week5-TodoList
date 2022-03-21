import React, {useState} from 'react';
import TodoItem from '../TodoItem/TodoItem';


const TodoList = () => {

    const [todosArray, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');

    const addTodo = () => {
        const newTodos = [...todosArray, todoText];
        setTodos(newTodos);
        setTodoText('');
    };

    const deleteTodo = (index) => {
        const newTodos = [...todosArray];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <input type="text" placeholder='Enter Activity' 
                onChange={(event)=> setTodoText(event.target.value)}></input>
            
            <button onClick={() => addTodo()} >+</button>
            
            <ul>
                {todosArray.map((todo, index) => 
                    (<TodoItem item={todo} onDeleteClick={()=> deleteTodo(index)}/>))
                }
            </ul>
        </div>
    );
};


export default TodoList;