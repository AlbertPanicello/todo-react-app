import React from 'react';

const TodoCard = ({ todo, removeTodo, index, editTodo }) => {
    return (
        <div className={`todoCard ${todo.completed ? 'completed' : ''}`}>
            <p className="todoTitle">{todo.titol}</p>
            <div className="buttonGroup">
                <button 
                    className="todoBtn doneBtn" 
                    onClick={() => editTodo(index)} 
                    disabled={todo.completed}
                >
                    Done
                </button>
                <button 
                    className="todoBtn deleteBtn" 
                    onClick={() => removeTodo(index)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoCard;
