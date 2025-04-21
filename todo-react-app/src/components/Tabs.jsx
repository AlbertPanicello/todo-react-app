const Tabs = ({ todos, selectedTab, setSelectedTab }) => {
    const allCount = todos.length;
    const activeCount = todos.filter(todo => !todo.completed).length;
    const completedCount = todos.filter(todo => todo.completed).length;
  
    const isActive = (tab) => selectedTab === tab ? 'nav-item active-tab' : 'nav-item';
  
    return (
      <nav className="nav">
        <button onClick={() => setSelectedTab('All')} className={isActive('All')}>
          All ({allCount})
        </button>
        <button onClick={() => setSelectedTab('Active')} className={isActive('Active')}>
          Active ({activeCount})
        </button>
        <button onClick={() => setSelectedTab('Completed')} className={isActive('Completed')}>
          Completed ({completedCount})
        </button>
      </nav>
    );
  };
  
  export default Tabs;
  