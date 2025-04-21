const Header =  (props) => {
    const { todos } = props;
    const todosLength = todos.length;
    return (
        <header className="header">
            <h1>Todo List</h1>
            <p>You have {todosLength} tasks</p>
        </header>
    );
};

export default Header;