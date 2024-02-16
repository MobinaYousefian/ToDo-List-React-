import {useState} from 'react'
import {todos} from "./Data.js";
import {List} from "./Components/List";

function App() {
    const [todoList, setTodoList] = useState(todos)
    const [todoName, setTodoName] = useState('');

    const onCardClose = () => {
        console.log('Miad')
    }

    const handleAddTodo = () => {
        setTodoList([...todoList, {
            id : todoList.length + 1,
            title: todoName,
            status: 'Todo'
        }])
    }

    return (
        <div>
            <input value={todoName} onChange={(e) => {
                setTodoName(e.target.value)
            }}/>
            <button onClick={handleAddTodo}>
                Add Todo item
            </button>

            <List todos={todoList}/>
        </div>
    )
}

export default App;
