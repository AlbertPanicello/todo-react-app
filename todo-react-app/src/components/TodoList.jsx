import TodoCard from "./TodoCard";

const TodoList = (props) => {
    const { todos, selectedTab } = props;
    const filteredTodos = selectedTab === 'All' ?
        todos : selectedTab === 'Completed' ?
            todos.filter(todo => todo.completed) :
            todos.filter(todo => !todo.completed);


    return (
        <>
            {filteredTodos.map((todo, index) => (
                <TodoCard 
                key={index}
                {...props}
                index = {todos.findIndex(val => val.titol === todo.titol)}
                todo={todo} />
            ))}
        </>
    );
};

export default TodoList;
