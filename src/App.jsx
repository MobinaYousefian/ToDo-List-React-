import {List} from "./Components/List";
import {Input} from "./Components/Input";
import {useTodoApp} from "./hooks/useTodoApp.js";
import {useState} from "react";
import clsx from "clsx";

function App() {
    const [searchString, setSearchString] = useState('')
    const [todoList, handleAddTodo, handleDeleteItem, handleToggleItem, handleToggleAll, handleDeleteAll] = useTodoApp()


    return (
        <div>
            <h1>Welcome to your To-Do List. Write your list in the input below</h1>
            <Input onTodoAdd={handleAddTodo} onSearch={ (term) => {
                setSearchString(term)
            }}/>
            <div className={clsx("flex", "right", "margin-bottom")}>
                <button className={"margin-x"} onClick={handleToggleAll}>
                    All items are done
                </button>
                <button className={"margin-x"} onClick={handleDeleteAll}>
                    Delete all items
                </button>
            </div>
            <List todos={todoList}
                  searchString={searchString}
                  handleDeleteItem={handleDeleteItem}
                  handleToggleItem={handleToggleItem}
            />
        </div>
    )
}

export default App;
