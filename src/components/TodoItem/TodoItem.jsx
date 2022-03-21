import React from 'react';


const TodoItem = ({item, onDeleteClick}) => {

    return (
           <li>{item} <button onClick={() => onDeleteClick()}>-</button></li> 
    );
}

export default TodoItem;