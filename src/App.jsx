import {List} from "./Components/List";
import {Input} from "./Components/Input";
import {useTodoApp} from "./hooks/useTodoApp.js";

function App() {
    const [todoList, handleAddTodo, handleDeleteItem, handleToggleItem] = useTodoApp()

    return (
        <div>
            <h1>Welcome to your To-Do List. Write your list in the input below</h1>
            <Input onTodoAdd={handleAddTodo}/>
            <List todos={todoList}
                  handleDeleteItem={handleDeleteItem}
                  handleToggleItem={handleToggleItem}
            />
        </div>
    )
}

export default App;
